import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/random`);
      setRandomNumber(response.data.number);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>API Ramdom Number</h1>
      <button onClick={fetchRandomNumber}>
        Number
      </button>
      {randomNumber !== null && (
        <p>Random Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default App;
