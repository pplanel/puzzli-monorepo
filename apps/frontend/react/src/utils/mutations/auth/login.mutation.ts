import { gql } from '@apollo/client';

export const LoginMutation = gql`
  mutation loginMutation($username: String!, $password: String!) {
    CustomMutations {
      LoginMutations {
        Login(username: $username, password: $password) {
          r {
            ok
            msg
          }
          token
        }
      }
    }
  }
`;
