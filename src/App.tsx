// import React, { useRef } from 'react';
// import './App.css';
//import { createGlobalStyle } from 'styled-components';

// function App() {
//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//       udpated app goes here
//     </div>
//   );
// }

// export default App;

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
    <Router>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<Example />} /> */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

//const root = ReactDOM.createRoot(document.getElementById('root')!);
//root.render(<App />);

export default App;
