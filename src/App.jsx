// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import PropertyDetailsScreen from './components/PropertyDetailsScream';
import AdditionalDetailsScreen from './components/AdditionalDetailsScreen';
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SplashScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/property-details" element={<PropertyDetailsScreen/>}/>
        <Route path="/additional-details" element={<AdditionalDetailsScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
