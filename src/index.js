import React,{ Component } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/NHaasGroteskTXPro-55Rg.ttf'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeaderNav from './navigation/header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
      <HeaderNav/>
      <Routes>
        <Route exact path="/" element={<App/>}/>
      </Routes>
      {/* <Routes>
          <Route exact path ="/" element={<LandingPage/>} />
          <Route exact path ="/visualization" element={<Visualization/>} />
          <Route exact path ="/governance" element={<Governance/>} />
          <Route exact path ="/virtualization" element={<Virtualization/>} />
          <Route exact path ="/prototyping" element={<Prototyping/>} />
          <Route exact path ="/software-development" element={<SoftwareDevelopment/>} />
          <Route exact path ="/augmented" element={<CandidatePage/>} />
          <Route exact path ="/contact" element={<Contact/>} />


        </Routes> */}
        {/* <BottomNavigation/> */}
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
