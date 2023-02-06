import { StyleSheet } from 'react-native';

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
    backgroundColor: 'blue'
  },
  secondary: {
    backgroundColor: 'green'
  },
  danger: { backgroundColor: 'red' },
  outlined_primary: {
    backgroundColor: 'white',
    borderWidth: BORDER_WIDTH,
    borderColor: 'blue'
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
  titleOutlined_primary: {
    color: 'blue'
  },
  titleOutlined_secondary: {
    color: 'green'
  },
  titleOutlined_danger: {
    color: 'red'
  }
});
