import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
import img5 from './images/tour-5.jpeg'
import img6 from './images/tour-6.jpeg'
export const Review = () => {
  return (
    <div className='review scroll' id='Gallery'>
      <form className='form'>
        <div className='form-items'>
          <h1>Want Latest Tour Info And Updates ?</h1>
          <div className='div-input'>
            <input type='text' placeholder='Your Email' className='input' />
            <button className='submit'>Submit</button>
          </div>
        </div>
        <p>Sign up for newsletter and stay up to date</p>
      </form>
      <div className='review-items'>
        <div className='review-single-item'>
          <img src={img1} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img2} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img3} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img4} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img5} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img6} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img1} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='review-single-item'>
          <img src={img2} className='review-img' alt='' />
          <div className='search'>
            <i className='fa-sharp fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
      </div>
    </div>
  )
}
