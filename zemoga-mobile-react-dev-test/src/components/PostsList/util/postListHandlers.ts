import { IRouteHeaderAction } from 'src/components/RouteHeaderActions/RouteHeaderActions';
import { IPost } from '../@types/postListContext';
import PostsListDeleteBtn from '../components/PostsListDeleteBtn';
import PostsListRefreshBtn from '../components/PostsListRefreshBtn';

export const postListActions: Array<IRouteHeaderAction> = [
  {
    ActionBtn: PostsListRefreshBtn,
    name: 'PostsListRefreshBtn'
  },
  {
    ActionBtn: PostsListDeleteBtn,
    name: 'PostsListDeleteBtn'
  }
];

export const handleSetFavouritePost = (posts: IPost[], index: number) => {
  const newPosts: IPost[] = [...posts];
  newPosts.splice(posts[index].isFavourite ? posts.length - 1 : 0, 0, {
    ...newPosts.splice(index, 1)[0],
    isFavourite: !posts[index].isFavourite
  });
  return newPosts;
};

export const handleSelectPost = (posts: IPost[], index: number, isSelected: boolean) => {
  const newPosts: IPost[] = [...posts];
  newPosts.splice(index, 0, { ...newPosts.splice(index, 1)[0], isSelected: !isSelected });
  return newPosts;
};
