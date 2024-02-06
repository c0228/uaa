import React, { useState } from "react";
import { Card, Form, TextBox, Select } from "e-ui-react";
import { getMatchCalculatorContext } from '@Pages/MatchCalculator/index.js';
import Ashtakootami from '@Pages/MatchCalculator/temp-data/ashtakootami.json';



const CalculatorForm = () => {
 const matchCalculatorContext = getMatchCalculatorContext();
 const raasiDetails = Ashtakootami?.raasi?.list?.map((data)=>{ return { id: data, label: data, value: data }; });
 const [bNakshatraDetails, setBNakshatraDetails] = useState([]);
 const [bgNakshatraDetails, setBgNakshatraDetails] = useState([]);
    
  return (<div style={{ marginBottom:'15px' }}>
        <Card style={{ border: "2px solid #953062" }}>
            <div align="center" style={{ backgroundColor: '#953062', color: '#fff', padding: '8px' }}><b>ASHTAKOOTAMI MATCH CALCULATOR</b></div>
            <div style={{ padding: '15px' }}>
                <Form name="browseMatrimonyFilter" btnSubmit={{
                    align: 'center',
                    btnType: 'primary',
                    label: 'Calculate Match',
                    size: 11
                }}
                    btnReset={{
                        btnType: 'danger',
                        label: 'Reset',
                        size: 11
                    }}
                    onSubmit={async (form, isValidForm, triggerReset) => {
                        matchCalculatorContext?.setCalculatorFormData( form );

                        // triggerReset();
                    }}
                    onReset={async () => {
                        matchCalculatorContext?.setCalculatorFormData({ browseMatrimonyFilter: { } });
                    }}
                >
                    <div align="center"><h5 className="bs-header"><b>BRIDE</b></h5></div>
                    <div className="mtop15p">
                        <TextBox name="brideName" label="Bride Name" placeholder="Enter Bride Name" />
                    </div>
                    <div className="mtop15p">
                        <Select name="brideRaasi"
                            placeholder="Select your Raasi"
                            options={raasiDetails}
                            label="Raasi"
                            fontSize="12"
                            onChange={(event) => {
                                setBNakshatraDetails(Ashtakootami?.raasi?.[event?.target?.value].nakshatras?.map((data) => { return { id: data, label: data, value: data }; }));
                            }}
                        />
                    </div>
                    <div className="mtop15p">
                        <Select name="brideNakshatram"
                            placeholder="Select your Star (Nakshatram)"
                            options={bNakshatraDetails}
                            label="Nakshatram"
                            fontSize="12" />
                    </div>
                    <div align="center" style={{ marginTop: '35px' }} ><h5 className="bs-header"><b>BRIDEGROOM</b></h5></div>
                    <div className="mtop15p">
                        <TextBox name="brideGroomName" label="Bridegroom Name" placeholder="Enter Bridegroom Name" />
                    </div>
                    <div className="mtop15p">
                        <Select  name="brideGroomRaasi"
                            placeholder="Select your Raasi"
                            options={raasiDetails}
                            label="Raasi"
                            fontSize="12"
                            onChange={(event) => {
                                setBgNakshatraDetails(Ashtakootami?.raasi?.[event?.target?.value].nakshatras?.map((data) => { return { id: data, label: data, value: data }; }));
                            }}
                        />
                    </div>
                    <div className="mtop15p">
                        <Select name="brideGroomNakshatram"
                            placeholder="Select your Star (Nakshatram)"
                            options={bgNakshatraDetails}
                            label="Nakshatram"
                            fontSize="12" />
                    </div>
                </Form>
            </div>

        </Card>
    </div>);
};

export default CalculatorForm;