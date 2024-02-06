import React, { useState, useEffect } from "react";
import { TextBox, Card, Dropdown, ContainerFluid, Row, Col, Form, UrlAsyncFetch, FormToReqBodyFormatter } from "e-ui-react";
import IELTSElement from './ielts/index.js';
import TOEFLElement from './toeft/index.js';
import PTEElement from './pte/index.js';
import BTechDegree from './degree/index.js';
import GREElement from './gre/index.js';
import DuolingoElement from './duolingo/index.js';
import I20Deposit from './i20Deposit/index.js';
// import SampleData from '@TempData/student-sample.json';
import UniversityList from './university-list/index.js';

const SampleData = {};

const StudentForm = ()=>{
 const [countryData, setCountryData ] = useState('');
 const [ tableData, setTableData ] = useState([]);

 useEffect(()=>{
    console.log("countryData", countryData);
    console.log("tableData", tableData);
 },[tableData, countryData]);

 const StudentNameElement = ()=>{
  return (<>
    <TextBox name="StudentName" label="Student Name" value={SampleData?.studentName}
            placeholder="Enter Student Name"
            // validation={{
            //     required:{
            //         value: true,
            //         errorMessage:"This is a Mandatory Field"
            //     },
            //     minLength:{
            //         value: 2,
            //         errorMessage:"Message should be greator than 2"
            //     }
            // }}
        />
        </>);
 };

 const CountryElement = () =>{
    const [countriesList, setCountriesList] = useState([]);
    const LoadCountry = async()=>{
        const responseData = await UrlAsyncFetch(process.env.NEXUS_URL + process.env.UNIVERSITY_COUNTRIES_URL, 'GET');
        console.log("responseData", JSON.stringify(responseData));
        const countries = [{
              "options": responseData?.map((data)=>{
                 return { "label": data?.Country, "value": data?.Country };
              })
           }];
        console.log("countries", JSON.stringify(countries));
        setCountriesList( countries );
     };
  
     useEffect(()=>{
        console.log("countriesList", countriesList);
     },[countriesList]);
     useEffect(()=>{
        LoadCountry();
     },[]);
  
    return (<>
    {countriesList?.length>0 && <Dropdown name="Country" label="Country" placeholder="Select a Country"
        menu={countriesList} container={{
            searchLabel: "Search a Location",
            height: '120px'
        }}
        // validation={{
        //     required:{
        //         value: true,
        //         errorMessage:"This is a Mandatory Field"
        //     }
        // }}
        />}
    </>);
};

 const EmailElement = ()=>{
    return (<>
      <TextBox name="EmailAddress" label="Email Address" value={SampleData?.duolingoScore}
              placeholder="Enter your Email Address"
          />
          </>);
   };
  

 return (<>
    <h5 style={{ fontSize:'16px', borderBottom:'1px solid #ccc', paddingBottom:'10px' }}><b>Student Form</b></h5>
    <Form name="StudentForm" btnSubmit={{
            align:'center',
            btnType:'primary',
            label:'View Eligible University',
            size: 11
        }}
        btnReset={{
            btnType:'danger',
            label:'Reset',
            size: 11
        }}
        onSubmit={async(form, isValidForm, triggerReset)=>{
            
            if(isValidForm){
                console.log("form [afterSubmission]", form);
                const requestBody = FormToReqBodyFormatter( form?.["StudentForm"] );
                console.log("form [requestBody]", requestBody);
                const responseData = await UrlAsyncFetch(process.env.NEXUS_URL + process.env.UNIVERSITY_FILTER_URL, 'POST', requestBody);
                console.log("responseData", responseData);
                setTableData( responseData );
                setCountryData( requestBody['Country'] );
                triggerReset();
            }
            // 
        }}
        onReset={async()=>{
            setCountryData('');
            setTableData([]);
        }}
        >
    <ContainerFluid>
        <Row>
            <Col xxl={4} xl={4}><div className="mtop15p"><StudentNameElement /></div></Col>
            <Col xxl={4} xl={4}><div className="mtop15p"><CountryElement /></div></Col>
            <Col xxl={4} xl={4}><div className="mtop15p"><EmailElement /></div></Col>
        </Row>
        <Row>
            <Col xxl={4} xl={4}><div className="mtop15p"><IELTSElement /></div></Col>
            <Col xxl={4} xl={4}><div className="mtop15p"><TOEFLElement /></div></Col>
            <Col xxl={4} xl={4}><div className="mtop15p"><PTEElement /></div></Col>
        </Row>
        <Row>
            <Col xxl={4} xl={4}><div className="mtop15p"><BTechDegree /></div></Col>
            <Col xxl={4} xl={4}><div className="mtop15p"><I20Deposit /></div></Col>
            <Col xxl={2} xl={2}><div className="mtop15p"><GREElement /></div></Col>
            <Col xxl={2} xl={2}><div className="mtop15p"><DuolingoElement /></div></Col>
        </Row>
    </ContainerFluid>
    </Form>

    
    {(tableData?.length>0 && countryData?.length>0) && <UniversityList  data={tableData} country={countryData} />}

 </>);
};

export default StudentForm;