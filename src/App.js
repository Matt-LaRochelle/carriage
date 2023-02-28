import React from 'react';
import './index.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Tours from './components/tours/Tours';
import Horses from './components/horses/Horses';
import Contact from './components/contact/Contact';
import Lights from './components/lights/Lights';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="horses" element={<Horses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="lights" element={<Lights />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
