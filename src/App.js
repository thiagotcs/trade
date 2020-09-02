import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import ContainerTop from './components/ContainerTop';

const App = () => {
  return (
    <div>
      <ContainerTop />
      <SignIn />
    </div>
  );
};

export default App;
