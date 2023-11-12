import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';

import { SampleProvider } from '../contexts';

const SampleApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <SampleProvider>
    <Component {...pageProps} />
  </SampleProvider>
);

export default SampleApp;
