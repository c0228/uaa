import React from "react";

const AuthorIdentity = () =>{
 return (<>
  <div style={{ display:'flex', flexDirection:'row' }}>
    <div style={{ width:'15%'}}>
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80" 
            style={{ width:'45px', height:'45px', borderRadius:'50%' }} />
    </div>
    <div style={{ width:'75%'}}>
        <div style={{ marginTop:'2px' }}>
            <div><b>Dr. Aris Thorne</b></div>
            <span style={{ fontSize:'12px', border:'1px solid #ccc', padding:'3px 8px', 
                borderRadius:'5px', backgroundColor:'#eee', color:'#555' }}>Local Business Owner</span>
        </div>
    </div>
 </div>
 </>);
};

export default AuthorIdentity;