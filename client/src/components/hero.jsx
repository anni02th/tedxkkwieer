import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Prevent video from pausing when out of viewport on iOS Safari
    if (videoRef.current) {
      videoRef.current.addEventListener('webkitendfullscreen', (event) => {
        event.target.play();
      });
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="min-w-full min-h-full object-cover"
          playsInline // Important for iOS inline playback
        >
          <source
            src="https://videos.pexels.com/video-files/19419586/19419586-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center relative z-0">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-4">
          TEDxKKWIEER
        </h1>
        <p className="text-xl md:text-2xl mb-8">Building for showcase</p>
        <a
          href="#about"
          className="bg-red-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;