import { FontAwesome5 } from '@expo/vector-icons';
import { GestureResponderEvent } from 'react-native';

export interface IIconFloatingButton {
  icon: keyof typeof FontAwesome5.glyphMap | string;
  onPress?: ((e: GestureResponderEvent) => void) & (() => void);
  disabled?: boolean;
}
