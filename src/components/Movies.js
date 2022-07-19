import React from 'react'
import { useGlobalContext } from './context'
import {Link} from "react-router-dom"

const Movies = () => {
  const {isLoading,movie,remove}=useGlobalContext()

  
 
  if(isLoading){
    return <h1 className='loading'>Loading....</h1>
  }
  return (
    <div className='movie-container'>
      {
        movie.map((curmovie)=>{
          const {Title,Poster,imdbID}=curmovie
          return (
          <div className='movies' key={imdbID}>
            <h3>{Title.length<15?Title:Title.slice(0,15)+"..."}</h3>
            <Link to={`movie/${imdbID}`} key={Title}>
            <img src={Poster} alt={Title}></img>
            </Link>
            <button onClick={()=>remove(imdbID)}>Remove</button>
          </div>
          )
        })
      }
    </div>
  )
}

export default Movies