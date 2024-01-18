// App.js

import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ResumeNew from './components/resumep/ResumeNew'
import ScrollToTop from './components/ScrollToTop';

import './App.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    
    <Router>
      <Navbar />
      
  
    <ScrollToTop />
    <Switch>
     
     <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={ResumeNew} /> 
    </Switch>
    <Footer />
    
  </Router>
  
  );
};

export default App;
