export enum RootNavigatorScreens {
  Posts = 'Posts',
  PostDetails = 'PostDetails',
}

export type RootNavigatorParamsList = {
  [RootNavigatorScreens.Posts]: undefined;
  [RootNavigatorScreens.PostDetails]: { postId: number };
};
