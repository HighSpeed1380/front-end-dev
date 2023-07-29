import React,{useState,useEffect} from "react";
import axios from 'axios';
import './StorePage.css'
import './Product-mob.css'
import necklace from './img/necklace.svg'
import our_Brand from './img/ourBrand.svg'
import earing from './img/necklace.svg'
function Offer(post){
    let offers=[];
    Object.keys(post['offer']).map((key) => {
        console.log("-->"+post[key])
        offers.push(

            <div className="offer-category" style={{'background-image':'url('+earing+')'}}>
           { post['offer'][key]['offer_heading']}
        </div>
        
);
      });
return(
    <div className="store-category-display" >
    <h2>Offers</h2>
    <div className="offer-category-flex">

    {offers}
   

    
    </div>

</div>
)

}
export default Offer;
