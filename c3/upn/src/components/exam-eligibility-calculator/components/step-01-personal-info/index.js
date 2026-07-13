import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form } from "e-ui-react";

const PersonalInfo = ({ data }) =>{
 const { lang } = useParams();
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  

    }
 };
 return (<div>
    <div><h5><b>1. {data?.label}</b></h5><hr/></div>
    <Form name={data?.id}  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
        onSubmit={NextHandler}>
        <ContainerFluid>
            <Row>
            </Row>
        </ContainerFluid>
    </Form>
 </div>);
};

export default PersonalInfo;