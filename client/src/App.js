import React from 'react';
import Desktop from './pages/Desktop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Desktop />
      <ToastContainer />
    </>
  );
}

export default App;
