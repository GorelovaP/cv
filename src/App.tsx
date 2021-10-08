import React from 'react';

import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {Skills} from "./skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Contact} from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home />
        <Skills/>
      <Portfolio/>
        <Contact/>
    </div>
  );
}

export default App;
