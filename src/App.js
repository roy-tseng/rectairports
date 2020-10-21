import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AirportMap from './components/AirportMap/AirportMap'

const App = () => {
    
  return (
    <div className="App">
      <AirportMap/>
    </div>
  );
}


export default App;
