import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';

const FoodTrucks = () =>{
 useEffect(()=>{ document.body.style.backgroundColor='#ffeded'; },[]);
 const data = [{
    "date":"Sept 19",
    "day":"Thursday",
    "time":{"from":"5 PM", "to":"10 PM" },
    "truck": "Capones Chicago Eats",
 },{
    "date":"Sept 20",
    "day":"Friday",
    "time":{"from":"5 PM", "to":"10 PM" },
    "truck": "Los Panas",
 },{
    "date":"Sept 21",
    "day":"Saturday",
    "time":{"from":"5 PM", "to":"10 PM" },
    "truck": "El Toro Alebrije",
 },{
    "date":"Sept 22",
    "day":"Sunday",
    "time":{"from":"2 PM", "to":"9 PM" },
    "truck": "Capones Chicago Eats",
 },{
    "date":"Sept 26",
    "day":"Thursday",
    "time":{"from":"5 PM", "to":"10 PM" },
    "truck": "Capones Chicago Eats",
 },{
    "date":"Sept 27",
    "day":"Friday",
    "time":{"from":"5 PM", "to":"10 PM" },
    "truck": "Tacos 2 Los Garcias",
 },{
    "date":"Sept 28",
    "day":"Saturday",
    "time":{"from":"5 PM", "to":"10 PM" },
    "truck": "Atlas Nomads",
 },{
    "date":"Sept 29",
    "day":"Sunday",
    "time":{"from":"2 PM", "to":"9 PM" },
    "truck": "Capones Chicago Eats",
 }];
 return (<div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{ padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="FoodTrucks" />
    <div align="center" className="heading-title"><b>SEPTEMBER FOOD TRUCKS</b></div>
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col md={4}>
               <img src={process.env.PROJECT_URL+"assets/food-truck/1.png"} style={{ width:'90%', height:'auto' }} />
            </Col>
            <Col md={4}>
            <table style={{ width:'100%' }}>
                <tbody>
                    {data?.map((d,i)=>{
                        return (<tr key={i}>
                         <td style={{ padding:'15px' }}>
                            <div style={{ letterSpacing:'0.2px' }}><b>{d?.day}</b></div>
                            <div><b>({d?.time?.from} - {d?.time?.to})</b></div>
                         </td>
                         <td style={{ fontSize:'16px', color:'#bb0505', padding:'15px', borderRight:'1px solid #ccc' }}><div><b>{d?.date}</b></div></td>
                         <td><div style={{ padding:'15px', textTransform:'uppercase' }}><b>{d?.truck}</b></div></td>
                        </tr>);
                    })}
                    
                </tbody>
            </table>
            </Col>
            <Col md={4}>
               <img src={process.env.PROJECT_URL+"assets/food-truck/2.png"} style={{ width:'90%', height:'auto' }} />
            </Col>
        </Row>
    </ContainerFluid>
    </div>
    <Footer />
 </div>);
};

export default FoodTrucks;