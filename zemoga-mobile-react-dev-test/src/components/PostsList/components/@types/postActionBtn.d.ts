import { FontAwesome5 } from '@expo/vector-icons';

export interface IPostActionBtn {
  name: keyof typeof FontAwesome5.glyphMap | string;
  onPress: () => void;
  color?: string;
}
