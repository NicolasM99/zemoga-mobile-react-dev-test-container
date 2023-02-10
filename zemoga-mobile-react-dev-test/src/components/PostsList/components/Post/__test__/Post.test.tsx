import React from 'react';

import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Post from '../Post';
describe('<Post /> unit tests', () => {
  const EXPECTED_TITLE = 'post title test';
  it('Should mount the component correctly', () => {
    const screen = render(<Post title={EXPECTED_TITLE} />);
    expect(screen).toMatchSnapshot();
  });

  it('Should match title prop', () => {
    const { getByTestId } = render(<Post title={EXPECTED_TITLE} />);
    waitFor(() => expect(getByTestId('postTitle')).toHaveTextContent(EXPECTED_TITLE));
  });

  it('Should trigger a function on press', () => {
    const customFunction = { pressFunction: (message: string) => message };
    spyOn(customFunction, 'pressFunction');
    const screen = render(
      <Post onPressPost={() => customFunction.pressFunction('pressed')} title={EXPECTED_TITLE} />
    );
    const postItem = screen.getByTestId('postItem');
    fireEvent.press(postItem);
    expect(customFunction.pressFunction).toHaveBeenCalledWith('pressed');
  });

  it('Should trigger a function on pressing favourite icon', () => {
    const customFunction = { pressFunction: (message: string) => message };
    spyOn(customFunction, 'pressFunction');
    const screen = render(
      <Post onSetFavourite={() => customFunction.pressFunction('pressed')} title={EXPECTED_TITLE} />
    );
    const postFavouriteIcon = screen.getByTestId('postFavouriteIcon');
    fireEvent.press(postFavouriteIcon);
    expect(customFunction.pressFunction).toHaveBeenCalledWith('pressed');
  });

  it('Should show select icon and hide favourite icon when isDeletingItems', () => {
    const { getByTestId, queryByTestId } = render(<Post isDeletingItems title={EXPECTED_TITLE} />);
    expect(getByTestId('postSelectIcon')).toBeTruthy();
    expect(queryByTestId('postFavouriteIcon')).not.toBeTruthy();
  });

  it('Should show select icon and show favourite icon when isDeletingItems and isFavourite', () => {
    const { getByTestId } = render(<Post isFavourite isDeletingItems title={EXPECTED_TITLE} />);
    expect(getByTestId('postSelectIcon')).toBeTruthy();
    expect(getByTestId('postFavouriteIcon')).toBeTruthy();
  });

  it("Shouldn't trigger function on press of favourite icon when isDeletingItems", () => {
    const customFunction = { pressFunction: (message: string) => message };
    spyOn(customFunction, 'pressFunction');
    const screen = render(
      <Post
        isFavourite
        onSetFavourite={() => customFunction.pressFunction('pressed')}
        isDeletingItems
        title={EXPECTED_TITLE}
      />
    );
    const postFavouriteIcon = screen.getByTestId('postFavouriteIcon');
    fireEvent.press(postFavouriteIcon);
    expect(customFunction.pressFunction).not.toHaveBeenCalled();
  });

  it('Should show the check-circle icon if isSelected', () => {
    const { getByTestId } = render(<Post isDeletingItems isSelected title={EXPECTED_TITLE} />);
    waitFor(() => expect(getByTestId('postSelectIcon').props.name).toEqual('check-circle'));
  });

  it('Should show the circle icon if isSelected is false', () => {
    const { getByTestId } = render(<Post isDeletingItems title={EXPECTED_TITLE} />);
    waitFor(() => expect(getByTestId('postSelectIcon').props.name).toEqual('circle'));
  });
});
