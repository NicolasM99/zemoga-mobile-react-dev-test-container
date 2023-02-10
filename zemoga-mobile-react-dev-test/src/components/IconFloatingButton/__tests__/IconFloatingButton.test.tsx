import { render, screen } from '@testing-library/react-native';

import IconFloatingButton from '../IconFloatingButton';

describe('<IconFloatingButton /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<IconFloatingButton icon="comment" />);
    expect(screen).toMatchSnapshot();
  });
});
