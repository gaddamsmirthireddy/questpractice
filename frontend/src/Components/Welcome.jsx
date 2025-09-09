import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
export default function Welcome() {
  const videoId = "sQ22pm-xvrE";

  return (
    <div className="position-relative">
      {/* Background Video Container with Overlay */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -2 }}>
        {/* Responsive YouTube Embed */}
        <div 
          className="position-relative"
          style={{
            paddingBottom: '56.25%', 
            height: 0,
            overflow: 'hidden'
          }}
        >
          <iframe
            className="position-absolute top-0 start-0 w-100 h-100"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&fs=0`}
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; accelerometer; gyroscope"
            style={{ objectFit: "cover" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: "rgba(0,0,0,0.6)",
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)"
          }}
        ></div>
      </div>

      {/* Navbar - Now placed outside the sections */}
      <Navbar isWelcomePage={true} />

      {/* Main Content with Scroll Sections */}
      <div className="position-relative" style={{ zIndex: 1, paddingTop: '100px' }}>
        {/* Hero Section */}
        <section id="Welcome" className="vh-100 d-flex align-items-center justify-content-center text-center text-white">
          <div className="container">
            <motion.h1
              className="fw-bold mb-3 display-2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to <br /> Telecom Inventory Management System
            </motion.h1>
            <motion.p
              className="text-light mb-4 lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Manage telecom products, suppliers, and stock levels — all in one place.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link to="/signup" className="btn btn-light px-4 py-2 rounded-pill me-3">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-outline-light px-4 py-2 rounded-pill">
                Login
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 text-white">
          <div className="container">
            <h2 className="display-4 mb-5">✨ Powerful Features</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="p-4 rounded bg-dark bg-opacity-50 h-100">
                  <h3>Inventory Tracking</h3>
                  <p>Real-time tracking of all telecom products and components.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="p-4 rounded bg-dark bg-opacity-50 h-100">
                  <h3>Supplier Management</h3>
                  <p>Manage all your suppliers and purchase orders in one place.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="p-4 rounded bg-dark bg-opacity-50 h-100">
                  <h3>Reporting & Analytics</h3>
                  <p>Generate detailed reports and gain insights into your inventory.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="vh-100 d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 text-white">
          <div className="container">
            <h2 className="display-4 mb-5">ℹ️ About Our System</h2>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <p className="lead">
                  Our Telecom Inventory Management System provides comprehensive solutions 
                  for managing telecom infrastructure, components, and equipment. Designed 
                  for reliability and efficiency, our platform helps businesses of all sizes 
                  optimize their inventory processes.
                </p>
                <p className="lead">
                  With intuitive controls and powerful analytics, you'll have complete 
                  visibility over your telecom assets and can make data-driven decisions 
                  to improve operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="vh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 text-white">
          <div className="container">
            <h2 className="display-4 mb-5">📩 Contact Us</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form>
                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control form-control-lg bg-dark text-white border-secondary" 
                      placeholder="Your Name"
                      style={{color: 'white', '::placeholder': {color: 'white'}}}
                    />
                  </div>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control form-control-lg bg-dark text-white border-secondary" 
                      placeholder="Your Email"
                      style={{color: 'white', '::placeholder': {color: 'white'}}}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea 
                      className="form-control form-control-lg bg-dark text-white border-secondary" 
                      rows="5" 
                      placeholder="Your Message"
                      style={{color: 'white', '::placeholder': {color: 'white'}}}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-light btn-lg w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}