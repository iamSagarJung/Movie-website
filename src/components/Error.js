import React, { useState } from 'react'
import { useGlobalContext } from './context'

const Error = () => {
  const {isError}=useGlobalContext()


  if(isError.show===true){
  return (
    <div className='error'>
      <p>{isError.msg}</p>
    </div>

  )
  }
}

export default Error