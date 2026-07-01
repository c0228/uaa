import React from "react";
import { ContainerFluid, Row, Col, Switch } from "e-ui-react";

const FormReservations = () =>{
 return (<div>
    <div><h5><b>3. Reservation & Relaxations</b></h5><hr/></div>
    <ContainerFluid>
        <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Switch type="radio" id="PwBD" name="PwBD" 
                        label="Are you a Person with Benchmark Disability (PwBD)?" 
                        value={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} />
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default FormReservations;