import React from 'react';
import './index.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Tours from './components/tours/Tours';
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
