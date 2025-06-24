import React, { useEffect, useRef } from 'react';
import HeroImage from '../assets/my-photo.jpg';
import resume from '../assets/YaminiReddipilli-Resume.pdf';
import backgroundVideo from '../assets/portfolio_background.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust this value (e.g., 0.75, 0.25) to control speed
    }
  }, []);

  return (
    <div className="relative text-white text-center py-24 px-6 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <img
            src={HeroImage}
            alt="Yamini Reddipilli"
            className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg"
          />

          <h1 className="text-4xl font-bold mb-4">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Yamini Reddipilli
            </span>
            , Full-Stack Developer
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            Passionate Full-Stack Developer focused on building scalable web applications with seamless user experiences and robust backend systems. I love turning ideas into reality using modern tools and frameworks.
          </p>

          <div className="space-x-4 flex justify-center flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
            >
              Contact Me
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded-full"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
