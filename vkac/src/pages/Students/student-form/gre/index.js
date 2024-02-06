import React from "react";
import { Row, Col, TextBox, Card } from "e-ui-react";
// import SampleData from '@TempData/student-sample.json';

const SampleData = {};

const GREElement = ()=>{
 return (<>
 <label className="form-label"><b>GRE Score :</b></label>
    <Card padding={15}>
   <Row>
        <Col xxl={12} xl={12}>
            <TextBox label="Overall Score" name="GRE_OverallScore"
                placeholder="0"
                value={SampleData?.gre}
                // validation={{
                //     required:{
                //         value: true,
                //         errorMessage:"This is a Mandatory Field"
                //     }
                // }}
            />
        </Col>
     </Row>
     </Card>
 </>);
};

export default GREElement;