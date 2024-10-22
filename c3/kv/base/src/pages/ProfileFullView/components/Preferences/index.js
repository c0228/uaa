import React from "react";
import { Row, Col, Card, Icon, Avatar } from "e-ui-react";
import Title from '@Templates/Title/index.js';

const preferenceTableData = [{
    "title": "Basic Preferences",
    "data":{
        "Partner's Age" : "27 - 31 years|true",
        "Height" : "5 ft 5 in - 5 ft 9 in|false",
        "Martial Status" : "Unmarried|true",
        "Mother Tongue" : "Telugu|true",
        "Physical Status" : "Normal|true"
    }
 },
 {
    "title": "Religious Preferences",
    "data":{
        "Religion" : "Hindu|true",
        "Caste" : "Brahmin Niyogi|true",
        "Subcaste" : "Aruvela Niyogi, Karanakamma Niyogi, Dravida Niyogi|true",
        "Gothram" : "Except Kaundinyasa|true",
        "Raasi" : "Any|true",
        "Star" : "Any|true",
        "Kuja Dosham" : "No|true"
    }
 },
 {
    "title": "Professional Preferences",
    "data":{
        "Education" : "Any|true",
        "Employment Type" : "Any|true",
        "Occupation" : "Any|true",
        "Annual Income" : "Rs. 25 Lakhs and Above|true"
    }
 },
 {
    "title": "Location Preferences",
    "data":{
        "Country" : "India|true",
        "Residing State" : "Any|true",
        "Residing City" : "Any|true"
    }
 },
 {
    "title": "Food & Lifestyle Preferences",
    "data":{
        "Diet" : "Vegetarian, Eggetarian|true",
        "Smoke" : "Never|true",
        "Drink" : "Occasionally|true"
    }
 },
];

const Preferences = ()=>{

 const PreferenceTable = ()=>{
  return (<>
     <div class="table-responsive">
        <table class="table" style={{ border:'0px' }}>
        {preferenceTableData?.map((preferenceData)=>{
            const k = Object.keys(preferenceData?.data);
            return (<>
                <thead>
                    <tr style={{ backgroundColor:'#eee', borderBottom:'1px solid #ccc' }}>
                        <td><b>{preferenceData?.title}</b></td>
                        <td align="right"><b>You Matched</b></td>
                    </tr>
                </thead>
                <tbody>
                    {k?.map((dataKey)=>{
                        const data = preferenceData?.data?.[dataKey]?.split("|");
                        return (<>
                            <tr>
                                <td>
                                    <label className="form-label"><b>{dataKey}</b></label>
                                    <div>{data?.[0]}</div>
                                </td>
                                <td align="right" className="align-center-vertical" style={{ paddingRight:'25px' }}>
                                    {(data?.[1]==='true')?
                                        (<Icon type="FontAwesome" name="fa-check-circle-o" size={28} 
                                            style={{ marginLeft:'15px', color:'green' }}/>):
                                        (<></>)}
                                    
                                </td>
                            </tr>
                        </>);
                    })}
                </tbody>
            </>)
        })}
  </table>
</div>
  </>);
 };
 return (<>
  <div className="mtop15p mbot15p">
  <Title name="Partner Preferences" />
 </div>

 <div className="mtop15p">
    <label className="form-label"><b>A few lines on his Expectation about his dream partner :</b></label>
    <div>Dynamic and Care taking with Moderate Thinking.</div>
 </div>

 <div className="mtop15p">
 <div class="table-responsive">
  <table class="table" style={{ border:'0px', marginBottom:'0px' }}>
    <tbody>
        <tr>
            <td align="left">
                <Avatar src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" size={72} />
            </td>
            <td>
            <Card padding={8} backgroundColor="#eee">
        You have matched 
        <span style={{ fontSize:'16px', paddingRight:'5px' }}><b>
        <span style={{ paddingLeft:'5px', color:'dodgerBlue' }}>14</span> / 16</b>
        </span>
        of her preferences.
      </Card>
            </td>
            <td align="right">
                <Avatar src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" size={72} />
            </td>
        </tr>
    </tbody>
   </table>
   </div>
   <PreferenceTable />
 </div>
 </>);
};

export default Preferences;