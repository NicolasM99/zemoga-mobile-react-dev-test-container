import { render, screen } from '@testing-library/react-native';

import RouteHeaderActions from '../RouteHeaderActions';

describe('<RouteHeaderActions /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<RouteHeaderActions actions={[]} />);
    expect(screen).toMatchSnapshot();
  });
});
