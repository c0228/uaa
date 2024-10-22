import React from "react";
import Title from '@Templates/Title/index.js';
import ProfileList from '@Templates/ProfileList/index.js';

const PeopleWatchedYou = ()=>{
 return (<>
    <Title name="People Watched You" />
    <ProfileList partition={{ xl: 4, xxl: 3 }} />
 </>);
};

export default PeopleWatchedYou;