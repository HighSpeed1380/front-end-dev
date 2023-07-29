import React from "react";
import './StorePage.css';
import './Product-mob.css';
import necklace from './img/necklace.svg'
import our_Brand from './img/ourBrand.svg'
function Story(){
    return(
        <div className="story-list" >
        <div className="story"> 
        <div className="story-frame">
            <img src={our_Brand} />
        </div>
        Earings
        </div>
        <div className="story"> 

        <div className="story-frame">
            <img src={necklace} />
        </div>
        Necklace
       </div>
       <div className="story"> 
        <div className="story-frame">
            <img src={our_Brand} />
        </div>
        Earings
        </div>
        <div className="story"> 
        <div className="story-frame">
            <img src={our_Brand} />
        </div>
        Earings
        </div>
        <div className="story"> 
        <div className="story-frame">
            <img src={our_Brand} />
        </div>
        Earings
        </div>
        <div className="story"> 
        <div className="story-frame">
            <img src={our_Brand} />
        </div>
        Earings
        </div>
    
    </div>
    );


}
export default Story;