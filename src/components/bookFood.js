import React,{Component} from "react";
import { Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import{Control, LocalForm} from 'react-redux-form';

class Food extends Component{
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
   
     return(<div className="py-5" id='food-bg'>
                <div className="col-12 py-5 row">
                      <h3  className="pt-5" style={{color:"black"}}>Food informations</h3>
                </div>
                
            
            

                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <div className=" row  px-5 ">
                                
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect01">catring type</label>
                                <Control.select model=".food_type" className="form-control " id="inputGroupSelect01" name="food_type"  >
                                    <option value="lebanese">lebaneese</option>
                                    <option value="chine">chinese</option>
                                    <option value="arabic">arabic</option>
                                    <option value="maxican">maxican</option>
                                    <option value="turkish">turkish</option>
                                    <option value="japanese">japanese</option>
                                </Control.select>
                                </div>
                                </Col>
                                </div>
                                </Row>


                                <Row className="form-group" >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect02">catring type</label>
                                <Control.select model=".drink_type" className="form-control " id="inputGroupSelect02" name="drink_type" >
                                    <option value="cocktails">cocktails</option>
                                    <option value="Strawberry Daiquirise">Strawberry Daiquiris</option>
                                    <option value="Blueberry Vodka Lemonade "> Blueberry Vodka Lemonade </option>
                                    <option value="Mint Julep">Mint Julep</option>
                                    <option value="Sea Breeze">Sea Breeze</option>
                                    <option value="Gin Fizz"> Gin Fizz</option>
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
                                
                                < Control.text model=".request" className="form-control "id="request" name="request"  aria-label="special request" 
                                        rows="6" placeholder="special request here"

                                        />
                                </div>
                                </Col>
                                </div>
                                </Row>

                                <Row className="form-group">
                                <div className="row pt-3 "> 
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_music" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </Row>


                            </LocalForm>
                            </div>
                            
     </div>);
    }
}


export default Food;