import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import IconBar from './components/IconBar';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import EllerbeCreek from './components/Experience/EllerbeCreek';
import JPHolding from './components/Experience/JPHolding'
import SeniorLifeInsurance from './components/Experience/SeniorLifeInsurance'

function App() {
  return (
    <>
      <div class="app">
      <div class="header">
        <h1>Peter Zheng's Portfolio</h1>
      </div>
      <div class='row'>
        <IconBar />
        <Navbar />
        <BrowserRouter>
          <Route component={About} exact path="/" />
          <Route component={Education} path="/education" />
          <Route component={EllerbeCreek} path="/ellerbecreek" />
          <Route component={JPHolding} path="/jpholding" />
          <Route component={SeniorLifeInsurance} path="/seniorlifeinsurance" />
          <Route component={Contact} path="/contact" />
        </BrowserRouter>  
      </div>
      <div class="footer">
        <p>UTF-8</p>
        <p>JavaScript</p>
        <p>Prettier</p>
      </div>
      </div>
    </>
  );
}

export default App;
