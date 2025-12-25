import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'

// importing files for gsap animation 
import gsap from 'gsap';
import {ScrollTrigger,SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
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