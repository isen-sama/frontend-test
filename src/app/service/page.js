'use client';
import React, { useEffect, useState } from 'react';

const BocchiTheRock = () => {
  const [style, setStyle] = useState({
    transform: 'translateY(100px)',
    opacity: 0,
    transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
  });

  useEffect(() => {
    // Timer to ensure style changes after component mounts
    const timer = setTimeout(() => {
      setStyle({
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'transform 0.8s ease-out, opacity 0.8s ease-out'
      });
    }, 100); // Delay to ensure animation starts after component mounts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ 
        position: 'relative',
        padding: '20px',
        minHeight: '100vh',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Background Video */}
      <video
        src="/assets/video/background.mp4" // Replace with your video path
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(8px)',
          zIndex: '-1',
        }}
      />
      {/* Content */}
      <div style={{ 
        backgroundColor: '#401a8c', 
        color: 'white', 
        borderRadius: '15px', 
        overflow: 'hidden', 
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
        maxWidth: '900px',
        width: '100%',
        padding: '20px',
        position: 'relative',
        boxSizing: 'border-box',
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '20px', 
          fontSize: '2rem', // Use rem for responsiveness
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: '#FFD700',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontFamily: 'Arial, sans-serif',
          borderBottom: '2px solid #FFD700',
          paddingBottom: '10px',
          maxWidth: '800px',
          margin: '0 auto',
        }}><br/><br/>
          Example Promote Bocchi the Rock!
        </h1>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', // Stack items vertically on smaller screens
          gap: '20px',
          alignItems: 'center',
          textAlign: 'center',
        }}><br/>
          <img 
            src="/assets/img/poster.png" 
            alt="Bocchi the Rock Poster"
            style={{ 
              height: 'auto',
              width: '100%',
              maxWidth: '300px', // Reduced max-width for the poster
              borderRadius: '15px', 
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.4)',
              transform: 'rotateY(-10deg) rotateX(5deg)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              perspective: '1000px',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 12px 25px rgba(0, 0, 0, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'rotateY(-10deg) rotateX(5deg)';
              e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.4)';
            }}
          />
          <div style={{ 
            textAlign: 'center', 
            width: '100%',
            borderRadius: '15px', 
            backgroundColor: '#2d145a', 
            padding: '15px'
          }}>
            <iframe 
              width="100%" 
              height="500px" // Increased height for the video
              src="https://www.youtube.com/embed/3jPFr94OxXY?autoplay=1&mute=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ borderRadius: '15px', marginBottom: '15px' }}
            />
            <p style={{ fontStyle: 'italic', lineHeight: '1.6', color: '#ddd' }}>
              Hitori "Bocchi-chan" Gotoh is a lonely high school girl whose heart lies in her guitar. 
              One day, she meets Nijika Ijichi and joins 'Kessoku Band'. 
              After that, her daily life starts to change little by little.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BocchiTheRock;
