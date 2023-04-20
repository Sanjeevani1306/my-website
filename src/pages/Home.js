
import React from 'react';
import download from '../images/download.png';

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem' }}>
      <h1>Welcome to our IT Services Website!</h1>
      <p style={{ maxWidth: '800px', textAlign: 'center', margin: '1rem 0' }}>We provide a wide range of IT services to help businesses improve their productivity, efficiency, and profitability.</p>
      <img src={download} alt="Laptop" style={{ maxWidth: '800px', margin: '1rem 0' }} />
      <p style={{ maxWidth: '800px', textAlign: 'center', margin: '1rem 0' }}>Whether you need software development, website design, cloud computing, or IT consulting, we've got you covered.</p>
    </div>
  );
}

export default Home;