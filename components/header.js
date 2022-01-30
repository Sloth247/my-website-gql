import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/header.module.scss';
import Hamburger from './hamburger';

import Logo from '../public/img/logo.svg';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const handleButtonClick = () => {
    setMobileExpanded(!mobileExpanded);
    setShowMobileMenu(!showMobileMenu);
  };
  const handleClose = () => {
    setMobileExpanded(false);
    setShowMobileMenu(false);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.header__nav} wrapper`}>
        <Link href="/">
          <a>
            <h1 className={styles['header__nav--logo']}>
              <span className="sr-only">Yuko Horita Web Developer</span>
              <Image src={Logo} alt="Yuko Horita" width={64} height={64} />
            </h1>
          </a>
        </Link>

        <div className={styles['header__nav--menu-container']}>
          <ul
            className={
              mobileExpanded
                ? `${styles['header__nav--menus']} ${styles['nav-show']}`
                : styles['header__nav--menus']
            }
            id="mobile-menu"
          >
            <li className={styles['header__nav--about']}>
              <Link href="/#about">
                <a
                  className={styles['header__nav--link']}
                  onClick={handleClose}
                >
                  About Me
                </a>
              </Link>
            </li>
            <li className={styles['header__nav--skills']}>
              <Link href="/#skills">
                <a
                  className={styles['header__nav--link']}
                  onClick={handleClose}
                >
                  Skills
                </a>
              </Link>
            </li>
            <li className={styles['header__nav--portfolio']}>
              <Link href="/#portfolio">
                <a
                  className={styles['header__nav--link']}
                  onClick={handleClose}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className={styles['header__nav--contact']}>
              <Link href="/#contact">
                <a
                  className={styles['header__nav--link']}
                  onClick={handleClose}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles['header__icon-container']}>
            {/* <button
              className={styles['header__nav--language-icon']}
              aria-labelledby="language-switcher"
              aria-expanded="false"
              aria-controls="language-menu"
            >
              <h2 className="sr-only" id="language-switcher">
                Language switcher
              </h2>
              <i
                className={`fas fa-globe ${styles['header__nav--language-img']}`}
                aria-hidden="true"
              ></i>
            </button> */}
            <Hamburger
              mobileExpanded={mobileExpanded}
              handleButtonClick={handleButtonClick}
            />
            {/* <ul
              className={styles['header__nav--language-modal']}
              id="language-menu"
            >
              <li>
                <Link href="/">
                  <a>English</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Japanese</a>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
        <div
          className={
            mobileExpanded
              ? `${styles['nav-overlay']} ${styles['overlay-open']}`
              : styles['nav-overlay']
          }
        ></div>
      </nav>
    </header>
  );
}
