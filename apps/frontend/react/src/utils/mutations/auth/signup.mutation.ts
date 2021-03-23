import { gql } from '@apollo/client';

export const SignupMutation = gql`
  mutation signupMutation($data: SignUpInput) {
    CustomMutations {
      LoginMutations {
        SignUp(signupdata: $data) {
          r {
            ok
            msg
          }
        }
      }
    }
  }
`;
