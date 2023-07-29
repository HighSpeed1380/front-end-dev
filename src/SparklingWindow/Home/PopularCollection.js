import React from "react";
import './Home.css';
import './Home-mob.css';

import necklaceCollection from './img/necklace-collection-display.svg'
import decor from './img/display-decor.svg'
import necklace from './img/necklace.svg'
function PopularCollection(popular_collection){

    let popular_collection_jewllery=[]
    // alert(JSON.stringify(top_categories));
    console.log(typeof(popular_collection))
    if(popular_collection){
        console.log(popular_collection)
        Object.keys(popular_collection).map((key) => {
        console.log("-->"+popular_collection[key])
        popular_collection_jewllery.push(

            <div className="popular-collection-box">
            <img src={necklace} className="popular-collection-img-box" style={{'with':'100%'}}/>
            <p>{popular_collection[key]["name"]}</p>
            <div style={{'display':'flex',flexDirection:'row','width':'80%','column-count': 3,'column-gap': '40px'}}>
                <h3 style={{textAlign:'left','line-height':'25px','margin':0,'width':'60%'}}>{popular_collection[key]['currency']+" "+popular_collection[key]["price"]}</h3>
                <svg tyle={{textAlign:'right','width':'20%'}} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4938 0.801249C18.5893 2.02215 20.0628 4.50088 19.9979 7.3931C19.917 11.0022 17.1073 14.1867 12.3194 17.0308C11.6095 17.4525 10.8612 18 10 18C9.1551 18 8.3746 17.4431 7.68057 17.0308C2.89274 14.1867 0.0829997 11.0022 0.00205969 7.3931C-0.0628003 4.50088 1.41065 2.02215 3.50615 0.801249C5.46612 -0.340681 7.92814 -0.346811 10 1.33847C12.0719 -0.346811 14.5339 -0.340681 16.4938 0.801249ZM15.487 2.52934C14.0933 1.71733 12.3513 1.74621 10.8427 3.27162C10.3801 3.73937 9.6199 3.73937 9.1573 3.27162C7.64871 1.74621 5.90669 1.71733 4.51299 2.52934C3.06856 3.3709 1.95242 5.15746 2.00156 7.3482C2.05789 9.8602 4.04114 12.5426 8.702 15.3113C9.1099 15.5536 9.5362 15.8651 10 15.9939C10.4638 15.8651 10.8901 15.5536 11.298 15.3113C15.9589 12.5426 17.9421 9.8602 17.9984 7.3482C18.0476 5.15746 16.9314 3.3709 15.487 2.52934Z" fill="#565656"/>
                </svg>

                <svg style={{textAlign:'right','width':'20%'}}  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 17C6.32843 17 7 17.6716 7 18.5C7 19.3284 6.32843 20 5.5 20C4.67157 20 4 19.3284 4 18.5C4 17.6716 4.67157 17 5.5 17ZM15.5 17C16.3284 17 17 17.6716 17 18.5C17 19.3284 16.3284 20 15.5 20C14.6716 20 14 19.3284 14 18.5C14 17.6716 14.6716 17 15.5 17ZM1.13776 0C2.71168 0 4.018 1.21634 4.13014 2.78626L4.1454 3H17.8018C19.0496 3 19.9927 4.13009 19.7695 5.35777L18.1332 14.3578C17.9603 15.3088 17.132 16 16.1654 16H4.93112C3.88184 16 3.01096 15.1891 2.9362 14.1425L2.13522 2.92875C2.09784 2.40545 1.6624 2 1.13776 2H1C0.44772 2 0 1.55228 0 1C0 0.44772 0.44772 0 1 0H1.13776ZM17.8018 5H4.28826L4.93112 14H16.1654L17.8018 5Z" fill="#565656"/>
                </svg>

            </div>
        </div>
        
);
      });

    return(
        <div className="top-category-display" >
            <br/>
            <div style={{"textAlign":"center","margin":"0 auto"}}>
            <h1 className="collection-text" style={{"textAlign":"center","padding-left":"5%","padding-right":"5%"}}>What We Do</h1>
            <p style={{"textAlign":"center",width:"80%","padding-left":"10%","padding-right":"10%","font-size": "20px","color": "#000000"}}>In +Safe, we offer jewellery collection of a wide range<br/> of styles Our goal is to provide excellent customer service and make sure our <br/>clients are satisfied with their purchase.</p>
            <a href="https://github.com/confederacie" className="shop-now-button" style={{'text-decoration':'none'}}>Shop Now</a>

            </div>
            <br/>



            <h1>Popular Categories</h1>

            <div className="popular-collection-flex">
                {popular_collection_jewllery}
            </div>

            <br/>
            <div style={{'textAlign':'center',width:'100%'}}>
            <a href="https://github.com/confederacie" className="shop-now-button" style={{'text-decoration':'none',textAlign:'center','background':'none','color':'#000','border':'1px solid #000'}}>Shop Now</a>
            </div>
        </div>

        
    );

}
else{
    return(
        <div className="top-category-display" >
            <br/>
            <div style={{"textAlign":"center","margin":"0 auto"}}>
            <h1 className="collection-text" style={{"textAlign":"center","padding-left":"5%","padding-right":"5%"}}>What We Do</h1>
            <p style={{"textAlign":"center",width:"80%","padding-left":"10%","padding-right":"10%","font-size": "20px","color": "#000000"}}>In +Safe, we offer jewellery collection of a wide range<br/> of styles Our goal is to provide excellent customer service and make sure our <br/>clients are satisfied with their purchase.</p>
            <a href="https://github.com/confederacie" className="shop-now-button" style={{'text-decoration':'none'}}>Shop Now</a>

            </div>
            <br/>
            </div>
    ); 
}
}
export default PopularCollection;