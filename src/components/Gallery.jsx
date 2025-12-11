import './Gallery.css';

function Gallery() {
  const galleryItems = [
    { id: 1, category: 'Manicure', color: '#FFE4E1' },
    { id: 2, category: 'Nail Art', color: '#F5E6E8' },
    { id: 3, category: 'Pedicure', color: '#E8DDD3' },
    { id: 4, category: 'Gel Nails', color: '#D4A5A5' },
    { id: 5, category: 'Extensions', color: '#FAF8F5' },
    { id: 6, category: 'Design', color: '#F0E5D8' },
    { id: 7, category: 'French Tips', color: '#FFE4E1' },
    { id: 8, category: 'Spa', color: '#E8DDD3' }
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore our portfolio of beautiful nail designs and transformations
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item" style={{ backgroundColor: item.color }}>
              <div className="gallery-overlay">
                <span className="gallery-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
