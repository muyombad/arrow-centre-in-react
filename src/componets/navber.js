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
                <li>Home</li>
                <span/>
                <li>Shop</li>
                <span/>
                <div class="dropdown">
                  <li class="dropbtn">About Us▾</li>
                    <div class="dropdown-content">
                        <a href="#">About Us</a>
                        <hr/>
                        <a href="#">About Our Services</a>
                     </div>
                </div>
                <span/>
                <div class="dropdown">
                  <li class="dropbtn">More▾</li>
                    <div class="dropdown-content">
                        <a href="#">Tyre Size Calculatior</a>
                        <hr/>
                        <a href="#">Blog</a>
                        <hr/>
                        <a href="#">About Tyre sizes</a>
                     </div>
                </div>
                <span/>
                <li>Contact Us</li>
                <span/>
                <li>FAQs</li>
                <span/>
                <li>Feedback</li>
                <span/>
                <li><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
                   +256 414 236 699 / <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
                   +256 752 236 699
                 </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navber