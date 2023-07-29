import React from "react";
import './Home.css';
import './Home-mob.css';

import testimonial from './img/testimonial.svg'
import decor from './img/display-decor.svg'
function Testimonials(){

    
    return(
        <div className="testimonials-display" >

            {/* <div style={{}}> */}
            
            <div className="div-50"  style={{'margin-top':'10%','margin-left':'5%'}}>
            <img src={testimonial} style={{height:'auto',width:'100%','max-height':'450px'}} className="div-50-img"/>
            </div>
            <div className="div-50" style={{'justify':'right','margin-top':'10%'}}>
                <h3>Elevate Your Style with our</h3>
                <br/>
                {/* <div className="home-display-heading-text-h1 underline" style={{color: "#FDD231","margin-bottom":"20px"}}>Come Alive</div> */}
                <p className="display-heading-tag-h1" style={{'color':'#000'}}>"I recently visited +Safe to purchase an engagement ring and had an excellent experience. The service were incredibly helpful and knowledgeable, guiding me through the selection process and helping me find the perfect ring. </p>
                <br/>

                <h2>Maria Raposa</h2>
                </div>

            
        </div>
        
    );


}
export default Testimonials;

