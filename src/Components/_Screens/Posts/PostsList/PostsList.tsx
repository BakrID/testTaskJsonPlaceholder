import { Post } from '#API';
import { usePostsStore } from '#Store/PostsStore';
import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { PostListRenderItem } from '../PostListRenderItem';

export const PostsList = () => {
  const fetchPosts = usePostsStore(state => state.fetchPosts);
  const postIds = usePostsStore(state => state.postIds);

  console.log('postIds', postIds);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Post['id'] }) => <PostListRenderItem postId={item} />,
    [],
  );

  return (
    <FlatList
      data={postIds}
      renderItem={renderItem}
      keyExtractor={item => item.toString()}
    />
  );
};
