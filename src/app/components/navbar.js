'use client'

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredNavbar, setHoveredNavbar] = useState(false);

  const navbarStyle = {
    backgroundColor: hoveredNavbar ? '#FFFFFFCC' : '#FFFFFF80',
    backdropFilter: 'blur(10px)',
    border: 'none',
    borderRadius: '0',
    boxShadow: 'none',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  };

  const linkStyle = (link) => ({
    color: hoveredLink === link ? '#007bff' : '#000',
    backgroundColor: hoveredLink === link ? 'rgba(0, 123, 255, 0.1)' : 'transparent',
    borderRadius: '5px',
    transition: 'color 0.3s ease, background-color 0.3s ease',
  });

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={navbarStyle}
        onMouseEnter={() => setHoveredNavbar(true)}
        onMouseLeave={() => setHoveredNavbar(false)}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/img/logo.png"
              alt="..."
              width={197}
              height={40}
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2 fs-5 mt-2"
                  aria-current="page"
                  href="/"
                  style={linkStyle('home')}
                  onMouseEnter={() => setHoveredLink('home')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <i className="bi bi-house-fill"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2 fs-5 mt-2"
                  href="/about"
                  style={linkStyle('about')}
                  onMouseEnter={() => setHoveredLink('about')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <i className="bi bi-exclamation-circle-fill"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2 fs-5 mt-2"
                  href="/service"
                  style={linkStyle('service')}
                  onMouseEnter={() => setHoveredLink('service')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <i className="bi bi-briefcase-fill"></i> Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2 fs-5 mt-2"
                  href="/contact"
                  style={linkStyle('contact')}
                  onMouseEnter={() => setHoveredLink('contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <i className="bi bi-telephone-fill"></i> Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link
                href="/signup"
                className="btn btn-outline-primary mx-2 fs-5"
                style={{ transition: 'background-color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="btn btn-outline-success mx-2 fs-5"
                style={{ transition: 'background-color 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
