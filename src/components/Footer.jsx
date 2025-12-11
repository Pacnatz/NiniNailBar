import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Nini Nail Bar</h3>
            <p>Luxury Nail Care & Spa Experience</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Manicure</a></li>
                <li><a href="#services">Pedicure</a></li>
                <li><a href="#services">Nail Art</a></li>
                <li><a href="#services">Extensions</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>123 Luxury Avenue</li>
                <li>Beverly Hills, CA 90210</li>
                <li>(310) 555-NINI</li>
                <li>info@nininailbar.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nini Nail Bar. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Pinterest">PIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
