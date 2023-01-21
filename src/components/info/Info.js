import React from 'react'
import './info.css'
import profileImg from './profileImg.jpg'
import Button from './button/Button';

export default function Info() {
  return (
    <div className="info">
      <img src={profileImg} alt="headshot"></img>
      <h2>Michael Brydges</h2>
      <p className="title">Full Stack Developer</p>
      <p>michaelbrydges.com</p>
      <div className='button-container'>
        <Button />
      </div>
      
    </div>
  );
}

