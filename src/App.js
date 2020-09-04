import React from 'react';
import './App.css';
import Routes from './routes';
import ContainerTop from './components/ContainerTop';

const App = () => {
  return (
    <div>
      <ContainerTop />
      <Routes />
    </div>
  );
};

export default App;
