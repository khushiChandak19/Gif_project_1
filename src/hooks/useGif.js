import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const useGif = (tag) => {

  var memeUrl = `https://api.giphy.com/v1/gifs/random?apikey=${process.env.REACT_APP_GIPHY_API_KEY}`;
  var tagUrl = `https://api.giphy.com/v1/gifs/random?apikey=${process.env.REACT_APP_GIPHY_API_KEY}&tag=${tag}`;
  
   
    const [loader, setSpinner] = useState(false);
    const [gif, setGif] = useState('');
  
    async function fetchUrl() {
      setSpinner(true);

      
      try {
        const { data } = await axios.get(tag? tagUrl : memeUrl);
        const gifUrl = data.data.images.downsized_large.url;
        setGif(gifUrl);
      } catch (error) {
        console.error('Error fetching GIF:', error);
      } finally {
        setSpinner(false);
      }
    }
  
    useEffect(() => {
      fetchUrl();
    }, []);

  return {loader,gif,fetchUrl}
}

export default useGif;

