// 14 and 16  wale model ko import karna , animate(transition wagera) karna and all hat 
// technically this called presenetationControls

import { PresentationControls } from '@react-three/drei';
// import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
import React, { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// some constant for some feature , animation , logic
const ANIMATION_DURATION = 1; // seconds
const OFFSET_DISTANCE = 5; // units how far one model move out screen or view 
// utility function 
const fademeshes = (group,opacity)=>{
    if(!group) return;  // agar grop ni h ya null h tho return 

    //warna
    // groupr ko traverse karke uske sare child ko check krna as variable "child"
    group.traverse((child)=>{
        // har child ko check krna ki wo mesh h ya ni
        if(child.isMesh){
            // agar mesh h tho uske material ko transparent banana kyu ki 
            child.material.transparent = true;
            //  fir gsap ka use karke uske material ke opacity ko change krna
            gsap.to(child.material,{
                opacity,
                duration: ANIMATION_DURATION,
                
            }
            )
        }
    })
}

// 2nd utitlity function for moving the model/group horizontally    
const moveGroup = (group , x)=>{
    if(!group) return; 
    // GSAP ka use karke group ke position ko animate karo, 
    // jisse group ka x-axis (horizontal) position smoothly 'x' value tak move ho jaye.
    // 'x' parameter batata hai ki group ko scene ke andar kitna aage/peeche (left/right) le jana hai.
    gsap.to(group.position,{x,duration: ANIMATION_DURATION})
}



const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;
    // const isFirstRender = useRef(true);
    // showlargemackbook is a boolean variable jo check karta hai ki current scale value 0.08 (16 inch model ke liye) ya 0.05 (mobile view ke liye) ke barabar hai ya nahi.
    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;  
    // === may fail in case 

    //useGSAP hook jab bhi scale change hoga tho ye function chalega
    useGSAP(()=>{
        if(showLargeMacbook){
        //→ Small Macbook model ko scene ke left side (ya bahar) -OFFSET_DISTANCE units tak smoothly le jata hai, taaki wo view se bahar ho jaye.
        moveGroup(smallMacbookRef.current,-OFFSET_DISTANCE);
        //→ Large Macbook model ko scene ke center (x = 0) par smoothly le aata hai, taaki wo view mein dikh sake.
        moveGroup(largeMacbookRef.current,0);
        
        fademeshes(smallMacbookRef.current,0);
        fademeshes(largeMacbookRef.current,1);
        }else{
        //→ Small Macbook model ko scene ke center (x = 0) par smoothly le aata hai, taaki wo view mein dikh sake.
        moveGroup(smallMacbookRef.current,0);   
        //→ Large Macbook model ko scene ke right side (ya bahar) +OFFSET_DISTANCE units tak smoothly le jata hai, taaki wo view se bahar ho jaye.
        moveGroup(largeMacbookRef.current,OFFSET_DISTANCE);

        fademeshes(smallMacbookRef.current,1);
        fademeshes(largeMacbookRef.current,0);
        }

    },[scale]);
    const controlsConfig = {
        snap: true,// snap back to center when released
        speed: 1, // how fast the model moves to the new position
        zoom: 1, // zoom level
        polar: [-Math.PI, Math.PI/2 ], // vertical rotation limits
        azimuth: [-Infinity , Infinity], // horizontal rotation limits
        config: { mass: 1, tension: 0, friction: 26  }//gives real world physics to the model movement
    }   
  return (
    
    <>
        {/* create presenetationControls */}
        <PresentationControls {...controlsConfig}>
            {/* (spred operator ...) ye saare controlsConfig ke properties ko yha pass kr dega element by element  */}
            {/* like agar controlsconfig is like = [1,3,4,3] tho ye 1={1} 2={3} 3={4} 4={3} is tarah se pass kr dega nake controlsConfig = {[1,3,4,3]} */}
            {/* PresentationControls is a component from @react-three/drei that adds interactive controls (like rotation, zoom, etc.) to your 3D models. */}
            {/* initialize a group */}
            <group ref={largeMacbookRef}>
                {/* large macbook model */}
                <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
            </group>
        </PresentationControls>
        {/* ab 2nd presentation controls for small macbook */}
        <PresentationControls {...controlsConfig}>
            {/* initialize a group */}
            <group ref={smallMacbookRef}>
                {/* small macbook model */}
                <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
            </group>
        </PresentationControls>
    </>

  )
}

export default ModelSwitcher