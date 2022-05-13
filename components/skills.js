import styles from '../styles/components/skills.module.scss';

// Images
import Image from 'next/image';
import HTML from '../public/img/icon-html5.svg';
import CSS from '../public/img/icon-css3.svg';
import JS from '../public/img/icon-javascript.svg';
import ReactIcon from '../public/img/icon-react.svg';
import NextIcon from '../public/img/icon-nextjs.svg';
import SassIcon from '../public/img/icon-sass.svg';
import WPIcon from '../public/img/icon-wordpress.svg';
import RemixIcon from '../public/img/icon-remix.svg';

export default function Skills() {
  return (
    <section className={`${styles['main__skills']} wrapper`} id="skills">
      <div className={styles['main__skills--inner']}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles['main__skills--container']}>
          <div className={styles['main__skills--item']}>
            <Image
              src={HTML}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={styles['main__skills--name']}>HTML5</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={CSS}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={styles['main__skills--name']}>CSS3</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={JS}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={styles['main__skills--name']}>JavaScript</p>
          </div>
          <div className="main__skills--item">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={styles['main__skills--name']}>TypeScript</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={ReactIcon}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={styles['main__skills--name']}>React</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={NextIcon}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={96}
              height={96}
            />
            <p className={styles['main__skills--name']}>Next.js</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={RemixIcon}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={styles['main__skills--name']}>Remix</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={SassIcon}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={styles['main__skills--name']}>Sass</p>
          </div>
          <div className="main__skills--item">
            <Image
              src={WPIcon}
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={styles['main__skills--name']}>WordPress</p>
          </div>
          <div className="main__skills--item">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt=""
              aria-hidden="true"
              className={styles['main__skills--icon']}
              width={100}
              height={100}
            />
            <p className={styles['main__skills--name']}>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
