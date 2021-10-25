import React,{Component} from "react";
import TableFood from "./bookATable";
class Food extends Component{
    render(){
        return (
         <div> 
        <div id="food-back" className="d-flex align-items-center">
                < div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                    <div class="row">
                        <div class="col-lg-8">
                            <h1>Welcome to <span>WE EVENtS</span></h1>
                            <h2>Organize your magic night for more than 18 years!</h2>

                        </div>
                    </div>
                
                </div>
            </div>
            <TableFood/>
            </div>  
          );
        }
      ;
    }
     export default Food;