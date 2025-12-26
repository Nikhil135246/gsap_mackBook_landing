import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useMediaQuery } from 'react-responsive'



const Showcase = () => {
        // Check if the device is a tablet or smaller (max-width: 1024px)
        const isTablet = useMediaQuery({query: '(max-width: 1024px)'});

    // useGSAP runs GSAP animations when the component mounts or when dependencies change
    useGSAP(()=>{
        // Only run the animation if NOT on tablet/mobile (i.e., on desktop)
        if(!isTablet){
            // Create a GSAP timeline for sequencing multiple animations
            const timeline = gsap.timeline({
                // ScrollTrigger plugin allows animations to be tied to scroll position
                scrollTrigger: {
                    trigger: "#showcase", // Element that triggers the animation (section with id="showcase")
                    start: "top top",     // Animation starts when the top of #showcase hits the top of the viewport
                    end: "bottom top",    // Animation ends when the bottom of #showcase hits the top of the viewport
                    scrub: true,          // Sync animation progress with scroll (smooth scrubbing)
                    pin: true,            // Pin the #showcase section during the animation (keeps it fixed while animating)
                }
            });
            // Add animations to the timeline:
            timeline
                // 1st animation: Scale the .mask img to its original size (scale(1))
                .to(".mask img", {
                    transform: 'scale(1)', // Animate the image scaling
                })
                // 2nd animation: Fade in the .content div and move it to its original Y position
                .to('.content', {
                    opacity: 1,    // Make content fully visible
                    y: 0,          // Move content to its original vertical position
                    ease: "power1.in" // Use a smooth easing function for the animation
                })
        }
    }, [isTablet]); // Re-run animation if device size changes
    return (
    // section ke ander video
    <section id = "showcase">
        <div  className = " media">
            <video src = "/videos/game.mp4" autoPlay loop muted playsInline />
            {/* autopla muted will play video when u are watching it  */}
            <div className="mask">
                <img src="/mask-logo.svg"/>
                {/* tip: we use svg because its light and easy for overlay */}
            </div>
        </div>    

        <div className='content'>
            <div className='wrapper'>
                <div className='lg:max-w-md'>
                    <h2>Rocket Chip</h2>


                    <div className="space-y-5 mt-7 pe-10">
                        <p>
                            Introducing{" "}
                            <span className="text-white">
                            M4, the next generation of Apple silicon
                            </span>
                            . M4 powers
                        </p>
                        <p>It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All in a design that's unbelievably thin, light, and powerful.</p>
                        <p>A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.</p>
                        <p className='text-primary'>Learn more about Apple Intelligence</p>
                    </div>
                </div>
                
                <div className="max-w-3xs space-y-14">
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3>4x faster</h3>
                        <p>pro rendering performance than M2</p>
                    </div>
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3>1.5x faster</h3>
                        <p>CPU performance than M2</p>
                    </div>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Showcase