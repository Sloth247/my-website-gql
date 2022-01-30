import '../styles/globals.scss';
import Layout from '../components/layout';
import { client } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
