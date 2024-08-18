'use client';
import { useState, useEffect } from 'react';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setAnimateCard(true);
    }, 100); // Small delay to ensure animation starts after the component is rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ 
        position: 'relative', 
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff' // Ensures text is readable against the video
      }}>
        <video 
          src="/assets/video/background.mp4" // Replace with your video path
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(8px)',
            zIndex: -1
          }}
        />
        <div className="container d-flex justify-content-center align-items-center" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="card" style={{
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow for card
            borderRadius: '12px', // Slightly rounded corners
            padding: '20px',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for readability
            transform: animateCard ? 'translateY(0)' : 'translateY(-50px)',
            opacity: animateCard ? 1 : 0,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
          }}>
            <h5 className="card-header text-center" style={{ fontWeight: 'bold' }}>Sign In</h5>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <div className="input-group">
                  <div className="input-group-text" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="inputEmail" 
                    placeholder="Email" 
                    style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <div className="input-group">
                  <div className="input-group-text" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <i className="bi bi-lock-fill"></i>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                  </button>
                </div>
              </div>
              <div className="col-12">
                <p className="text-body-secondary">
                  Don't have an account?  <a href="/signup" className="text-primary">Sign Up</a>
                </p>
                <div className="col-12 d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{
                      transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
                      transform: 'scale(1)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
