
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Navbar() {
// //   return (
// //     <nav>
// //       <ul>
// //         <li>
// //           <Link to="/">Home</Link>
// //         </li>
// //         <li>
// //           <Link to="/services">Services</Link>
// //         </li>
// //         <li>
// //           <Link to="/contact">Contact Us</Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React from 'react';
// import logo from '../logo.png';

// function Navbar() {
//   return (
//     <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', color: '#f8f8ff', padding: '1rem' }}>
//       <div>
//         <img src={logo} alt="Logo" height="50" />
//       </div>
//       <div>
//         <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
//           <li style={{ marginRight: '1rem' }}><a href="/">Home</a></li>
//           <li style={{ marginRight: '1rem' }}><a href="/services">Services</a></li>
//           <li><a href="/contact">Contact Us</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
      <div>
        <img src={logo} alt="Logo" height="50" />
        <span style={{ marginLeft: '35rem', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1rem', flex: 1, textAlign: 'center' }}>Sanjeevani's Company</span>

      </div>
      <div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0 }}>
          <li style={{ marginRight: '1rem' }}><a href="/" style={{ color: '#fff', fontWeight: 'bold' }}>Home</a></li>
          <li style={{ marginRight: '1rem' }}><a href="/services" style={{ color: '#fff', fontWeight: 'bold' }}>Services</a></li>
          <li><a href="/contact" style={{ color: '#fff', fontWeight: 'bold' }}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
