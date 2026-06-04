// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/search">Search Users</Link> | 
    <Link to="/weather">Weather</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/contact">Contact</Link>
  </nav>
);


export default Navbar;
