import { useState, useEffect } from 'react';
import { getLiveUrl } from '../lib/utils';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';
import { FaGithubAlt } from 'react-icons/fa';

import styles from '../styles/components/portfolio.module.scss';

export default function Post({ post }) {
  console.log(post);
  const [liveUrl, setLiveUrl] = useState('');
  const urlInHtml = post.excerpt;

  useEffect(async () => {
    try {
      let mounted = true;
      if (mounted) {
        const postLiveUrl = getLiveUrl(post.slug);
        postLiveUrl.then((res) => setLiveUrl(res));
      }
      return () => {
        mounted = false;
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <article className={styles['main__portfolio--item']}>
      <Image
        src={post.featuredImage.node.guid}
        alt={post.featuredImage.node.altText}
      />

      <Link href={liveUrl}>
        <a>
          <h3 className={styles['main__portfolio--item-title']}>
            {parse(post.title)}
          </h3>
        </a>
      </Link>
      <div className={styles['main__portfolio--content']}>
        {parse(post.content)}
      </div>
      <a
        href={urlInHtml.replace(/<\/?[^>]+(>|$)/g, '')}
        className={styles['main__portfolio--btn']}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Repo <FaGithubAlt className={styles['github-icon']} />
      </a>
    </article>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: result.data.posts.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetWordPressPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          title
          content
          featuredImage.node.guid
          post.featuredImage.node.altText
          excerpt
        }
      }
    `,
    variables: { slug },
  });

  return {
    props: {
      post: result.data.postBy,
    },
  };
}
