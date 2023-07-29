import React from "react";
import './Product.css'
import './Product-mob.css'
import Display from './Display'
import OurBrand from './OurBrand'
import OurCollection from './OurCollection'
function Product(){
    return(
        <div>

        <Display/>
        <OurBrand/>
        <OurCollection/>
        </div>
    );


}
export default Product;