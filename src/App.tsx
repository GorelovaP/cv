import React from 'react';

import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {Skills} from "./skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home />
        <Skills/>
      <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
