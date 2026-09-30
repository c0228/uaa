import React from "react";

const Content01 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook has <b>zero tolerance for child sexual exploitation and abuse (CSEA).</b></div>
    <div className="mtop15p">We prohibit the use of MyLocalHook to:</div>
    <ul>
        {["Sexually exploit or abuse children.", "Groom children for sexual or other abusive purposes.", 
        "Produce, upload, request, distribute, share, sell, or promote child sexual abuse material (CSAM).", 
        "Facilitate sexual contact between adults and children.", 
        "Encourage or arrange meetings with children for abusive or exploitative purposes.", 
        "Sexualize children or minors.", "Encourage sexual activity involving children.",
        "Threaten, blackmail, extort, or manipulate children for sexual purposes.",
        "Recruit children for exploitation, trafficking, or abusive activities.",
        "Share personal information about a child for the purpose of facilitating harm.",
        "Direct children to external websites, services, or communities for exploitation.",
        "Circumvent MyLocalHook safety systems intended to protect minors."]?.map((r,i)=>{
            return (<li key={i}>{r}</li>);
        })}
    </ul>
    <div className="mtop15p">We may take immediate action when we identify behavior that presents a serious risk to 
        a child, including removing content, restricting accounts, suspending accounts, permanently banning users, 
        preserving relevant information where appropriate, and reporting suspected illegal activity to the appropriate 
        authorities.</div>
 </div>);
};

export default Content01;