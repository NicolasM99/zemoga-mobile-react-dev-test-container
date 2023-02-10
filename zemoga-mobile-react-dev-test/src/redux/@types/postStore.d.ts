export interface IPostStore {
  userId: number;
  id: number;
  title: string;
  body: string;
  isFavourite?: boolean;
}
