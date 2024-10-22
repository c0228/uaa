import React from "react";
import { Form, Select, Dropdown, Choice, DateTimePicker, Range } from "e-ui-react";
import StaticProfileForm from "@Pages/Home/static-data/static-profile-form.json";

export const GenderField = ()=>{
 return (<>
  <Select name="Gender" label="Gender" placeholder="Select Gender"
    options={StaticProfileForm?.gender}
    className="navbar-layout"
    width="100%"
    fontSize="12" 
    validation={{
     required:{
        value: true,
        errorMessage:"This is a Mandatory Field"
     }
    }} />
 </>);
};

export const MartialStatusField = ({ value })=>{
 return (<>
  <Dropdown name="MartialStatus" type="multiple" label="Martial Status" placeholder="Select Martial Status" 
    menu={StaticProfileForm?.martialStatus} 
    value={value}
    validation={{
        required:{
            value: true,
            errorMessage:"This is a Mandatory Field"
          }
        }}
    container={{
        searchLabel: "Search a Location"
    }} />
    </>);
};

export const MotherTongueField = ({ value })=>{
    return (<>
        <Dropdown name="MotherTongue" type="multiple" label="Mother Tongue" placeholder="Select Mother Tongue" 
            menu={StaticProfileForm?.motherTongue} 
            value={value}
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                }
              }}
              container={{
                searchLabel: "Search a Mother Tongue"
              }} />
    </>);
};

export const OccupationStatusField = ({ value })=>{
    return (<>
      <Dropdown name="OccupationStatus" type="multiple" label="Occupation Status" placeholder="Select Occupation Status" 
          menu={StaticProfileForm?.occupationStatus} 
          value={value}
          valueholder={1}
          validation={{
              required:{
                  value: true,
                  errorMessage:"This is a Mandatory Field"
              }
          }}
          container={{
              searchLabel: "Search Occupation Status"
          }} />
    </>);
};

export const ProfessionField = ({ value })=>{
    return (<>
      <Dropdown name="Profession" type="multiple" label="Profession" placeholder="Select Profession" 
          menu={StaticProfileForm?.profession} 
          value={value}
          validation={{
              required:{
                  value: true,
                  errorMessage:"This is a Mandatory Field"
              }
          }}
          container={{
              searchLabel:"Search Profession"
          }} />
    </>);
};

export const LookingField = ({ check })=>{
 let values = [{ id:1, label:"Bride", value:"Female"},
            { id:2, label:"Bridegroom", value:"Male" }];
    values.map((obj)=>{
        if(obj.value===check){ obj.checked = true; }
        return obj;
    });
 return (<>
   <Choice type="radio" id="lookingFor" name="lookingFor" label="I'm looking for" 
        value={values} />
 </>);
};

export const DobField = ()=>{
 return (<>
    <DateTimePicker type="datePicker" label="My Date of Birth" id="dateOfBirth" name="dateOfBirth" />
 </>);
};

export const AgeRangerField = ()=>{
 return (<>
    <Range name="ageDifference" label="Age Difference (5 years - 8 years)" start={5} end={8} />
 </>);
};