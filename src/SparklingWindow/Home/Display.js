import React from "react";
import './Home.css';
import './Home-mob.css';
import decor from './img/display-decor.svg'
function Display(data){
    // alert(JSON.stringify(data["top_categories"]))
    return(
        <div className="home-display">
            
            {/* <div className="div-50" style={{'justify':'right','margin-top':'65px'}}> */}
                <div style={{'margin-top':'15vh','margin-left':'10%'}}>
                <div className="home-display-heading-text-h1" style={{"font-size": "74px","width":"80%"}}>Elevate your style with our luxury jewelry collection</div>
                <br/>
                <p className="display-heading-tag-h1">Shop now and discover the perfect price </p>
                <br/>
                <a href="https://github.com/confederacie" className="shop-now-button" style={{'text-decoration':'none'}}>Shop Now</a>

                </div>
                <div style={{'position':'relative','width':'50%','margin-left':'2%','margin-top':'80px','margin-left':'5%','bottom':'0','textAlign':'center'}}>
                <img src={decor} style={{'position':'relative','width':'70%','margin':'0 auto','margin-top':'30px','bottom':'0px','height':'100%'}}/>
                </div>
            {/* </div> */}

            {/* <div className="div-50"  style={{'margin-top':'0vh'}}>
            <img src={jewelery} style={{height:'auto',width:'100%'}} className="div-50-img"/>
            </div> */}
            
        </div>
    );


}
export default Display;