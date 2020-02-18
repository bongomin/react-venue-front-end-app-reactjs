import React from 'react';
import Header from '../src/components/Header_Footer/Header';
import './resources/styles.css';
import Featured from './components/Featured';
import VenueInfo from './components/VENUEINFO'
import Highlights from './components/HighLights'
import Pricing from './components/Pricing/index'


function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "orange" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />


    </div>
  );
}

export default App;
