import React,{Component} from "react";
import {Col,Row} from 'reactstrap';
import{Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
     constructor(props){
         super(props);
       
         this.handleSubmit = this.handleSubmit.bind(this);
         
         
     }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
    }
    
        
 render(){
    
     return(
         <div className="py-5">
             <br/>
             <br/>
             <br/>
             <div>
                    
                   <div className="col-12 row">
                   <div className="section-title center">
                                            <h2>Contact</h2>
                                        </div>
                      <h3>Send us your Feedback</h3>
                   </div>

                   
                   <div className="container row col-12 mx-5">
                        <div id="theContact " className="contact col-lg-4 col-md-4 col-sm-12">
                         
                            <div className="container col-12" data-aos="fade-up">
                                <div className=" mt-5">
                                    <div className="col-12">
                                        <div className="info">
                                            <div className=" address">
                                                <i className="fa fa-map-marker" />
                                                <h4>Location:</h4>
                                                <p>A108 Adam Street, New York, NY 535022</p>
                                            </div>
                                            <div className="open-hours">
                                                <i className=" fa fa-clock-o" />
                                                <h4>Open Hours:</h4>
                                                <p>Monday-Saturday:
                                                    <br />
                                                    8:00 AM - 5:00 PM
                                                </p>
                                            </div>
                                            <div className="email">
                                                <i className="	fa fa-envelope" />
                                                <h4>Email:</h4>
                                                <p>Wevents@hotmail.com</p>
                                            </div>
                                            <div className="phone">
                                                <i className="fa fa-volume-control-phone" />
                                                <h4>Call:</h4>
                                                <p>+961 01 736 333</p>
                                                <p>+961 70 736 333</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                       <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group" >
                                <div className=" row  px-5 ">
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 py-2">
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                                
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 py-2 ">
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                      />
                                      <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                         
                                </Col>   
                                </div> 
                                    
                                              
                            </Row>

                            <Row row >
                                <div className="row px-5 py-3">
                                <Col className="col-lg-12 col-md-12 col-sm-12 ">
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                        
                                </Col>
                                </div>
                            </Row>
                           
                            <Row row >
                                <div className="row px-5 py-3">
                                <Col  className="col-lg-12 col-md-12 col-sm-12">
                                    <Control.text model=".message" id="message" name="message"
                                        rows="9" placeholder="message here"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                           
                                        }}
                                     />
                                        
                                </Col>
                                </div>
                            </Row>
                            <Row row>
                                <div className="row px-2 "> 
                                <Col className="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" className="btn ">
                                       submit
                                    </button>
                                </Col>
                                </div>
                            </Row>
                        </LocalForm>
                        </div>
                    </div>
               </div>
               </div>
               
            
               
     )
    }
}
export default Contact