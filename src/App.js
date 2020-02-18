import React from 'react';
import Header from '../src/components/Header_Footer/Header';
import './resources/styles.css';
import Featured from './components/Featured';
import VenueInfo from './components/VENUEINFO'
import Highlights from './components/HighLights'
import Pricing from './components/Pricing/index'
import Location from './components/Location'
import Footer from './components/Header_Footer/Footer'


function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "orange" }}>
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights />
      <Pricing />
      <Location />
      <Footer/>


    </div>
  );
}

export default App;
