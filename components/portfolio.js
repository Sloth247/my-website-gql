import React from 'react';
import Post from './post';

// styles
import styles from '../styles/components/portfolio.module.scss';

export default function Portfolio({ posts }) {
  console.log(posts);
  return (
    <section className={styles['main__portfolio']} id="portfolio">
      <h2 className={styles['main__portfolio--title']}>Projects</h2>
      <div className={styles['main__portfolio--container']}>
        {posts.map((post) => (
          <div key={post.slug}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
