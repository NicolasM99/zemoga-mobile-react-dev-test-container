import { render, screen } from '@testing-library/react-native';

import Paragraph from '../Paragraph';

describe('<Paragraph /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<Paragraph>Lorem ipsum </Paragraph>);
    expect(screen).toMatchSnapshot();
  });
});
