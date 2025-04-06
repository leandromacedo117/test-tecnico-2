
import React from 'react'

import './App.css'
import { dataUser } from './types/dataUser'
import useFetch from './hooks/useFetch'
 function App() {

  const userGithub = useFetch<dataUser[]>(`http://api.github.com/users/leandromacedo117`)
  console.log(userGithub)


  return (
    <>
      <div className='font-bold  text-2xl' >hello</div>
    </>
  )
}

export default App
