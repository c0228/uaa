import React from "react";
import { useParams } from "react-router-dom";

const Review = ({ data }) =>{
 const { lang } = useParams();
 return (<div>
    <div><h5><b>4. {data?.[lang+"Label"]}</b></h5><hr/></div>
 </div>);
};

export default Review;