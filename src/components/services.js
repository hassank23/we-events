import React from "react";
import { Link } from 'react-router-dom';
function Services(){
    return (

        <section id="service" className="service section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Our Services</h2>
              <p>Choose your favorites services !</p>
            </div>
            <div className="services-container section-container">
              <div className="container">
                <div className="row">
                  <div className="col services section-description wow fadeIn">
                    <h2>Our services</h2>
                    <div className="divider-1 wow fadeInUp"><span /></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 services-box wow fadeInUp">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="services-box-icon">
                          <i className="fas fa-music" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h3>Catering</h3>
                        <p>We offer a wide array of services for food all different kinds of events. We provide a large banquet hall, capable of holding events such as weddings, birthday parties. Whatever the occasion, there are plenty of reasons to choose us!.</p>
                        <Link to="/food" className="btnn">Book your food </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 services-box wow fadeInDown">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="services-box-icon">
                          <i className="fa fa-music" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h3>Music</h3>
                        <p>We celebrate with you your special day by presenting for you a large option of music and DJ's</p>
                        <a href className="btnn">Choose your Music</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 services-box wow fadeInUp">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="services-box-icon">
                          <i className="fas fa-camera" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h3>Photography</h3>
                        <p>We specialize in wedding photography, we travel to your destination to capture the perfect moment in the perfect place.</p>
                        <a href="food.html" className="btnn">GET Your Reservation</a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Services