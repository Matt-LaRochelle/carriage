import React from 'react';
import './index.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Tours from './components/tours/Tours';
import Horses from './components/horses/Horses';
import Contact from './components/contact/Contact';
import Lights from './components/lights/Lights';
import Events from './components/events/Events';
import Now_what from './components/now_what/Now_what';
import Links from './components/links/Links';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// This is the original version of Shoshana's website, if we are ever curious.

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
          <Route path="events" element={<Events />} />
          <Route path="lights" element={<Lights />} />
          <Route path="now_what" element={<Now_what />} />
          <Route path="links" element={<Links />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
