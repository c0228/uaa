import React from "react";
import { useParams } from 'react-router-dom';

const Web3Terminologies = () =>{
 const { input } = useParams(); 
 return (<div>
{input}
 </div>);
};

export default Web3Terminologies;