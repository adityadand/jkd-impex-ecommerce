// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import Brand from './Brand';
import Navbar from './NavBar';
import About from './About';
import ContactUs from './Contact';
import './App.css';


const brands = [
  { name: 'Wonderfresh', website: 'https://wonderfresh.com', description: 'Description for Wonderfresh.' },
  { name: 'Bittr', website: 'https://bittr.com', description: 'Description for Bittr.' },
  { name: 'Victor Pro Battery', website: 'https://victorprobattery.com', description: 'Description for Victor Pro Battery.' },
];

const App = () => (
<Router>
    <div>
      <Navbar />

      <Routes>
        <Route path="/brand/:brandId" element={<Brand />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home brands={brands} />} />
      </Routes>
    </div>
  </Router>
);

export default App;
