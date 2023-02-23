import profileImg from './profileImg.png'

export default function Info() {
  return (
    <div className='info--container'>
      <img className='profile--img' src={profileImg} alt="headshot"></img>
      <h2>Michael Brydges</h2>
      <p className="title">Full Stack Developer</p>
      <a href="https://www.michaelbrydges.com"  target="_blank" rel="noopener noreferrer" className="text--alt">michaelbrydges.com</a>
    </div>
  );
}

