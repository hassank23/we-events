import React,{Component} from "react";
import { Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import{Control, LocalForm} from 'react-redux-form';
class wedding extends Component{
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
    
     return(<div className="pt-5 " id="wedding-bg"  >
                <div className="col-12 pt-5 row">
                      <h3  className="py-3" style={{color:"yellow"}}>Give-us some informations</h3>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 mt-5 pt-5 container ">
                        <LocalForm  onSubmit={(values)=>this.handleSubmit(values)} >
                            <Row className="form-group">
                                <div className=" row container ">
                                
                                <Col  className=" container col-lg-6 col-md-6 col-sm-12  col-12 ">
                                
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        />
                                    
                                </Col>
                                
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        />
                                        
                                </Col>   
                                </div> 
                                    
                                              
                            </Row>

                            <Row className="form-group">
                                <div className="container row  py-3">
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="email"
                                        className="form-control"
                                   />
                                </Col>
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 ">
                                    <Control type="number" model=".phone" id="phone" name="phone"
                                         placeholder="exemple:03736333" className="form-control"
                                       />
                                      
                                </Col>
                                </div>
                            </Row>
                           <Row className="form-group">
                           <div className="row container">
                           <Col  className="container col-lg-4 col-md-4 col-sm-4   ">
                                    <Control type="date" model=".date" id="date" name="date"
                                        
                                        className="form-control"
                                         />
                                   
                                         
                                </Col>   

                            <Col className=" container col-lg-2 col-md-2 col-sm-3 ">
                            <Control type="time" model=".time" id="time" name="time"
                                        
                                        />
                                </Col>
                            <Col className=" container col-lg-4 col-md-4 col-sm-3 col-12 ">
                                    <Control  type="number" model=".budget" id="budget" name="budget" 
                                        placeholder="put your budget:5000" className="form-control"
                                        />
                                   
                                </Col>
                            <Col className="col-lg-2 col-md-2 col-sm-3 col-12">
                            <div className="input-group mb-3 cp">
                                
                                <Control.select model=".currency" className="form-control" id="inputGroupSelect01" name="currency">
                                    
                                    <option value="$" selected>dollars</option>
                                    <option value="lbp">lebanese lira</option>
                                    <option value="euro">euro</option>
                                </Control.select>
                                </div>
                                </Col>
                           </div>
                                
                            </Row>
                            
                            <Row className="form-group">
                                <div className="row px-2 py-5"> 
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_food" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </Row>
                        </LocalForm>
                        </div>





     </div>);
    }
}


export default wedding;