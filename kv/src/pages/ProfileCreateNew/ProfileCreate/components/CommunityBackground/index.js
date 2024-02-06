import React from "react";
import Header from "./../../commons/header.js";
import { Card, ContainerFluid, Col, Row, Select, TextBox, Button, DateTimePicker } from "e-ui-react";

const CommunityBackground = ()=> {
    return(<>
    <ContainerFluid>
    <div className="bs-profile-table mbot15p">
    <Card className="intro" padding={15} borderRadius={10}>
    <Header title="2. Birth, Zodiac and Community Background" />
    <div className="bs-profile-contents mtop15p">
        <Row>
            <Col xl={6} xxl={6}>
            <div className="mtop15p mbot15p">
                <DateTimePicker label="Date and Time of Birth" type="dateTimePicker" id="dateTime" name="dateTime" />
            </div>
            <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Shakha"
                        label="Shakha"
                        options={[{ id: 'one', label: '1 Feet', value: '1' }]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Upa shakha"
                        label="Upa shakha"
                        options={[{ id: 'one', label: '1 Feet', value: '1' }]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Gothram"
                        label="Gothram"
                        options={[{ id: 'one', label: '1 Feet', value: '1' }]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
                <div className="mtop15p mbot15p">
                    <Select
                        placeholder="Select Raashi (Zodiac-sign)"
                        label="Raasi (Zodiac-sign)"
                        options={[{ id: 'Aries (Mesha Raasi)', label: 'Aries (Mesha Raasi)', value: 'Aries (Mesha Raasi)' },
                        { id: 'Taurus (Vrushaba Raasi)', label: 'Taurus (Vrushaba Raasi)', value: 'Taurus (Vrushaba Raasi)' },
                        { id: 'Gemini (Midhuna Raasi)', label: 'Gemini (Midhuna Raasi)', value: 'Gemini (Midhuna Raasi)' },
                        { id: 'Cancer (Karkataka Raasi)', label: 'Cancer (Karkataka Raasi)', value: 'Cancer (Karkataka Raasi)' },
                        { id: 'Leo (Simha Raasi)', label: 'Leo (Simha Raasi)', value: 'Leo (Simha Raasi)' },
                        { id: 'Virgo (Kanya Raasi)', label: 'Virgo (Kanya Raasi)', value: 'Virgo (Kanya Raasi)' },
                        { id: 'Libra (Thula Raasi)', label: 'Libra (Thula Raasi)', value: 'Libra (Thula Raasi)' },
                        { id: 'Scorpio (Vruchikha Raasi)', label: 'Scorpio (Vruchikha Raasi)', value: 'Scorpio (Vruchikha Raasi)' },
                        { id: 'Sagittarius (Dhanur Raasi)', label: 'Sagittarius (Dhanur Raasi)', value: 'Sagittarius (Dhanur Raasi)' },
                        { id: 'Capricorn (Makara Raasi)', label: 'Capricorn (Makara Raasi)', value: 'Capricorn (Makara Raasi)' },
                        { id: 'Aquarius (Khumbha Raasi)', label: 'Aquarius (Khumbha Raasi)', value: 'Aquarius (Khumbha Raasi)' },
                        { id: 'Pisces (Meena Raasi)', label: 'Pisces (Meena Raasi)', value: 'Pisces (Meena Raasi)' }
                    ]}
                        className="navbar-layout"
                        fontSize="12"
                    />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornCountry" label="Born Country" placeholder="Enter the Country Name" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornState" label="Born State" placeholder="Enter the State Name" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornLocation" label="Born Location" placeholder="Enter the Location" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="bornLocality" label="Born Locality" placeholder="Enter the Locality" />
                </div>
                <div className="mtop15p mbot15p">
                <Select
                    placeholder="Select Star (Nakshatram)"
                    label="Star (Nakshatram)"
                    options={[{ id: 'Star', label: 'Star', value: 'Star' }]}
                    className="navbar-layout"
                    width="100%"
                    fontSize="12"
                />
                </div>
            </Col>
        </Row>
        </div>
        <Row>
            <Col align="center">
            <div className="input-group">
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

export default CommunityBackground;