import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [dynamicText, setdynamicText] = useState('')

  const {loader,gif,fetchUrl} = useGif(dynamicText)

  function inputChangeHandler(event){
    setdynamicText(event.target.value)
  }

  return (
    <div className="bg-green-700 w-3/4 mx-auto mt-10 p-4 text-center rounded-lg">
      <div className="font-bold text-2xl mb-4">A {dynamicText} Gif</div>
      <div className="flex justify-center items-center">
        {loader ? <Spinner /> : <img src={gif} alt="Random Gif" className="max-w-full rounded-lg" />}
      </div>
      <div className='px-4 py-2 mt-4 rounded-md hover:bg-gray-300 transition duration-300 font-black'><input onChange={inputChangeHandler} type='text'></input></div>
      <button
        onClick={() => {
          fetchUrl();
        }}
        className="bg-white opacity-90 px-4 py-2 mt-4 rounded-md hover:bg-gray-300 transition duration-300"
      >
        Generate GIF
      </button>
    </div>
  );
};

export default Tag;

