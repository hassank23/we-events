import React,{Component} from "react";
import { Row,Col,Input, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import{Control, LocalForm} from 'react-redux-form';
class wedding extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone:'',
            date:'',
            time:'',
            budget:'',
            currency:'',
            
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

    handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:3000/bookwedding" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                phone:this.state.phone,
                date:this.state.date,
                time:this.state.time,
                budget:this.state.budget,
                currency:this.state.currency,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }
 render(){
    
     return(<div className="pt-5 " id="wedding-bg"  >
                <div className="col-12 pt-5 row">
                      <h3  className="py-3" style={{color:"yellow"}}>Give-us some informations</h3>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 mt-5 pt-5 container ">
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <div className=" row container ">
                                
                                <Col  className=" container col-lg-6 col-md-6 col-sm-12  col-12 ">
                                
                                    <Input  id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                         
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        />
                                    
                                </Col>
                                
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <Input id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                         
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        />
                                        
                                </Col>   
                                </div> 
                                    
                                              
                            </Row> 

                            <Row className="form-group">
                                <div className="container row  py-3">
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Input type="email" id="email" name="email"
                                        placeholder="email"
                                        className="form-control"
                                         
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                   />
                                </Col>
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 ">
                                    <Input type="number"  id="phone" name="phone"
                                         placeholder="exemple:03736333" className="form-control"
                                          
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                       />
                                      
                                </Col>
                                </div>
                            </Row>
                           <Row className="form-group">
                           <div className="row container">
                           <Col  className="container col-lg-4 col-md-4 col-sm-4   ">
                                    <Input type="date" model=".date" id="date" name="date"
                                        className="form-control"
                                         
                                        value={this.state.date}
                                        onChange={this.handleInputChange}
                                         />
                                   
                                         
                                </Col>   

                            <Col className=" container col-lg-2 col-md-2 col-sm-3 ">
                            <Input type="time"  id="time" name="time"
                                        
                                        />
                                </Col>
                            <Col className=" container col-lg-4 col-md-4 col-sm-3 col-12 ">
                                    <Input type="number"  id="budget" name="budget" 
                                        placeholder="put your budget:5000" className="form-control"
                                         
                                        value={this.state.budget}
                                        onChange={this.handleInputChange}
                                        />
                                   
                                </Col>
                            <Col className="col-lg-2 col-md-2 col-sm-3 col-12">
                            <div className="input-group mb-3 cp">
                                
                                <select className="form-control" id="inputGroupSelect01" name="currency">
                                    
                                    <option value="$" selected>dollars</option>
                                    <option value="lbp">lebanese lira</option>
                                    <option value="euro">euro</option>
                                </select>
                                </div>
                                </Col>
                           </div>
                                
                            </Row>
                            
                            <Row className="form-group">
                                <div className="row px-2 py-5"> 
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_wedding/book_food" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </Row>
                        </LocalForm>
                        </div>





     </div>);
    }
}


export default wedding;
