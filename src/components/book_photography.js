import React, { Component } from "react";
import { Form, Label, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Photography extends Component {
    constructor(props){
        super(props);
        this.state={
            location:'',
                numberOfPhotos:'',
                numberGuests:"",
                datePhoto:"",
                request:"",
                agree:false,
             
            touched:{
                numberOfPhotos:false,
                numberGuests:false,
                datePhoto:false,
                request:false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
       const target = event.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;
   
       this.setState({
         [name]: value
       });
   }
    
   handleSubmit(event) {
       console.log('Current State is: ' + JSON.stringify(this.state));
       alert('Current State is: ' + JSON.stringify(this.state));
       event.preventDefault();
   }
   handleBlur=(field)=>(evt)=>{
       this.setState({
           touched:{...this.state.touched,[field]:true}
       });
   }
       

           
       
   
       
render(){
  
    return(<div className="py-5 row-content" id='photo-bg'>
               <div className=" row py-4  center">
                     <h3  className="pt-5" style={{color:"yellow"}}>book your photography session</h3>
               </div>

               <div className="row container px-5">
                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup row  >
                                <div className="row px-5 ">
                                <Col  className="col-lg-6 col-md-6 col-sm-6 ">
                                <div className="input-group">
                                <span className="input-group-text ">location</span>
                                
                                <Input type="textarea" id="location" name="location" className="form-control " aria-label="location" 
                                        rows="1" placeholder="put the location that you need"
                                        value={this.state.location}
                                        onBlur={this.handleBlur('location')}
                                        onChange={this.handleInputChange}
                                        />
                                </div>
                                </Col>
                                </div>
                                </FormGroup>



                                <FormGroup row >
                                <div className=" container row px-5 pt-2 ">
                                <Col  className="col-lg-6 col-md-6 col-sm-6">
                                <div className="input-group">
                                <span className="input-group-text">number Of Photos</span>
                                
                                <Input type="number" id="location" name="numberOfPhotos" className="form-control" aria-label="number Of Photos" 
                                        rows="1" placeholder="put the number Of Photos you need"
                                        value={this.state.numberOfPhotos}
                                        onBlur={this.handleBlur('numberOfPhotos')}
                                        onChange={this.handleInputChange}
                                        />
                                </div>
                                </Col>
                                </div>
                                </FormGroup>
                                


                            <FormGroup row>
                           <div className="row container px-5 pt-2">
                           <Col  className="col-lg-6 col-md-6 col-sm-6  ">
                           <span className="input-group-text  ">put the date of photography session down</span>
                                    <Input type="date" id="datePhoto" name="datePhoto"
                                        className="mt-2 "
                                        value={this.state.datePhoto}
                                        
                                        onBlur={this.handleBlur('datePhoto')}
                                        onChange={this.handleInputChange} />
                                   
                                         
                                </Col> 

                                </div>
                                </FormGroup>
                                <FormGroup row><div className="row container px-5 pt-2">
                                <Col md={{size: 6, offset:0}}>
                                    <FormGroup radio>
                                    <span className="input-group-text px-2 ">may we publish your photo-session?</span>
                                        <Label radio>
                                            <Input type="radio" 
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {'yes'}
                                                
                                        </Label>
                                        
                                    </FormGroup>
                                </Col>
                                </div>




                            
                            </FormGroup>
                            <FormGroup row >
                                <div className="row px-5 ">
                                <Col  className="col-lg-6 col-md-6 col-sm-6">
                                <div className="input-group">
                                <span className="input-group-text ">special request</span>
                                
                                <Input type="textarea" id="request" name="request" className="form-control" aria-label="special request" 
                                        rows="2" placeholder="special request here"
                                        value={this.state.request}
                                        onBlur={this.handleBlur('request')}
                                        onChange={this.handleInputChange}
                                        />
                                </div>
                                </Col>
                                
                                </div>
                                </FormGroup>
                                <FormGroup row>
                                <div className="row pt-3 "> 
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <Link to="/book_Avenue" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </FormGroup>

















                            </Form>
                            </div>
                            </div>
                            
     ) }
}
export default Photography;