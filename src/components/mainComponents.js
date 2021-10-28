import React, { Component } from 'react';
import Home from './homeComponent';
import Header from "./headerComponent";
import Footer from './foooteromponent';
import AboutUs from './aboutusComponents';
import ContactUs from './ContactUs';
import Services from './services';
import WhyUs from './WhyUs';



import Food from './FoodComponent';
import {Switch,Route,Redirect} from "react-router-dom";
class Main extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        const HomePage=()=>{
          return(
              <Home />
          )
  
        }
       

      return (
        <div>
        
          <Header/>
        
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/aboutus" component={AboutUs}/>
              <Route exact path="/contactus" component={ContactUs}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/whyus" component={WhyUs}/>
              <Route exact path="/food" component={Food}/>
              <Redirect to ="/home"/>
              </Switch>
              
            
           
          <Footer/>

        </div>
      );
    }
  }


export default Main;






