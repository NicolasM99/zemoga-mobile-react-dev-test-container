import { render, screen } from '@testing-library/react-native';

import { mockedComment } from '../__mocks__/mockedCommentData';
import Comment from '../Comment';

describe('<Comment /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<Comment {...mockedComment} />);
    expect(screen).toMatchSnapshot();
  });

  it('Should mount correctly the component with correct data', async () => {
    render(<Comment {...mockedComment} />);
    const commentName = await screen.findByTestId('commentName');
    const commentEmail = await screen.findByTestId('commentEmail');
    const commentBody = await screen.findByTestId('commentBody');
    expect(commentName.props.children).toEqual(mockedComment.name);
    expect(commentEmail.props.children).toEqual(mockedComment.email);
    expect(commentBody.props.children).toEqual(mockedComment.body);
  });
});
