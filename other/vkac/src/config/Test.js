import React from "react";
import { Badge } from 'e-ui-react';
import Header from './../pages/Header/index.js';

const Test = ()=>{
 return (
 <>
    <Header activeMenu="students" />
    <Badge type="primary" label="Primary" size={12} />
 </>);
};

export default Test;