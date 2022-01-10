import React, { Component } from 'react';
import Home from './homeComponent';
import Header from "./headerComponent";
import Footer from './foooteromponent';
import AboutUs from './aboutusComponents';
import wedding from './bookWedding';
import Services from './services';
import WhyUs from './WhyUs';
import Contact from './ContactUsReact';
import Food from './bookFood';
import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import Music from './bookMusic';
import Photography from './book_photography';
import Avenue from './bookAvenue';
import { connect } from 'react-redux';
import {actions} from 'react-redux-form';
const mapStateToProps = state => {
  return {


  }
}
const mapDispatchToProps = dispatch => ({
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});
class Main extends Component {
   
    
    render() {
        const HomePage=()=>{
          return(
              <Home />
          );
        }
       

      return (
        <div>
        
          <Header/>
        
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/aboutus" component={AboutUs}/>
              <Route exact path="/contactus" component={Contact} />
              <Route exact path="/services" component={Services}/>
              <Route exact path="/whyus" component={WhyUs}/>
      
              <Route exact path="/book_wedding" component={wedding}/>
              <Route exact path="/book_wedding/book_food" component={Food}/>
              <Route exact path="/book_wedding/book_music" component={Music}/>
              <Route exact path="/book_wedding/book_photography" component={Photography}/>
              <Route exact path="/book_wedding/book_Avenue" component={Avenue}/>
              <Redirect to ="/home"/>
              </Switch>
              
            
           
          <Footer/>

        </div>
      );
    }
  }


 // export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
  //export default withRouter((mapDispatchToProps)(Main));
  export default Main;
