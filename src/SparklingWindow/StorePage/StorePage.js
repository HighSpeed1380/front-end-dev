import React,{useState,useEffect} from "react";
import axios from 'axios';
import './StorePage.css'
import './Product-mob.css'
import Display from './Display'
import Story from './Story'
import StoreDetails from './StoreDetails'
import Offer from './Offer';
import Collection from "../lib/Collection";
function Product(){

    const [post,setPosts]=useState(null);
    useEffect(()=>{
        axios.get('https://zm7ogo2smbqwfhnkd26iw5snuu0zczrw.lambda-url.ap-south-1.on.aws')
      .then(response => {
        setPosts(response.data["store"]);
        console.log(post)
        // alert(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
    if(post){
    return(

        <div style={{'background': '#FFFFFF'}}>

        <Display {...post}/>
        <Story/>
        <StoreDetails {...post}/>

        </div>
    );


}
else{
    return(

        <div style={{'background': '#FFFFFF'}}>
            </div>);
}
}
export default Product;