import React from 'react'
import MainPage from './Components/MainPage'
import { Route,Routes } from 'react-router-dom'
import Mealinfo from './Components/Mealinfo'

const App = () => {
  return (
    <>
        {/* <MainPage /> */}

        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/:mealid' element={<Mealinfo/>}/>
        </Routes>
        

    </>
  )
}

export default App;