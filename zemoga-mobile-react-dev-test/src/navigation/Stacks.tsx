import { POSTS, POST_DETAILS } from './routes';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import PostsScreen from '../screens/PostsScreen';

export type StackParamList = {
  Posts: undefined;
  PostDetails: { postId: string };
};

export const stacks = [
  { name: POSTS, component: PostsScreen },
  {
    name: POST_DETAILS,
    component: PostDetailsScreen,
    initialParams: { postId: '' }
  }
];
