import React from "react";
import ProfileImg from "@Pages/OnBoarding/SetProfile/assets/profile.png";
import './index.css';

const LeftContainer = () =>{
 return (<>
    <div>
    {/* Text Content */}
    <div style={{ padding:'15px' }}>
        <h1 className="intro-heading mb-3">
            Let's Set Up Your Profile!
        </h1>

        <p className="intro-description mx-auto mx-lg-0 mb-0">
            Create your personal profile and let your community know who you are.
            <br />
            Connect with people, discover local updates, and explore what matters to you.
        </p>
    </div>
    <div align="center">
        <img src={ProfileImg} style={{ width:'75%', height:'auto' }}/>
    </div>

</div>
 </>);
};

export default LeftContainer; 