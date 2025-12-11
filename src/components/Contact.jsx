import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (this would typically connect to a backend)
    alert('Thank you for your booking request! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Experience luxury nail care. Reach out to us for bookings and inquiries
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Visit Us</h3>
            <div className="info-item">
              <h4>Address</h4>
              <p>123 Luxury Avenue<br/>Beverly Hills, CA 90210</p>
            </div>
            
            <div className="info-item">
              <h4>Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 6:00 PM</p>
            </div>
            
            <div className="info-item">
              <h4>Contact</h4>
              <p>Phone: (310) 555-NINI<br/>Email: info@nininailbar.com</p>
            </div>
            
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Pinterest">Pinterest</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            
            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="classic-manicure">Classic Manicure</option>
                <option value="gel-manicure">Gel Manicure</option>
                <option value="spa-pedicure">Spa Pedicure</option>
                <option value="nail-art">Nail Art</option>
                <option value="acrylic">Acrylic Extensions</option>
                <option value="dipping">Dipping Powder</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Notes"
                rows="4"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
