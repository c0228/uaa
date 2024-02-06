import React from "react";
import Header from "./../../commons/header.js";
import { ContainerFluid, Col, Row, Select, TextBox, Button, ProgressBar, Card } from "e-ui-react";

const MentionProfile = ()=> {
    return(<>
        <ContainerFluid>
            <div className="bs-profile-table mbot15p">
            <Card className="intro" padding={15} borderRadius={10}>
            <Header title="1. Mention Profile" />
    <div className="bs-profile-contents mtop15p">
        <Select
            placeholder="Select an option"
            label="You are creating Profile for"
            options={[{ id: 'Self', label: 'Self', value: 'Self' },
                    { id: 'Son', label: 'Son', value: 'Son' },
                    { id: 'Daughter', label: 'Daughter', value: 'Daughter' },
                    { id: 'Sister', label: 'Sister', value: 'Sister' },
                    { id: 'Brother', label: 'Brother', value: 'Brother' },
                    { id: 'Niece (Menakodalu)', label: 'Niece (Menakodalu)', value: 'Niece (Menakodalu)' },
                    { id: 'Nephew (Menakoduku)', label: 'Nephew (Menakoduku)', value: 'Nephew (Menakoduku)' },
                    { id: 'Others', label: 'Others', value: 'Others' }]}
            className="navbar-layout"
            width="250"
            fontSize="12"
        />
    </div>
    <div className="bs-profile-contents">
        <Row>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                    <TextBox name="surname" label="Surname" placeholder="Enter your Surname" />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select your Gender"
                    label="Gender"
                    options={[{ id: 'Women (Bride)', label: 'Women (Bride)', value: 'Women (Bride)' },
                    { id: 'Men (BrideGroom)', label: 'Men (BrideGroom)', value: 'Men (BrideGroom)' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select your Marital Status"
                    label="Status"
                    options={[{ id: 'Married', label: 'Married', value: 'Married' },
                    { id: 'Not Married', label: 'Not Married', value: 'Not Married' },
                    { id: 'Divorced', label: 'Divorced', value: 'Divorced' },
                    { id: 'Widow', label: 'Widow', value: 'Widow' },
                    { id: 'Widower', label: 'Widower', value: 'Widower' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="occupation" label="Occupation" placeholder="Enter your Occupation" />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="occupationType" label="Occupation Type" placeholder="Enter your Occupation Type" />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="name" label="Name" placeholder="Enter your Name" />
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="motherTongue" label="Mother Tongue" placeholder="Enter your Mother Tongue" />
                </div>
                <div className="mtop15p mbot15p">
                    <Row>
                        <Col xl={12} xxl={12}>
                            <label className="form-label"><b>Height :</b></label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} xxl={6}>
                        <Select
                        placeholder="Feet"
                        options={[{ id: '1 Feet', label: '1 Feet', value: '1 Feet' },
                        { id: '2 Feet', label: '2 Feet', value: '2 Feet' },
                        { id: '3 Feet', label: '3 Feet', value: '3 Feet' },
                        { id: '4 Feet', label: '4 Feet', value: '4 Feet' },
                        { id: '5 Feet', label: '5 Feet', value: '5 Feet' },
                        { id: '6 Feet', label: '6 Feet', value: '6 Feet' },
                        { id: '7 Feet', label: '7 Feet', value: '7 Feet' },
                        { id: '8 Feet', label: '8 Feet', value: '8 Feet' }
                    ]}
                        fontSize="12"
                    />
                        </Col>
                        <Col xl={6} xxl={6}>
                        <Select
                        placeholder="Inches"
                        options={[{ id: '1 Inches', label: '1 Inches', value: '1 Inches' },
                        { id: '2 Inches', label: '2 Inches', value: '2 Inches' },
                        { id: '3 Inches', label: '3 Inches', value: '3 Inches' },
                        { id: '4 Inches', label: '4 Inches', value: '4 Inches' },
                        { id: '5 Inches', label: '5 Inches', value: '5 Inches' },
                        { id: '6 Inches', label: '6 Inches', value: '6 Inches' },
                        { id: '7 Inches', label: '7 Inches', value: '7 Inches' },
                        { id: '8 Inches', label: '8 Inches', value: '8 Inches' },
                        { id: '9 Inches', label: '9 Inches', value: '9 Inches' },
                        { id: '10 Inches', label: '10 Inches', value: '10 Inches' },
                        { id: '11 Inches', label: '11 Inches', value: '11 Inches' },
                        { id: '12 Inches', label: '12 Inches', value: '12 Inches' },
                    ]}
                        fontSize="12"
                    />
                        </Col>
                    </Row>
                </div>
                <div className="mtop15p mbot15p">
                    <TextBox name="highestDegree" label="Highest Degree" placeholder="Enter your Highest Degree" />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select Living Status"
                    label="Living Status"
                    options={[{ id: 'Living in India', label: 'Living in India', value: 'Living in India' },
                    { id: 'Living in Abroad', label: 'Living in Abroad', value: 'Living in Abroad' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
            </Col>
        </Row>
        </div>
            <div className="mtop15p mbot15p" align="center">
                <Button type="primary" label="Next" size={11} />
            </div>
            </Card>
            </div>
        </ContainerFluid>
    </>);
};

export default MentionProfile; 
 {/* background-color: #630062;color: #fff; */} 