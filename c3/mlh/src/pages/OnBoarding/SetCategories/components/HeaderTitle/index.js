import React from "react";
import { Icon } from "e-ui-react";

const HeaderTitle = () =>{
    return (<>
        <div align="center" style={{ paddingBottom:'25px' }}>
                <div className="mtop25p">
                    <div>
                        <h2 className="mtop15p mlh-intro-heading" style={{ color:'#000 '}}>
                            Personalize Your Interests to Explore
                        </h2>
                    </div>
                </div>
                <div style={{ fontSize:'16px', color:'#555' }}>Choose the topics you'd like to see in your MyLocalHook feed. 
                    You can change your interests anytime.<br/> Your Feed will be personalized based on your location and interests. 
                    We will show you what matters most in your community. 
                </div>
        </div>
    </>);
};

 export default HeaderTitle;