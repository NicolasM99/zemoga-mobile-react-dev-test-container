import { StyleSheet } from 'react-native';
export const noInternetBarStyles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  message: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 8
  }
});
