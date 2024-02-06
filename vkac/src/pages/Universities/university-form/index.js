import React from "react";
import { Row, Col, ContainerFluid, TextBox, Card, Button, Dropdown } from 'e-ui-react';

const UniversityForm = ()=>{

    const CountryElement = () =>{
        const menuOptions = [{
            options:[
                { label:"USA", value:"USA" },
                { label:"UK", value:"UK" },
                { label:"Australia", value:"Australia" }         
            ] 
        }];
        return (<Dropdown name="Country" label="Country" placeholder="Select a Country" 
             menu={menuOptions} 
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                }
            }}
            container={{
                searchLabel: "Search a Location"
            }}
            />);
    };

    const UniversityName = ()=>{
        return (<>
            <TextBox name="UniversityName" label="UniversityName" 
            placeholder="Enter University Name"
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                },
                minLength:{
                    value: 2,
                    errorMessage:"Message should be greator than 2"
                }
            }}
        />
        </>);
     };

     const LocationElement = ()=>{
        return (<>
            <TextBox name="Location" label="Location" 
            placeholder="Enter University Location"
            validation={{
                required:{
                    value: true,
                    errorMessage:"This is a Mandatory Field"
                },
                minLength:{
                    value: 2,
                    errorMessage:"Message should be greator than 2"
                }
            }}
        />
        </>);
     };


 
 return (<>
    <h5 style={{ fontSize:'16px', borderBottom:'1px solid #ccc', paddingBottom:'10px' }}><b>University Form</b></h5>
    <div>
        <div className="mtop15p"><CountryElement /></div>
        <div className="mtop15p"><UniversityName /></div>
        <div className="mtop15p"><LocationElement /></div>
    </div>
 </>);
};

export default UniversityForm;