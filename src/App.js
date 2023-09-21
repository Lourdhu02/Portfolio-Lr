import React from 'react';
import { Component } from 'react';
import './App.css';
import Home from './components/home/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Explore from './pages/explore/explore';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Logodesign from './pages/logodesign/logodesign';
import Webdesign from './pages/webdesign/webdesign';
import Webdev from './pages/webdevelopment/webdevelopment'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logodesign" element={<Logodesign />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/webdev" element={<Webdev />} />


        
      </Routes>
      </BrowserRouter>
    ); 
      
    
  }
}
 export default App