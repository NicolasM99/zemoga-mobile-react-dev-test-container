import { render, screen } from '@testing-library/react-native';

import Button from '../Button';

describe('<Button /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<Button title="test" />);
    expect(screen).toMatchSnapshot();
  });
  it('Should render the button with correct label', async () => {
    render(<Button title="test" />);
    const buttonLabel = await screen.findByTestId('buttonLabel');
    expect(buttonLabel.props.children).toEqual('test');
  });
});
