import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';
import Moviecard from './Moviecard';

const api_url ='http://www.omdbapi.com?apikey=e325b9ae'

function App() {
const [movies ,setMovies] = useState([])
const [searchitem , setSearchitem] = useState('')
useEffect(()=>{

apidata(searchitem)
  
}, [])
// const apidata = async(title)=>{
//   const response = await fetch(`${api_url}&s=${title}`)
//   const data = await response.json()
//   setMovies(data.Search)
//   setSearchitem("")
// }
const apidata =(title)=>{
  fetch(`${api_url}&s=${title}`)
  .then((response)=>(response.json()))
  .then((data)=>(setMovies(data.Search)))
  setSearchitem("")
}

const movie1 ={
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
  return (
    <>
    <div className='bg-gray-900 w-full h-full '>
 <div className="bg-gray-900 w-full h-full ">
  <div className='text-white font-bold text-3xl py-10'>Movies</div>
  <div className="mt-1 flex justify-center">
    <input type="text" 
  placeholder='type movies here'
  className='w-6/12 px-2 py-1 rounded-l-lg outline-none'
  value={searchitem}
  onChange={(e)=>{setSearchitem(e.target.value)}}

  />
  <button className='bg-blue-600 p-2 rounded-r-lg'
  onClick={()=>{apidata(searchitem) }}
  >search</button>
  </div>
  <div class="flex flex-wrap items-center w-full">
{ movies?.length>0 ? (movies.map((movie)=>(
 
 <Moviecard  key={movie.imdbID} movie={movie}/>

)))  : (
  <div className="m-auto text-white"><h2>no movies available</h2></div>
) }
</div>
  
 </div>
 </div>
    </>
  )
}

export default App
