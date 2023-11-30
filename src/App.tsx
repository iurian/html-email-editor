import 'react-app-polyfill/ie11';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Dashboard from './dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #root {
    height: 100%;
  }
`;

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster />
        <GlobalStyle />
        <Routes>
          {/* <Route path="/" element={<Example />} /> */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

//const root = ReactDOM.createRoot(document.getElementById('root')!);
//root.render(<App />);

export default App;
