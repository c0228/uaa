import React from "react";

const Content16 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook allows users to create and publish content.</div>
    <div className="mtop15p">This may include:</div>
    <ul>
    {["Posts;", "Hooks;", "Comments;", "Photos;", "Videos;", "Questions;", "Community discussions;", 
    "Ideas;", "Polls;", "Survey responses where applicable;", "Events;", "Reviews;", 
    "Business-related content;", "Other user-generated material."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
    </ul>
    <div className="mtop15p">Information that you voluntarily publish publicly may be 
      visible to other users and may be copied, shared, indexed, or redistributed by others.</div>
    <div className="mtop15p">Users should therefore avoid publishing personal information that 
      they do not want publicly available.</div>
 </div>);
};

export default Content16;