import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants/theme/colors';

export const iconFloatingButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    opacity: 0.5
  }
});
