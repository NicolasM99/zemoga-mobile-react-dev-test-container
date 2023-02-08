import { StyleSheet } from 'react-native';

export const commentsSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 5,
    maxHeight: '90%'
  },
  closeBtn: {
    flex: 1,
    position: 'absolute',
    top: -16,
    right: -16,
    padding: 16
  }
});
