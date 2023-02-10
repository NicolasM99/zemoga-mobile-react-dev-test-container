import { IPostSelectBtn } from './postSelectBtn';
import { PostContainerProps } from '../PostContainer';
import { PostFavouriteIconProps } from '../PostFavouriteIcon';

export interface PostProps {
  onPressPost?: PostContainerProps['onPressPost'];
  onSetFavourite?: PostFavouriteIconProps['onSetFavourite'];
  isFavourite?: PostFavouriteIconProps['isFavourite'];
  title: string;
  isSelected?: IPostSelectBtn['isSelected'];
  onSelectPost?: IPostSelectBtn['onSelectPost'];
  isDeletingItems?: boolean;
  actionsDisabled?: boolean;
}
