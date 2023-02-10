import React, { PropsWithChildren } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react-native';
import type { RenderOptions } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { INITIAL_STATE } from '../reducers';
import { persistedReducer, store as reduxStore } from '../store';
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<typeof persistedReducer>;
  store?: typeof reduxStore;
}

export const renderWithStoreProviders = (
  ui: React.ReactElement,
  {
    preloadedState = INITIAL_STATE,
    store = configureStore({ reducer: persistedReducer, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<object>): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
