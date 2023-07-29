import React from "react";
import './Home.css';
import './Home-mob.css';

import necklaceCollection from './img/necklace-collection-display.svg'
import decor from './img/display-decor.svg'
function NecklaceCollection(){

    
    return(
        <div className="necklace-category-display" >
 

            <div style={{"text-align":"center","padding":"5%","margin-bottom":'50px'}}><h1 className="collection-text" style={{'color':'#666666'}}>✨ Our collection features a </h1><h1 className="collection-text" style={{'color':'#000}'}}>wide range of styles, from Classics and elegant to trendy and modern.✨</h1></div>
            

            <div className="necklace-collection-display" >
            
            <div className="div-50" style={{'justify':'right','margin-top':'20%'}}>
                <div style={{"font-size": "44px","font-weight":"500"}}>Necklace Collection</div>
                {/* <div className="home-display-heading-text-h1 underline" style={{color: "#FDD231","margin-bottom":"20px"}}>Come Alive</div> */}
                <p className="display-heading-tag-h1" style={{'color':'#000'}}>Introducing our stunning necklace collection, featuring a wide range of styles to suit every taste. From delicate, dainty pieces to bold, statement designs, our collection has something for every occasion. </p>
                <a href="https://github.com/confederacie" className="shop-now-button" style={{'float':'left','text-decoration':'none'}}>Shop Now</a>
                <div style={{'position':'relative','width':'80%','margin':'0 auto','margin-top':'30px','bottom':'0'}}>
                <img src={decor} style={{'position':'relative','width':'100%','margin':'0 auto','margin-top':'30px','bottom':'0px','height':'100%'}}/>
                </div>
            </div>

            <div className="div-50"  style={{'margin':'5%'}}>
            <img src={necklaceCollection} style={{height:'auto',width:'100%'}} className="div-50-img"/>
            </div>
            
        </div>
        
        </div>
    );


}
export default NecklaceCollection;