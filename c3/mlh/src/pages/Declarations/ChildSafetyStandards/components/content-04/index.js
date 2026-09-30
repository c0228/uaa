import React from "react";

const Content04 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook strictly prohibits Child Sexual Abuse Material (CSAM).</div>
    <div className="mtop15p">
        CSAM includes visual, audio, written, or other material that sexually exploits or depicts the sexual 
        abuse or exploitation of children.
    </div>
    <div className="mtop15p">Users must not:</div>
    <ul>
        {["Upload CSAM.", "Download or distribute CSAM through MyLocalHook.", "Request CSAM from another user.", 
        "Offer or sell CSAM.", "Link to CSAM.", "Store CSAM using MyLocalHook services.", "Encourage others to obtain CSAM.",
        "Use coded language or other methods to facilitate the distribution of CSAM.",
        "Attempt to evade content moderation systems relating to CSAM."]?.map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}
    </ul>
    <div className="mtop15p">We may remove prohibited material and take appropriate action against accounts 
        involved in such activity.</div>
    <div className="mtop15p">Where legally required or appropriate, MyLocalHook may report suspected CSAM or 
        related activity to relevant authorities or organizations responsible for combating child exploitation.</div>
 </div>);
};

export default Content04;