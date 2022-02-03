import Link from 'next/link';
import Image from 'next/image';

import parse from 'html-react-parser';
import { FaGithubAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import styles from '../styles/components/portfolio.module.scss';

export default function Post({ post }) {
  console.log(post);

  return (
    <article className={styles['main__portfolio--item']}>
      <div className={styles['img-container']}>
        <Image
          src={post.featuredImage.node.guid}
          alt=""
          aria-hidden="true"
          width={533}
          height={350}
        />
      </div>
      <Link href={post.liveSite.liveSiteUrl}>
        <a target="_blank" rel="noopener noreferrer">
          <h3 className={styles['main__portfolio--item-title']}>
            <span>{parse(post.title)}</span>
            <FiExternalLink />
          </h3>
        </a>
      </Link>
      <div className={styles['main__portfolio--content']}>
        {parse(post.content)}
        <p>
          Designs provided by{' '}
          <Link href="https://www.frontendmentor.io">
            <a
              className={styles['fem-link']}
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
          </Link>
        </p>
        <p className={styles.keyTech}>
          Key Tech:{' '}
          <span className={styles['keyTech--bold']}>
            {post.keyTech.keyTech}
          </span>
        </p>
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
