import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isWelcomePage = false, isAuthPage = false }) {
  return (
    <nav
      className={`navbar navbar-expand-lg shadow fixed-top ${isWelcomePage ? 'mx-4 px-4 py-2 rounded-pill mt-3' : 'w-100'}`}
      style={{
        backgroundColor: isWelcomePage ? "#fdf6ec" : "#6f4e37", // Different colors for welcome vs other pages
        zIndex: 1030,
        marginTop: isWelcomePage ? "1rem" : "0",
        padding: isWelcomePage ? "" : "0.5rem 1rem"
      }}
    >
      <Link 
        className="navbar-brand d-flex align-items-center fw-bold" 
        to="/"
        style={{ color: isWelcomePage ? "inherit" : "white" }}
      >
        Telecom IMS
      </Link>

      {/* For authentication pages, show only home link */}
      {isAuthPage ? (
        <div className="ms-auto">
          <Link 
            to="/" 
            className="btn btn-outline-light rounded-pill px-4"
            style={{ borderColor: "white", color: "white" }}
          >
            Home
          </Link>
        </div>
      ) : (
        <>
          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={isWelcomePage ? {} : { color: "white" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {isWelcomePage ? (
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-dark" href="#Welcome">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-dark" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-dark" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold text-dark" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link 
                    to="/" 
                    className="nav-link fw-semibold"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </li>
              </ul>
            )}

            {/* Right Side Buttons */}
            <div className="d-flex">
              <Link
                to="/login"
                className={`btn rounded-pill px-4 me-2 ${isWelcomePage ? 'btn-outline-dark' : 'btn-outline-light'}`}
                style={isWelcomePage ? {} : { borderColor: "white", color: "white" }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn rounded-pill px-4"
                style={{
                  backgroundColor: isWelcomePage ? "#d2b48c" : "#d2b48c",
                  color: "white",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}