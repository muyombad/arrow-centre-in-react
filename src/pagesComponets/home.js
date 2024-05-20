
import '../pagesComponets/allCSS/home.css'
import biglogo from '../allImages/biglogo.jpg'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faWallet, faWater, } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';
import  Car  from '../allicons/Car.png';
import carRepair from '../allicons/carRepair.png'
import medal from '../allicons/medal.png'
import BFlogo from '../allImages/BFlogo.jpg'
import comforserlogo2 from '../allImages/comforserlogo2.jpg'
import gtlogo from '../allImages/gtlogo.jpg'
import marcherlogo2 from '../allImages/marcherlogo2.jpg'
import newBland from '../allImages/newBland.jpg'
import tc from '../allImages/tc.jpg'
import doc from '../allicons/doc.svg'
import comfoser from '../allImages/tyres/comfoser.jpg'
import React, { useRef, useEffect,useState } from 'react';
import Shopslid from './shopSlid'
import { ReactComponent as MyIcon } from '../allicons/doc.svg';
import { Link } from 'react-router-dom'
import Services from './serviceSection'



const Home = () => {

  const imgShopRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Scroll the images to the left by 100px every 1 second
      setScrollPos(prevPos => prevPos + 300);
    }, 3500);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imgShopRef.current) {
      imgShopRef.current.scrollTo({
        left: scrollPos,
        behavior: 'smooth' // Use smooth scrolling behavior
      });
    }
  }, [scrollPos]);


  return (
    <>
    {/* first image section with the backgrount of yellow------------- */}
    <section className='fast-section'>
       <div className="my_imag">
          <img className='image-section'src={biglogo} alt=""/>
       </div>
    </section>

    {/* second section for the videos auto play ------------------*/}
    <div className="video-section">
    <div className="video-column">
        <video className="video1" src={video1} controls autoplay muted > </video>
        {/* Embed your video here */}
        <div  className="bottom-text"><h2 className="heder" >BFGoodrich <br/></h2><h3>Superior performance, durability, and traction for exceptional driving experiences.</h3></div>
    </div>

    <div className="video-column">
        <video className="video1"  controls autoplay muted  loop>
            <source src={video2} type="video/mp4"/>
          </video>
        {/* Embed your video here */}
        <div  className="bottom-text"><h2 className="heder" >Comforser <br/></h2><h3>Comfortable rides with reliable performance and lasting durability.</h3></div>
    </div>

    <div className="video-column">
        <video className="video1" controls autoplay muted  loop>
            <source src={video3} type="video/mp4"/>
          </video>
        {/* Embed your video here */}
        <div  className="bottom-text"><h2 className="heder" >TECHKING<br/></h2><h3>Cutting-edge technology, robust performance, and dependable traction for all terrains.</h3></div>
    </div>
  </div>
  {/* Therd section for qulity---------------------------------------------------- */}
  <section  class="welcome-area-v2 home4 " >
    <div class="container">
        <div class="row">
            
            <div  class="col-md-4">
                <div class="single-item">
                    <div class="icon-holder">
                        <span class="flaticon-medal"></span>    
                    </div>
                    <div class="text-holder">
                        <h3>Value For Your Money</h3>
                        <p>Firm on the ground, fine in your pocket</p></div>
                </div>
            </div> 
            
            
            <div class="col-md-4">
                <div class="single-item">
                    <div class="icon-holder">
                        <span class="flaticon-car-wheel"></span>    
                    </div>
                    <div class="text-holder">
                        <h3>HI-Quality Products</h3>
                        <p> More tough, More traction, More Durability</p>
                    </div>
                </div>
            </div> 
            
            <div class="col-md-4">
                <div class="single-item">
                    <div class="icon-holder">
                        <span className="flaticon-car-repair"></span>    
                    </div>
                    <div class="text-holder">
                        <h3>Safety & Reliability</h3>
                        <p>The Arrival is as important as the jouney.</p>
                    </div>
                </div>
            </div> 
            
    
        </div>
    </div>
</section>
{/* Fourth section for the bland logos ---------------------------------------------------- */}
<div className="container1">
    <div className="column1">
        <p className='bland-logo-p1' >BRAND PARTNERS </p>
        <hr/>
        <p className='bland-logo-p2' >Arrow Centre is a one-stop shop for the world's leading brands of tyres and batteries for all passenger cars, 4x4s, sports utility vehicles and commercial vehicles. The highest quality original brands - tyres such as MICHELIN, BF-Goodrich, TECHKING, MARCHER, Comforser, GT-RADIAL, .</p>
        <div className="movingContent">
            
            <img className='img-bland-logo' src={BFlogo}/>
            <span> . </span>

            <img className='img-bland-logo' src={comforserlogo2}/>
            <span> . </span>
            <img className='img-bland-logo' src={tc}/>
            <span> . </span>
            <img className='img-bland-logo' src={marcherlogo2}/>
            <span> . </span>
            <img className='img-bland-logo' src={gtlogo}/>
            <span> . </span>
            <img className='img-bland-logo'  src={newBland}/>
            <span> . </span>
            <img className='img-bland-logo' src={BFlogo}/>
            
        </div>
    </div>
    
</div>
{/*shop section ---------------------------------------- */}
<Shopslid/>
{/* term of use section */}

<section className="features-area">
            <div className="container">
                <div className="row">
                    {/* Start single features item */}
                    <div className="feature-item">
                        <div className="overlay over1" >
                            <div className="box" >
                                <div className="box-content">
                                    <Link to={'/faq'}> Read More</Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="icon-box">
                        
                            <span className="flaticon-document"></span>
                        </div>
                        <div className="text-box">
                            <h3>FAQ</h3>
                            <p>For the most enjoyable driving experience it’s important to replace worn tires.<br /> Optimum traction helps...</p>
                        </div>
                    </div>
                    {/* End single features item */}

                    {/* Start single features item */}
                    <div className="feature-item">
                        <div  className="overlay over2">
                          
                            <div className="box" >
                                <div className="box-content">
                                    <Link to={'/TermsOfUse'}>Read More</Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <span className="flaticon-calendar"></span>
                            
                        </div>
                        <div className="text-box">
                            <h3>TERMS OF USE</h3>
                            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Arrowcentre...</p>
                        </div>
                    </div>
                    {/* End single features item */}

                    {/* Start single features item */}
                    <div className="feature-item">
                        <div className="overlay over3">
                           
                            <div className="box" >
                                <div className="box-content">
                                    <Link to={'/privacyPolicy'}>Read More</Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="icon-box">
                            <span className="flaticon-car-repair"></span>
                        </div>
                        <div className="text-box">
                            <h3>PRIVACY POLICY</h3>
                            <p>This privacy policy sets out how Arrowcentre uses and protects any information that you provide Arrowcenter with when you...</p>
                        </div>
                    </div>
                    {/* End single features item */}
                </div>
            </div>
        </section>
        <Services/>
    </>
  )
}

export default Home