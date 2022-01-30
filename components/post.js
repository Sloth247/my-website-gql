import Link from 'next/link';

import parse from 'html-react-parser';
import { FaGithubAlt } from 'react-icons/fa';

import styles from '../styles/components/portfolio.module.scss';

export default function Post({ post }) {
  console.log(post);

  return (
    <article className={styles['main__portfolio--item']}>
      <img
        src={post.featuredImage.node.guid}
        alt={post.featuredImage.node.altText}
      />

      <Link href={post.liveSite.liveSiteUrl}>
        <a target="_blank" rel="noopener noreferrer">
          <h3 className={styles['main__portfolio--item-title']}>
            {parse(post.title)}
          </h3>
        </a>
      </Link>
      <div className={styles['main__portfolio--content']}>
        {parse(post.content)}
      </div>
      <Link href={post.github.githubUrl}>
        <a
          className={styles['main__portfolio--btn']}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Repo <FaGithubAlt className={styles['github-icon']} />
        </a>
      </Link>
    </article>
  );
}
