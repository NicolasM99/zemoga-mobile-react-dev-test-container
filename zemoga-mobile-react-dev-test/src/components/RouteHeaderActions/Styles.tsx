import { StyleSheet } from 'react-native';

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
    alignItems: 'center'
  },
  routeHeaderAction: {
    padding: 16
  },
  routeHeaderGoBackBtnContainer: {
    marginRight: 16
  },
  disabled: {
    opacity: 0.5
  }
});
