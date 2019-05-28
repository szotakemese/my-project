import React, { Component } from 'react';
import './App.css';
import renderBDList from './Birthday_App'


function App() {
  return (
    <div className="App">
      {renderBDList()}

    </div>
  );
}

export default App;
