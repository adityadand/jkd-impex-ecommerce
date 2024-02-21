// src/Brand.js
import React from 'react';

const Brand = ({ brand }) => (
  <div>
    <h2>{brand.name}</h2>
    <p>{brand.description}</p>
    <a href={brand.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
  </div>
);

export default Brand;
