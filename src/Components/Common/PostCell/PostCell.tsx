import { Post } from '#API';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './PostCell.styles';

type Props = {
  post: Post;
  onPress: () => void;
};

export const PostCell = ({ post, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{post.title}</Text>
    </TouchableOpacity>
  );
};
