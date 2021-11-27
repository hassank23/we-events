import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm ,Control} from "react-redux-form";

class Music extends Component {
    constructor(props){
        super(props);
       
        
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    
   handleSubmit(event) {
       console.log('Current State is: ' + JSON.stringify(this.state));
       alert('Current State is: ' + JSON.stringify(this.state));
       event.preventDefault();
   }
   
       

           
       
   
       
render(){
  
    return(<div className="py-5 row-content" id='music-bg'>
               <div className="col-12 py-3 row center">
                     <h3  className="pt-5" style={{color:"yellow"}}>book your music</h3>
               </div>

               <div className="col-12 ">
                        <LocalForm onSubmit={this.handleSubmit}>  
                        <Row className="form-group">
                                <div className=" row  px-5  ">
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect04">music</label>
                                <Control.select model=".music" className="form-control" id="inputGroupSelect04" name="music"  >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </Control.select>
                                </div>
                                </Col>
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect02">singer</label>
                                <Control.select model=".singer" className="form-control" id="inputGroupSelect02" name="singer">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </Control.select>
                                </div>
                                </Col>   
                                </div>
                            </Row>

                            <Row className="form-group" >
                                <div className="row px-5 ">
                                <Col  className="col-lg-12 col-md-12 col-sm-12">
                                <div className="input-group">
                                <span className="input-group-text">special request</span>
                                
                                <Control.text model=".request" className="form-control"id="request" name="request"  aria-label="special request" 
                                        rows="6" placeholder="special request here"
                                        />
                                </div>
                                </Col>
                                </div>
                                </Row>

                            <Row className="form-group">
                                <div className="row pt-3 "> 
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_photography" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </Row>
                               
                            </LocalForm></div>


        
               </div>
    )

}
}
export default Music;