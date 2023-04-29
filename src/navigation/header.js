import React from "react";
import { useState } from "react"
import './header.css';
import logo from './logo.svg';
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
            <Link to="/visualization" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }} style={{"color":"#000"}}>Visualization</Link>
            </li>
            <li>
              <Link to="/virtualization" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }} style={{"color":"#FF0000"}}>Virtualization</Link>
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
            <li>
              <Link to="/software-development" onClick={() => {
              if(isNavExpanded){
                setIsNavExpanded(!isNavExpanded)
              }
          }}>Social</Link>
            </li>

            
          </ul>
        </div>
      </nav>
    );
}
export default HeaderNav;