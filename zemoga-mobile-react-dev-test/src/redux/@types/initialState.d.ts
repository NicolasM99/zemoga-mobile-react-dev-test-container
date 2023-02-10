import { IPostStore } from './postStore';

export interface IInitialState {
  posts: IPostStore[] | [];
  comments: object;
  users: object;
  status: number | null;
  internetStatus: boolean;
  patchedPost: object | null | undefined;
  requestIndex: number | null | undefined;
}
