import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " style={{backgroundColor: '#9cd1f8'}}>
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/top_logo_197x40.png" alt="..." width={197} height={40} className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-2 fs-5 mt-2"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item frontsize">
                <Link className="nav-link active mx-2 fs-5 mt-2" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown mx-2 fs-5 mt-2">
                <a className="nav-link dropdown-toggle" href="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Service
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/service">Service</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Bocchi_the_Rock!" target="_blank">Additional information</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2 fs-5 mt-2" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/signup" className="btn btn-outline-primary mx-2 fs-5">
                Sign Up
              </Link>
              <Link href="/signin" className="btn btn-outline-success mx-2 fs-5">
                Sigh In
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}