'use client';
import React, { useState, useEffect } from 'react';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [animateCard, setAnimateCard] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCard(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const cardStyles = {
    transform: animateCard ? 'translateY(0)' : 'translateY(-50px)',
    opacity: animateCard ? 1 : 0,
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)' // Semi-transparent background for readability
  };

  return (
    <>
      <div style={{ 
        position: 'relative', 
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <video 
          src="/assets/video/background.mp4" // Replace with the path to your video file
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
        <div className="container d-flex justify-content-center align-items-center" style={{ zIndex: 1 }}>
          <div className="card" style={cardStyles}>
            <h5 className="card-header text-center" style={{ fontWeight: 'bold' }}>Sign Up</h5>
            <div className="card-body">
              <form className="row g-3">
                <div className="mb-2">
                  <label htmlFor="inputUsername" className="form-label">Username</label>
                  <div className="input-group">
                    <div className="input-group-text" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
                      <i className="bi bi-person-fill"></i>
                    </div>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="inputUsername" 
                      placeholder="Username" 
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <div className="input-group">
                    <div className="input-group-text" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="inputEmail" 
                      placeholder="Email" 
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <div className="input-group">
                    <div className="input-group-text" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
                      <i className="bi bi-lock-fill"></i>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={togglePasswordVisibility}
                      style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
                    >
                      <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                    </button>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                  <div className="input-group">
                    <div className="input-group-text" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}>
                      <i className="bi bi-lock-fill"></i>
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="form-control"
                      id="inputConfirmPassword"
                      placeholder="Confirm Password"
                      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={toggleConfirmPasswordVisibility}
                      style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
                    >
                      <i className={`bi ${showConfirmPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                    </button>
                  </div>
                </div>
                <p className="text">
                  Already have an account? <a href="/signin" className="text-primary">Sign In</a>
                </p>
                <div className="col-12 d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ 
                      transition: 'background-color 0.3s ease, transform 0.3s ease', 
                      transform: 'scale(1)' 
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
