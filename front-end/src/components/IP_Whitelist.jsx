import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing navigate from React Router
import './IP_Whitelist.css';

const IPAddressForm = () => {
  const navigate = useNavigate(); // Initializing navigate
  const [ipAddress, setIPAddress] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to fetch the user's IP address
  const fetchIPAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const userIPAddress = data.ip;
      setIPAddress(userIPAddress);
    } catch (error) {
      setErrorMessage('Error fetching IP address');
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setIPAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

    if (!ipRegex.test(ipAddress)) {
      setErrorMessage('Invalid IP address');
      return;
    }
    
    try {
      const response = await fetch('your_post_endpoint_here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ipAddress }),
      });

      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setErrorMessage('Error sending request');
      console.error('Error:', error);
    }
  };

  // Function to navigate to the home page
  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div>
      <h1>IP Address Form</h1>
      <button onClick={fetchIPAddress}>Get My IP Address</button>
      <form onSubmit={handleSubmit}>
        <label>
          Enter IP Address:
          <input
            type="text"
            value={ipAddress}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={goToHome}>Home</button> {/* Button to navigate to home page */}
      {responseMessage && <p>Response: {responseMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </div>
  );
};

export default IPAddressForm;
