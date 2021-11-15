import React,{Component} from "react";
import {Form,FormGroup,Label,Input,Col,Row,FormFeedback} from 'reactstrap';

class Contact extends Component{
     constructor(props){
         super(props);
         this.state={
             firstname:'',
             lastname:'',
             email:'',
             message:'',
             touched:{
                 firstname:false,
                 lastname:false,
                 email:false,
                 message:false,
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
        validate(firstname,lastname,message,email) {
            const errors={
                firstname:'',
                lastname:'',
                email:'',
                message:'',
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
            if(this.state.touched.message && message.length<10 )
                errors.message="message should be >=10 character";
            return errors;
        }
    
        
 render(){
    const errors=this.validate(this.state.firstname,this.state.lastname,this.state.message,this.state.email)
     return(
         <div className="py-5">
             <br/>
             <br/>
             <br/>
             <div>
                    
                   <div className="col-12 row">
                   <div className="section-title center">
                                            <h2>Contact</h2>
                                        </div>
                      <h3>Send us your Feedback</h3>
                   </div>

                   
                   <div className="container row col-12 mx-5">
                        <div id="theContact " className="contact col-lg-4 col-md-4 col-sm-12">
                         
                            <div className="container col-12" data-aos="fade-up">
                                <div className=" mt-5">
                                    <div className="col-12">
                                        <div className="info">
                                            <div className=" address">
                                                <i className="fa fa-map-marker" />
                                                <h4>Location:</h4>
                                                <p>A108 Adam Street, New York, NY 535022</p>
                                            </div>
                                            <div className="open-hours">
                                                <i className=" fa fa-clock-o" />
                                                <h4>Open Hours:</h4>
                                                <p>Monday-Saturday:
                                                    <br />
                                                    8:00 AM - 5:00 PM
                                                </p>
                                            </div>
                                            <div className="email">
                                                <i className="	fa fa-envelope" />
                                                <h4>Email:</h4>
                                                <p>Wevents@hotmail.com</p>
                                            </div>
                                            <div className="phone">
                                                <i className="fa fa-volume-control-phone" />
                                                <h4>Call:</h4>
                                                <p>+961 01 736 333</p>
                                                <p>+961 70 736 333</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                       <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row >
                                <div className=" row  px-5 ">
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 py-2">
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                                
                                
                                <Col  className="col-lg-6 col-md-6 col-sm-12 py-2 ">
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
                                <div className="row px-5 py-3">
                                <Col className="col-lg-12 col-md-12 col-sm-12 ">
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
                                </div>
                            </FormGroup>
                           
                            <FormGroup row >
                                <div className="row px-5 py-3">
                                <Col  className="col-lg-12 col-md-12 col-sm-12">
                                    <Input type="textarea" id="message" name="message"
                                        rows="9" placeholder="message here"
                                        value={this.state.message}
                                        valid={errors.message === ''}
                                        invalid={errors.message !== ''}
                                        onBlur={this.handleBlur('message')}
                                        onChange={this.handleInputChange}
                                        />
                                        <FormFeedback>{errors.message}</FormFeedback>
                                </Col>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <div className="row px-2 "> 
                                <Col className="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" className="btn ">
                                       submit
                                    </button>
                                </Col>
                                </div>
                            </FormGroup>
                        </Form>
                        </div>
                    </div>
               </div>
               </div>
               
            
               
     )
    }
}
export default Contact