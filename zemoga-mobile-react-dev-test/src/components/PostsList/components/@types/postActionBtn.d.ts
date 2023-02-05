import FontAwesome from '@expo/vector-icons/FontAwesome';

export interface IPostActionBtn {
  name: keyof typeof FontAwesome.glyphMap;
  onPress: () => void;
  color?: string;
}
