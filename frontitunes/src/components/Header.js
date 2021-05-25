import React from "react";
import MobileHeader from "./mobileHeader"
import {useState} from "react"

//Here I use react router dom for the favourites page  to link favourites and home

const Header = () => {

  const[open, setOpen] = useState(false);


  return (
    <div>
    <nav className="nav">
      <div className="logo">ITUNES</div>
    
        <ul className = "nav-links">
          <li>
            <a id="homeheader" href="homeID">
              HOME
            </a>
          </li>

          <li>
            <a className="search" href="#searchId">
              SEARCH
            </a>
          </li>
          <li>
            <a className="favourites" href="#favouritesId">
              FAVOURITES
            </a>
          </li>
        </ul>
    <div className="burger" onClick= { () => setOpen(!open) }>
    <div className ="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
    </div>
    
    </nav>
    
    {open === true ? ( 
    
    <MobileHeader   setOpen={setOpen}/>

    ) : (
        ""
      )}
      
      </div>
  );
};

export default Header;
