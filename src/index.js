import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeaderNav from './navigation/header';

import Home from "./SparklingWindow/Home/Home";
import JewelleryCollection from './SparklingWindow/JewelleryCollection/JewelleryCollection';
import Product from './SparklingWindow/Product/Product';
import StorePage from './SparklingWindow/StorePage/StorePage';
import UserHome from './SparklingWindow/UserHome/UserHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
      <HeaderNav/>
      <div className="content-display">

      <Routes>
        HeaderNav
          <Route exact path ="/" element={<Home/>} />
          <Route exact path ="/jewellery" element={<JewelleryCollection/>} />
          <Route exact path ="/product" element={<Product/>} />
          <Route exact path ="/store" element={<StorePage/>} />
          <Route exact path ="/social" element={<UserHome/>} />


        </Routes>
        </div>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
