import React from 'react'
import profileImg from './profileImg.png'

export default function Info() {
  return (
    <div className='info--container'>
      <img className='profile--img' src={profileImg} alt="headshot"></img>
      <h2>Michael Brydges</h2>
      <p className="title">Front End Developer</p>
      <p className="text--alt">michaelbrydges.com</p>
    </div>
  );
}

