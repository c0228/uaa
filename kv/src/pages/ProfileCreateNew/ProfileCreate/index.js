import React from "react";
import { Pill, Colors, Alert, UrlParams } from "e-ui-react";
import MentionProfile from "./components/MentionProfile/index.js";
import CommunityBackground from "./components/CommunityBackground/index.js";
import ContactInformation from "./components/ContactInformation/index.js";
import FamilyBackground from "./components/FamilyBackground/index.js";
import PreferenceOfSpouse from "./components/PreferenceOfSpouse/index.js";
import UploadPicture from "./components/UploadPicture/index.js";
import Finish from "./components/Finish/index.js";
// import NewProfileComponents from "./components/NewProfileComponents/index.js";
const ProfileCreate = ()=>{
 const url = UrlParams().baseUrl;
 return (<>

 <div className="mtop15p mbot15p" style={{borderBottom:"2px solid #630062"}}>
    <h4 className="bs-header" style={{marginBottom:"5px", color:"rgb(149, 48, 98)"}}><b>Create new Profile</b></h4> 
 </div>

 <div className="mtop15p">
    <Alert type="success" show={true} body={<div>Success! Indicates a successful or positive action</div>} />
 </div>

 <Pill mode="vertical" 
        layout={{
            menu:{ xs:'3', sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
            content:{  xs:'9', sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' }
        }}
        menulinks={[
            { id:'MentionProfile', url: url+'CreateNewProfile#MentionProfile', label:'Mention Profile', content:(<MentionProfile />) },
            { id:'CommunityBackground', url: url+'CreateNewProfile#CommunityBackground', label:'Community Background', content:(<CommunityBackground />) },
            { id:'ContactInformation', url: url+'CreateNewProfile#ContactInformation', label:'Contact Information', content:(<ContactInformation />) },
            { id:'FamilyBackground', url: url+'CreateNewProfile#FamilyBackground', label:'Family Background', content:(<FamilyBackground />) },
            { id:'PreferenceOfSpouse', url: url+'CreateNewProfile#PreferenceOfSpouse', label:'Preference of Spouse', content:(<PreferenceOfSpouse />) },
            { id:'UploadPicture', url: url+'CreateNewProfile#UploadPicture', label:'Upload Picture', content:(<UploadPicture />) },
            { id:'Finish', url: url+'CreateNewProfile#Finish', label:'Finish', content:(<Finish />) }]} 
        activeId="MentionProfile" 
        colorConfig={{
            active: { color: Colors.light, backgroundColor: Colors.primary },
            default: { color: Colors.secondary, backgroundColor: '' }
    }} />

 </>);
};

export default ProfileCreate;

