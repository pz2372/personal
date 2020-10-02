import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import IconBar from './components/IconBar';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import EllerbeCreek from './components/Experience/EllerbeCreek';
import TheBullishChannel from './components/Experience/TheBullishChannel';
import unclambdas from './components/Experience/unclambdas';
import Lambdas from './components/Experience/Lambdas';

function App() {
  return (
    <>
      <div class="header">
        <h1>Peter Zheng</h1>
      </div>
      <div class='row'>
        <IconBar />
        <Navbar />
        <BrowserRouter>
          <Route component={About} exact path="/" />
          <Route component={Education} path="/education" />
          <Route component={EllerbeCreek} path="/ellerbecreek" />
          <Route component={TheBullishChannel} path="/thebullishchannel" />
          <Route component={unclambdas} path="/unclambdas" />
          <Route component={Lambdas} path="/lambdaphiepsilon" />
          <Route component={Contact} path="/contact" />
        </BrowserRouter>  
      </div>
      <div class="footer">
        <p>Built with React framework</p>
      </div>
    </>
  );
}

export default App;
