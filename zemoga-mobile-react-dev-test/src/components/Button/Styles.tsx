import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants/theme/colors';

const BORDER_WIDTH = 2;

export const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  rounded: {
    borderRadius: 8
  },
  title: {
    color: 'white'
  },
  primary: {
    backgroundColor: COLORS.primary
  },
  secondary: {
    backgroundColor: 'green'
  },
  danger: { backgroundColor: 'red' },
  outlined_primary: {
    backgroundColor: 'white',
    borderWidth: BORDER_WIDTH,
    borderColor: COLORS.primary
  },
  outlined_secondary: {
    backgroundColor: 'white',
    borderWidth: BORDER_WIDTH,
    borderColor: 'green'
  },
  outlined_danger: {
    backgroundColor: 'white',
    borderWidth: BORDER_WIDTH,
    borderColor: 'red'
  },
  titleOutlined: {
    fontWeight: 'bold'
  },
  titleOutlined_primary: {
    color: COLORS.primary
  },
  titleOutlined_secondary: {
    color: 'green'
  },
  titleOutlined_danger: {
    color: 'red'
  }
});
