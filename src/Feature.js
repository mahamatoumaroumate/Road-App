import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
export const Feature = () => {
  return (
    <div className='feature scoll' id='Featured'>
      <h1 className='text'>
        FEATURED <span>TOURS</span>
      </h1>
      <div className='feature-items'>
        <div className='feature-single-item'>
          <div className='img-container'>
            <img src={img1} alt='img1' className='feature-img' />
            <span>August 26th, 2020</span>
          </div>
          <div className='info-container'>
            <span className='days'>6 Days</span>
            <h3>Tibet Adventure</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <span className='left'>
              <i className='fas fa-map'></i> China
            </span>
            <span className='right'>From $2100</span>
          </div>
        </div>
        <div className='feature-single-item'>
          <div className='img-container'>
            <img src={img2} alt='img2' className='feature-img' />
            <span>October 1th, 2020</span>
          </div>
          <div className='info-container'>
            <span className='days'>11 Days</span>
            <h3>Best Of Java</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <span className='left'>
              <i className='fas fa-map'></i> Indonesia
            </span>
            <span className='right'>From $1400</span>
          </div>
        </div>
        <div className='feature-single-item'>
          <div className='img-container'>
            <img src={img3} alt='img3' className='feature-img' />
            <span>September 15th, 2020</span>
          </div>
          <div className='info-container'>
            <span className='days'>8 Days</span>
            <h3>Explore Hong Kon</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <span className='left'>
              <i className='fas fa-map'></i> Hong Kong
            </span>
            <span className='right'>From $5000</span>
          </div>
        </div>
        <div className='feature-single-item'>
          <div className='img-container'>
            <img src={img4} alt='img4' className='feature-img' />
            <span>December 5th, 2019</span>
          </div>
          <div className='info-container'>
            <span className='days'>20 Days</span>
            <h3>Kenya Highlights</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <span className='left'>
              <i className='fas fa-map'></i> Kenya
            </span>
            <span className='right'>From $3300</span>
          </div>
        </div>
      </div>
      <br />
      <div className='all'>
        <a href='#'>ALL TOURS</a>
      </div>
    </div>
  )
}
