import '../pagesComponets/allCSS/shopSlid.css'
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import comfoser from '../allImages/tyres/comfoser.jpg'
import BFGoodrich from '../allImages/tyres/BFGOODRICH.jpg'
import GITI from '../allImages/tyres/GITI.jpg'
import MARCHER from '../allImages/tyres/MARCHER.jpg'
import MICHELIN from '../allImages/tyres/MICHELIN.jpg'
import TECHKING from '../allImages/tyres/TECHKING.jpg'
import GTRADIAL from '../allImages/tyres/GTRADIAL.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Shopslid() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
    <div className="slider-container">
    <div className='small-shop'>
      <h2 className='h2-shop'>Shop</h2>
      <div className='big-span-shop'>
        <button className="button span-shop1" onClick={previous}> ◄ </button>
        <button className="button span-shop2" onClick={next}> ► </button>
      </div>
    </div>
      
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        
        <div className='top'>
          <img className='slid-img' src={comfoser}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>COMFOSER</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
        <div className='top'>
          <img className='slid-img' src={MARCHER}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>MARCHER</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
        <div className='top'>
          <img className='slid-img' src={BFGoodrich}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>BFGOODRICH</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
        <div  className='top'>
          <img className='slid-img' src={GITI}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>TECHKING</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
        <div className='top'>
          <img className='slid-img' src={GTRADIAL}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>GTRADIAL</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
        <div className='top'>
          <img className='slid-img' src={TECHKING}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>TECHKING</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
        <div className='top'>
          <img className='slid-img' src={MICHELIN}></img>
          <h2 style={{alignContent:'center',textAlign:'center' }}>MICHELIN</h2>
          <div class="middle">
             <div className="text"><Link to={'/shop'} style={{color:'yellow'}}><FontAwesomeIcon icon={faEye} /></Link></div>
          </div>
        </div>
      </Slider>
    </div>
    </>
  );
}

export default Shopslid;