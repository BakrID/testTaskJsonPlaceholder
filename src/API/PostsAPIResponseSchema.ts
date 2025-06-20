import { array, Infer, number, object, string } from 'superstruct';

export const PostSchema = object({
  userId: number(),
  id: number(),
  title: string(),
  body: string(),
});

export type Post = Infer<typeof PostSchema>;

export const PostsSchema = array(PostSchema);

export type Posts = Infer<typeof PostsSchema>;
