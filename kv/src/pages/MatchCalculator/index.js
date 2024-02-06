import React, { useState, createContext, useContext } from "react";
import { ContainerFluid, Row, Col, Card, Form, Select } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import CalculatorForm from './components/CalculatorForm/index.js';
import KundaliniDesc from './components/KundaliniDesc/index.js';

const MatchCalculatorContext = createContext();
export const getMatchCalculatorContext = () => useContext( MatchCalculatorContext );

const MatchCalculator = ()=>{
 const [calculatorFormData, setCalculatorFormData ] = useState({});
 return (<>
    <Header menulinks={HeaderMenu()} activeId="MatchCalculator" />
    <MatchCalculatorContext.Provider value={{ calculatorFormData, setCalculatorFormData }}>
        <ContainerFluid>
            <Row>
                <Col xl={3} xxl={3}>
                    <CalculatorForm />
                </Col>
                <Col xl={9} xxl={9}>
                    <KundaliniDesc />
                </Col>
            </Row>
        </ContainerFluid>
    </MatchCalculatorContext.Provider>
 </>);
};

export default MatchCalculator;
