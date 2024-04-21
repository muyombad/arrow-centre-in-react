import React from 'react'
import '../componets/navber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faWallet, faWater, } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <nav>
        <div>
            <ul>
                <Link className='nav-li' to={'/'}>Home</Link>
                <span className='span01'/>
                <Link className='nav-li' to={'/Shop'}>Shop</Link>
                <span className='span01'/>
                <div class="dropdown">
                  <li class="dropbtn nav-li" >About Us▾</li>
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
                <Link className='nav-li'>Contact Us</Link>
                <span className='span01'/>
                <Link className='nav-li'>FAQs</Link>
                <span className='span01'/>
                <Link className='nav-li'>Feedback</Link>
                <span className='span01'/>
                <Link className='nav-li'><FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' />
                   +256 414 236 699 / <FontAwesomeIcon icon={faPhone} className='phone-icon'/>
                   +256 752 236 699
                 </Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navber