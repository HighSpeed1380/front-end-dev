import React from "react";
import './Product.css';
import './Product-mob.css';
import necklace from './img/necklace.svg'
import our_Brand from './img/ourBrand.svg'
function OurBrand(){
    return(
        <div className="our-brand-display" >
        

        <div className="product-description-display" >

        <div className="div-50" style={{'justify':'right'}}>
        <div style={{"font-size": "20px","font-weight":"500",'color':'#C58940'}}>Our Brand</div>
        <br/>
            
            <div style={{"font-size": "34px","font-weight":"500"}}>Elevate your style with our luxury jewelry collection</div>
            
            <p className="display-heading-tag-h1" style={{'color':'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
<br/>
<br/>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<br/>
<br/>
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br/>
            <br/>

            
        
        </div>

        <div className="div-50"  style={{'margin-right':'5%'}}>
        <img src={our_Brand} style={{height:'auto',width:'100%'}} className="div-50-img"/>
        </div>
        
    </div>
    
    </div>
    );


}
export default OurBrand;