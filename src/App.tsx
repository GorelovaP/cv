import React from 'react';

import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {Skills} from "./skills/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home />
        <Skills/>
    </div>
  );
}

export default App;
