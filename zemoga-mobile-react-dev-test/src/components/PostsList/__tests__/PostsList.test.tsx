import { fireEvent, waitFor, screen } from '@testing-library/react-native';

import * as InternetStatusContext from 'src/context/InternetStatusContext';
import { POST_DETAILS } from 'src/navigation/routes';
import { INITIAL_STATE } from 'src/redux/reducers';
import { renderWithStoreProviders } from 'src/redux/utils/test-utils';
import MockedScreenProvider from 'src/screens/__mocks__/MockedScreenProvider';

import { mockedPosts } from '../__mocks__/mockedData';
import PostsList from '../PostsList';

const mockedNavigate = { navigate: () => true };
jest.mock('@react-navigation/native', () => ({
  ...(jest.requireActual('@react-navigation/native') as any),
  useNavigation: () => mockedNavigate
}));
jest.mock('expo-file-system', () => ({
  ...(jest.requireActual('expo-file-system') as any),
  getInfoAsync: async () => Promise.resolve(true)
}));
describe('<PostsList /> unit tests', () => {
  jest.mock('react-redux', () =>
    jest.fn(() => ({
      useDispatch: () => true
    }))
  );
  jest.spyOn(InternetStatusContext, 'useInternetStatusContext').mockReturnValue({
    internetStatus: true
  });
  it('Should mount the component correctly', async () => {
    renderWithStoreProviders(
      <MockedScreenProvider>
        <PostsList />
      </MockedScreenProvider>
    );
    expect(screen).toMatchSnapshot();
  });
  it('Should render a list of 10 posts correctly', async () => {
    const { findAllByTestId } = renderWithStoreProviders(
      <MockedScreenProvider>
        <PostsList />
      </MockedScreenProvider>,
      { preloadedState: { ...INITIAL_STATE, posts: mockedPosts } }
    );
    const postTitles = await findAllByTestId('postTitle');
    postTitles.map((post, index) => {
      waitFor(() => expect(post.props.children).toEqual(mockedPosts[index].title));
    });
  });

  it('Should go to PostDetails screen with correct data when clicking a post', async () => {
    spyOn(mockedNavigate, 'navigate');
    renderWithStoreProviders(
      <MockedScreenProvider>
        <PostsList />
      </MockedScreenProvider>,
      { preloadedState: { ...INITIAL_STATE, posts: mockedPosts } }
    );
    const postItems = await screen.findAllByTestId('postItem');
    const postItem = postItems[0];
    fireEvent.press(postItem);
    expect(mockedNavigate.navigate).toHaveBeenCalledWith(POST_DETAILS, {
      ...mockedPosts[0],
      postId: mockedPosts[0].id
    });
  });
});
