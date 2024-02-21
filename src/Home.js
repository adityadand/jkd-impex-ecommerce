// src/Home.js
import React from 'react';
import './Home.css';

const brands = [
  { id: 0, name: 'Wonderfresh', website: 'https://www.wonderfresh.co.in/', description: 'Wonderfresh is a brand of air freshener and soap strips produced by M.K. Incorporation. The company is a leading manufacturer and exporter of these products in South Asia. Wonderfresh air fresheners come in a variety of fragrances, including rose, jasmine, and berry & lavender. Wonderfresh soap strips are available in fragrances like lime, sandal, and rose.' },
  { id: 1, name: 'Bittr', website: 'https://www.bitter-rat.com/', description: 'bitteR is a brand of rat repellent spray made by UPL Limited. It is a non-toxic and eco-friendly product that uses Denatonium Benzoate, the world `s bitterest substance, to deter rats from chewing on wires, cables, and other surfaces. bitteR is available in three sizes: 100ml ,180ml and 340ml.  ' },
  { id: 2, name: 'Victor Pro Battery', website: 'https://www.victorpro.net/', description: 'VictorPro is a company that produces a variety of batteries, including alkaline and zinc chloride batteries. Their batteries are known for their long-lasting performance and reliability, and they are designed for a variety of devices such as remotes, routers, and toys. The article discusses the different types of batteries that VictorPro offers, as well as the features and benefits of their products.' },
];

const Home = () => (
  <div>
    <div className="home-container">
      <h2>Welcome to JKD IMPEX</h2>
      <p>We specialize in e-commerce shipment of various brands. Check out our brands below:</p>

      {brands.map((brand) => (
        <div key={brand.id} className="brand-section">
          <a href={brand.website} target="_blank" rel="noopener noreferrer">
            <h3>{brand.name}</h3>
          </a>
          <p>{brand.description}</p>
        </div>
      ))}
    </div>

    <div className="about-section">
      <h2>About Us</h2>
      <p>This is the About section. Provide information about JKD IMPEX here.</p>
    </div>
  </div>
);

export default Home;
