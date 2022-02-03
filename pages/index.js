// components
import About from '../components/about';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Header from '../components/header';
import Footer from '../components/footer';
import Contact from '../components/contact';

import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <main className="main">
        <About />
        <Skills />
        <Portfolio posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetWordPressPosts {
        posts {
          edges {
            node {
              slug
              excerpt
              title
              content
              featuredImage {
                node {
                  guid
                  altText
                }
              }
              excerpt
              github {
                githubUrl
              }
              liveSite {
                liveSiteUrl
              }
              keyTech {
                keyTech
              }
            }
          }
        }
      }
    `,
  });
  const posts = result.data.posts.edges.map(({ node }) => node);
  return {
    props: {
      posts,
    },
  };
}
