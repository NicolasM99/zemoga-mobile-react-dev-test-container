import { StyleSheet } from 'react-native';
export const noInternetBarStyles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center'
    // paddingBottom: 8
  },
  message: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8
  }
});
