import { PostDetailsView } from '#Components/_Screens/PostDetails/PostDetailsView';
import {
  RootNavigatorParamsList,
  RootNavigatorScreens,
} from '#Navigation/RootNavigator';
import { RouteProp } from '@react-navigation/native';
import { View } from 'react-native';

type Props = {
  route: RouteProp<RootNavigatorParamsList, RootNavigatorScreens.PostDetails>;
};

export const PostDetailsScreen = ({ route }: Props) => {
  const { postId } = route.params;

  return (
    <View>
      <PostDetailsView postId={postId} />
    </View>
  );
};
