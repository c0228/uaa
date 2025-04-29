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
        <ol type="I">
          {data?.map((d,i)=>{
                return (<li id={d?.id} key={i} style={{ marginTop:'10px', color:'#333', cursor:'pointer' }} 
                            onClick={()=>scrollToSection(d?.id)}><u><b>{d?.label}</b></u></li>);
          })}
        </ol>
    </div>);
 };

 export default PageListing;