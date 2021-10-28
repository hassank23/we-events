import React,{Component} from "react";
import { Nav, Navbar,NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
      super(props); 
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false
      };
    }
      
  
  toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    } 
       
       
      
        
    render(){
              return (
              <div>
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                      <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-phone d-flex align-items-center"><span>+961 01 736 333</span></i>
                        <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 8AM - 5PM</span></i>
                      </div>
                    </div>
                  </div>
                        
                        <div id="header" className="fixed-top d-flex align-items-center  ">
                             
                              <Navbar dark  expand="lg">
                              
                                  <div className="container">
                                      <NavbarToggler onClick={this.toggleNav} />
                                      
                                      <NavbarBrand className="mr-auto logo me-auto me-lg-0" href="index.html"><img src='assets/logowe.png'  /></NavbarBrand>
                                      
                                      <Collapse isOpen={this.state.isNavOpen} navbar>
                                      
                                      <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                                          <Nav id="navbar" class="navbar order-last order-lg-0">
                                          <NavItem>
                                              <NavLink className="nav-link scrollto "  to='/home' href="#hero"> Home</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto" href="#about" to='/aboutus'> About Us</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto" href="#why-us" to='/whyus'>why-us</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto" href="#service" to='/services'>Services</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto" href="#contact" to='/contactus'>contact-us</NavLink>
                                          </NavItem>
                                          
                                          </Nav>
                                          </div>
                                      </Collapse>
                                      
                                  
                                 </div>
                              </Navbar>
                              
                              </div>
                            





               
          
        
    
    
    
  
    
    
              </div>);
        
              }
            }
export default Header