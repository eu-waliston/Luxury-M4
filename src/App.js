import React from 'react';

import Menu from './components/Menu';
import Home from './components/Home';
import AboutUs from './components/AboutUS';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <AboutUs />
      <Collection />
    </div>
  );
}

export default App;
