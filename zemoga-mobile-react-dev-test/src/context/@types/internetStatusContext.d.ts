import React from 'react';

export type InternetStatusContextType = {
  internetStatus: boolean | null;
};

export interface IInternetStatusContext {
  children: React.ReactNode;
}
