import React from "react";
import { ContainerFluid ,Row ,Col, Card, Colors, Badge, Switch, Choice, Button, TextBox, 
  ProgressBar, Hover } from "e-ui-react";
import Sections from "../Sections/index.js";

const Component1 = () =>{
return(<>
<ContainerFluid>
    <Row>
      <Col xl={12} xxl={4}>
        <h4 className="bs-header" style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', 
          padding:'8px 2px', margin:'15px 0px' }}><b>Examination Name</b></h4>
      </Col>
    </Row>
    <Row>
      <Col xl={4} xxl={4}>
          <Sections />
      </Col>
    </Row>
    <Row>
        <Col xl={4} xxl={4}>
      <div>
        <div style={{padding: '5px'}}>
            <h5>Section-A</h5><br />
            <Row><Col xl={6} xxl={6}><b>Marks: 25</b></Col>
            <Col xl={6} xxl={6}>
            <b>Questions: 10</b>
            </Col>
            </Row>
            </div>
                     
    </div>
        </Col>
        <Col xl={8} xxl={8}>
            <h4><b>Section-A</b></h4><br />
            <Row>
                <Col xl={4} xxl={4}>
                    <h4><b>Question-01</b></h4>
                      <div style={{paddingTop:'10px'}}><b>Average Time taken to solve a question:</b>
                      <TextBox name="surname" /></div>
                      <div style={{paddingTop:'5px'}}><Choice type="checkbox" id="numbers" name="numbers"
                    value={[{ id:1, label:"Mark for Review", value:"1"}]} 
                    disabled={false} />
                    </div> 
                    
                </Col>
                <Col xl={8} xxl={8}>
                  <div>
                <Switch type="radio" id="numbers" name="numbers" 
                    value={[{ id:1, label:"Clear Response", value:"Clear Response"}]} 
                    disabled={false} />
                    </div>
                <div>
                    <b><i>500 was invested at 12% per annum simple interest and a certain sum of money 
                    invested at 10% per annum simple interest. If the sum of the interest on both 
                    the sum after 4 years is 480, the latter sum of money is ?</i></b>
                    </div>
                    <div>
                      <Row>
                        <Col xl={4} xxl={4}><Choice type="radio" id="numbers" name="numbers"
                             value={[{ id:1, label:"450 ", value:"1"},
                                    { id:2, label:"750 ", value:"2" },
                                    { id:3, label:"600 ", value:"3" },
                                    { id:4, label:"550 ", value:"4" }]} 
                    disabled={false} />
                    </Col>
                    <Col xl={8} xxl={8}>
                    </Col>
                  </Row>
                  <div>
                    <Row>
                      <Col xl={6} xxl={6}>
                      <Button type="danger" label="Report Question" size={11} />
                      <Hover type="tooltip" placement="right" component={<Button type="secondary" label="Next Question" size={11} />} 
                  hoverContent="Click to go to the next question" />
                      </Col>
                    </Row>
                </div>
                    </div>
                </Col>
            </Row>            
         </Col>
    </Row>
</ContainerFluid>
</>);
};


export default Component1;