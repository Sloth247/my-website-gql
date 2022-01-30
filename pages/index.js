// components
import About from '../components/about';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import HeaderHome from '../components/headerHome';
import FooterHome from '../components/footerHome';

export default function Home() {
  return (
    <>
      <HeaderHome />
      <main className="main">
        <About />
        <Skills />
        <Portfolio />
      </main>
      <FooterHome />
    </>
  );
}
