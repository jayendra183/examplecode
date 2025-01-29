import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Talent Management',
    image: '/images12.jpeg',
    color: '#008080'
  },
  {
    id: 2,
    title: 'Organizational Culture',
    image: '/images13.jpeg',
    color: '#008080'
  },
  {
    id: 3,
    title: 'Training',
    image: '/images14.jpeg',
    color: '#008080'
  },
  {
    id: 4,
    title: 'Employer Branding',
    image: '/images15.jpeg',
    color: '#008080'
  },
  {
    id: 5,
    title: 'Relationships and Commitment',
    image: '/images16.jpeg',
    color: '#008080'
  },
  {
    id: 6,
    title: 'Welfare',
    image: '/image11.jpeg',
    color: '#008080'
  }
];

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let interval;
    
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 5000); // Increased to 5 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const nextSlide = () => {
    setIsAutoScrolling(false);
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setIsAutoScrolling(false);
    setCurrentSlide((prev) => 
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % services.length;
      slides.push(services[index]);
    }
    return slides;
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our services</h2>
          <div className="navigation-buttons">
            <button 
              onClick={prevSlide} 
              className="nav-btn"
              aria-label="Previous services"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="nav-btn"
              aria-label="Next services"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="services-carousel">
          {getVisibleSlides().map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${index === 1 ? 'center-card' : ''}`}
            >
              <div className="service-image-container">
                <img 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title}
                  className="service-image" 
                />
              </div>
              <div className="service-content">
                <h3 
                  className="service-title"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>
                <button className="service-btn" aria-label={`Learn more about ${service.title}`}>
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;