import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';

const FoodTrucks = () =>{
 useEffect(()=>{ document.body.style.backgroundColor='#ffeded'; },[]);
 const data = [{ "date":"Nov 01", "day":"Friday", "time":{ "from":"06 PM", "to":"10 PM" }, "truck": "Cousins Maine Lobster" },
         { "date":"Nov 02", "day":"Saturday", "time":{ "from":"05 PM", "to":"10 PM" }, "truck": "Truman's Smokehouse" },
         { "date":"Nov 03", "day":"Sunday", "time":{"from":"02 PM", "to":"07 PM" }, "truck": "Kings Breakfast and more" },
         { "date": "Nov 05 - 07", "day":"Tuesday - Thursday", "time":{"from":"05 PM", "to":"09 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 08", "day":"Friday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "St Vincent Spanish Cuisine" },
         { "date":"Nov 09", "day":"Saturday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Eat Thai Raleigh" },
         { "date":"Nov 10", "day":"Sunday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 12 - 14", "day":"Tuesday - Thursday", "time":{"from":"05 PM", "to":"09 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 15", "day":"Friday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Will & Pop" }];

const data2 =[{ "date":"Nov 16", "day":"Saturday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Shmack N plates Bistro" },
         { "date":"Nov 17", "day":"Sunday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 19 - 21", "day":"Tuesday - Thursday", "time":{"from":"05 PM", "to":"09 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 22", "day":"Friday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Captain Gastro" },
         { "date":"Nov 23", "day":"Saturday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Mr. Cheesesteak" },
         { "date":"Nov 24", "day":"Sunday", "time":{"from":"02 PM", "to":"09 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 26 - 28", "day":"Tuesday - Thursday", "time":{"from":"05 PM", "to":"09 PM" }, "truck": "Capones Chicago Eats" },
         { "date":"Nov 29", "day":"Friday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Bruno Burgers" },
         { "date":"Nov 30", "day":"Saturday", "time":{"from":"05 PM", "to":"10 PM" }, "truck": "Kings Breakast and more" }];
 return (<div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="FoodTrucks" />
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col md={9}>
               <Row>
                  <Col md={12}>
                  <div align="center" className="heading-title" style={{ marginTop:'15px' }}><b>NOVEMBER FOOD TRUCKS</b></div>
                  </Col>
               </Row>
               <div className="mobile-view">
               <table style={{ width:'100%' }}>
                <tbody>
                    {[...data,...data2]?.map((d,i)=>{
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
               </div>
               <div className="desktop-view">
               <Row>
               <Col md={6}>
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
            <Col md={6}>
            <table style={{ width:'100%' }}>
                <tbody>
                    {data2?.map((d,i)=>{
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
               {/*<img src={process.env.PROJECT_URL+"assets/food-truck/2.png"} style={{ width:'90%', height:'auto' }} />*/}
            </Col>
               </Row>
               </div>
            </Col>
            <Col md={3}>
               <img src={process.env.PROJECT_URL+"assets/food-truck/1.png"} style={{ marginTop:'75px', width:'90%', height:'auto' }} />
               <img src={process.env.PROJECT_URL+"assets/food-truck/2.png"} style={{ marginTop:'75px', width:'90%', height:'auto' }} />
            </Col>
        </Row>
    </ContainerFluid>
    </div>
    <Footer />
 </div>);
};

export default FoodTrucks;