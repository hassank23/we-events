import React,{Component} from "react";
import { Nav, Navbar,NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props); 
       
       
      }
        
    render(){
              return (
                
                <div id="header" className="fixed-top d-flex align-items-cente">
                <Navbar  expand="md">
                  <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                  
                  <NavbarBrand className=" mr-auto logo me-auto me-lg-0"><img src="assets/logowe.png"  alt="" className="img-fluid"/></NavbarBrand> 
                    
                  
                  <Nav navbar id="navbar" className="navbar order-last order-lg-0">
                  <NavItem>
                        <NavLink className="nav-link scrollto active"  to='/home' href="#hero"> Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link scrollto "  to='/about-us' href="#about"> About us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link scrollto "  to='/why-us' href="#why-us" >Why us </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link scrollto "  to='/services' href="#service" >Service </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link scrollto "  to='/contact' href="#contact" >Contact us</NavLink>
                    </NavItem>
                    
                    </Nav>
                    
                    </div>
                    
                    </Navbar>
                </div>
              );
            }
          
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
    export default Header