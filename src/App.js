import './App.css';
import Icons from './icons'
import React from 'react';
import Image from './port.jpg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
//import menuu from './menu';
function App() {
  const [text] = useTypewriter({
    words: ['a STUDENT', 'an IDIOT'],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 200
  });
  return (
    <div style={{height:'100vh'}} >
    <div className='f'>
    <h1 style={{ color: 'grey', textAlign: 'center' }}>JAGADEESH</h1>
    <img className='d'src={Image} alt='' style={{ height: '10%', width: '10%',borderRadius:'100%',}} />
    <h1 style={{
      color: 'black',
      textAlign: 'center',
    }}>I am <span style={{ color: 'green' }}>{text}</span>
      <span ><Cursor cursorStyle='>' />
      </span></h1>
    <Icons />
  </div>
  </div>
  
  );
}

export default App;
