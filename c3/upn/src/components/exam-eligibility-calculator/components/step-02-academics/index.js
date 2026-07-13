import React from "react";
import { useParams } from "react-router-dom";

const Academics = ({ data }) =>{
 const { lang } = useParams();
 return (<div>
    <div><h5><b>2. {data?.label}</b></h5><hr/></div>
 </div>);
};

export default Academics;