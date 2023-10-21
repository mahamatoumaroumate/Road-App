export const Foot = () => {
  return (
    <div className='footer scroll'>
      <ul>
        <li>
          <a href='#Home' id='Home'>
            Home
          </a>
        </li>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Service'>Service</a>
        </li>
        <li>
          <a href='#Featured'>Featured</a>
        </li>
        <li>
          <a href='#Gallery'>Gallery</a>
        </li>
      </ul>
      <div className='footer-icons'>
        <a href='#'>
          <i className='fa-brands fa-square-x-twitter'></i>
        </a>
        <a href='#'>
          <i className='fa-brands fa-facebook'></i>
        </a>
        <a href='#'>
          <i className='fab fa-squarespace'></i>
        </a>
      </div>
      <p>
        Copyright © Backroads Travel Tours Company 2023. All Rights Reserved
      </p>
    </div>
  )
}
