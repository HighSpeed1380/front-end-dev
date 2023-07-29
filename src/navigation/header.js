import React from "react";
import { useState } from "react"
import './header.css';
import logo from './img/logo.svg';
import cart from './img/cart.svg';

import notify from './img/notify.svg'
import chat from './img/chat.svg'

import hamburger from './hamburger.svg';
import { Link } from "react-router-dom";

function HeaderNav(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return(
        <nav className="navigation">
        <a href="/" className="brand-name">
        <img src={logo} style={{"margin-left":"25%","height":"50px"}}/> +Safe
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
         <img src={hamburger} style={{width:'100%'}}/>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
            <Link to="/" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }}  style={{"color":"#555555"}}>Home</Link>
            </li>
            <li>
            <Link to="/jewellery" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }} style={{"color":"#000"}}>Jewellery Categories</Link>
            </li>
            <li>
              <Link to="/product" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }} style={{"color":"#FF0000"}}>Product Details</Link>
            </li>
            <li>
              <Link to="/store" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }}>Store</Link>
            </li>
            <li>
              <Link to="/social" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }}>Store</Link>
            </li>
            <li style={isNavExpanded ? {"display":"block"} : {"display":"none"}}>
              <Link to="/virtualization" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }} style={{"color":"#FF0000"}}>Sign Up</Link>
            </li>
            <li style={isNavExpanded ? {"display":"block"} : {"display":"none"}}>
              <Link to="/virtualization" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }} style={{"color":"#FF0000"}}>Login</Link>
            </li>
            {/* <li>
              <Link to="/governance" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }}>Governance</Link>
            </li> */}
            {/* <li>
              <Link to="/prototyping" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }}>Prototyping</Link>
            </li> */}


            
          </ul>
        </div>
        <input type="text" className="search-text-box" placeholder="Search Name of Jewellery, brand and type"/>

        <div style={{'padding-left':'3%'}}>
            <img src={cart}/>
        </div>
        <div style={{'padding-left':'3%'}}>
            <img src={notify}/>
        </div>
        <div style={{'padding-left':'3%'}}>
            <img src={chat}/>
        </div>
        
        <div className="login-configs" >
           |
        </div>
        <div className="login-configs" >
            Sign Up
        </div>
        <div className="login-button">
            Login
        </div>
</nav>
    );
}
export default HeaderNav;