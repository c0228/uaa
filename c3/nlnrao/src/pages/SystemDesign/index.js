import React, { useState, useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card, Switch, Button, Select, Icon } from "e-ui-react";
import ProductData from '@StaticData/products.json';

const Products = () =>{
 const [addToCart, setAddToCart] = useState([]);

 useEffect(()=>{
  console.log('Current environment:', process.env.NODE_ENV);
  console.log('Environment variables:', process.env.PROJECT_URL);

  document.body.style.backgroundColor = '#fff';
  if(sessionStorage.getItem("QUOTATION_PRODUCTS")?.length>0){
    setAddToCart(JSON.parse(sessionStorage.getItem("QUOTATION_PRODUCTS")));
  }
 },[]);

 useEffect(()=>{
  sessionStorage.setItem("QUOTATION_PRODUCTS", JSON.stringify(addToCart));
 },[addToCart]);

 return (<>
 <Header menulinks={HeaderMenu} activeId="SystemDesignIntroduction" />
 <div style={{ marginTop:'15px' }}>
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={2} xxl={2}>
            <div style={{ marginBottom:'15px' }}>
            <Card backgroundColor="#eee" border="0" borderRadius={6} padding={15}>
                <div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="brands" name="brands" label="Brands" 
                        value={[{ id:1, label:"Bali", value:"Bali"},
                                { id:2, label:"Levolor", value:"Levolor" },
                                { id:3, label:"SouthSeas", value:"SouthSeas" }]} />
                    </div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="control" name="control" label="Control" 
                            value={[{ id:1, label:"CordLoop", value:"CordLoop"},
                                    { id:2, label:"Cordless", value:"Cordless" },
                                    { id:3, label:"Motorized", value:"Motorized" }]} />
                    </div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="material" name="material" label="Material" 
                            value={[{ id:1, label:"Wood", value:"Wood"}]} />
                    </div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="motorization" name="motorization" label="Motorization" 
                            value={[{ id:1, label:"Remote", value:"Remote"},
                                    { id:2, label:"Smart Home Automation", value:"Smart Home Automation"}]} />
                    </div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="slatSize" name="slatSize" label="Slat Size" 
                            value={[{ id:1, label:"1 3/8''", value:"1 3/8''"},
                                    { id:2, label:"1'' or less", value:"1'' or less"},
                                    { id:3, label:"2''", value:"2''"},
                                    { id:4, label:"2.5''", value:"2.5''"}]} />
                    </div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="upgrade" name="upgrade" label="Upgrade" 
                            value={[{ id:1, label:"Cloth Tapes", value:"Cloth Tapes"},
                                    { id:2, label:"Privacy Slats", value:"Privacy Slats"},
                                    { id:3, label:"Routeless", value:"Routeless"}]} />  
                    </div>
                    <div style={{ paddingBottom:'15px' }}>
                        <Switch type="checkbox" id="windowType" name="windowType" label="Window Type" 
                            value={[{ id:1, label:"French Doors", value:"French Doors"},
                                    { id:2, label:"Xlarge", value:"Xlarge"}]} />
                    </div>
                    <div>
                        <Switch type="checkbox" id="additionalFeatures" name="additionalFeatures" label="Additional Features" 
                            value={[{ id:1, label:"2/1 Headrail", value:"2/1 Headrail"},
                                    { id:2, label:"3/1 Headrail", value:"3/1 Headrail"},
                                    { id:3, label:"Durable", value:"Durable"},
                                    { id:4, label:"Kid Safe Options", value:"Kid Safe Options"},
                                    { id:5, label:"Light Control", value:"Light Control" }]} />
                    </div>
                </div>
            </Card>
            </div>
        </Col>
        <Col xs={12} xl={10} xxl={10}>
        <Row>
    {ProductData?.products?.map((product,index)=>{
        return (
            <Col key={index} xs={12} xl={4} xxl={3}>
              <div>
                <div>
                    <img src={process.env.PROJECT_URL+product?.image} />
                </div>
                <div style={{ fontSize:'16px', paddingTop:'15px' }}>
                    <b>{product?.title}</b> 
                    <span className="pull-right" style={{ fontSize:'12px' }}><b>Brand:</b> Levolor</span>
                </div>
                <div>{product?.desc}</div>
                <div >
                    <span><b>Weight:</b> {product?.weight}</span>
                    <span className="pull-right">
                    <Button type={addToCart?.includes(product?.id)?"primary":"outline-primary"} label={<>
                        {addToCart?.includes(product?.id) && <Icon type="FontAwesome" name="fa-check" size={12} style={{ marginRight:'5px'}} />}
                        <span>{addToCart?.includes(product?.id)?"Added to Quotation":"Add to Quotation"}</span>
                    </>} size={11} onClick={()=>{
                        const productId = product?.id;
                        if(addToCart?.includes(productId)){
                            setAddToCart(addToCart.filter(item => item !== productId));
                        } else {
                            setAddToCart([...addToCart, productId]);
                        }
                    }} />
                    </span>
                </div>
                <div style={{ paddingBottom:'15px' }}>
                    <div><b>Thickness:</b> {product?.thickness}</div>
                </div>
              </div>
            </Col>);
    })}
    </Row>
    </Col>
    </Row>
    
 </ContainerFluid>
 </div>
 </>);
};

export default Products;