import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'

const App = () => {
  return (
    <main> 
      <h1>
      Welcome to the App</h1>
      <NavBar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App