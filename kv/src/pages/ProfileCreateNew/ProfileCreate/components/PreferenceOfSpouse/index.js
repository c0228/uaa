import React from "react";
import Header from "./../../commons/header.js";
import { Card, ContainerFluid, Col, Row, TextBox, Button, Select } from "e-ui-react";

const PreferenceOfSpouse = ()=>{
 return (<>
 <ContainerFluid>
    <div className="bs-profile-table mbot15p">
    <Card className="intro" padding={15} borderRadius={10}>
    <Header title="5. Preference of Spouse" />
    <div className="bs-profile-contents mtop15p">
        <Row>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="expectedHighestDegree" label="Expected Highest Degree" placeholder="Enter Highest Degree" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                    <Select
                            placeholder="Select Expected Occupation Type"
                            label="Expected Occupation Type"
                            options={[{ id: 'Private Employee', label: 'Private Employee', value: 'Private Employee' },
                            { id: 'Government Employee', label: 'Government Employee', value: 'Government Employee' },
                            { id: 'Army / Defence', label: 'Army / Defence', value: 'Army / Defence' },
                            { id: 'Business / Self Employed', label: 'Business / Self Employed', value: 'Business / Self Employed' }]}
                            className="navbar-layout"
                            fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                    <Select
                            placeholder="Select Living Status"
                            label="Expected Living Status"
                            options={[{ id: 'Living in India', label: 'Living in India', value: 'Living in India' },
                            { id: 'Living in Abroad', label: 'Living in Abroad', value: 'Living in Abroad' }]}
                            className="navbar-layout"
                            fontSize="12"
                    />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="expectedOccupation" label="Expected Occupation" placeholder="Enter Occupation" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="motherTongue" label="Expected Mother Tongue" placeholder="Enter Mother Tongue" />
                </div>
            </Col>
        </Row>
        </div>
        <Row>
            <Col>
            <div className="mtop15p mbot15p input-group" align="center">
                <Button type="danger" label="Back" size={11} />
                <Button type="primary" label="Next" size={11} />
            </div>
            </Col>
        </Row>
    </Card>
    </div>
    </ContainerFluid>
 </>);
};

export default PreferenceOfSpouse;