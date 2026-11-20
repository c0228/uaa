import React from "react";
import './index.css';

const AuthorIdentity = () =>{
 return (<>
  <div className="newsFeedModule-authorIdentity-section">
    <div className="newsFeedModule-authorIdentity-leftContainer">
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80" 
            className="newsFeedModule-authorIdentity-profilePic" />
    </div>
    <div className="newsFeedModule-authorIdentity-rightContainer">
        <div className="newsFeedModule-authorIdentity-rightContainer-panel">
            <div style={{ marginBottom:'2px' }}><b>Dr. Aris Thorne</b></div>
            <span className="newsFeedModule-authorIdentity-rightContainer-badge">Local Business Owner</span>
        </div>
    </div>
 </div>
 </>);
};

export default AuthorIdentity;

