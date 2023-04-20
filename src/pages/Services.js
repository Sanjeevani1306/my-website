import React from 'react';
import ServiceCard from '../components/ServiceCard';
import mobDev from '../images/mobDev.jpg';
import webDevelopment from '../images/webDevelopment.jpg';
import webDesign from '../images/webDesign.jpg';
function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'We design beautiful and responsive websites that work on all devices.',
      image: webDesign,
      link: '/services/web-design'
    },
    {
      title: 'Web Development',
      description: 'We develop custom web applications that solve your business problems.',
      image: webDevelopment,
      link: '/services/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'We build mobile apps for iOS and Android that engage your users.',
      image: mobDev,
      link: '/services/mobile-app-development'
    }
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>Our Services</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '1rem' }}>
        {services.map(service => (
          <ServiceCard key={service.title} title={service.title} description={service.description} image={service.image} link={service.link} />
        ))}
      </div>
    </div>
  );
}

export default Services;
