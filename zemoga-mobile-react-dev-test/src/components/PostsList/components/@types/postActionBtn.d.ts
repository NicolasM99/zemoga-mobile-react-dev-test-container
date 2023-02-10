import { FontAwesome5 } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

export interface IPostActionBtn {
  name: keyof typeof FontAwesome5.glyphMap | string;
  onPress: ((e: GestureResponderEvent) => void) & (() => void);
  color?: string;
  disabled?: boolean;
}
