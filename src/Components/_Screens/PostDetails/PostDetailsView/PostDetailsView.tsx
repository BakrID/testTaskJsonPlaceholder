import { usePostsStore } from '#Store/PostsStore';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './PostDetailsView.styles';

type Props = {
  postId: number;
};

export const PostDetailsView = ({ postId }: Props) => {
  const post = usePostsStore(state => state.postsMap[postId]);

  if (!post) {
    return <Text>Post not found</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Title</Text>
        <Text>{post.title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Body</Text>
        <Text>{post.body}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User ID</Text>
        <Text>{post.userId}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ID</Text>
        <Text>{post.id}</Text>
      </View>
    </View>
  );
};
