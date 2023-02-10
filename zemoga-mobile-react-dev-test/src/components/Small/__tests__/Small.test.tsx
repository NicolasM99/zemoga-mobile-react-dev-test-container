import { render, screen } from '@testing-library/react-native';

import Small from '../Small';

describe('<Small /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<Small>Lorem ipsum small</Small>);
    expect(screen).toMatchSnapshot();
  });
});
