import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Routes } from './Routes';
import { apolloClient } from './apolloClient';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>
);

export { App };