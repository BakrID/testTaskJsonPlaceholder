import { Post, PostsSchema } from '#API';
import { fetchInternal } from '#Services/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/**
 * Why not just use Array<Post> instead of having postsMap and postIds?
 * Because when any Post will be updated by user/backend list will not re-render all items even if renderItem is not memoized
 * Plus we can faster find post by id in postsMap what is much faster than posts.find(post => post.id === id) for cases when we have a lot of posts
 */

type PostsStore = {
  postsMap: Record<number, Post>;
  postIds: Post['id'][];

  isLoading: boolean;
  error: string | null;

  fetchPosts: () => Promise<void>;
};

export const usePostsStore = create<PostsStore>()(
  persist(
    set => ({
      postsMap: {},
      postIds: [],

      isLoading: false,
      error: null,

      fetchPosts: async () => {
        try {
          set({ isLoading: true, error: null });
          const postsResponse = await fetchInternal({
            url: 'posts',
            method: 'GET',
            schema: PostsSchema,
          });

          set({
            postsMap: postsResponse.reduce(
              (acc, post) => ({ ...acc, [post.id]: post }),
              {},
            ),
            postIds: postsResponse.map(post => post.id),
          });
        } catch (error) {
          set({ error: 'Failed to fetch posts' }); // Just generally handling error
        } finally {
          set({ isLoading: false });
        }
      },
    }),
    {
      name: 'posts',
      partialize: state => ({
        postsMap: state.postsMap,
        postIds: state.postIds,
      }),
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
