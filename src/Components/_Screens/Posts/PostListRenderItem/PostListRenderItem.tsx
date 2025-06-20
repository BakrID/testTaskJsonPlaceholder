import { PostCell } from '#Components/Common';
import {
  RootNavigatorParamsList,
  RootNavigatorScreens,
} from '#Navigation/RootNavigator/RootNavigator.types';
import { usePostsStore } from '#Store/PostsStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  postId: number;
};

export const PostListRenderItem = ({ postId }: Props) => {
  const post = usePostsStore(state => state.postsMap[postId]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigatorParamsList>>();

  const onPress = () => {
    navigation.navigate(RootNavigatorScreens.PostDetails, { postId });
  };

  // For edge cases when we have id in postIds but not in postsMap
  if (!post) {
    return null;
  }

  return <PostCell title={post.title} onPress={onPress} />;
};
