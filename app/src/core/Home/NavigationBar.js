import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <Link to="/war">War</Link>
    <Link to="/transformers/create">Create</Link>
  </nav>
);

export default NavigationBar;
