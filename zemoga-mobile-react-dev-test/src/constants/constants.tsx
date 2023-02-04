import { RouteHeaderAction } from 'src/components/RouteHeader/RouteHeader';

export const mainPageActions: Array<RouteHeaderAction> = [
  {
    icon: 'repeat',
    onPress: () => {
      alert('clicked');
    }
  },
  {
    icon: 'trash',
    onPress: () => {
      alert('clicked');
    }
  }
];
