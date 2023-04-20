
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/login" element={<Login/>}/>
//           <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
//           <Route path="*" element={<NotFound/>}/>
//         </Routes>