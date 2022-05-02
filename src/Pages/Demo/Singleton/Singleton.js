import React from 'react'
import SingletonApplication from './Components/SingletonApplication'
import "./Singleton.css"
export const Singleton = () => {
  return (
    <div className='singleton-section'>
      <div className='singleton-section-title'>Singleton</div>
      <SingletonApplication></SingletonApplication>
    </div>
  )
}
