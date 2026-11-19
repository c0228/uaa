import React from "react";
import ProfileImg from "@Pages/OnBoarding/SetProfile/assets/profile.png";

const LeftContainer = () =>{
 return (<>
    <div>
    {/* Text Content */}
    <div className="mlh-setProfile-leftContainer-header">
        <h1 className="mlh-intro-heading mb-3" style={{ color: '#000'}}>Let's Set Up Your Profile!</h1>
        <p className="mlh-intro-description mx-auto mx-lg-0 mb-0"  style={{ color: '#555'}}>
            Create your personal profile and let your community know who you are.
            <br />
            Connect with people, discover local updates, and explore what matters to you.    
        </p>
    </div>
    <div align="center">
        <img src={ProfileImg} className="mlh-setProfile-leftContainer-img" />
    </div>
    </div>
 </>);
};

export default LeftContainer; 