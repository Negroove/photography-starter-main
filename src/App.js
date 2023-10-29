import React from 'react';
// import componentes

import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'

// import router
import { BrowserRouter as Router } from 'react-router-dom';

// import framer 

import { motion } from 'framer-motion';


const App = () => {
  return <>
  <Router>
  <Header/>
  <AnimRoutes/>
  </Router>
  </>;
};

export default App;
