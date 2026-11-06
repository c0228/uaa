import React from "react";
import { Icon } from "e-ui-react";
import OnBoardHeader from "@Components/UIElements/OnBoardHeader";

const HeaderTitle = () =>{
    return (<>
        <div align="center">
                <div className="mtop25p">
                    <OnBoardHeader label1="Personalize" label2="Your Interests" label3="to Explore" />
                    <h2 style={{ fontSize: '28px', fontFamily: 'Metropolis', letterSpacing: '0.4px', marginTop:'15px' }}>
                        <b>What are you interested in?</b>
                    </h2>
                </div>
                <div style={{ fontSize:'16px', color:'#555' }}>Choose the topics you'd like to see in your MyLocalHook feed. 
                    You can change your interests anytime.<br/> Your Feed will be personalized based on your location and interests. 
                    We will show you what matters most in your community. 
                </div>
                <div>
                    
                </div>
                <div className="mtop5p">
                    <span style={{ textTransform:'uppercase', fontSize:'13px', color:'#888', marginRight:'5px' }}><b>Stay informed |</b></span>
                    <span style={{ backgroundColor:'#e8e9f9', fontSize:'12px', color:'#27187e', padding:'6px', border:'1px solid #27187e', borderRadius:'8px' }}>
                            <Icon type="FontAwesome" name="fa-bolt" size={11} style={{ marginLeft:'5px', marginRight:'5px' }} />
                            <span style={{ marginRight:'5px' }}>Personalize Your Feed</span>
                    </span>
                    <span style={{ textTransform:'uppercase', fontSize:'13px', color:'#888', marginLeft:'5px' }}><b>| Stay Connected</b></span>
                </div>
        </div>
    </>);
};

 export default HeaderTitle;