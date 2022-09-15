import React from 'react';

import './App.css';
import {Header} from "./components/header/Header";

import Pages from "./common/pages/Pages";
import {HashRouter} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Pages/>
            </HashRouter>
        </div>
    );
}

export default App;
