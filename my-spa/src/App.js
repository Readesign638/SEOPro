import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { AppProvider } from './context/AppContext';
import './App.css';
import SearchAPI from './pages/SearchAPI';
import Weather from './components/Weather';


function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchAPI />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
