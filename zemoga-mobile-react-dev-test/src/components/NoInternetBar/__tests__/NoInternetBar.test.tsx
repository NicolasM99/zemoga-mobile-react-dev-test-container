import { screen } from '@testing-library/react-native';

import * as PostsListContext from 'src/components/PostsList/context/PostsListContext';
import * as InternetStatusContext from 'src/context/InternetStatusContext';
import { renderWithStoreProviders } from 'src/redux/utils/test-utils';
import MockedScreenProvider from 'src/screens/__mocks__/MockedScreenProvider';

import NoInternetBar from '../NoInternetBar';

describe('<NoInternetBar /> unit tests', () => {
  jest.mock('react-redux', () =>
    jest.fn(() => ({
      useDispatch: () => true
    }))
  );
  jest.spyOn(InternetStatusContext, 'useInternetStatusContext').mockReturnValue({
    internetStatus: false
  });
  jest.spyOn(PostsListContext, 'usePostsListContext').mockReturnValue({
    isLoading: false,
    posts: [],
    setPosts: () => {},
    isDeletingItems: false,
    setIsDeletingItems: () => {},
    postsToDelete: [],
    setPostsToDelete: () => {},
    setIsLoading: () => {}
  });
  it('Should mount correctly the component', () => {
    renderWithStoreProviders(
      <MockedScreenProvider>
        <NoInternetBar />
      </MockedScreenProvider>
    );
    expect(screen).toMatchSnapshot();
  });

  it('Should return empty object if internetStatus is true', () => {
    jest.spyOn(InternetStatusContext, 'useInternetStatusContext').mockReturnValue({
      internetStatus: true
    });
    renderWithStoreProviders(
      <MockedScreenProvider>
        <NoInternetBar />
      </MockedScreenProvider>
    );
    expect(screen).toMatchObject({});
  });
});
