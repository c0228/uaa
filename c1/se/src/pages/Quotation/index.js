import React, { useState } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Form, TextBox, Button, Select, Card, Switch, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";

const Quotation = ()=>{
 const [success, setSuccess] = useState(false);
 return (<>
 <Header menulinks={HeaderMenu} activeId="GetQuotation" />
 <div style={{ padding:'25px' }}>
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={10} xxl={10}>
            <div>
                <h4 style={{ fontFamily:'BebasNeue', letterSpacing:'2px' }}><b>Request a Quotation</b></h4><hr/>
            </div>
            {success && (<>
            <div style={{ padding:'15px' }}>
                We would like to inform you that we have successfully received your request for a quotation.<br/><br/> 
                Thank you for reaching out to us. Our team is currently reviewing the details provided in the form.
                Rest assured, we will diligently assess your requirements and prepare a comprehensive quotation tailored to your needs.
                Please expect to hear back from us within 24-48 hours with the requested information. In the meantime, if you have 
                any additional questions or specifications, feel free to reach out to us directly.
                Thank you for considering us for your [product/service] needs. We look forward to the opportunity to serve you.
            </div>
            </>)}
            {!success && (<>
            <div style={{ color:'#999', fontSize:'14px', marginTop:'10px' }}>
                Fill the Required Details below to get Free Quotation:
            </div>
            
            <Form name="quotationForm" 
 btnSubmit={{
    align: 'center',
    btnType:'primary',
    label:'Ask for Quotation',
    size: 11
}}
onSubmit={async(form, isValidForm, setFormMode)=>{
    if(isValidForm){  
        setSuccess(true);
        console.log("ForM VALUES");
        console.log(form);
        const reqBody = FormToReqBodyFormatter(form.quotationForm);
        console.log("reqBody", JSON.stringify(reqBody));

        await UrlAsyncFetch( process.env.NEXUS_URL + 'send/quotation', 'POST', reqBody );

    }
}}
>
            <Row>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="quoteBy" label={<><span className="font-red">*</span>Name</>} placeholder="Enter your Name" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="quoteEmail" label={<><span className="font-red">*</span>Email Address</>} placeholder="Enter your Email Address" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="quotePhone" label={<><span className="font-red">*</span>Phone Number</>} placeholder="Enter your Phone Number including (+1)" />
                  </div>
                </Col>
            </Row>
            
            <div style={{ marginTop:'15px' }}>
            <Card padding={15}>
                    <Row>
                        <Col xs={12} xl={4} xxl={4}>
                            <div style={{ fontSize:'12px', marginBottom:'15px' }}>
                               <TextBox name="detTitle" label={<><span className="font-red">*</span>Title</>} placeholder="Enter Title" />
                            </div>
                            <div style={{ fontSize:'12x', marginBottom:'15px' }}>
                                <TextBox name="detWeight" label={<><span className="font-red">*</span>Weight</>} placeholder="Enter Weight" />
                            </div>
                            <div style={{ fontSize:'12px', marginBottom:'15px' }}>
                                <TextBox name="detThickness" label={<><span className="font-red">*</span>Thickness</>} placeholder="Enter Thickness" />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <Select name="detControlOptions" 
                                    label="Control Options"
                                    placeholder="Select"
                                    options={[{ id: 'ManualChain', label: 'Manual Chain', value: 'Manual Chain' },
                                            { id: 'Cordless', label: 'Cordless', value: 'Cordless' },
                                            { id: 'Wand Motorized', label: 'Wand Motorized', value: 'Wand Motorized' },
                                            { id: 'Remote Motorized', label: 'Remote Motorized', value: 'Remote Motorized' }]}
                                    fontSize="12"
                                    onChange={(event) => {
                                        let option = event.target.value;
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <Select name="detMount"
                                label="Mount"
                                placeholder="Select"
                                options={[{ id: 'IM', label: 'IM', value: 'IM' },
                                        { id: 'OM', label: 'OM', value: 'OM' }]}
                                fontSize="12"
                                onChange={(event) => {
                                    let option = event.target.value;
                                }}
                            />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <Select name="detQuantity"
                                label="Quantity (pc)"
                                placeholder="Select"
                                options={[{ id: '1', label: '1', value: '1' },
                                        { id: '2', label: '2', value: '2' },
                                        { id: '3', label: '3', value: '3' },
                                        { id: '4', label: '4', value: '4' },
                                        { id: '5', label: '5', value: '5' },
                                        { id: '6', label: '6', value: '6' },
                                        { id: '7', label: '7', value: '7' },
                                        { id: '8', label: '8', value: '8' },
                                        { id: '9', label: '9', value: '9' },
                                        { id: '10', label: '10', value: '10' }]}
                                fontSize="12"
                                onChange={(event) => {
                                    let option = event.target.value;
                                }}
                            />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <TextBox name="detRoom" label="Room Name" placeholder="Enter Room Name" />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <TextBox name="detRoomWidth" label="Width (inch)" placeholder="Enter Width (inch)" />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <TextBox name="detRoomLength" label="Length (inch)" placeholder="Enter Length (inch)" />
                            </div>
                        </Col>
                        <Col xs={12} xl={4} xxl={4}>
                            
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Chain Control</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select name="ccPosition"
                                        label="Position"
                                        placeholder="Select"
                                        options={[{ id: 'L', label: 'L', value: 'L' },
                                                { id: 'R', label: 'R', value: 'R' }]}
                                        fontSize="12"
                                        onChange={(event) => {
                                            let option = event.target.value;
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select name="ccMaterial"
                                        label="Material"
                                        placeholder="Select"
                                        options={[{ id: 'SS', label: 'SS', value: 'SS' },
                                                { id: 'Plastic Chain', label: 'Plastic Chain', value: 'Plastic Chain' }]}
                                        fontSize="12"
                                        onChange={(event) => {
                                            let option = event.target.value;
                                        }}
                                    />
                                </div>
                                <div>
                                    <TextBox name="ccLength" label="Length (inch)" placeholder="Enter Length (inch)" />
                                </div>
                            </Card>
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}>
                                    <b>Cassette Option</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <TextBox name="withCassette" label="With Cassette" placeholder="Round Small" />
                                </div>
                                <div style={{ marginBottom:'15px' }}>
                                <Switch type="checkbox" id="coveredWithFabric" name="coveredWithFabric"
                                    value={[{ id:1, label:"Covered With Fabric", value:"Covered With Fabric"}]} />
                                </div>
                            </Card>
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Component</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select name="compColor"
                                        label="Color"
                                        placeholder="Select Color"
                                        options={[{ id: 'White', label: 'White', value: 'White' },
                                                { id: 'Black', label: 'Black', value: 'Black' },
                                                { id: 'Beige', label: 'Beige', value: 'Beige' },
                                                { id: 'Brown', label: 'Brown', value: 'Brown' },
                                                { id: 'Grey', label: 'Grey', value: 'Grey' },
                                                { id: 'Light Grey', label: 'Light Grey', value: 'Light Grey' }]}
                                        fontSize="12"
                                        onChange={(event) => {
                                            let option = event.target.value;
                                        }}
                                    />
                                </div>
                            </Card>
                            </div>
                            
                        </Col>
                        <Col xs={12} xl={4} xxl={4}>
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Remote Motorized</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select name="remoteMotorized"
                                        label="Motor Position"
                                        placeholder="Select"
                                        options={[{ id: 'L', label: 'L', value: 'L' },
                                                { id: 'R', label: 'R', value: 'R' }]}
                                        fontSize="12"
                                        onChange={(event) => {
                                            let option = event.target.value;
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom:'15px' }}>
                                    <TextBox name="motorType" label="Motor Type" placeholder="Enter Motor Type" />
                                </div>
                                <div>
                                    <TextBox name="multiChannel" label="Multi-Channel" placeholder="Enter Multi-Channel" />
                                </div>
                            </Card>
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Cordless</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <TextBox name="ezLift" label="EZ Lift" placeholder="Enter Value" />
                                </div>
                            </Card>
                            </div>
                            
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}>
                                    <b>Roll Direction</b></div>
                                <div>
                                    <Select name="rollDirection"
                                        label="Roll Direction"
                                        placeholder="Select Roll Direction"
                                        options={[{ id: 'Standard', label: 'Standard', value: 'Standard' },
                                                { id: 'Reverse', label: 'Reverse', value: 'Reverse' }]}
                                        fontSize="12"
                                        onChange={(event) => {
                                            let option = event.target.value;
                                        }}
                                    />
                                </div>
                            </Card>
                            </div>
                        </Col>
                    </Row>
                  </Card>
            </div>
            </Form>
            </>)}  
        </Col>
        <Col xs={12} xl={6} xxl={6}>
        </Col>
            
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Quotation;