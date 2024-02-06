import React, { useState, useEffect } from "react";
import { Table, Select, Dropdown, UrlAsyncFetch } from 'e-ui-react';

const UniversityList = ()=>{
   const [country, setCountry] = useState( 'USA'); // Default Country
   const [countriesList, setCountriesList] = useState([]);
   const [ tableData, setTableData ] = useState([]);
   const Load = async(country)=>{
      const responseData = await UrlAsyncFetch(process.env.NEXUS_URL + process.env.UNIVERSITY_LIST_URL + country, 'GET');
      console.log("responseData", JSON.stringify(responseData));
      setTableData( responseData );
   };
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
      LoadCountry();
   },[]);

   useEffect(()=>{
     if(country?.length>0) { Load(country); }
   },[countriesList, country]);

    const columnDesc = [
                  { "columnName":"University Name", "id":"University_Name", width:'130px' },
                  { "columnName":"Country", "id":"Country", width:'90px' },
                  { "columnName":"Location", "id":"Location", width:'90px' },
                  { "columnName":"TOEFL", "id":"TOEFL", width:'80px' },
                  { "columnName":"IELTS", "id":"IELTS", width:'80px' },
                  { "columnName":"Duolingo", "id":"Duolingo", width:'90px' },
                  { "columnName":"PTE", "id":"PTE", width:'75px' },
                  { "columnName":"TAT", "id":"TAT", width: '75px' },
                  { "columnName":"Interview", "id":"Interview", width: '90px' },
                  { "columnName":"Total Fees", "id":"Total_Fees", width: '100px' },
                  { "columnName":"Deposit Fees", "id":"Deposit_Fees", width: '130px' },
                  { "columnName":"Application Fees", "id":"Application_Fees", width: '150px' },
                  { "columnName":"GRE", "id":"GRE", width: '70px' },
                  { "columnName":"GPA", "id":"GPA", width: '70px' },
                  { "columnName":"Duration", "id":"Duration", width: '95px' },
                  { "columnName":"Courses", "id":"Courses", width: '95px' }
               ];

    return (<>
    <h5 style={{ fontSize:'16px', borderBottom:'1px solid #ccc', paddingBottom:'10px' }}><b>View Universities Configuration</b></h5>
    <div style={{ paddingTop:'15px' }}>
      
    {countriesList?.length>0 && <Table title={<>
      <Dropdown name="Country" placeholder="Select a Country" width="150px"
        menu={countriesList} 
        value={country}
        validation={{
            required:{
                value: true,
                errorMessage:"This is a Mandatory Field"
            }
        }} 
        container={{
         searchLabel: "Search a Location"
        }}
        onChange={(result)=>{
         console.log("result [country]", result);
         Load(result?.value);
        }}
        />
     </>} columnDesc={columnDesc} data={tableData} dataSettings={{ required: { search: true } }} />}
    </div>
    </>);
 };

 export default UniversityList;
