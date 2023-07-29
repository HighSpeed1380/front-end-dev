import React from "react";
import './Home.css';
import './Home-mob.css';

import jewelery from './img/head-jewellery.svg'
import decor from './img/necklace.svg'
import earing from './img/earing.svg';
function TopCategories(top_categories){
    let top_categories_jewllery=[]
    // alert(JSON.stringify(top_categories));
    console.log(typeof(top_categories))
    if(top_categories){
        console.log(top_categories)
        Object.keys(top_categories).map((key) => {
        console.log("-->"+top_categories[key])
        top_categories_jewllery.push(
        <div className="category-box" style={{'background-image':'url('+top_categories[key]["image_link"][0]+')'}}>
        {top_categories[key]['name']}
    </div>);
      });
    return(
        <div className="top-category-display" >
            <h1>Top Categories</h1>
            <div className="category-flex">
            {/* <div className="category-box" style={{'background-image':'url('+earing+')'}}>
                Earings
            </div>
            <div className="category-box" style={{'background-image':'url('+earing+')'}}>
                Earings
            </div>
            <div className="category-box" style={{'background-image':'url('+earing+')'}}>
                Earings
            </div>
            <div className="category-box" style={{'background-image':'url('+earing+')'}}>
                Earings
            </div>
            <div className="category-box" style={{'background-image':'url('+earing+')'}}>
                Earings
            </div> */}
            {top_categories_jewllery}
            </div>

        </div>
    );
    }
    else{
        return(<div></div>)
    }


}
export default TopCategories;