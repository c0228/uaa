import React, { useContext } from "react";
import GoBack from "./components/GoBack/index.js";
import ProfileCard from "./components/ProfileCard/index.js";
import ProjectList from './components/ProjectList/index.js';

const LeftContainer = ()=>{
 
 return (<>
 <GoBack />
 <ProfileCard />
 <ProjectList />
 </>);
};

export default LeftContainer;