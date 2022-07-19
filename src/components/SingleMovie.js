import React from 'react'
import { useEffect, useState } from "react";
import { API } from './context';
import { Link, useParams } from 'react-router-dom';


const SingleMovie = () => {
  const {ids}=useParams()
  const [isLoading,setIsLoading]=useState(true)
  const [movie,setMovie]=useState("")
  


  const fetchedData=async (url)=>{
      const response=await fetch(url)
      const data=await response.json()
      console.log(data)
      if(data.Response==="True"){
      setIsLoading(false)
      setMovie(data)
      }
      else{
          // setIsError({show:true,msg:data.Error})
      setIsLoading(false)

      }
  }

   useEffect(() => {
      let timeout=setTimeout(()=>{
          fetchedData(`${API}&i=${ids}`)
      },1200)
      return ()=>{
          clearTimeout(timeout)
      }
   }, [ids])

   if(isLoading){
    return <h1 className='loading'>Loading....</h1>
  }
  return (<div className='s'>
    <div className='single-movie'>
      <div className='image'>
        <img src={movie.Poster}/>
        </div>  
        <div className='description'>
          <h2>{movie.Title}</h2>
          <p>{movie.Released}</p>
          <p>{movie.Genre}</p>
          <p>{movie.imdbRating}</p>
          <p>{movie.Country}</p>
          <Link to="/">
          <button>Go Back</button>
          </Link>

        </div>
    </div>
    </div>
  )
}

export default SingleMovie