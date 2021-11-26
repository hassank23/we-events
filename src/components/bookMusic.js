import React, { Component } from "react";
import { Form, Label, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Music extends Component {
    constructor(props){
        super(props);
        this.state={
            music:'',
            singer:'',
            request:'',
            touched:{
                music:false,
                singer:false,
                request:false,
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
  
    return(<div className="py-5 row-content" id='music-bg'>
               <div className="col-12 py-3 row center">
                     <h3  className="pt-5" style={{color:"yellow"}}>book your music</h3>
               </div>

               <div className="col-12 ">
                        <Form onSubmit={this.handleSubmit}>  
                        <FormGroup row >
                                <div className=" row  px-5  ">
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect04">music</label>
                                <select className="form-select " id="inputGroupSelect04" name="music" value={this.state.music} onBlur={this.handleBlur('music')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect02">singer</label>
                                <select className="form-select " id="inputGroupSelect02" name="singer" value={this.state.singer} onBlur={this.handleBlur('singer')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>   
                                </div>
                            </FormGroup>

                            <FormGroup row >
                                <div className="row px-5 ">
                                <Col  className="col-lg-12 col-md-12 col-sm-12">
                                <div className="input-group">
                                <span className="input-group-text">special request</span>
                                
                                <Input type="textarea" id="request" name="request" className="form-control" aria-label="special request" 
                                        rows="6" placeholder="special request here"
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
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_photography" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </FormGroup>
                               
                            </Form></div>


        
               </div>
    )

}
}
export default Music;