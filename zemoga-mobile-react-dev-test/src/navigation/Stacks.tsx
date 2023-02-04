import RouteHeader from 'src/components/RouteHeader/RouteHeader';
import { mainPageActions } from 'src/constants/constants';

import { POSTS, POST_DETAILS } from './routes';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import PostsScreen from '../screens/PostsScreen';

export type StackParamList = {
  Posts: undefined;
  PostDetails: { postId: string };
};

const defaultStackOptions = {
  header: (props: any) => {
    return <RouteHeader showActions title={props.route.name} actions={mainPageActions} />;
  }
};

export const stacks = [
  {
    name: POSTS,
    component: PostsScreen,
    options: defaultStackOptions
  },
  {
    name: POST_DETAILS,
    component: PostDetailsScreen,
    initialParams: { postId: '' },
    options: {
      header: () => <RouteHeader showGoBackBtn title="Post details" actions={mainPageActions} />
    }
  }
].map((stack) => ({ ...stack, options: { ...defaultStackOptions, ...stack.options } }));
