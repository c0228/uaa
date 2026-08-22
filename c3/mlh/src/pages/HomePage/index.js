import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Icon } from "e-ui-react";
import MapPostalCode from "@Components/map-postal-code/index.js";
import Header1 from "@Templates/Header1/index.js";

const HomePage = () =>{
 useEffect(()=>{
    document.body.style.backgroundColor ="#eee";
 },[]);

 const MyCommunity = () =>{
    return (<Card padding={15}>
        <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px',
        fontSize: '14px',
        fontFamily: 'Metropolis',
        letterSpacing: '0.8px'
    }}
>
    <b>MY LOCAL COMMUNITY</b>

    <Icon type="FontAwesome" name="fa-edit" size={14} color="#0d6efd" />
</div>
                    <div style={{ marginTop:'5px' }}>
                        <table>
                            <tbody>
                                <tr><td><b>Locality</b></td><td><b>:</b></td><td>Nadergul</td></tr>
                                <tr><td><b>MP Constituency</b></td><td><b>:</b></td><td>Chevella</td></tr>
                                <tr><td><b>MLA Constituency</b></td><td><b>:</b></td><td>Maheshwaram</td></tr>
                                <tr><td><b>District</b></td><td><b>:</b></td><td>Ranga Reddy</td></tr>
                                <tr><td><b>State</b></td><td><b>:</b></td><td>Telangana</td></tr>
                                <tr><td><b>Postal Code</b></td><td><b>:</b></td><td>501510</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginTop:'5px' }}>
                        <MapPostalCode pincode="501510" styles={{ width:'100%', height:'300px', border:'1px solid #ccc', borderRadius:'8px' }} />
                    </div>
    </Card>);
 };

 const Menu = () =>{
    return (<>
         <ul className="nav nav-pills flex-column" style={{ marginTop:'15px', fontSize:'12px' }}>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <Icon type="FontAwesome" name="fa-home" size={14} color="#fff" style={{ marginRight:'5px' }} /> <b>Home</b>
                            </a>
                        </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Icon type="FontAwesome" name="fa-search" size={14} color="#000" style={{ marginRight:'5px' }} /> <b>Explore</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
    </>);
 };
 return (<>
    <Header1 />
        <Row>
            <Col md={3}>
                <div style={{ padding:'10px' }}>
                    <MyCommunity />
                    <Menu />
                    
                    

                   
                </div>
            </Col>
            <Col md={6}>
               <div style={{ padding:'10px' }}>
                
               </div>
            </Col>
            <Col md={3}></Col>
        </Row>
 </>);
};

export default HomePage;