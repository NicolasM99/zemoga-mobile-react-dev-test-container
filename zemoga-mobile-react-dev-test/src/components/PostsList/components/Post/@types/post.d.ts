import { PostContainerProps } from '../PostContainer';
import { PostFavouriteIconProps } from '../PostFavouriteIcon';
import { IPostSelectBtn } from './postSelectBtn';

export interface PostProps {
  onPressPost?: PostContainerProps['onPressPost'];
  onSetFavourite?: PostFavouriteIconProps['onSetFavourite'];
  isFavourite?: PostFavouriteIconProps['isFavourite'];
  title: string;
  isSelected?: IPostSelectBtn['isSelected'];
  onSelectPost?: IPostSelectBtn['onSelectPost'];
  isDeletingItems?: boolean;
}
