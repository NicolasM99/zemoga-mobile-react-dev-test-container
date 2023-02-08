import { postListActions } from 'src/components/PostsList/util/postListHandlers';
import RouteHeaderActions from 'src/components/RouteHeaderActions/RouteHeaderActions';

import { POSTS, POST_DETAILS } from './routes';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import PostsScreen from '../screens/PostsScreen';

export type StackParamList = {
  Posts: undefined;
  PostDetails: { postId: number; title: string; body: string; userId: string };
};

export const stacks = [
  {
    name: POSTS,
    component: PostsScreen,
    options: {
      headerRight: () => <RouteHeaderActions actions={postListActions} />
    }
  },
  {
    name: POST_DETAILS,
    component: PostDetailsScreen,
    initialParams: { postId: '', title: '', body: '', userId: '' },
    options: {
      title: 'Post details'
    }
  }
];
