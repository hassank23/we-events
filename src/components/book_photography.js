import React, { Component } from "react";
import {Label, Col, Row, Input,Radio} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm,Control } from "react-redux-form";

class Photography extends Component {
    constructor(props){
        super(props);
    this.state = {
        location:'',
        numberOfPhotos:'',
        datePhoto:'',
        agree:'',
        request_photo:'',
        
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
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
render(){
  
    return(<div className="py-5 row-content" id='photo-bg'>
               <div className=" row py-4  center">
                     <h3  className="pt-5" style={{color:"yellow"}}>book your photography session</h3>
               </div>

               <div className="row container px-5">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Row className="form-group" >
                                <div className="row px-5 ">
                                <Col  className="col-lg-6 col-md-6 col-sm-6 ">
                                <div className="input-group">
                                <span className="input-group-text ">location</span>
                                
                                <Input id="location" name="location" className="form-control " aria-label="location" 
                                        rows="1" placeholder="put the location that you need" value={this.state.location}
                                        onChange={this.handleInputChange}
                                        />
                                </div>
                                </Col>
                                </div>
                                </Row>



                                <Row className="form-group">
                                <div className=" container row px-5 pt-2 ">
                                <Col  className="col-lg-6 col-md-6 col-sm-6">
                                <div className="input-group">
                                <span className="input-group-text">number Of Photos</span>
                                
                                <Input type="number"  id="numberOfPhotos" name="numberOfPhotos" className="form-control" aria-label="number Of Photos" 
                                        rows="1" placeholder="put the number Of Photos you need"value={this.state.numberOfPhotos}
                                        onChange={this.handleInputChange}
                                        />
                                </div>
                                </Col>
                                </div>
                                </Row>
                                


                        <Row className="form-group">
                           <div className="row container px-5 pt-2">
                           <Col  className="col-lg-6 col-md-6 col-sm-6  ">
                           <span className="input-group-text  ">put the date of photography session down</span>
                                    <Input type="date" model=".datePhoto"  id="datePhoto" name="datePhoto" value={this.state.datePhoto}
                                        onChange={this.handleInputChange}
                                     className="mt-2 "
                                       />
                                   
                                         
                                </Col> 

                                </div>
                                </Row>
                                <Row className="form-group"><div className="row container px-5 pt-2">
                                <Col md={{size: 6, offset:0}}>
                                    <Row className="form-group"radio>
                                    <span className="input-group-text px-2 ">may we publish your photo-session?</span>
                                        <Label radio>
                                            <Input type='radio' model=".agree"
                                                name="agree"
                                                value={this.state.agree}
                                        onChange={this.handleInputChange}
                                                /> {'yes'}
                                                
                                        </Label>
                                        
                                    </Row>
                                </Col>
                                </div>




                            
                            </Row>
                            <Row className="form-group">
                                <div className="row px-5 ">
                                <Col  className="col-lg-6 col-md-6 col-sm-6">
                                <div className="input-group">
                                <span className="input-group-text ">special request</span>
                                
                                <Input model="request_photo" id="request_photo" name="request_photo" className="form-control" aria-label="special request"
                                        rows="2" placeholder="special request here" value={this.state.request_photo}
                                        onChange={this.handleInputChange}
                                        
                                        />
                                </div>
                                </Col>
                                
                                </div>
                                </Row>
                                <Row className="form-group">
                                <div className="row pt-3 "> 
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <Link to="/book_wedding/book_Avenue" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </Row>

















                            </LocalForm>
                            </div>
                            </div>
                            
     ) }
}
export default Photography;
