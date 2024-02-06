import React from "react";

const Title = ({ name })=>{
 return (<>
    <div className="mbot15p" style={{ borderBottom:"2px solid #953062" }}>
     <h4 className="bs-header" style={{ marginBottom:"5px", color:"#953062" }}><b>{name}</b></h4> 
    </div>
 </>);
};

export default Title;