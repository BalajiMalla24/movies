import React from 'react'

function Moviecard({movie}) {
  return (
    
    <div className="m-auto my-4 text-white relative w-15 h-50 ">
    <div className="absolute left-2 top-1">
      {movie.Year}
      </div>
    <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"} alt={movie.Title} 
    className='rounded-xl'/>
    <div>{movie.Title}</div>
    </div>
    
  )
}

export default Moviecard