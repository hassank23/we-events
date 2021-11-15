
import React,{Component} from "react";
import AboutUs from "./aboutusComponents";
import WhyUS from './WhyUs';
import Services from './services';
import Contact from "./ContactUsReact";
class Home extends Component{
    render(){
        return (
            <div >
          <div id="hero" className="d-flex align-items-center ">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
              <div className="row">
                <div className="col-lg-8">
                  <h1>Welcome to <span>WE EVENtS</span></h1>
                  <h2>Organize  magic nights for more than 18 years!</h2>
                </div>
              </div>
            </div>
            </div>
          <AboutUs/>
          <WhyUS/>
        <Services/>
        <Contact/>

            </div>
        );
        
      }
    }
    



export default Home;