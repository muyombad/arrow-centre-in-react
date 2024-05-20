import React from 'react';
import WheelAlignment1916f from '../allImages/services/WheelAlignment1916f.jpg';
import fitting180ac from '../allImages/services/fitting180ac.jpg';
import reale from '../allImages/services/reale.jpg';
import tyrelotaion1Tccd5 from '../allImages/services/tyrelotaion1Tccd5.jpg';
import tyresale1afeb from '../allImages/services/tyresale1afeb.jpg';
import wheelbalancer14ea3 from '../allImages/services/wheelbalancer14ea3.jpg';
import  '../pagesComponets/allCSS/servicesection.css' // Make sure to create a corresponding CSS file for styling

const Services = () => {
  const handleServiceClick = (id) => {
    localStorage.setItem('serviceID', id);
    localStorage.setItem('scrib', id);
    window.location.assign('#');
  };

  return (
    <section className="repair-service-area">
      <div className="container">
        <div className="sec-title text-center">
          <h1>Our Services</h1>
          <span className="border center"></span>
        </div>
        <div className="row">
          <div
            style={{ cursor: 'pointer' }}
            id="Basic Car Servicing"
            onClick={() => handleServiceClick('Basic Car Servicing')}
            className="col-md-4 rounded"
          >
            <div className="single-thumb">
              <div className="img-holder">
                <img
                  style={{ width: '110px', height: '100px' }}
                  src={reale}
                  alt="Basic Car Servicing Image"
                />
                <div className="overlay-style-one">
                  <div className="boxservice">
                    <div className="content">
                      <a href="real_estate.html">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-holderservice">
                <a href="real_estate.html">
                  <h3>Real Estate</h3>
                </a>
                <p>
                  The terms land, real estate, and real property are often used
                  interchangeably...
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: 'pointer' }}
            id="Stock Tyres"
            onClick={() => handleServiceClick('Stock Tyres')}
            className="col-md-4 rounded"
          >
            <div className="single-thumb">
              <div className="img-holder">
                <img
                  style={{ width: '110px', height: '100px' }}
                  src={tyresale1afeb}
                  alt="Stock Tyres Image"
                />
                <div className="overlay-style-one">
                  <div className="boxservice">
                    <div className="content">
                      <a href="Stock_Tyres.html">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-holderservice">
                <a href="Stock_Tyres.html">
                  <h3>Stock Tyres</h3>
                </a>
                <p>
                  Our Tyres are on more new vehicles in Uganda than any other
                  brand. It's that co...
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: 'pointer' }}
            id="Tyre Balancing"
            onClick={() => handleServiceClick('Tyre Balancing')}
            className="col-md-4 rounded"
          >
            <div className="single-thumb">
              <div className="img-holder">
                <img
                  style={{ width: '110px', height: '100px' }}
                  src={wheelbalancer14ea3}
                  alt="Tyre Balancing Image"
                />
                <div className="overlay-style-one">
                  <div className="boxservice">
                    <div className="content">
                      <a href="Tyre_Balancing.html">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-holderservice">
                <a href="Tyre_Balancing.html">
                  <h3>Tyre Balancing</h3>
                </a>
                <p>
                  Wheel balancing is the process of matching the weight of the
                  combined Tyre and w...
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: 'pointer' }}
            id="Tyre Fitting"
            onClick={() => handleServiceClick('Tyre Fitting')}
            className="col-md-4 rounded"
          >
            <div className="single-thumb">
              <div className="img-holder">
                <img
                  style={{ width: '110px', height: '100px' }}
                  src={fitting180ac}
                  alt="Tyre Fitting Image"
                />
                <div className="overlay-style-one">
                  <div className="boxservice">
                    <div className="content">
                      <a href="Tyre_Fitting.html">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-holderservice">
                <a href="Tyre_Fitting.html">
                  <h3>Tyre Fitting</h3>
                </a>
                <p>
                  An incorrectly fitted tyre can become damaged and burst. ..and
                  could lead to tr...
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: 'pointer' }}
            id="Tyre Rotation"
            onClick={() => handleServiceClick('Tyre Rotation')}
            className="col-md-4 rounded"
          >
            <div className="single-thumb">
              <div className="img-holder">
                <img
                  style={{ width: '110px', height: '100px' }}
                  src={tyrelotaion1Tccd5}
                  alt="Tyre Rotation Image"
                />
                <div className="overlay-style-one">
                  <div className="boxservice">
                    <div className="content">
                      <a href="Tyre_Rotation.html">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-holderservice">
                <a href="Tyre_Rotation.html">
                  <h3>Tyre Rotation</h3>
                </a>
                <p>
                  Tires are expensive, so you want to make them last as long as
                  possible. It is i...
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ cursor: 'pointer' }}
            id="Wheel Alignment"
            onClick={() => handleServiceClick('Wheel Alignment')}
            className="col-md-4 rounded"
          >
            <div className="single-thumb">
              <div className="img-holder">
                <img
                  style={{ width: '110px', height: '100px' }}
                  src={WheelAlignment1916f}
                  alt="Wheel Alignment Image"
                />
                <div className="overlay-style-one">
                  <div className="boxservice">
                    <div className="content">
                      <a href="Wheel_Alignment.html">
                        <span className="fa fa-check"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-holderservice">
                <a href="Wheel_Alignment.html">
                  <h3>Wheel Alignment</h3>
                </a>
                <p>
                  At Arrow Centre Tyres, we believe one of the most important
                  considerations to vehicle m...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
