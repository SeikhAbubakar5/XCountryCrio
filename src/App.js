import React, { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

  const [country, setCountry] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get("https://xcountries-backend.azurewebsites.net/all")
      setCountry(response.data)
      console.log("data", response)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      {country.map((elem, index) => (
        <div className='country' key={index}>
          <img src={elem.flag} alt={elem.abbr} />
          <p>{elem.name}</p>
        </div>
      ))

      }
    </div>
  );
}

export default App;

