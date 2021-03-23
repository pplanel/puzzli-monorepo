// Dependencies
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { DocumentNode } from 'graphql';

export interface GenericApolloResponse<T> {
  [k: string]: T;
}

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('@Skeleton:token');

  return {
    headers: {
      ...headers,
      authorization: token ? `lfsapi ${token}` : '',
    },
  };
});

const api = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function apolloMutation<T>(variables: any, mutation: DocumentNode) {
  return api.mutate<T>({ mutation, variables });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function apolloQuery<T>(query: DocumentNode) {
  return api.query<T>({ fetchPolicy: 'network-only', query });
}

export default api;
