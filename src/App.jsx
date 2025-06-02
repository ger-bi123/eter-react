import { useState } from 'react'

import './App.css'

import Header from './components/Header';
import Banner from './components/Banner';

function App() {
 

  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col">
     
    <Banner message="Aprovechando el black friday lleva los pantalones con un descuento del 15%" />
     
     <Header />
      </div>
    </>
  )
}

export default App
