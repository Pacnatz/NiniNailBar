import './About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Nini Nail Bar</h2>
            <div className="about-description">
              <p>
                Welcome to Nini Nail Bar, where luxury meets artistry. Since our establishment, 
                we have been dedicated to providing exceptional nail care services in an elegant 
                and refined atmosphere.
              </p>
              <p>
                Our team of expert nail technicians combines years of experience with the latest 
                techniques and premium products to deliver flawless results. We believe that 
                beautiful nails are an expression of personal style and confidence.
              </p>
              <p>
                Inspired by the sophistication of haute couture and the timeless elegance of 
                classic beauty, we create a sanctuary where every detail is carefully curated 
                for your comfort and satisfaction.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-item">
                <h3 className="feature-number">10+</h3>
                <p className="feature-label">Years Experience</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-number">5000+</h3>
                <p className="feature-label">Happy Clients</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-number">100%</h3>
                <p className="feature-label">Premium Products</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <span className="placeholder-text">Elegance & Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
