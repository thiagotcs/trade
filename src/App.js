import React from 'react';
import './App.css';
import Routes from './routes';
import ContainerTop from './components/ContainerTop';
//import SignIn from './components/SignIn';
// import React from "react";
// import "./styles/global";

const App = () => {
  return (
    <div>
      <ContainerTop />
      <Routes />
    </div>
  );
};

export default App;
