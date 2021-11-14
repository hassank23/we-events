import React,{Component} from "react";
import { Form,FormGroup,Label,Input,Col,Row,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
class wedding extends Component{
     constructor(props){
         super(props);
         this.state={
             firstname:'',
             lastname:'',
             email:'',
             phone:'',
             date:'',
             budget:'',
             time:'',
             touched:{
                 firstname:false,
                 lastname:false,
                 email:false,
                 phone:false,
                 date:false,
                 time:false,
                 budget:false,
               
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
        validate(firstname,lastname,phone,email) {
            const errors={
                firstname:'',
                lastname:'',
                email:'',
                phone:'',
                budget:'',
                date:'',
                time:''
            };

            if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
            else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters'; 
            if(this.state.touched.lastname && lastname.length<3 )
                errors.lastname="last name should be >=3 character";
            else if (this.state.touched.lastname && lastname.lenght>10)
                errors.lastname="last name should be <=10 character";
        
            if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
                errors.email = 'Email should contain a @';
                const reg = /^\d+$/;
                if (this.state.touched.phone && !reg.test(phone) || this.state.touched.phone && phone.length !=8)
                    errors.phone = 'phone number should contain only numbers and should be = 8 characters an';

            return errors;
        }
    
        
 render(){
    const errors=this.validate(this.state.firstname,this.state.lastname,this.state.phone,this.state.email)
     return(<div className="py-5 "  >
                <div className="col-12 py-5 row">
                      <h3  className="py-3" style={{color:"yellow"}}>Give -us some informations</h3>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 mt-5 container ">
                        <Form onSubmit={this.handleSubmit} className=" pt-5">
                            <FormGroup row >
                                <div className=" row container ">
                                
                                <Col  className=" container col-lg-6 col-md-6 col-sm-12  col-12 ">
                                
                                    <Input type="text" id="firstname" name="firstname" 
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                                
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 col-12 ">
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange}
                                         />
                                         <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>   
                                </div> 
                                    
                                              
                            </FormGroup>

                            <FormGroup row >
                                <div className="container row  py-3">
                                <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange}
                                         />
                                         <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 ">
                                    <Input type="tel" id="phone" name="phone"
                                         placeholder="exemple:03736333"
                                        value={this.state.phone}
                                        valid={errors.phone=== ''}
                                        invalid={errors.phone !== ''}
                                        onBlur={this.handleBlur('phone')}
                                        onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.phone}</FormFeedback>
                                </Col>
                                </div>
                            </FormGroup>



                           <FormGroup row>


                           
                                         
                                

                           <div className="row container">
                           <Col  className="container col-lg-4 col-md-4 col-sm-4   ">
                                    <Input type="date" id="date" name="date"
                                        
                                        value={this.state.date}
                                        
                                        onBlur={this.handleBlur('date')}
                                        onChange={this.handleInputChange} />
                                   
                                         
                                </Col>   

                            <Col className=" container col-lg-2 col-md-2 col-sm-3 ">
                            <Input type="time" id="time" name="time"
                                        
                                        value={this.state.time}
                                        
                                        onBlur={this.handleBlur('time')}
                                        onChange={this.handleInputChange} />
                                </Col>
                            <Col className=" container col-lg-4 col-md-4 col-sm-3 col-12 ">
                                    <Input type="number" id="budget" name="budget" 
                                        placeholder="put your budget:5000"
                                        value={this.state.budget}
                                        
                                        onBlur={this.handleBlur('budget')}
                                        onChange={this.handleInputChange} />

                                   
                                </Col>
                            <Col className="col-lg-2 col-md-2 col-sm-3 col-12">
                            <div className="input-group mb-3 cp">
                                
                                <select class="form-select " id="inputGroupSelect01">
                                    
                                    <option value="$" selected>dollars</option>
                                    <option value="lbp">lebanese lira</option>
                                    <option value="euro">euro</option>
                                </select>
                                </div>
                                </Col>
                           </div>
                                
                            </FormGroup>
                            
                            <FormGroup row>
                                <div className="row px-2 py-5"> 
                                <Col className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <Link to="/book_food" className="btnn col-12 " >next</Link>
                                </Col>
                                </div>
                            </FormGroup>
                        </Form>
                        </div>





     </div>);
    }
}


export default wedding;