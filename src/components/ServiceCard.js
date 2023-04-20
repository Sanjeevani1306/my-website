
import React from 'react';

function ServiceCard({ title, description, image, link }) {
  return (
    <div style={{ backgroundColor: '#fff', boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)', borderRadius: '4px', overflow: 'hidden', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', transition: 'transform 0.5s' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0' }}>{title}</h3>
        <p style={{ color: '#888' }}>{description}</p>
        <a href={link} style={{ color: '#333', fontWeight: 'bold' }}>Learn more</a>
      </div>
      <style>{`
        img:hover {
          transform: rotate(-5deg) scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default ServiceCard;
