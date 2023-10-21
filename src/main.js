import img1 from './images/logo.svg'
const Main = () => {
  return (
    <section className='main scroll' id='Home'>
      <div className='navbar'>
        <div className='navbar-left'>
          <img src={img1} alt='logo' />
        </div>
        <div className='navbar-center'>
          <ul>
            <li>
              <a href='#Home' onClick={Hide}>
                Home
              </a>
            </li>
            <li>
              <a href='#About' onClick={Hide}>
                About
              </a>
            </li>
            <li>
              <a href='#Service' onClick={Hide}>
                Services
              </a>
            </li>
            <li>
              <a href='#Featured' onClick={Hide}>
                Featured
              </a>
            </li>
            <li>
              <a href='#Gallery' onClick={Hide}>
                Gallery
              </a>
            </li>
          </ul>
        </div>
        <div className='navbar-right'>
          <div className='icons'>
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
          <button className='toggle' onClick={btnToggle}>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
      </div>
      <div className='center'>
        <h1>CONTINUE EXPLORING</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          magnam tenetur corrupti dignissimos molestias eligendi!
        </p>
        <br />
        <a href='#Home'>EXPLORE TOURS</a>
      </div>
    </section>
  )
}

const btnToggle = () => {
  const navbarCenter = document.querySelector('.navbar-center')
  const navbar = document.querySelector('.navbar')
  navbarCenter.classList.toggle('toggle-active')
  if (navbarCenter.classList.contains('toggle-active')) {
    const x = navbarCenter.getBoundingClientRect().height + 70
    navbar.style.height = `${x}px`
  } else {
    navbar.style.height = '55px'
  }
}
const Hide = () => {
  const navbar = document.querySelector('.navbar')
  const navbarCenter = document.querySelector('.navbar-center')
  navbar.style.height = '55px'
  navbarCenter.classList.remove('toggle-active')
}
export default Main
