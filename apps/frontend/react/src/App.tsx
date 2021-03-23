// Dependencies
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

// Utils
import { AuthProvider } from './hooks/auth';
import Routes from './routes';
import client from './core/graphql';

// Assets
import GlobalStyle from './styles/global';
import theme from './styles/themes/default';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'puzzl-components/dist/puzzl-components/themes/unhideschool.theme.css';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </ApolloProvider>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
