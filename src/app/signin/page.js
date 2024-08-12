'use client';
import { useState } from 'react';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div style={{ 
        background: 'linear-gradient(to right, #B2A4FF, #FDF7C3)', 
        padding: '20px', 
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ width: '100%', maxWidth: '400px' }}>
          <div className="card" style={{
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Enhanced shadow for card
            borderRadius: '12px', // Slightly rounded corners
            padding: '20px',
            width: '100%'
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
                    <i className="bi bi-key-fill"></i>
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
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Remember me
                  </label>
                </div>
              </div>
              <br />
              <div className="col-12 d-grid gap-2">
                <button type="submit" className="btn btn-success">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
