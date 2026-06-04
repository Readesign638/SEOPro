import React, { useState, useEffect } from 'react';

export default function SearchAPI() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);
      setError(null);

      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Error fetching data');
          }
          return res.json();
        })
        .then(json => {
          setData(json.items || []);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500); // Debounce delay

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Search GitHub Users</h1>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Enter GitHub username…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: '0.8rem', width: '100%', marginBottom: '1rem' }}
      />
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Searching for users...</p>
        </div>
      )}
      {error && <div className="alert alert-danger">Error: {error}</div>}
      
      {data.length > 0 && (
        <ul className="list-group mt-3">
          {data.map(user => (
            <li key={user.id} className="list-group-item d-flex align-items-center">
              <img
                src={user.avatar_url}
                alt={user.login}
                width="40"
                height="40"
                className="rounded-circle me-3"
              />
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fw-semibold text-decoration-none"
              >
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
      
      {!loading && !error && query && data.length === 0 && (
        <div className="alert alert-info">No users found for "{query}"</div>
      )}
    </div>
  );
}