import React from "react";
import { Row, Col, TextBox, Card } from "e-ui-react";
// import SampleData from '@TempData/student-sample.json';

const SampleData = {};

const DuolingoElement = ()=>{
 return (<>
 <label className="form-label"><b>Duolingo :</b></label>
    <Card padding={15}>
   <Row>
        <Col xxl={12} xl={12}>
            <TextBox label="Overall Score" name="DuolingoScore"
                placeholder="0"
                value={SampleData?.duolingoScore}
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

export default DuolingoElement;