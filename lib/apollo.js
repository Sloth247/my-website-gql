import { ApolloClient, InMemoryCache } from '@apollo/client';

/** using WPGraphQL plugin and WP as database */
export const client = new ApolloClient({
  uri: 'http://3.219.10.209/graphql',
  cache: new InMemoryCache(),
});
