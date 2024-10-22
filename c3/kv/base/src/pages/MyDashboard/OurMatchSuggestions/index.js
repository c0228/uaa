import React from "react";
import Title from '@Templates/Title/index.js';
import ProfileList from '@Templates/ProfileList/index.js';

const OurMatchSuggestions = ()=>{
 return (<>
    <Title name="Our Match Suggestions" />
    <ProfileList partition={{ xl: 4, xxl: 3 }} />
 </>);
};

export default OurMatchSuggestions;