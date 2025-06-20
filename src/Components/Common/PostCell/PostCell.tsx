import { Post } from '#API';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './PostCell.styles';

type Props = {
  post: Post;
};

export const PostCell = ({ post }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{post.title}</Text>
    </View>
  );
};
