import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
	
        <Route path="/" element={<Main />}></Route>
	
      </Routes>
    </BrowserRouter>
  );
}

export default App;
