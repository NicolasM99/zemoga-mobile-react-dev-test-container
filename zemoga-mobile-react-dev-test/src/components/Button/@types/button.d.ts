import { GestureResponderEvent } from 'react-native';

export interface IButton {
  title?: string;
  style?: any;
  variant?: 'primary' | 'secondary' | 'danger';
  outlined?: boolean;
  rounded?: boolean;
  onPress: (e: GestureResponderEvent) => void;
}
