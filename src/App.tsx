import React from 'react';
import Login from './components/Login/Login';
import Counter from './components/Counter/Counter';
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Login />
    </div>
  );
}

export default App;
