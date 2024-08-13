'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function SignUp() {
  // States for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for card animation
  const [animateCard, setAnimateCard] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Use effect to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCard(true);
    }, 100); // Small delay to ensure animation starts after render

    return () => clearTimeout(timer);
  }, []);

  // Styles for the card
  const cardStyles = {
    transform: animateCard ? 'translateY(0)' : 'translateY(-50px)',
    opacity: animateCard ? 1 : 0,
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for card
    borderRadius: '8px', // Rounded corners
    padding: '20px', // Padding inside the card
    width: '100%', // Full width within the container
    maxWidth: '500px' // Max width for the card
  };

  return (
    <>
      <div style={{ 
        background: 'linear-gradient(to right, #ADA2FF, #F45050)', 
        padding: '20px', 
        minHeight: '100vh'
      }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div 
            className="card" 
            style={cardStyles}
          >
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
                <p className="text-center">
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
