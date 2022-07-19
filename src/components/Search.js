import React from 'react'
import { useGlobalContext } from './context'
import Error from './Error'

const Search = () => {

    const {inputValue,input,isLoading}=useGlobalContext()

    if(isLoading){
      return <h1 className='loading'>Loading....</h1>
    }
  return (
    <div className='search-container'>
    <h3>Search Your Favourite Movie</h3>
    <input type="text" onChange={inputValue} value={input}></input>
    <Error/>
    </div>
  )
}

export default Search