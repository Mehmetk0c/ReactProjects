import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Navbar from './components/Header/Navbar/Navbar';
import Member from './components/Members/Member'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <div className='bg-circle1'></div>
    <div className='bg-circle2'></div>
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Member></Member>
      <Contact></Contact>
    </>
  );
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
