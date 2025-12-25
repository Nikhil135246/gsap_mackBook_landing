import React from 'react'
import useMacbookStore from '../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import MacbookModel14 from './models/Macbook-14';
import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import { Iphone13Pro2021 } from './models/Iphone';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
  const {color,scale,setColor,setScale} = useMacbookStore();
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const MIN_MOBILE_SCALE = 0.03;
  const mobileScale = isMobile ? Math.max(scale - 0.03, MIN_MOBILE_SCALE) : scale;
  return (
    <section id="product-viewer" /* style={{border:  "2px solid blue" }} */>
        <h2>Take a closer look at our products</h2>
        <div className="controls">
            <p className='info'>MacBook Pro available</p>            <div className="flex-center gap-5 mt-5">

                    <div className='color-control' >
                        <div 
                          onClick={()=>setColor("#adb5bd")}
                          className={clsx('bg-neutral-300',color === "#adb5bd" && "active")}
                        />
                        <div 
                          onClick={()=>setColor("#2e2c2e")}
                          className={clsx('bg-neutral-900',color === "#2e2c2e" && "active")}
                        />
                    </div>


                    <div className = "size-control">
                        {/* normal way
                        <div><p>14"</p></div>
                        <div><p>16"</p></div> */}

                         <div 
                          onClick={()=>setScale(0.06)}
                          className={clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}>
                            <p>14"</p>
                          </div>   

                         <div 
                          onClick={()=>setScale(0.08)}
                          className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}>

                            <p>16"</p>
                          </div>   
                        
                    </div>

            </div>
        </div>
        {/* lesson 7 : canvas setup https://youtu.be/DEeaT6FxEws?t=2477 2-3 min piche karna*/}
        <Canvas id = "canvas" camera={{position:[0,2,5], fov: 50, near:0.1,far:100}}>
          {/* <Box position={[0,0,0]} scale={10 * scale} material-color={color} /> */}
            
            {/* <meshBasicMaterial wireframe color="red" /> */}
            
            {/* <ambientLight intensity={1} /> */}
            <StudioLights/>                
            {/* <MacbookModel14 scale={0.06} position={[0,0,0]}/> */}
            {/* <Iphone13Pro2021 scale={1} position={[0,1,-0.5]}/> */}
            {/* <OrbitControls enableZoom={false}  />    ye basic orbit controll hai ab kyu ki apn ne gsap lib download kiya tho usko use karenge isko comment out kr diya  */}

            <ModelSwitcher scale={mobileScale} isMobile={isMobile} />


            {/* isMobile (left side): This is a prop you are passing to the ModelSwitcher component.
                isMobile (right side): This is the variable you defined earlier in your code */}
        </Canvas>
    </section>
  )
}

export default ProductViewer