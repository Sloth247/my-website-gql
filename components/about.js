import Image from 'next/image';
import Hero from '../public/img/coding-woman.svg';
import styles from '../styles/components/about.module.scss';

export default function About() {
  return (
    <section className={`${styles['main__about']} wrapper`} id="about">
      <div className={styles['main__about--inner']}>
        <h2 className={styles['main__about--title']}>About Me</h2>
        <Image
          src={Hero}
          alt="A Developer Woman"
          className={styles['main__about--img']}
        />
        <p className={styles['main__about--description']}>
          Hi 👋 there, I&apos;m Yuko Horita and thanks for visiting my website.
          I am a self-taught web developer that loves improving my skills. I
          also pay a lot of attention to detail in all my work. I always
          priotize the accessiblity of the things I build so that the internet
          is open to everyone, I consider my strengths to be flexibility and
          being eager to take on new challenges and take on targets set by
          clients.
        </p>
      </div>
    </section>
  );
}
