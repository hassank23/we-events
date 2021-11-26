import React,{Component} from "react";
import { Form,Label,FormGroup,Input,Col,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';

class Food extends Component{
     constructor(props){
         super(props);
         this.state={
             food_type:'',
             drink_type:'',
             budget:'',
             request:'',
             touched:{
                 food_type:false,
                 drink_type:false,
                 budget:false,
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
   
     return(<div className="py-5" id='food-bg'>
                <div className="col-12 py-5 row">
                      <h3  className="pt-5" style={{color:"black"}}>Food informations</h3>
                </div>
                
            
            

                <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row >
                                <div className=" row  px-5 ">
                                
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect01">catring type</label>
                                <select className="form-select " id="inputGroupSelect01" name="food_type" value={this.state.food_type} onBlur={this.handleBlur('food_type')} onChange={this.handleInputChange} >
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
                                </FormGroup>


                                <FormGroup row >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect02">catring type</label>
                                <select className="form-select " id="inputGroupSelect02" name="drink_type"value={this.state.drink_type} onBlur={this.handleBlur('drink_type')} onChange={this.handleInputChange} >
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
                                <Link to="/book_music" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </FormGroup>


                            </Form>
                            </div>
                            
     </div>);
    }
}


export default Food;