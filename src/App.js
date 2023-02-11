import React from 'react';

import Menu from './components/Menu';
import Home from './components/Home';
import AboutUs from './components/AboutUS';
import Collection from './components/Collection';
import ContactUs from './components/ContactUs';
import TopProducts from './components/TopProducts';
import FindUs from './components/FindUs';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <AboutUs />
      <Collection />
      <ContactUs />
      <TopProducts />
      <FindUs />
    </div>
  );
}

export default App;
