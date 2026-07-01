import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch } from "e-ui-react";

const FormReservations = () =>{
 const defaultReservationFormData = {
    "PwBD": ""
 };
 const [reservationFormData, setReservationFormData] = useState(defaultReservationFormData);
 useEffect(()=>{
    // const checkedItem = switchValue.filter(item =>  item?.checked === true);
    console.log("reservationFormData: ", reservationFormData);
 },[reservationFormData]);
 const CreateId = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")      // Remove symbols (/, •, -, etc.)
        .replace(/\s+/g, "_")          // Replace spaces with _
        .replace(/_+/g, "_")           // Remove consecutive _
        .replace(/^_+|_+$/g, "");      // Trim leading/trailing _
};
const DisplayPwBD = () =>{
 return (<>
  <Row>
        <Col md={12}>
                <div className="mt-1">
                    <Switch type="radio" id="PwBD" name="PwBD"  layout="horizontal"
                        label="Are you a Person with Benchmark Disability (PwBD)?" 
                        value={reservationFormData.PwBD}
                        options={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} 
                        onChange={(data)=>{
                            if(data?.length>0){
                                setReservationFormData({...reservationFormData, PwBD: data });
                            }
                        }}        
                        />
                </div>
            </Col>
        </Row>
        {reservationFormData?.PwBD==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select label="Disability Category" placeholder="Select Disability"
                    options={["Blindness / Low Vision","Deaf / Hard of Hearing","Locomotor Disability",
                        "Autism","Intellectual Disability","Multiple Disabilities"]?.map((d,i)=>{
                        return { id: CreateId(d), label: d, value: d };
                    })}
                    onChange={(event) => {
                        let option = event.target.value;
                    }} />
                </div>
            </Col>
            <Col md={6}>
                <div className="mt-3">
                    <Range name="formRanger" label="Disability Percentage" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div style={{ fontSize:'11px' }}>
                    <div>Enter the percentage mentioned in your valid disability certificate.
                    PwBD benefits generally apply to benchmark disabilities of 40% or more, subject to UPSC notification 
                    requirements.</div>
                    <div>If &lt; 40%,  Based on the entered percentage, PwBD relaxation may not be applicable.</div>
                    <div>If &gt;= 40%, Benchmark disability criteria satisfied for PwBD consideration.</div>
                </div>
            </Col>
        </Row>
    </>)}
 </>);
};
 return (<div>
    <div><h5><b>3. Reservation & Relaxations</b></h5><hr/></div>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div className="mt-2" style={{ fontSize:'13px' }}><p>Provide additional information, if applicable. These details help 
                    calculate age relaxation, attempt limits, and eligibility accurately.</p></div>
            </Col>
        </Row>
        <DisplayPwBD />
    </ContainerFluid>
 </div>);
};

export default FormReservations;