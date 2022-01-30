import axios from 'axios';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';

export const getLiveUrl = async (slug) => {
  try {
    const res = await axios.get('db.json');
    console.log(res.data);
    return res.data[`${slug}`][0].liveUrl;
  } catch (error) {
    console.log(error);
  }
};

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
    query GetWordPressPosts {
        posts {
          nodes { 
            slug
          }
      }
    `,
  });
  return {
    props: {
      posts: result.data.posts.nodes,
    },
  };
}
