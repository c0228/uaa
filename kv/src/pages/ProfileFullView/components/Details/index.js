import React from "react";
import { Row, Col, Button } from "e-ui-react";
import BlurDetails from "@Templates/BlurDetails/index.js";
import Title from '@Templates/Title/index.js';

const displayDetailsData = [{
    "title" : "Basic Details",
    "data" : {
        "Height" : "5 ft 6 in (174 cm)",
        "Age" : "31 years",
        "Martial Status" : "Unmarried",
        "Gender" : "Male",
        "Physical Status" : "Normal",
        "Mother Tongue" : "Telugu"
    }
 },
 {
    "title" : "Religion Information",
    "data" : {
        "Religion" : "Hindu",
        "Caste" : "Brahmin Niyogi",
        "Subcaste" : "Aruvela Niyogi",
        "Gothram" : "Kaundinyasa"
    }
 },
 {
    "title" : "Professional Details",
    "data" : {
        "Education" : "B. Tech (Electronics and Electrical Engineering)",
        "Occupation" : "Software Professional",
        "Employed In" : "Private Sector",
        "Company" : "WIPRO Company, Benguluru",
        "Annual Income" : "Rs. 5 - 6 Lakhs"
    }
 },
 {
    "title" : "Location Details",
    "data" : {
        "Country" : "India",
        "State" : "Telangana",
        "City" : "Hyderabad",
        "Citizenship" : "India",
        "Work Permit" : "India , USA, China"
    }
 },
 {
    "title" : "Horoscope Details",
    "data" : {
        "Full Name" : "Narendra Modi",
        "Date of Birth" : "15 Oct 1991",
        "Time of Birth" : "10:40 AM",
        "Timezone" : "Asia / Kolkatta",
        "Place of Birth" : "Hyderabad",
        "Raasi" : "Makara (Capricorn)",
        "Star" : "Uthrashada",
        "Kuja Dosham" : "No"
    }
 },
 {
    "title" : "Family & Siblings Details",
    "data" : {
        "Father Name" : "Abc",
        "Father Occupation" : "Abc",
        "Mother Name" : "Abc",
        "Mother Occupation" : "Abc",
        "Family Type" : "Nuclear",
        "Status" : "Upper Middle Class",
        "No.of Brothers" : 3,
        "No. of Sisters" : 1
    }
 },
 {
    "title" : "Food & Lifestyle Details",
    "data" : {
        "Diet" : "Vegetarian",
        "Smoke" : "Never",
        "Drink" : "Never"
    }
 },
 {
    "title" : "Contact Details",
    "data" : {
        "Contact Name" : (<BlurDetails text="XXXXXXXXXXXXXXXXX" />),
        "Mobile Number" : (<BlurDetails text="XX-XXXXXXXXXX" />),
        "Preferred Call Timings" : (<BlurDetails text="XX:XX XX to XX:XX XX" />)
    }
 },
];


const Details = ()=>{

 const DisplayDetails = ({ title, data }) =>{
  const k = Object.keys(data); 
  return (<>
    <div className="mtop15p mbot15p" style={{borderBottom:"2px solid rgb(149, 48, 98)"}}>
     <h4 className="bs-header" style={{marginBottom:"5px", color:"rgb(149, 48, 98)"}}><b>{title}</b></h4> 
    </div>
    <div style={{ borderRadius:'8px', backgroundColor:'#eee', padding:'15px' }}>
     {k?.map((dataKey, index)=>{
        return (<>
         <div className={(index>0?"mtop10p":"")}>
          <Row>
           <Col xl={4} xxl={4}>
             <b>{dataKey} <span className="pull-right">:</span></b>
           </Col>
           <Col xl={8} xxl={8}>{data?.[dataKey]}</Col>
          </Row>
         </div>    
        </>);
     })}
    </div>
  </>);
 };

 return (<>
  <div className="mtop15p mbot15p">
  <Title name="About Me" />
  </div>
  <div className="mtop15p">
  Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. 
  Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. 
  Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a 
  velit eu ante scelerisque vulputate.
  </div>
  {displayDetailsData?.map((displayData)=>{
    return (<>
     <DisplayDetails title={displayData?.title} data={displayData?.data} />
    </>);
  })}
  <div align="right" className="mtop15p">
      <Button type="primary" label="Get Contact Details" size={11} />
  </div>
 </>);
};

export default Details;