import React from 'react'
import styles from "./css/Section6.module.css"
import Slider from "react-slick";


const Section5 = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
    
    
  };
  return (
    
    <div className={styles.superContainer}>
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </div>
      <div>
       <Slider {...settings} className={styles.container}>
      <div>
        <h3>1</h3>
        <p>um</p>
      </div>
      <div>
        <h3>2</h3>
        <p>dois</p>
      </div>
      <div>
        <h3>3</h3>
        <p>tres</p>
      </div>
      <div>
        <h3>4</h3>
        <p>quatro</p>
      </div>
      <div>
        <h3>5</h3>
        <p>cinco</p>
      </div>
      <div>
        <h3>6</h3>
        <p>seis</p>
      </div>
    </Slider>
    </div>
  </div>
  )
}

export default Section5