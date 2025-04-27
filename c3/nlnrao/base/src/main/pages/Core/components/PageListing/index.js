import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const PageListing = ({ data }) =>{

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (<div style={{ marginTop:'15px'}}>
        <OrderList order="ol" type="I" data={data?.map((d,i)=>{
                return (<span id={d?.id} key={i} style={{ color:'#333', cursor:'pointer' }} 
                            onClick={()=>scrollToSection(d?.id)}><u><b>{d?.label}</b></u></span>);
            })} />
    </div>);
 };

 export default PageListing;