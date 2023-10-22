import './App.css'
import React from 'react'
import './index.css'
import Main from './main'
import { About } from './About'
import { Service } from './Service'
import { Feature } from './Feature'
import { Review } from './Review'
import { Foot } from './Foot'

function App() {
  return (
    <>
      <Main></Main>
      <About></About>
      <Service></Service>
      <Feature></Feature>
      <Review></Review>
      <Foot></Foot>
    </>
  )
}

export default App
