import React from "react";

function WhyUs(props){
        return (

            <section id="why-us" className="why-us">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Why Us</h2>
                  <p>Why Choose Our company</p>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                      <span>01</span>
                      <h4>Creativity</h4>
                      <p> We help you organize your night based on your  magical idea </p>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                      <span>02</span>
                      <h4>Organisation</h4>
                      <p>Our team check every detail of your events working with  passion </p>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                      <span>03</span>
                      <h4> Problem-solving</h4>
                      <p>Through our experience , we solve all the problems we face</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
    
}
export default WhyUs;