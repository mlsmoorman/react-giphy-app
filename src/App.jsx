import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GIFDisplay from './GIFDisplay/GIFDisplay'
import GIFSearch from './GIFSearch/GIFSearch'

import './App.css'

function App() {
  const [giphy, setGiphy] = useState({});
  const [searchGiphy, setSearchGiphy] = useState('snow')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('USE EFFECT FOR TRENDING IS RUNNING')
    const endpoint = `https://api.giphy.com/v1/gifs/search?q=${searchGiphy}&api_key=6P3v2FglRp2rwJhRsnf9lrQPUdMUKejf`
    console.log('endpoint=======>', endpoint)
    
    async function getGiphy() {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        const body = await response.json();
        
        console.log('body============>', body);
        
        let i = Math.floor(Math.random() * body.data.length-1);
        setGiphy(body.data[i]);
        setLoading(false);
      } catch(err) {
        console.log(err);
        setLoading(false);
      }
    }
    getGiphy();
  }, [searchGiphy]);

  return (
    <>
      <h1>Giphy</h1>
      <GIFSearch setSearchGiphy={setSearchGiphy}/>
      <h3>Use Giphy to pull some giphs!</h3>
      {loading ? <h1>Loading...</h1> : <GIFDisplay giphy={giphy}/>}
    </>
  )
}

export default App
