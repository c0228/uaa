import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';

const FoodTrucks = () =>{
 useEffect(()=>{ document.body.style.backgroundColor='#ffeded'; },[]);
 const data = [{
    "date":"Oct 03",
    "day":"Thursday",
    "time":{"from":"06 PM", "to":"10 PM" },
    "truck": "Capones Chicago Eats",
 },{
   "date":"Oct 04",
   "day":"Friday",
   "time":{"from":"05 PM", "to":"10 PM" },
   "truck": "Getting Sauced in the City",
},{
   "date":"Oct 05",
   "day":"Saturday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "Taqueria Dominguez",
},{
   "date":"Oct 06",
   "day":"Sunday",
   "time":{"from":"02 PM", "to":"09 PM" },
   "truck": "Capones Chicago Eats",
},{
   "date":"Oct 10",
   "day":"Sunday",
   "time":{"from":"02 PM", "to":"09 PM" },
   "truck": "Capones Chicago Eats",
},{
   "date":"Oct 11",
   "day":"Friday",
   "time":{"from":"05 PM", "to":"10 PM" },
   "truck": "Tacos Mama Chavez",
},{
   "date":"Oct 12",
   "day":"Saturday",
   "time":{"from":"05 PM", "to":"10 PM" },
   "truck": "Shawarma Bowl",
},{
   "date":"Oct 13",
   "day":"Sunday",
   "time":{"from":"02 PM", "to":"09 PM" },
   "truck": "Capones Chicago Eats",
}];
const data2 =[{
   "date":"Oct 17",
   "day":"Thursday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "Capones Chicago Eats",
},{
   "date":"Oct 18",
   "day":"Friday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "Atlas Nomads",
},{
   "date":"Oct 19",
   "day":"Saturday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "The Tasty Turkey Que",
},{
   "date":"Oct 20",
   "day":"Sunday",
   "time":{"from":"02 PM", "to":"09 PM" },
   "truck": "Capones Chicago Eats",
},{
   "date":"Oct 24",
   "day":"Thursday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "Capones Chicago Eats",
},{
   "date":"Oct 25",
   "day":"Friday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "Tacos Mama Chavaz",
},{
   "date":"Oct 26",
   "day":"Saturday",
   "time":{"from":"06 PM", "to":"10 PM" },
   "truck": "El Rey Del Taco",
},{
   "date":"Oct 27",
   "day":"Sunday",
   "time":{"from":"02 PM", "to":"09 PM" },
   "truck": "Capones Chicago Eats",
}];
 return (<div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="FoodTrucks" />
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col md={4}>
               <img src={process.env.PROJECT_URL+"assets/food-truck/1.png"} style={{ marginTop:'75px', width:'90%', height:'auto' }} />
            </Col>
            <Col md={8}>
               <Row>
                  <Col md={12}>
                  <div align="center" className="heading-title" style={{ marginTop:'15px' }}><b>OCTOBER FOOD TRUCKS</b></div>
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
        </Row>
    </ContainerFluid>
    </div>
    <Footer />
 </div>);
};

export default FoodTrucks;