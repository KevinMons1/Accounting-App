'use client';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store from '@/modules/shared/redux/stores/store';

const AppWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppWrapper;
