import React from "react";
import './UserHome.css';
import './Product-mob.css';
import social1 from './img/social1.svg'
import social2 from './img/social2.svg'
function Display(){
    return(
        <div className="social-user-head" >
            <div className="side-bar-menu">
                Home<br/>
                Upload<br/>
                Following<hr/>
                Messages<br/>
                Notification
            </div>
            <div className="social-bar-section">
            <input type="text" className="social-text-box" placeholder="Search Name of Jewellery, brand and type"/>
            <input type="button" className="input-button-filter" text="Search"/>
            <input type="button" className="input-button-filter" text="Search" style={{"background":"#000"}}/>
<br/>
<br/>
<div style={{
"font-family": 'Neue Haas Grotesk Text Pro',
"font-style": "normal",
"font-weight": "400",
"font-size": "12px",
"line-height": "15px",

"color": "#8B8B8B"}}>Suggested Search</div>
<div style={{"display":"flex","flex-direction":"row"}}>
<div className="suggested-box">Necklace</div>
<div className="suggested-box">Necklace</div>
<div className="suggested-box">Necklace</div>
<div className="suggested-box">Necklace</div>

</div>

<div className="social-box-flex">
    <div className="content">
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div>
        </div>
        </div>
    <div className="content content-heighted" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social2}/>
    <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div>
            </div></div>
    <div  className="content" style={{"margin":"5px","padding":"5px"}}><img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
    <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div></div>
            <div className="content content-heighted" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social2}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
    <div className="content" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
    <div  className="content content-heighted" style={{"margin":"5px","padding":"5px"}}><img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social2}/>
    
    <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
    
    </div>
    <div className="content content-heighted" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social2}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
        <div className="content" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
        <div className="content" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
        <div className="content" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
        <div className="content" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>
        <div className="content" style={{"margin":"5px","padding":"5px"}}>
        <img style={{"width":"100%","margin":"5px","padding":"5px","border-radius":"15px"}} src={social1}/>
        <div style={{"display":"flex","flex-direction":"row"}}>
            <div className="social-profile-img"/>
            <div style={{"margin-left":"5px"}}>
                <p className="social-profile-text">Rohit Jain</p>
                <p className="social-profile-follower">572  follower</p>

            </div></div>
        </div>


</div>




            </div>
            
 
    </div>
    );


}
export default Display;