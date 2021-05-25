import React from 'react';

const MobileHeader = ({ setOpen}) => {
    return (
        <div>

        <nav className="nav">
        
        <ul className="mobile-links">
          <li>
            <a id="homeheader" href="homeID" onClick= { () => setOpen(false) }>
              HOME
            </a>
          </li>

          <li>
            <a className="search" href="#searchId" onClick= { () => setOpen(false) }>
              SEARCH
            </a>
          </li>
          <li>
            <a className="favourites" href="#favouritesId" onClick= { () => setOpen(false) }>
              FAVOURITES
            </a>
          </li>
        </ul>
      
        </nav>    
        </div>
    );
};






export default MobileHeader;