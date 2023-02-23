import email from './email.png'

export default function Button() {
  return (
    <a className='button' href="mailto: michael.brydges@edu.sait.ca">
      <img src={email} alt="email icon"></img>
      Email
    </a>
  );
}

