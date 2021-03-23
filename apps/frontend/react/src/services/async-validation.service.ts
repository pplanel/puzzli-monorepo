// Dependencies
import { AxiosResponse } from 'axios';

// Services
import api from '~/core/rest';

export const asyncValidation = (
  variables: string,
  query: string,
): Promise<AxiosResponse<any>> => {
  const token = localStorage.getItem('@Skeleton:token');

  return api.post(
    '/graphiql',
    {
      query,
      variables,
    },
    {
      headers: {
        authorization: token ? `lfsapi ${token}` : '',
      },
    },
  );
};
