import React from 'react';

import { render, screen } from '@testing-library/react-native';

import { mockedComments } from '../__mocks__/mockedCommentsSectionData';
import CommentsSection from '../CommentsSection';

describe('<CommentsSection /> unit tests', () => {
  it('Should mount correctly the component', () => {
    render(<CommentsSection comments={[]} />);
    expect(screen).toMatchSnapshot();
  });

  it('Should mount correctly the component and open the modal (visible prop true)', () => {
    const realUseState = React.useState as any;
    const stubInitialState = [true];
    jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(stubInitialState));
    render(<CommentsSection comments={mockedComments} modalRef={null} />);
    expect(screen.getByTestId('modalComments').props.visible[0]).toBeTruthy();
  });
});
