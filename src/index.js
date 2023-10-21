import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './main'
import { About } from './About'
import { Service } from './Service'
import { Feature } from './Feature'
import { Review } from './Review'
import { Foot } from './Foot'
const SetItems = () => {
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
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<SetItems></SetItems>)
