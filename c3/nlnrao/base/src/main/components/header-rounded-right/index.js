import React from "react";

const RightRoundedHeader = ({ label }) =>{
 return (<div style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', borderRight:'1px solid #ccc',
        boxShadow:'1px 1px 1px 1px #eee',
        borderLeft:'6px solid #555', borderTopRightRadius:'25px', borderBottomRightRadius:'25px', backgroundColor:'#eee', 
        paddingLeft:'15px', paddingRight:'15px', paddingTop:'5px', paddingBottom:'1px', textTransform:'uppercase' }}>
            <span className="blog-head"><b>{label}</b></span>
    </div>);
};

export default RightRoundedHeader;