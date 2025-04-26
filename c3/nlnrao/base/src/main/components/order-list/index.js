import React from "react";

const OrderList = ({ order, type, data }) =>{
 if(order==='ol'){
  return (<ol type={type}>
    {data?.map((d,i)=>{
      return (<li key={i} className="mtop5p lh25p">{d}</li>);
    })}
   </ol>);
 } else {
  return (<ul>
    {data?.map((d,i)=>{
      return (<li key={i} className="mtop5p lh25p">{d}</li>);
    })}
   </ul>);
 }
};

export default OrderList;