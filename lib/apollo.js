import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://3.219.10.209/graphql',
  cache: new InMemoryCache(),
});
