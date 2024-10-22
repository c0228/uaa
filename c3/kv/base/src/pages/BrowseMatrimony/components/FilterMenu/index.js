import React, { useState } from "react";
import { Card, Form, Switch, Choice, Dropdown, DateTimePicker, Range  } from "e-ui-react";
import { LookingField, DobField, AgeRangerField, MartialStatusField, MotherTongueField, OccupationStatusField, ProfessionField } from "@Templates/Fields/index.js";
const FilterMenu = (/*{ data }*/)=>{
 const data = {
  "mode": "SUBMITTED",
  "Gender": {
      "validationSuccess": [
          "required"
      ],
      "value": "Male",
      "errorMessage": ""
  },
  "MartialStatus": {
      "validationSuccess": [
          "required"
      ],
      "value": "UnMarried,Divorced,Widow",
      "errorMessage": ""
  },
  "MotherTongue": {
      "validationSuccess": [
          "required"
      ],
      "value": "Assamese,Bangla,Bodo,Dogri,Gujarati,Hindi,Kashmiri,Kannada,Konkani,Maithili,Malayalam,Manipuri,Marathi,Nepali,Oriya,Punjabi,Tamil,Telugu,Santali,Sindhi,Urdu",
      "errorMessage": ""
  },
  "OccupationStatus": {
      "validationSuccess": [
          "required"
      ],
      "value": "Private Sector,Government / Public Sector,Defence / Civil Services,Business / Self-Employed",
      "errorMessage": ""
  },
  "Profession": {
      "validationSuccess": [
          "required"
      ],
      "value": "Accountant,Manager,Supervisor,Officer,Administrative Professional,Executive,Clerk,Human Resources Professional,Secretary / Front Office,Agriculture & Farming Professional,Horticulturist,Pilot,Air Hostess / Flight Attendant,Airline Professional,Architect,Interior Designer,Chartered Accountant,Company Secretary,Accounts / Finance Professional,Banking Professional,Auditor,Financial Accountant,Financial Analyst / Planning,Investment Professional,Fashion Designer,Beautician,Hair Stylist,Jewellery Designer,Makeup Artist,Designer (Others),BPO / KPO / ITES Professional,Customer Service Professional,Indian Administrative Service (IAS),Indian Police Service (IPS),Indian Revenue Service (IRS),Indian Engineering Service (IES),Indian Forest Service (IFS),Analyst,Consultant,Corporate Communication,Corporate Planning,Marketing Professional,Operations Management,Sales Professional,Senior Manager / Manager,Subject Matter Expert,Business Development Professional,Content Writer,Army,Navy,Defence Services (Others),Air Force,Paramilitary,Dentist,Surgeon,Veterinary Doctor,Professor / Lecturer,Teaching / Academician,Education Professional,Training Professional,Research Assistant,Research Scholar,Civil Engineer,Electronics / Telecom Engineer,Mechanical / Production Engineer,Quality Assurance Engineer - Non IT,Engineer - Non IT,Designer,Product Manager - Non IT,Project Manager - Non IT,Hotel / Hospitality Professional,Restaurant / Catering Professional,Chef / Cook,Software Professional,Hardware Professional,Product Manager,Project Manager,Program Manager,Animator,Cyber / Network Security,UI / UX Designer,Web / Graphic Designer,Software Consultant,Data Analyst,Data Scientist,Network Engineer,Quality Assurance Engineer,Lawyer & Legal Professional,Legal Assistant,Law Enforcement Officer,Police,Healthcare Professional,Paramedical Professional,Nurse,Pharmacist,Physiotherapist,Psychologist,Therapist,Medical Transcriptionist,Dietician / Nutritionist,Lab Technician,Medical Representative,Journalist,Media Professional,Entertainment Professional,Event Management Professional,Advertising / PR Professional,Designer,Actor / Model,Artist,Mariner / Merchant Navy,Sailor,Scientist / Researcher,CXO / President, Director, Chairman,VP / AVP / GM / DGM / AGM,Technician,Arts & Craftsman,Librarian,Business Owner / Entrepreneur,Retired,Transportation / Logistics Professional,Agent / Broker / Trader,Contractor,Fitness Professional,Security Professional,Social Worker / Volunteer / NGO,Sportsperson,Travel Professional,Singer,Writer,Politician,Associate,Builder,Chemist,CNC Operator,Distributor,Driver,Freelancer,Mechanic,Musician,Photo / Videographer,Surveyor,Tailor,Others",
      "errorMessage": ""
  }
};
 return (<div style={{ marginBottom:'25px' }}>

  <Card style={{ border:"2px solid #953062" }}>
  <div align="center" style={{ backgroundColor:'#953062', color:'#fff', padding:'8px' }}><b>FILTER PROFILES</b></div>
  <div style={{ padding:'15px' }}>
  <Form name="browseMatrimonyFilter" btnSubmit={{
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
                 // 
     
                // triggerReset();
             }}
             onReset={async()=>{
                
             }}
             >
    <div style={{ margin: '0px 5px' }}>
        <div>
            <LookingField check={data?.Gender.value} />
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
            <DobField />
            <div className="mtop15p">
              <AgeRangerField />
            </div>
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
            <MartialStatusField value={data?.MartialStatus?.value} />
        </div>
        <div className="mtop15p">
            <MotherTongueField value={data?.MotherTongue?.value} />
        </div><hr style={{ borderBottom:'1px solid #953062', opacity: 1 }}/>
        <div className="mtop15p">
            <OccupationStatusField value={data?.OccupationStatus?.value} />
        </div>
        <div className="mtop15p">
            <ProfessionField value={data?.Profession?.value} />
        </div>
        </div>
   </Form>
  </div>
  </Card>
 </div>);
};

export default FilterMenu;