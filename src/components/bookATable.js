import React,{Component} from "react";
function TableFood(){
    return(
        <div>
        <section id="fero" className="book-a-table">
                    <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Book a Table</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                        <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                        <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                        <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                        <div className="validate" />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                        <div className="validate" />
                    </div>
                    <div className="btn-block"> 
                        <button type="submit">Submit</button>
                        <div id="button"><a href="index.html">Back</a></div>
                        <style dangerouslySetInnerHTML={{__html: "\n             #button {\n                 width: 6em;\n                 border: 2px solid green;\n                 background: #ffe;\n                 border-radius: 5px;\n             }\n             a {\n                 display: block;\n                 width: 100%;\n                 line-height: 2em;\n                 text-align: center;\n                 text-decoration: none;\n                 border-radius: 5px;\n             }\n             a:hover {\n                 color: red;\n                 background: #eff;\n             }\n             \n             " }} />
                    </div>
                    </div></section>&lt;
                    </div>
                    
   )}

export default TableFood;