import React,{Component} from "react";
import { Row,Col,Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import{Control, LocalForm} from 'react-redux-form';

class Food extends Component{
    constructor(props){
        super(props);
    this.state = {
        food_type:'',
        drink_type:'',
        request_food:'',
        
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
   
     return(<div className="py-5" id='food-bg'>
                <div className="col-12 py-5 row">
                      <h3  className="pt-5" style={{color:"black"}}>Food informations</h3>
                </div>
                
            
            

                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <div className=" row  px-5 ">  
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect01">catring type</label>
                                <select  className="form-control " id="inputGroupSelect01" name="food_type" value={this.state.food_type}
                                        onChange={this.handleInputChange} >
                                    <option value="lebanese">lebaneese</option>
                                    <option value="chine">chinese</option>
                                    <option value="arabic">arabic</option>
                                    <option value="maxican">maxican</option>
                                    <option value="turkish">turkish</option>
                                    <option value="japanese">japanese</option>
                                </select>
                                </div>
                                </Col>
                                </div>
                                </Row>


                                <Row className="form-group" >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect02">drink type</label>
                                <select  className="form-control " id="inputGroupSelect02" name="drink_type" value={this.state.drink_type}
                                        onChange={this.handleInputChange} >
                                    <option value="cocktails">cocktails</option>
                                    <option value="Strawberry Daiquirise">Strawberry Daiquiris</option>
                                    <option value="Blueberry Vodka Lemonade "> Blueberry Vodka Lemonade </option>
                                    <option value="Mint Julep">Mint Julep</option>
                                    <option value="Sea Breeze">Sea Breeze</option>
                                    <option value="Gin Fizz"> Gin Fizz</option>
                                </select>
                                </div>
                                </Col>
                                </div>
                                </Row>

                                <Row className="form-group" >
                                <div className="row px-5 ">
                                <Col  className="col-lg-12 col-md-12 col-sm-12">
                                <div className="input-group">
                                <span className="input-group-text">special request</span>
                                
                                < Input  className="form-control "id="request_food" name="request_food"  aria-label="special request_food" 
                                        rows="6" placeholder="special request here"
                                        value={this.state.request_food}
                                        onChange={this.handleInputChange}
                                        
                                        />
                                </div>
                                </Col>
                                </div>
                                </Row>

                                <Row className="form-group">
                                <div className="row pt-3 "> 
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_wedding/book_music" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </Row>


                            </LocalForm>
                            </div>
                            
     </div>);
    }
}


export default Food;
