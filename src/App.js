import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from "./UserProfile"
import Anemeties from './Anemeties';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="flexColumn">
          <UserProfile />
          <Anemeties />
        </div>
      </header>
    </div>
  );
}

export default App;
