import { Platform, StyleSheet } from 'react-native';

export const routeHeaderStyles = StyleSheet.create({
  routeHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  routeHeaderTitle: {
    flex: 1,
    fontSize: 20,
    color: 'black'
  },
  routeHeaderActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: Platform.OS === 'ios' ? 0 : 16
  },
  routeHeaderAction: {
    marginLeft: 24
  },
  routeHeaderGoBackBtnContainer: {
    marginRight: 16
  }
});
