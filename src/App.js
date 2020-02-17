import React from 'react';
import Header from '../src/components/Header_Footer/Header';
import './resources/styles.css'
import Featured from './components/Featured'


function App() {
  return (
    <div className="App" style={{ height: "1500px", background: "orange" }}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
