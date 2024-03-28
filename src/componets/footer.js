import React from 'react'
import '../componets/footer.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faWallet, faWater, faForward, faArrowRight, faClockFour, faClock, faLocation, faMapLocation, faMapLocationDot, faLocationArrow, faLocationPin, faLocationPinLock, faLocationCrosshairs, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faWhatsapp, faTwitter, faInstagram,  } from '@fortawesome/free-brands-svg-icons';
import footerLogo from '../allicons/footerLogo.jpg'



const Footer = () => {
  return (
    
    <footer className='footer-main'>
        <div className='big-footer'>
           <div className='big-footer-sub'>
           <a href="index.html">
               <img className='big-footer-sub-img'   src={footerLogo} alt="Awesome Footer Logo"/>
           </a>
           <p className='big-footer-sub-p'>Arrow Centre (U) LTD a locally owned and registered company
                 specializing in the importation, distribution, selling of
                 high quality and world class tyres, tubes, flaps and other tyre accessories
                 like tyre repair seals, valves, tyre O rings, tyre repair kits,...
            </p>
             <a className="thm-btn" href="services.html">learn More <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />   <i className="fa fa-Arrowtyres-right"></i></a>
           </div>
           <div className='big-footer-sub'>
           <h3>Latest Blog Post</h3>
                       <a className='big-footer-sub-p' href="blog-grid.html">
                         <p className='big-footer-sub-p' >A wheel alignment is a mechanical adjustment of your suspension system (th...</p>
                       </a>
                        <p className='big-footer-sub-pp' ><i className="fa fa-clock-o" ></i> <span>  </span> <FontAwesomeIcon icon={faClock}/> abut a year ago</p>
                           <hr className='big-footer-sub-hr'></hr>
                        <a className='big-footer-sub-p'  href="Tyre_Rotation.html">The key reason for rotating your tyres is to make sure that the tread on a...</a>
                        <p  className='big-footer-sub-pp'><i className="fa fa-clock-o" ></i> <span>  </span> <FontAwesomeIcon icon={faClock}/>  abut a year ago</p>
           </div>
           <div className='big-footer-sub map'>
           <h3>Get In Contact</h3>
                        <i className='big-footer-sub-li' ><span> </span><FontAwesomeIcon icon={faLocationPin}/> Plot 6, Bombo Road Kampala </i>
                        <i className='big-footer-sub-li'  ><span> </span> <FontAwesomeIcon icon={faLocationPin}/> Plot 91, Jinja Road </i>
                        <i className='big-footer-sub-li' ><span> </span> <FontAwesomeIcon icon={faLocationPin}/> Plot 50-52 Sixth Street </i>
                        <i className='big-footer-sub-li'><span> </span> <FontAwesomeIcon icon={faPhone}/> Phone +256-759-868072</i> 
                         <i className='big-footer-sub-li' ><span> </span> <FontAwesomeIcon icon={faEnvelope}/> arrowcentre@yahoo.com</i> 
                         <i className='big-footer-sub-li'><span> </span> <FontAwesomeIcon icon={faEnvelope}/> arrowcentreuganda@gmail.com</i> 
                         
                        <i className='big-footer-sub-li' ><span> </span> <FontAwesomeIcon icon={faWhatsapp}/> +256-759-868072</i>
                        <br/>
                        
                        <p ><a className='thm-btn-map'  href="https://www.google.com/maps/place/Arrow+Centre+Uganda/@0.320406,32.573579,15z/data=!4m6!3m5!1s0x177dbb7b70ed2139:0x4a060216652cd65f!8m2!3d0.3204062!4d32.5735787!16s%2Fg%2F1tz0k222?hl=en&entry=ttu">Find Us On Map</a></p>
           </div>
           <div className='big-footer-sub'>
              <h3>Working Hours</h3>
                        <li className='big-footer-sub-li'>Monday: <span>8:30 am - 6:00 pm</span></li>
                        <li className='big-footer-sub-li'>Tuesday: <span>8:30 am - 6:00 pm</span></li>
                        <li className='big-footer-sub-li'>Wednesday: <span>8:30 am - 6:00 pm</span></li>
                        <li className='big-footer-sub-li'>Thursday: <span>8:30 am - 6:00 pm</span></li>
                        <li className='big-footer-sub-li'>Friday: <span>8:30 am - 6:00 pm</span></li>
                        <li className='big-footer-sub-li'>Saturday: <span>8:30 am - 5.30 pm</span></li>
                        <li className='big-footer-sub-li'>Sunday: <span className="closed">Closed</span></li>
                    
           </div>
        </div>
        <div className='small-footer'>
            <div className='small-footer-sub'>
            <p> ©Copyright 2020 - 2024 All Rights Reserved by <a className='ltd' href="index.html">Arrow Centre (Uganda) LTD</a> </p>
            </div>
            <div className='small-footer-sub'>
              <p>
              <FontAwesomeIcon icon={faYoutube} className='small-footer-sub-icon'/>
              <span className='small-footer-sub-span'/>
              <FontAwesomeIcon icon={faTwitter} className='small-footer-sub-icon'/>
              <span className='small-footer-sub-span'/>
              <FontAwesomeIcon icon={faFacebook} className='small-footer-sub-icon'/>
              <span className='small-footer-sub-span'/>
              <FontAwesomeIcon icon={faInstagram} className='small-footer-sub-icon'/>
              <span className='small-footer-sub-span'/>
              <FontAwesomeIcon icon={faWhatsapp} className='small-footer-sub-icon'/>
              <span className='small-footer-sub-span'/>
              <FontAwesomeIcon icon={faPhone} className='small-footer-sub-icon'/>
              <span className='small-footer-sub-span'/>
              <FontAwesomeIcon icon={faEnvelope} className='small-footer-sub-icon'/>
              </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer