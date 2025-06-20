import { Post } from '#API';

export const ListKeyExtractor = (item: Post['id']) => item.toString();
