import React from "react";
import NavBar from "./components/NavBar";
import './style.css';
import Facebook from './images/facebook.png';
import Twitter from './images/twitter.png';
import Reddit from './images/reddit.png';

function App() {
  return (
    <>
    <NavBar/>

    <div className="home-port">
      
      <h1>My Portfolio</h1>
      <p>Justin Louise Ferdes</p>
      
    </div>

    <div className="social-links">
    <a href ="https://www.facebook.com/justinlouise.ferdes.3" target="_blank"><img src={Facebook} alt="facebook" className="icons"/></a>
    <a href ="https://twitter.com/Chunpun2" target="_blank"><img src={Twitter} alt="Twitter" className="icons"/></a>
    <a href ="https://www.reddit.com/user/Chunpunmaru" target="_blank"><img src={Reddit} alt="Reddit" className="icons"/></a>
    

    </div>
    </> 
  );
}

export default App;
