import React, { Component } from "react";
import { Form, Label, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Music extends Component {
    constructor(props){
        super(props);
        this.state={
            arrival:'yes',
                prelude:'',
                Processional:"",
                Bride_Enters:"",
                Processional:"",
                Recessional:"",
                Introduction:"",
                Dinner:"",
                First_Dance:"",
                Father_Daughter_Dance:"",
                Cake_Cutting_Song:"",
            touched:{
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
               <div className="col-12 py-5 row center">
                     <h3  className="pt-5" style={{color:"yellow"}}>book your music</h3>
               </div>

               <div className="col-12 ">
                        <Form onSubmit={this.handleSubmit}>
                            
                            
                            
                        <FormGroup row >
                                <div className=" row  px-3  ">
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect01">arrival on music</label>
                                <select className="form-select " id="inputGroupSelect01" name="arrival" value={this.state.arrival} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>

                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect04">music on bride enters</label>
                                <select className="form-select " id="inputGroupSelect04" name="Bride_Enters" value={this.state.Bride_Enters} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>



                                

                                </div>
                                </FormGroup>

                                <FormGroup row >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect02">music on prelude</label>
                                <select className="form-select " id="inputGroupSelect02" name="prelude" value={this.state.prelude} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>   


                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect03"> music on processional</label>
                                <select className="form-select " id="inputGroupSelect03" name="Processional" value={this.state.Processional} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>

                               

                                </div>
                                </FormGroup>

                            
                                <FormGroup row >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect05">music on Recessional</label>
                                <select className="form-select " id="inputGroupSelect05" name="Recessional" value={this.state.Recessional} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>   


                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect06">music on Introduction</label>
                                <select className="form-select " id="inputGroupSelect06" name="Introduction" value={this.state.Introduction} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>

                               

                                </div>
                                </FormGroup>
                                


                                <FormGroup row >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect07">music on Dinner</label>
                                <select className="form-select " id="inputGroupSelect07" name="Dinner" value={this.state.Dinner} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>   


                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect08">music on first dance</label>
                                <select className="form-select " id="inputGroupSelect08" name="Forst_Dance" value={this.state.First_Dance} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>

                               

                                </div>
                                </FormGroup>
                                <FormGroup row >
                                <div className=" row  px-5  ">
                                
                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect09">music on Father Daughter Dance</label>
                                <select className="form-select " id="inputGroupSelect09"name="Father_Daughter_Dance" value={this.state.Father_Daughter_Dance} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>   


                                <Col className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <div className="input-group mb-3 cp">
                                <label class="input-group-text" for="inputGroupSelect10">music on Cake Cutting</label>
                                <select className="form-select " id="inputGroupSelect10" name="Cake_Cutting_Song" value={this.state.Cake_Cutting_Song} onBlur={this.handleBlur('arrival')} onChange={this.handleInputChange} >
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                                </div>
                                </Col>

                               

                                </div>
                                </FormGroup>
                                <FormGroup row>
                                <div className="row px-2 py-5"> 
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