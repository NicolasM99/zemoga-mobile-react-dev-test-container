import React from 'react';

export interface IHeader {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  bold?: boolean;
  children: React.ReactNode;
}
