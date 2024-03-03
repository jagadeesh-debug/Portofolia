import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import { Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import About from './about';
import Menu from './p1'; 
import { CiMenuKebab } from "react-icons/ci";
import Project from './projects';
import Contact from './contact' 
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppContainer = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible); 
  };

  return (

    <React.StrictMode>
      <div className='h1'>
        <div className='h2'>
          <CiMenuKebab className='b2' onClick={handleMenuClick} />
          {menuVisible && <Menu />} 
        </div>
        <div className='pp'>
          <App />
         
        </div>
        <div classname='no'>
          <About />
          <Project/>
          <Contact/>
        </div>
      </div>
    </React.StrictMode>
       
  );
};

root.render(<AppContainer />);