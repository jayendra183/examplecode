import React from "react"
import { ArrowRight, FileText, Lock, Shield, Cookie } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="brand-container">
            <div className="logo-wrapper">
              <img src="/good1.svg" alt="Hize Logo" className="footer-logo" />
              {/* <span className="brand-name">Connectify</span> */}
            </div>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://instagram.com" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>
          </div>
          <div className="legal-links">
            <a href="/legal-hub">
              <FileText size={20} />
              Legal Hub
            </a>
            <a href="/privacy">
              <Shield size={20} />
              Privacy Statement
            </a>
            <a href="/cookies">
              <Cookie size={20} />
              Cookie Policy
            </a>
            <a href="/terms">
              <Lock size={20} />
              Terms and Conditions
            </a>
          </div>
          <p className="copyright">© All Rights Reserved 2025 Web design by Bangluxor</p>
        </div>

        <div className="footer-right">
          <h2 className="form-title">Request more information</h2>
          <form className="contact-form">
            <div className="form-field">
              <input type="text" id="fullName" className="form-input" required />
              <label htmlFor="fullName">Full Name</label>
            </div>
            <div className="form-row">
              <div className="form-field">
                <input type="email" id="email" className="form-input" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-field">
                <input type="tel" id="phone" className="form-input" required />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="form-field">
              <input type="text" id="subject" className="form-input" required />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-field">
              <textarea id="message" className="form-input message" required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="privacy-checkbox">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">Accept the privacy policy</label>
            </div>
            <button type="submit" className="submit-btn">
              Send my request
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer