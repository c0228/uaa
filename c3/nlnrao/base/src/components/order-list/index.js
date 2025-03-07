import React from "react";

const OrderList = ({ data }) =>{
 return (<ul>
  {data?.map((d,i)=>{
    return (<li key={i} className="mtop5p lh25p">{d}</li>);
  })}
 </ul>);
};

export default OrderList;