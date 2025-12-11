import './Hero.css';

function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Nini Nail Bar</h1>
        <p className="hero-subtitle">Luxury Nail Care & Spa Experience</p>
        <p className="hero-description">
          Where elegance meets perfection. Indulge in premium nail services 
          in a serene and sophisticated atmosphere.
        </p>
        <button className="btn-primary" onClick={scrollToBooking}>
          Book Appointment
        </button>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
