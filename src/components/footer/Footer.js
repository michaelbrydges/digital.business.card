import React from "react";
import linkedin from './linkedin.png';
import github from './github.png';

export default function Footer() {
  return (
    <footer>
      <div className="link--container">
        <a href="https://www.linkedin.com/in/michael-brydges/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"></img></a>
        <a href="https://github.com/michaelbrydges" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"></img></a>
      </div>
    </footer>
  )
}

