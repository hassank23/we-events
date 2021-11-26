import React, { Component } from "react";
import { Form, Label, FormGroup, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import Menu from "./menu";
class Avenue extends Component {  
   
render(){


  const submitForm = async () => {
    console.log("Submitting complete");
  };
  
    return(<div className="col-12" >
        
             <div className="py-5 row-content">
               <div className=" row py-4  center">
                     <h3  className="pt-5" style={{color:"yellow"}}>choose your avenue</h3>
               </div>
            </div>
            <div className="row">
               <Menu/>
             
                          <div onClick={submitForm}>
                                    <button type="submit" className="btn mb-5 center col-5 ">
                                       submit
                                    </button>
                            </div>
                               
            </div>
               
              
           </div>
    )}
}

export default Avenue;