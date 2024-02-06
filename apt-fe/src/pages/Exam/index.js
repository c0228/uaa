import React from "react";
import { useLocation } from "react-router-dom"; 
import Header1 from './components/Header1/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Component1 from './components/Component1/index.js';


const Exam = ()=>{
 const location = useLocation();
 return (<>
 {"data "+ location?.state?.data}
 <Header1 />
 <Component1 />
 </>);
};

export default Exam;