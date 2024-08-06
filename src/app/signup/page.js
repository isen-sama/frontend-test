'use client'
import React, { useState } from 'react';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <h5 className="card-header text-center">Sign Up</h5>
          <div className="card-body">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <div className="input-group">
                  <div className="input-group-text"><i className="bi bi-envelope-fill"></i></div>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <div className="input-group">
                  <div className="input-group-text"><i className="bi bi-key-fill"></i></div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
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
                <label htmlFor="inputUsername" className="form-label">Username</label>
                <div className="input-group">
                  <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                  <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
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
              <div className="col-12 d-grid gap-2">
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </>
  );
}
