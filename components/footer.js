import styles from '../styles/components/footer.module.scss';

import Image from 'next/image';
import NextIcon from '../public/img/icon-nextjs.svg';
import WPIcon from '../public/img/icon-wordpress.svg';
import VercelIcon from '../public/img/icon-vercel.svg';
import WPGraphQLIcon from '../public/img/icon-wpgraphql.svg';

export default function footer() {
  return (
    <footer className={styles.footer}>
      <p>This website is made by using:</p>
      <div className={styles['footer__icon-container']}>
        <div className={styles['img-container']}>
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next JS"
            className={styles['main__skills--icon']}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles['img-container']}>
          <Image
            src={WPIcon}
            alt="Wordpress"
            className={styles['main__skills--icon']}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles['img-container']}>
          <Image
            src={WPGraphQLIcon}
            alt="WPGraphQL"
            className={styles['main__skills--icon']}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles['img-container']}>
          <Image
            src={VercelIcon}
            alt="Vercel"
            className={styles['main__skills--icon']}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className={styles['footer__copyrights']}>
        &copy; {new Date().getFullYear()} Yuko Horita
      </p>
    </footer>
  );
}
