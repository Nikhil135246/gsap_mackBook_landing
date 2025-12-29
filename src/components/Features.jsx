import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import StudioLights from './three/StudioLights'
import { features, featureSequence } from '../constants'
import MacbookModel from './models/Macbook'
import clsx from 'clsx'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import useMacbookStore from '../store'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ModelScroll=()=>{
  const groupRef=useRef(null);
  const isMobile=useMediaQuery({query:"(max-width:1024px)"});
  const {setTexture} = useMacbookStore();

  // pre-load all the feature videos during component mount 
   useEffect(() => {
    featureSequence.forEach((feature) => { 
      // vertrual video element in memory jo dom mien add ni hoga (v)
      // this will download the video and cache it in the browser without displaying it
      const v = document.createElement('video');

      // set video attributes
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,

        // aggressive loading all video so when we need it, it is already loaded
        preload: 'auto',
        // important for cross-origin/anyorigin se aye  video ki loading 
        crossOrigin: 'anonymous',
      });

      v.load();
      /* start fetching video */
    });
   }, []);

   useGSAP(()=>{

    // 3D Model Rotation Animation 
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      }
    });

    // SYNC THE FEATURE CONTENT
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
        
      }
    });

    // 3D SPIN
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut' });
    }

    // Content & Texture Sync
    timeline
      // Use .call to execute a function at a specific point in the timeline
      // Here, setTexture is called to update the texture of the 3D model with the specified video
      .call(() => setTexture('/videos/feature-1.mp4'))

      // Use .to to animate properties of an element over time
      // This animates the opacity and position (y-axis) of the element with the class '.box1'
      .to('.box1', { opacity: 1, y: 0, delay: 1 })

      .call(() => setTexture('/videos/feature-2.mp4'))
      .to('.box2', { opacity: 1, y: 0 })

      .call(() => setTexture('/videos/feature-3.mp4'))
      .to('.box3', { opacity: 1, y: 0 })

      .call(() => setTexture('/videos/feature-4.mp4'))
      .to('.box4', { opacity: 1, y: 0 })

      .call(() => setTexture('/videos/feature-5.mp4'))
      .to('.box5', { opacity: 1, y: 0 });
    

   },[])
   
  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className='text-white text-3xl uppercase'>Loading...</h1></Html>}>
      <MacbookModel scale ={isMobile?0.05:0.08} position={[0,-1,1]}/>
      </Suspense>
    </group>
  )
}
const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      {/* Canvas */}
      <Canvas id='f-canvas' camera={{ }}>
      {/* Set lighting  */}
      <StudioLights/>
      <ambientLight intensity={0.5}/>
      {/* model */}
      <ModelScroll/>
      </Canvas>
      <div className='absolute inset-0'>
        {features.map((feature, index)=>(
          <div className={clsx('box',`box${index+1}`,feature.styles)}>
            <img src={feature.icon} alt={feature.highlight}/>
            <p>
              <span className='text-white'>{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features