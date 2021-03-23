// Services
import { GenericApolloResponse, apolloQuery } from '~/core/graphql';

// Utils
import { GetAvatarQuery } from '~/utils/queries';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAvatar = () => {
  return apolloQuery<GenericApolloResponse<any>>(GetAvatarQuery);
};
