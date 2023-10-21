import img from './images/about.jpeg'
export const About = () => {
  return (
    <div className='about' id='About'>
      <h1 className='text'>
        ABOUT <span>US</span>
      </h1>
      <div className='about-center'>
        <div className='about-img-container'>
          <img src={img} alt='about' className='about-img' />
        </div>
        <div className='about-info scroll'>
          <h1>Explore The Difference</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            natus iusto deserunt velit earum obcaecati ab voluptate repudiandae
            cum laudantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            natus iusto deserunt velit earum obcaecati ab voluptate repudiandae
            cum laudantium?
          </p>
          <br />
          <a href='#'>READ MORE</a>
        </div>
      </div>
    </div>
  )
}
