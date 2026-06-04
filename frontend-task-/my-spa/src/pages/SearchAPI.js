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
    <div className="container">
      <h1>Search GitHub Users</h1>
      <input
        type="text"
        placeholder="Enter GitHub username…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: '0.8rem', width: '100%', marginBottom: '1rem' }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
     <ul className="list-group">
  {data.map(user => (
    <li key={user.id} className="list-group-item d-flex align-items-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        width="40"
        className="rounded-circle me-3"
      />
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary fw-semibold"
      >
        {user.login}
      </a>
    </li>
  ))}
</ul>
</div>
  );
}
