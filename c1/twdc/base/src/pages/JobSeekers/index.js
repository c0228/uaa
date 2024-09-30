import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const JobSeekers = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="JobSeekers" />
 Menu Page
 </>);
};

export default JobSeekers;