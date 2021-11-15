import React, { Component } from "react";
import { Form, Label, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Music extends Component {
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
  
    return(<div className="py-5" id='music-bg'>
               <div className="col-12 py-5 row center">
                     <h3  className="pt-5" style={{color:"yellow"}}>choose your music</h3>
               </div>
               </div>
    )

}
}
export default Music;