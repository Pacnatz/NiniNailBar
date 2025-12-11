import './Services.css';

function Services() {
  const services = [
    {
      title: 'Classic Manicure',
      description: 'Elegant nail shaping, cuticle care, and polish application for perfectly polished nails.',
      price: 'From $35'
    },
    {
      title: 'Gel Manicure',
      description: 'Long-lasting gel polish with a flawless finish that lasts up to 3 weeks.',
      price: 'From $55'
    },
    {
      title: 'Spa Pedicure',
      description: 'Luxurious foot treatment with exfoliation, massage, and polish for ultimate relaxation.',
      price: 'From $65'
    },
    {
      title: 'Nail Art',
      description: 'Custom nail designs and artistry to express your unique style and personality.',
      price: 'From $15'
    },
    {
      title: 'Acrylic Extensions',
      description: 'Beautiful nail extensions for added length and elegance with durable acrylic.',
      price: 'From $75'
    },
    {
      title: 'Dipping Powder',
      description: 'Healthy alternative with vibrant colors and long-lasting durability.',
      price: 'From $60'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Indulge in our premium nail care services, crafted with precision and care
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
