import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
// import individual bootstrap components rather than the entire library
import Home from './Home.js';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Home />)