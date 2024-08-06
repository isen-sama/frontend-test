'use client'
import { useState } from "react";

export default function SighIn() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="container">
        <div>
          <div className="card">
            <h5 className="card-header text-center">Sign In</h5>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <div className="input-group">
                  <div className="input-group-text"><i className="bi bi-envelope-fill"></i></div>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <div className="input-group">
                  <div className="input-group-text"><i className="bi bi-key-fill"></i></div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    id="inputPassword"
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
      <br /><br /><br />
    </>
  );
}