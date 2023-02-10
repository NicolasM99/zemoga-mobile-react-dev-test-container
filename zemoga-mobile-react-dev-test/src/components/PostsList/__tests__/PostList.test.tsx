import { render } from '@testing-library/react-native';

import { MockedAppNavigator } from 'src/navigation/__tests__/__mocks__/MockedAppNavigator';

import PostsList from '../PostsList';

describe('<PostsList /> unit tests', () => {
  it('Should mount the component correctly', () => {
    const screen = render(
      <MockedAppNavigator>
        <PostsList />
      </MockedAppNavigator>
    );
    expect(screen).toMatchSnapshot();
  });
});
