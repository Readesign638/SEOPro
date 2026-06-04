import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container text-center py-5">
    <h1 className="display-4 mb-4">Welcome to SEOPro</h1>
    <p className="lead mb-3">
      We help you boost your site’s visibility, increase traffic, and improve your Google ranking.
    </p>
    <p className="mb-4">
      Our SEO experts use proven strategies including keyword research, on-page optimization, and analytics.
    </p>

    <Link to="/contact" className="btn btn-primary btn-lg">
      Contact Us
    </Link>
  </div>
);

export default Home

