import React,{useState,useEffect} from "react";
import axios from 'axios';
import Display from "./Display";
import TopCategories from "./TopCategories";
import NecklaceCollection from "./NecklaceCollection";
import PopularCollection from "./PopularCollection";
import Testimonials from "./Testimonials";


function Home(){
    const [post,setPosts]=useState(null);
    useEffect(()=>{
        axios.get('https://zm7ogo2smbqwfhnkd26iw5snuu0zczrw.lambda-url.ap-south-1.on.aws')
      .then(response => {
        setPosts(response.data["home"]);
        console.log(post)
        // alert(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
    if(post){
        console.log("-->"+post)
    return(
        <div>
        
        <Display {...post} />
        <TopCategories {...post["top_categories"]}/>
        <NecklaceCollection />
        <PopularCollection {...post["popular_collection"]}/>
        <Testimonials/>
        </div>
    );}
    else{
          console.log(post);

        return(<div></div>);
    }


}
export default Home;