import React, { Component } from 'react';
import Home from './homeComponent';
import Header from "./headerComponent";
import Footer from './foooteromponent';
import Topbar from './topbar';


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
        <Topbar/>
          <Header/>
        
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/food" component={Food}/>
              <Redirect to ="/home"/>
              </Switch>
          
            
           
          <Footer/>

        </div>
      );
    }
  }


export default Main;






