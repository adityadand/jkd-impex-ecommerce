// src/ViewProducts.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ViewProducts.css';

const ViewProducts = () => (
  <div className="view-products-container">
    <h2>View Our Products</h2>
    <p>Explore our products on leading platforms:</p>

    <div className="buttons-container">
      <a href="https://www.amazon.in/storefront?me=A2OQS6AETKX6XF&ref_=ssf_share" target="_blank" rel="noopener noreferrer">
        <button className="amazon-button">View on Amazon</button>
      </a>
      
      {/* Add a button for Flipkart or any other platform */}
      {/* Example: 
      <Link to="/flipkart">
        <button className="flipkart-button">View on Flipkart</button>
      </Link>
      */}
    </div>
  </div>
);

export default ViewProducts;
