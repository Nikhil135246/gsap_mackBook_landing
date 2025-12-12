import React, { useEffect, useRef } from "react";
const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    // if (videoref.current h means videoref kisis ji attached h{jo ki ha line 16 mein } tho video ka playbackrate 2 kardo)
    if (videoRef.current) videoRef.current.playbackRate =2;
}, []);

  return (
    <section id="hero" /* style={{border: "2px solid red"}} */>
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>
      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
      {/*       
        autoPlay: Video page load hote hi automatically play ho jayega.
        muted: Video ka sound mute rahega (koi audio nahi sunai dega).
        playsInline: Video fullscreen ke bina, page ke andar hi play hoga (especially mobile pe). */}
        <button>Buy Now</button>
        <p>From $1999 or $133/mo. for 12 months</p>
    </section>

  );
};

export default Hero;
