import React from 'react';
import Post from './post';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

// styles
import styles from '../styles/components/portfolio.module.scss';

export default function Portfolio({ posts }) {
  return (
    <section className={styles['main__portfolio']} id="portfolio">
      <h2 className={styles['main__portfolio--title']}>Projects</h2>
      <div className={styles['main__portfolio--container']}>
        {posts.map(({ slug }) => (
          <div key={slug}>
            <Post />
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
    query GetWordPressPosts {
        posts {
          nodes { 
            slug
          }
      }
    `,
  });
  return {
    props: {
      posts: result.data.posts.nodes,
    },
  };
}
