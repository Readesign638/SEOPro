import React, { useState } from 'react';

const API_KEY = 'ba42979a5b3ba1da1ba155798bafbdce';

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
 <div className="container py-4">

      <h1>Check Weather</h1>
      <input
  type="text"
  className="form-control mb-3"
  placeholder="Enter city name"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
/>
<div className="text-center">
  <button onClick={fetchWeather} className="btn btn-primary">
    Get Weather
  </button>
</div>
{loading && <div className="alert alert-info">Loading...</div>}
{error && <div className="alert alert-danger">{error}</div>}
{weather && (
  <div className="mt-4 text-center">
    <h2>{weather.name}, {weather.sys.country}</h2>
    <p>Temperature: {weather.main.temp} °C</p>
    <p>Weather: {weather.weather[0].description}</p>
    <p>Humidity: {weather.main.humidity}%</p>
    <p>Wind: {weather.wind.speed} m/s</p>
  </div>
)}
    </div>
  );
}
