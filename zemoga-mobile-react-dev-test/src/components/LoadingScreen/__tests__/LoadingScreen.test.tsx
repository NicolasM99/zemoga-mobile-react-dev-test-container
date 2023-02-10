import { screen } from '@testing-library/react-native';

import * as PostsListContext from 'src/components/PostsList/context/PostsListContext';
import * as InternetStatusContext from 'src/context/InternetStatusContext';
import { renderWithStoreProviders } from 'src/redux/utils/test-utils';
import MockedScreenProvider from 'src/screens/__mocks__/MockedScreenProvider';

import LoadingScreen from '../LoadingScreen';

describe('<LoadingScreen /> unit tests', () => {
  jest.mock('react-redux', () =>
    jest.fn(() => ({
      useDispatch: () => true
    }))
  );
  jest.spyOn(InternetStatusContext, 'useInternetStatusContext').mockReturnValue({
    internetStatus: true
  });
  jest.spyOn(PostsListContext, 'usePostsListContext').mockReturnValue({
    isLoading: true,
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
        <LoadingScreen />
      </MockedScreenProvider>
    );
    expect(screen).toMatchSnapshot();
  });

  it('Should return empty object if internetStatus is false', () => {
    jest.spyOn(InternetStatusContext, 'useInternetStatusContext').mockReturnValue({
      internetStatus: false
    });
    renderWithStoreProviders(
      <MockedScreenProvider>
        <LoadingScreen />
      </MockedScreenProvider>
    );
    expect(screen).toMatchObject({});
  });

  it('Should return empty object if isLoading is false', () => {
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
    renderWithStoreProviders(
      <MockedScreenProvider>
        <LoadingScreen />
      </MockedScreenProvider>
    );
    expect(screen).toMatchObject({});
  });
});
