import React from 'react'
import '../pagesComponets/allCSS/home.css'
import biglogo from '../allImages/biglogo.jpg'
import video1 from '../videos/video1.mp4'
import video2 from '../videos/video2.mp4'
import video3 from '../videos/video3.mp4'
const Home = () => {
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
        <video className="video1" controls autoplay muted  loop>
            <source src={video1} type="video/mp4"/>
          </video>
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
    
    </>
  )
}

export default Home