import React from 'react'
import Slider from "react-slick";
import styles from './css/Carrosel.module.css'
import alfa_engenharia from './img/svgLogo/alfa_engenharia.svg'
import amorim_coutinho from './img/svgLogo/amorim_coutinho.svg'
import ana_neri from './img/svgLogo/ana_neri.svg'
import araujo_transportes from './img/svgLogo/araujo_transportes.svg'
import atlantica from './img/svgLogo/atlantica.svg'
import caema from './img/svgLogo/caema.svg'
import carrara from './img/svgLogo/carrara.svg'
import cartorioItinga from './img/svgLogo/cartorioItinga.svg'
import casa_sertaneja from './img/svgLogo/casa_sertaneja.svg'
import caxias_shopping from './img/svgLogo/caxias_shopping.svg'
import celpa from './img/svgLogo/celpa.svg'
import centro_medico_mauricio_carvalho from './img/svgLogo/centro-medico-mauricio-carvalho.svg'





const carrosel = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  
  return (
    <div className={styles.superContainer}>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />        
        <h1>Nossos Clientes</h1>
    <Slider {...settings} className={styles.container}>
      <div>
        <img src={alfa_engenharia} alt="" />
      </div>
      <div>
        <img src={amorim_coutinho} alt="" />
      </div>
      <div>
        <img src={ana_neri} alt="" />
      </div>
      <div>
        <img src={araujo_transportes} alt="" />
      </div>
      <div>
        <img src={atlantica} alt="" />
      </div>
      <div>
        <img src={caema} alt="" />
      </div>
      <div>
        <img src={carrara} alt="" />
      </div>
      <div>
        <img src={cartorioItinga} alt="" />
      </div>
      <div>
        <img src={casa_sertaneja} alt="" />
      </div>
      <div>
        <img src={caxias_shopping} alt="" />
      </div>
      <div>
        <img src={celpa} alt="" />
      </div>
      <div>
        <img src={centro_medico_mauricio_carvalho} alt="" />
      </div>
    </Slider>
  </div>
  )
}

export default carrosel