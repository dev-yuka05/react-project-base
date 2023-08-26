import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages
import Main from './pages/Main';

const App = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <GlobalStyles />
				<Routes>
					<Route path="/" element={<Main />}></Route>
				</Routes>
			</BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;