import React from "react";
import './Product.css';
import './Product-mob.css';
import necklace from './img/necklace.svg'
import decor from './img/display-decor.svg'
function Display(){
    return(
        <div className="product-display" >
            <br/>
 <p className="jewellery-coll-nav" style={{"margin-left":'5%'}}>Home &gt; Shop &gt; JewelleryCollection</p>
<br/>
        

        <div className="product-description-display" >
        <div className="div-50"  style={{'margin-right':'5%'}}>
        <img src={necklace} style={{height:'auto',width:'100%'}} className="div-50-img"/>
        <div className="jewllery-categories">
            <img src={necklace} style={{height:'auto',width:'20%','margin':'5px'}}/>
            <img src={necklace} style={{height:'auto',width:'20%','margin':'5px'}}/>
            <img src={necklace} style={{height:'auto',width:'20%','margin':'5px'}}/>
            <img src={necklace} style={{height:'auto',width:'20%','margin':'5px'}}/>
            <img src={necklace} style={{height:'auto',width:'20%','margin':'5px'}}/>



                </div>
        </div>
        <div className="div-50" style={{'justify':'right'}}>
            <div style={{"font-size": "34px","font-weight":"500"}}>Woman’s Gold Bracelet</div>
            <div style={{"font-size": "20px","font-weight":"500","color":"#666666"}}>Woman’s Jewellery</div>
            <br/>
            <div style={{"font-size": "20px","font-weight":"500"}}>Description</div>

            {/* <div className="home-display-heading-text-h1 underline" style={{color: "#FDD231","margin-bottom":"20px"}}>Come Alive</div> */}
            <p className="display-heading-tag-h1" style={{'color':'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            <br/>
            <br/>

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            
            <br/>
            <br/>
            <div style={{"font-size": "18px","font-weight":"400"}}>Select Size</div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <div style={{"font-size": "18px","font-weight":"400"}}>Select Color</div>
            <br/>
            <br/>
            <hr/>
            <br/>
            <div style={{"font-size": "18px","font-weight":"400"}}>Quantity</div>
            <br/>
            <br/>

            <a href="https://github.com/confederacie" className="shop-now-button" style={{'float':'left','text-decoration':'none'}}>Shop Now</a>
            <div style={{'position':'relative','width':'80%','margin':'0 auto','margin-top':'30px','bottom':'0'}}>
            </div>
        </div>


        
    </div>
    
    </div>
    );


}
export default Display;