import { ICommentStore } from './commentStore';
import { IPostStore } from './postStore';
import { IUserStore } from './userStore';

export interface IInitialState {
  posts: IPostStore[] | [];
  comments: ICommentStore[] | [];
  user: IUserStore | object;
}
