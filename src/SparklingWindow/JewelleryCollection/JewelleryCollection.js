import React,{useState,useEffect} from "react";
import axios from 'axios';
import './JewelleryCollection.css'
import './JewelleryCollection-mob.css'

import Collection from './../lib/Collection'
function JewelleryCollection(){

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
   <div className="jewllery-collection" >




<br/>
<p className="jewellery-coll-nav" style={{"margin-left":'5%'}}>Home &gt; Shop &gt; JewelleryCollection</p>
<br/>
<h1 style={{"margin-left":'5%'}}>Jewllery Categories</h1>
<br/>
<div className="jewellery-filter" style={{}}>
    <div className="jewllery-categories">
        <p style={{'font-weight':'bold'}}>All</p>
        <p>Rings</p>
        <p>Necklace</p>
        <p>Bracelet</p>
        <p>Earings</p>



    </div>
    <div className="sort-categoroes">
        Sort By : 
        <select>
            <option>Price</option>
            <option>Ratings</option>
            <option>Best Selling</option>

        </select>
    </div>
</div>  
    <Collection {...post['popular_collection']}/>
    <br/>
            <div style={{'textAlign':'center',width:'100%'}}>
            <a href="https://github.com/confederacie" className="shop-now-button" style={{'text-decoration':'none',textAlign:'center','background':'none','color':'#000','border':'1px solid #000'}}>Shop Now</a>
            </div>
        </div>
    </div>
);}
else{
      console.log(post);

    return(<div></div>);
}
  


}
export default JewelleryCollection;