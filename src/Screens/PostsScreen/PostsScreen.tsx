import { PostsList } from '#Components/_Screens/Posts/PostsList';

/**
 * In that case it's a bit redundant to have separate component for PostsList
 * But in real case we will have more complex UI for PostsScreen
 * So this approach help to keep code clean, screens and components separated and small
 * 
 * It cound be something like this:
 * return (
 *   <BaseScreen>
 *     <SearchBar />
 *     <PostsList />
 *     <Pagination />
 *     <FloatingActionButton />
 *   </BaseScreen>
 * )
 **/

export const PostsScreen = () => {
  return <PostsList />;
};
