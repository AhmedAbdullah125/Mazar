'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Example from '../../components/Path/Example';
import PathInfo from '../../components/Path/PathInfo';
import Destinations from '../../components/Path/Destinations';
export default function Home() {

  const [loading, setLoading] = useState(true); // State for loading indicator
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('en');  // Default language is 'en'
  useEffect(() => {
    setLoading(true);
    // Define the headers with the selected language
    const headers = {
      lang: language, // Change language dynamically based on state
    };
    // Fetch data from the API with Axios
    axios.get('https://mzarapp.com/api/landing/home/packages/details/46'
      , {headers: headers,})
      .then(response => {
        setData(response.data);  // Set the response data to state
        setLoading(false);  // Set loading to false
      }).catch(error => {
        setError(error);  // Handle any errors
        console.error('Error fetching data:', error);
        setLoading(false)
      });
  }, []);  // Run this effect whenever the `language` changes
  // Example: Toggle between 'en' and 'ar'

  return (
    <div>
      <PathInfo></PathInfo>
      <Destinations></Destinations>
      {/* <Example></Example> */}
    </div>
  );
}
