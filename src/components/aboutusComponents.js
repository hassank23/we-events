import React from "react";
function AboutUs(){
    return(
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="about-img">
                <img src="assets/about.jpg" alt=""/>
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <div className="section-title"><h2>abous us</h2></div>
              <h3>Life is an event. Make it memorable with us !</h3>
              <p className="fst-italic">
                WE EVENTS is an honor-winning event, arranging and setting firm. Our full services, all the way subtleties, and administrations make our studio the ideal beginning of everything party style. ​Through imaginative structure
                 and immaculate execution, we create permanence, and one-of-a-kind events everything being equal sizes and styles.
              <ul>
                <li><i className="bi bi-check-circle"></i> Well Organized.</li>
                <li><i className="bi bi-check-circle"></i> Best Services.</li>
                <li><i className="bi bi-check-circle"></i> Best Price.</li>
              </ul></p>
              <p>
                For a long time our capable, experienced group has aced incalculable festivals – weddings, corporate, occasions,
                 birthday celebrations. We organized your special events presenting for you a magical night through our experience.
              </p>
            </div>
          </div>
  
        </div>
      </section>
      );
        
}
export default AboutUs;