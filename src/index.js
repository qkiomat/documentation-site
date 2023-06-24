import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/header/Header.css';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import Slidebar from './pages/sidebar/Slidebar';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header />
    <Main />
    <Slidebar />
    <Footer />
  </div>
);

