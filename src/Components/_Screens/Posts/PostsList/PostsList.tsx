import { Post } from '#API';
import { ListSeparator } from '#Components/Common/ListSeparator';
import { usePostsStore } from '#Store/PostsStore';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { PostListRenderItem } from '../PostListRenderItem';
import { ListKeyExtractor } from './PostList.utils';

export const PostsList = () => {
  const fetchPosts = usePostsStore(state => state.fetchPosts);
  const postIds = usePostsStore(state => state.postIds);
  const isLoading = usePostsStore(state => state.isLoading);
  const error = usePostsStore(state => state.error);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Post['id'] }) => <PostListRenderItem postId={item} />,
    [],
  );

  if (!isLoading && postIds.length === 0 && !!error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={postIds}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
      ItemSeparatorComponent={ListSeparator}
      ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
    />
  );
};
