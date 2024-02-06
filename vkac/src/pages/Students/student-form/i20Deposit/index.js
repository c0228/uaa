import React from "react";
import { Switch, Select, Row, Col, Card } from "e-ui-react";
import SampleData from '@TempData/student-sample.json';

const I20Deposit = ()=>{
    return (<>
     <div className="mtop15p">
        <label className="form-label"><b>Experience :</b></label>
            <Row>
                <Col xl={6} xxl={6}>
                <Card padding={15}>
                    <Select
                        name="Gap"
                        label="Gap"
                        placeholder="Select Gap"
                        options={[{ id: 'None', label: 'None', value: 'None' },
                        { id: '1 year', label: '1 year', value: '1 year' },
                        { id: '2 years', label: '2 years', value: '2 years' },
                        { id: '3 years', label: '3 years', value: '3 years' },
                        { id: '4 years', label: '4 years', value: '4 years' },
                        { id: '5 years', label: '5 years', value: '5 years' },
                        { id: '6 years', label: '6 years', value: '6 years' },
                        { id: '7 years', label: '7 years', value: '7 years' },
                        { id: '8 years', label: '8 years', value: '8 years' },
                        { id: '9 years', label: '9 years', value: '9 years' },
                        { id: '10 years', label: '10 years', value: '10 years' },
                        { id: '10+ years', label: '10+ years', value: '10+ years' }]}
                        width="100%"
                        fontSize="12" 
                        // validation={{
                        //     required:{
                        //         value: true,
                        //         errorMessage:"This is a Mandatory Field"
                        //     }
                        // }}
                    />
                   </Card>
                </Col>
                <Col xl={6} xxl={6}>
                    <Card padding={15}>
                    <Select
                        name="I20Deposit"
                        label="Deposit"
                        placeholder="Select Deposit"
                        options={[{ id: 'Yes', label: 'Yes', value: 'Yes' },
                        { id: 'No', label: 'No', value: 'No' }]}
                        width="100%"
                        fontSize="12" 
                        // validation={{
                        //     required:{
                        //         value: true,
                        //         errorMessage:"This is a Mandatory Field"
                        //     }
                        // }}
                    />
                    </Card>
                </Col>
            </Row>
       
    </div>
    </>);
};

export default I20Deposit;
