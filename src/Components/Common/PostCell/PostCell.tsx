import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './PostCell.styles';

type Props = {
  title: string;
  onPress: () => void;
};

export const PostCell = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
