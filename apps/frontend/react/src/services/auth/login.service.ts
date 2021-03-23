// Services
import { GenericApolloResponse, apolloMutation } from '~/core/graphql';

// Utils
import { LoginMutation } from '~/utils/mutations';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const login = (username: string, password: string) => {
  return apolloMutation<GenericApolloResponse<any>>(
    {
      username,
      password,
    },
    LoginMutation,
  );
};
