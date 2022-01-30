import Contact from './contact';
import styles from '../styles/components/footer.module.scss';

import Image from 'next/image';
import NextIcon from '../public/img/icon-nextjs.svg';
import WPIcon from '../public/img/icon-wordpress.svg';
import VercelIcon from '../public/img/icon-vercel.svg';
import WPGraphQLIcon from '../public/img/icon-wpgraphql.svg';

export default function footer() {
  return (
    <footer className={styles.footer} id="contact">
      <Contact />
      <p>This website is made by using:</p>
      <div className={styles['footer__icon-container']}>
        <Image
          src={NextIcon}
          alt="Next JS"
          className={styles['main__skills--icon']}
          width={64}
          height={64}
        />
        <Image
          src={WPIcon}
          alt="Wordpress"
          className={styles['main__skills--icon']}
          width={64}
          height={64}
        />
        <Image
          src={WPGraphQLIcon}
          alt="WPGraphQL"
          className={styles['main__skills--icon']}
          width={50}
          height={50}
        />
        <Image
          src={VercelIcon}
          alt="Vercel"
          className={styles['main__skills--icon']}
          width={50}
          height={50}
        />
      </div>
      <p className={styles['footer__copyrights']}>
        &copy; {new Date().getFullYear()} Yuko Horita
      </p>
    </footer>
  );
}
