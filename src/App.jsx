import './App.css';
import React from 'react';
import { useEffect,useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
    .then((response) => response.json())
    .then((data) => {
        setCountries(data);
      })
   .catch((error)=>console.error("Error fetching data:", error))
},[]);

 const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div>
      <center> <input
        type="text"
        placeholder="Search for countries"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /></center>
    </div>
    <div className="App">
      {filteredCountries.map((country, i) => (
        <div key={i} className='c-card'>
          <img
            src={country.png}
            alt={country.common}
            className='c-flag'
          />
          <p className='c-name'>{country.common}</p>
          </div>
      ))}
    </div>
    </>
  );
}

export default App;