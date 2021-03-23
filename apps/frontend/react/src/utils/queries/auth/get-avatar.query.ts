import { gql } from '@apollo/client';

export const GetAvatarQuery = gql`
  {
    CustomQueries {
      UserQueries {
        GetAvatar {
          id
          username
          fullname
        }
      }
    }
  }
`;
