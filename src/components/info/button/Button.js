import React from 'react'
import './button.css'
import email from './email.png'

export default function Button() {
  return (
    <button>
      <img src={email} alt="email icon"></img>
      Email
    </button>
  );
}

