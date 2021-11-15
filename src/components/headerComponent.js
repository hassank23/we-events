import React,{Component} from "react";
import { Nav, Navbar,NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
      super(props); 
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false,
         isModalOpen:false
      };
      this.toggleNav=this.toggleNav.bind(this);
    }
      
  
  toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen

      });
    } 
        
    render(){
              return (
              <React.Fragment>
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                      <div className="contact-info d-flex align-items-center">
                        <i className="fa fa-phone d-flex align-items-center"><span>+961 01 736 333</span></i>
                        <i className="fa fa-clock-o d-flex align-items-center ms-4"><span> Mon-Sat: 8AM - 5PM</span></i>
                      </div>
                    </div>
                  </div>
                        
                        <div id="header" className="fixed-top d-flex align-items-center  container">
                             
                              <Navbar dark  expand="lg">
                              
                                  <div className="container">
                                      <NavbarToggler onClick={this.toggleNav} />
                                      
                                      <NavbarBrand className="mr-auto logo me-auto me-lg-0" href="index.html"><img src='assets/logowe.png' id="i" alt=""/></NavbarBrand>
                                      
                                      <Collapse isOpen={this.state.isNavOpen} navbar>
                                      
                                      <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                                          <Nav id="navbar" class="navbar order-last order-lg-0">
                                          <NavItem>
                                              <NavLink className="nav-link scrollto "  to='/home' > Home</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto" to='/aboutus'> About Us</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto"  to='/whyus'>why-us</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto"  to='/services'>Services</NavLink>
                                          </NavItem>
                                          <NavItem>
                                              <NavLink className="nav-link scrollto"  to='/contactus'>contact-us</NavLink>
                                          </NavItem>
                                          
                                          </Nav>
                                          
                                          </div>
                                      </Collapse>
                                      
                                  
                                 </div>
                              </Navbar>
                              
                              
                              </div>
              </React.Fragment>);
        
              }
            }
export default Header