import React from 'react'
import '../componets/navber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faWallet, faWater, } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
const Navber = () => {
  return (
    <nav>
        <div>
            <ul>
                <li className='nav-li'>Home</li>
                <span className='span01'/>
                <li className='nav-li'>Shop</li>
                <span className='span01'/>
                <div class="dropdown">
                  <li class="dropbtn nav-li">About Us▾</li>
                    <div class="dropdown-content">
                        <a href="#">About Us</a>
                        <hr className='nav-hr'/>
                        <a href="#">About Our Services</a>
                     </div>
                </div>
                <span className='span01'/>
                <div class="dropdown">
                  <li class="dropbtn nav-li">More▾</li>
                    <div class="dropdown-content">
                        <a href="#">Tyre Size Calculatior</a>
                        <hr className='nav-hr'/>
                        <a href="#">Blog</a>
                        <hr className='nav-hr'/>
                        <a href="#">About Tyre sizes</a>
                     </div>
                </div>
                <span className='span01'/>
                <li className='nav-li'>Contact Us</li>
                <span className='span01'/>
                <li className='nav-li'>FAQs</li>
                <span className='span01'/>
                <li className='nav-li'>Feedback</li>
                <span className='span01'/>
                <li className='nav-li'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
                   +256 414 236 699 / <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
                   +256 752 236 699
                 </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navber