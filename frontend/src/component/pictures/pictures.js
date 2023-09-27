import React from 'react'
import "../pictures/pictures.css"
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export const Pictures = () => {
  const carousel = {

  }
  return (
    <div>

      <h1 className='picture'> DIFFERENT DESIGNS OF YOUR BEDROOMS</h1>

      <div className='carouselone'>
        <Carousel showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={800} // Change the interval to control autoplay speed
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div> <img className='c-img' src='./Assets/bedroomone.jpg' alt='1' /></div>
          <div><img className='c-img' src='./Assets/bedroomtwo.jpg' alt='2' /></div>
          <div><img className='c-img' src='./Assets/bedroomthree.jpg' alt='3' /></div>
          <div><img className='c-img' src='./Assets/bedroomfour.jpg' alt='4' /></div>
          <div><img className='c-img' src='./Assets/bedroomfive.jpg' alt='5' /></div>
          <div><img className='c-img' src='./Assets/bedroom.jpg' alt='6' /></div>
        </Carousel>
      </div>
      <div>

        <h1 className='picture1'>DIFFERENT DESIGNS OF YOUR KITCHENS</h1>

        <div className='carouseltwo'>
          <Carousel showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={900} // Change the interval to control autoplay speed
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            className='carousel'>
            <div> <img className='c-img' src='./Assets/kitchen.jpg' alt='1' /></div>
            <div><img className='c-img' src='./Assets/kitchenone.jpg' alt='2' /></div>
            <div><img className='c-img' src='./Assets/kitchentwo.jpg' alt='3' /></div>
            <div><img className='c-img' src='./Assets/kitchenthree.jpg' alt='4' /></div>
            <div><img className='c-img' src='./Assets/kitchenfour.jpg' alt='5' /></div>
            <div><img className='c-img' src='./Assets/kitchenfive.jpg' alt='6' /></div>
          </Carousel>
          <h1 className='picture2'>DIFFERENT DESIGNS OF YOUR HALLS</h1>

          <div className='carouselthree'>
            <Carousel showArrows={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={1000} // Change the interval to control autoplay speed
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              className='carousel'>
              <div> <img className='c-img' src='./Assets/hall.jpg' alt='1' /></div>
              <div><img className='c-img' src='./Assets/hallone.jpg' alt='2' /></div>
              <div><img className='c-img' src='./Assets/halltwo.jpg' alt='3' /></div>
              <div><img className='c-img' src='./Assets/hallthree.jpg' alt='4' /></div>
              <div><img className='c-img' src='./Assets/hallfour.jpg' alt='5' /></div>
              <div><img className='c-img' src='./Assets/hallfive.jpg' alt='6' /></div>
            </Carousel>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Pictures;