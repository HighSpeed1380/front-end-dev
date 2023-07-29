import React from "react";
import './StorePage.css';
import './Product-mob.css';
import necklace from './img/necklace.svg'
import decor from './img/display-decor.svg'
function Display(store){
    return(
        <div className="store-head" >
            <br/>
            <div className="store-header-flex">
                <h3> 
                   <div className="profile-image"></div>

                </h3>
                <div> 
                    <h3>{store['company_name']}</h3>
                    <p>{store['sub_heading']}</p>
                    <p>(200 Reviews)</p>
                    <p>{store['company_description']}</p>
                    <div>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9999 0.440002C5.16818 0.440002 0.439941 5.16824 0.439941 11C0.439941 16.2941 4.3401 20.6659 9.42122 21.4298V13.7984H6.8085V11.0229H9.42122V9.17576C9.42122 6.11776 10.9111 4.77576 13.4525 4.77576C14.6695 4.77576 15.3137 4.8664 15.6182 4.90688V7.32952H13.8846C12.8057 7.32952 12.4291 8.35296 12.4291 9.50576V11.0229H15.5909L15.1623 13.7984H12.4291V21.4518C17.5832 20.753 21.5599 16.346 21.5599 11C21.5599 5.16824 16.8317 0.440002 10.9999 0.440002Z" fill="#A45100"/>
</svg>
        
                    </div>
                </div>
                <h3> 
                    Checking<br/>CHecking 2<br/>Checking 3

                </h3>
            </div>
 
    </div>
    );


}
export default Display;