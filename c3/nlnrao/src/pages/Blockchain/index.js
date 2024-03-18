import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, TextBox, Button, Select, Card, Switch } from "e-ui-react";
import ProductData from '@StaticData/products.json';

const Quotation = ()=>{
 return (<>
 <Header menulinks={HeaderMenu} activeId="BlockchainIntroduction" />
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={12} xxl={12}>
            <div>
                <h4 style={{ fontFamily:'BebasNeue', letterSpacing:'2px' }}><b>Request a Quotation</b></h4><hr/>
            </div>

            <div style={{ color:'#999', fontSize:'14px', marginTop:'10px' }}>
                Fill the Required Details below to get Free Quotation:
            </div>
            
            <Row>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="name" label={<><span className="font-red">*</span>Name</>} placeholder="Enter your Name" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="email" label={<><span className="font-red">*</span>Email Address</>} placeholder="Enter your Email Address" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="phone" label={<><span className="font-red">*</span>Phone Number</>} placeholder="Enter your Phone Number including (+1)" />
                  </div>
                </Col>
            </Row>
            
            {sessionStorage.getItem("QUOTATION_PRODUCTS")?.length>0 && 
            (JSON.parse(sessionStorage.getItem("QUOTATION_PRODUCTS"))?.map((quoteId, index)=>{
                let productDetails = ProductData?.products?.filter((product)=>product.id===quoteId)[0];
                return (<>
                  <div style={{ paddingTop:'15px', paddingBottom:'15px' }}>
                    <div align="center" style={{ fontFamily:'Metropolis', fontSize:'14px' }}><b>QUOTATION ITEM #{index+1}</b></div>
                  </div>
                  <Card padding={15}>
                    <Row>
                        <Col xs={12} xl={3} xxl={3}>
                            <div style={{ paddingBottom:'15px' }}>
                                <img src={productDetails?.image} />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <Select label="Control Options"
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
                                <Select
                                    label="Inside / Outside"
                                    placeholder="Select"
                                    options={[{ id: 'inside', label: 'Inside', value: 'Inside' },
                                            { id: 'outside', label: 'Outside', value: 'Outside' }]}
                                    fontSize="12"
                                    onChange={(event) => {
                                        let option = event.target.value;
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <Select
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
                                <Select
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
                        </Col>
                        <Col xs={12} xl={3} xxl={3}>
                            <div style={{ fontSize:'12px', marginBottom:'15px' }}>
                                <label className="form-label"><b>Title :</b></label>
                                <div>{productDetails?.title}</div>
                            </div>
                            <div style={{ fontSize:'12px', marginBottom:'15px' }}>
                                <label className="form-label"><b>Description :</b></label>
                                <div style={{ marginLeft:'3px' }}>{productDetails?.desc}</div>
                            </div>
                            <div style={{ fontSize:'12x', marginBottom:'15px' }}>
                                <label className="form-label"><b>Weight :</b></label>
                                <div style={{ marginLeft:'3px' }}>{productDetails?.weight}</div>
                            </div>
                            <div style={{ fontSize:'12px', marginBottom:'15px' }}>
                                <label className="form-label"><b>Thickness :</b></label>
                                <div style={{ marginLeft:'3px' }}>{productDetails?.thickness}</div>
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <TextBox name="room" label="Room Name" placeholder="Enter Room Name" />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <TextBox name="width_inch" label="Width (inch)" placeholder="Enter Width (inch)" />
                            </div>
                            <div style={{ marginBottom:'15px' }}>
                                <TextBox name="length_inch" label="Length (inch)" placeholder="Enter Length (inch)" />
                            </div>
                        </Col>
                        <Col xs={12} xl={3} xxl={3}>
                            <div style={{ marginBottom:'15px' }}>
                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Chain Control</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select
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
                                    <Select
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
                                    <TextBox name="cc_length_inch" label="Length (inch)" placeholder="Enter Length (inch)" />
                                </div>
                            </Card>
                            </div>

                            <Card padding={15}>
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Remote Motorized</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select
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
                        </Col>
                        <Col xs={12} xl={3} xxl={3}>
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
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}><b>Component</b></div>
                                <div style={{ marginBottom:'15px' }}>
                                    <Select
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
                                <div align="center" style={{ marginBottom:'15px', fontFamily:'Metropolis', textTransform:'uppercase' }}>
                                    <b>Roll Direction</b></div>
                                <div>
                                    <Select
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
                    <Row>
                        <Col xs={12} xl={3} xxl={3}>
                            <div>
                                <div style={{ fontSize:'14px' }}><b>EXW Price for Blind / piece:</b></div>
                                <div style={{ fontSize:'18px' }}><b>$ 170.00</b></div>
                            </div>
                        </Col>
                        <Col xs={12} xl={3} xxl={3}>
                            <div>
                                <div style={{ fontSize:'14px' }}><b>Total EXW Price for Blind :</b></div>
                                <div style={{ fontSize:'18px' }}><b>$ 170.00</b></div>
                            </div>
                        </Col>
                        <Col xs={12} xl={3} xxl={3}>

                        </Col>
                        <Col xs={12} xl={3} xxl={3}>
                            <div align="right" style={{ marginTop:'15px' }}>
                                <Button type="outline-primary" label="Remove from Quotation" size={11} />
                            </div>
                        </Col>
                    </Row>
                  </Card>
                </>);
            }))}

            <Row>
                <Col xs={12} xl={12} xxl={12}>
                    <div align="right" style={{ marginTop:'15px', marginBottom:'55px' }}>
                        <Button type="primary" label="Ask for Quotation" size={11} />
                    </div>
                </Col>
            </Row>
            
                {/*sessionStorage.getItem("QUOTATION_PRODUCTS")*/}
            
        </Col>
        <Col xs={12} xl={6} xxl={6}>
        </Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default Quotation;