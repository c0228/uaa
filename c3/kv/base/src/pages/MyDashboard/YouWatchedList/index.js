import React from "react";
import Title from '@Templates/Title/index.js';
import ProfileList from '@Templates/ProfileList/index.js';


const YouWatchedList = ()=>{
 return (<>
    <Title name="Your Watched List" />
    <ProfileList partition={{ xl: 4, xxl: 3 }} />
 </>);
};

export default YouWatchedList;