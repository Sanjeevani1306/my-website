import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import logo from '../images/logo.png';
import '../Footer.css'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={logo} alt="logo" style={{ height: '50px', marginRight: '1rem' }} />
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}><p>© 2023 Sanjeevani. All Rights Reserved.</p></p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
        <a href="https://www.instagram.com/travellingpandas_/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem', textDecoration: 'none' }}>
          <FaInstagram style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
