import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div>
      <span>Picture: </span>
      <input type='text' placeholder='image url' />
      <span>Name: </span>
      <input type='text' placeholder='name' />
      <button>Add Friend</button>
    </div>
  );
}

export default App;
