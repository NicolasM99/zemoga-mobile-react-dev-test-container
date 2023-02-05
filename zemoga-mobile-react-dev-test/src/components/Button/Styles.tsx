import { StyleSheet } from 'react-native';

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
  }
});
