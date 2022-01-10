import React, { Component } from "react";
import { Form, Label, FormGroup, Input, Col, FormFeedback ,Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import Menu from "./menu";
class Avenue extends Component {  
  constructor(props){
    super(props);
this.state = {
    Avenue:'',
    
    
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
console.log('Current State is: ' + JSON.stringify(this.state)+"submeting complete for your wedding");
alert('Current State is: ' + JSON.stringify(this.state));
event.preventDefault();
}
   
render(){


  
  
    return(<div className="col-12" >
        
             <div className="py-5 row-content">
               <div className=" row py-4  center">
                     <h3  className="pt-5" style={{color:"yellow"}}>choose your avenue</h3>
               </div>
            </div>
            <div className="row">
               <Menu/>
               </div>
               <Form onSubmit={this.handleSubmit}>
             <div className="row px-5">
              
             <label className="input-group-text col-2" for="inputGroupSelect01">Avenue</label>
                                <select  className="col-8" id="inputGroupSelect01" name="avenue" value={this.state.avenue}
                                        onChange={this.handleInputChange} >
                                    <option value="Life_venue">Life Venue</option>
                                    <option value="Hilton">Hilton</option>
                                    <option value="Pheonicia">Pheonicia</option>
                                    <option value="season">Four Season hotel</option>
                                  
                                </select>
                                      
             </div>
                          <div>
                                    <Link type="submit" to="/home"className="btn mb-5 center col-5 ">
                                       submit
                                    </Link>
                            </div>
                            </Form>             
            </div>
               
            
           
    )}
}

export default Avenue;
