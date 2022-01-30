import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from '../styles/components/footer.module.scss';

import Image from 'next/image';
import globe from '../public/img/globe.svg';

export default function contact() {
  return (
    <div className={styles['footer__inner']}>
      <h2 className={styles['footer__title']}>Get In Touch</h2>
      <div className={styles['footer__container']}>
        <p className={styles['footer__open']}>I&apos;m open for chat!</p>
        <a href="mailto:xxxx@outlook.com" className={styles['footer__item']}>
          <p className={styles['footer__contact-detail']}>
            <MdEmail />
            <span>yukohorita@outlook.com</span>
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/yuko-horita"
          className="footer__item"
          target="blank"
        >
          <p className={styles['footer__contact-detail']}>
            <FaLinkedin />
            <span>LinkedIn</span>
          </p>
        </a>
        <Image src={globe} alt="" />
      </div>
    </div>
  );
}
