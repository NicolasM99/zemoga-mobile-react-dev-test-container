import { render, screen } from '@testing-library/react-native';

import Header from '../Header';

describe('<Header /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<Header>Header test</Header>);
    expect(screen).toMatchSnapshot();
  });

  it('Should render a header with correct label', async () => {
    render(<Header>Header test</Header>);
    const header = await screen.findByTestId('header');
    expect(header.props.children).toEqual('Header test');
  });
});
