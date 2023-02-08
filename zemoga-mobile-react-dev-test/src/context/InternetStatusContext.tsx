import React, { createContext, FC, useContext, useEffect, useState } from 'react';

import NetInfo from '@react-native-community/netinfo';

import { IInternetStatusContext, InternetStatusContextType } from './@types/internetStatusContext';

const InternetStatusContext = createContext<InternetStatusContextType | null>(null);

const InternetStatusProvider: FC<IInternetStatusContext> = ({
  children
}: IInternetStatusContext) => {
  const [internetStatus, setInternetStatus] = useState<boolean | null>(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setInternetStatus(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const valueObj = {
    internetStatus
  };
  return (
    <InternetStatusContext.Provider value={valueObj}>{children}</InternetStatusContext.Provider>
  );
};

const useInternetStatusContext = () => useContext(InternetStatusContext);

export { InternetStatusContext, InternetStatusProvider, useInternetStatusContext };
