import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select, Dropdown, Card } from "e-ui-react";
import StaticProfileForm from "@Pages/Home/static-data/static-profile-form.json";
import { GenderField, MartialStatusField, MotherTongueField, OccupationStatusField, ProfessionField } from "@Templates/Fields/index.js";

const ProfileSearchForm = ()=>{
 const navigate = useNavigate();

 return (<>
    <Card padding={15}>
        <div align="center"><b>FIND YOUR DESIRED PROFILE</b></div>
            <Form name="browseSearchForm" btnSubmit={{
                 align:'center',
                 btnType:'primary',
                 label:'Search Profiles',
                 size: 11
             }}
             btnReset={{
                 btnType:'danger',
                 label:'Reset',
                 size: 11
             }}
             onSubmit={async(form, isValidForm, triggerReset)=>{
                if(isValidForm){
                    navigate('/BrowseMatrimony', { state: { data: form }});
                }
                // triggerReset();
             }}
             onReset={async()=>{
                
             }}
             >
             <div className="mtop15p"><GenderField /></div>
             <div className="mtop15p"><MartialStatusField /></div>
             <div className="mtop15p"><MotherTongueField /></div>
             <div align="center" className="mtop15p"><b>LIVELIHOOD</b></div>
             <div className="mtop15p"><OccupationStatusField /></div>
             <div className="mtop15p"><ProfessionField /></div>
             </Form>
        </Card>
      </>);
   };
export default ProfileSearchForm;