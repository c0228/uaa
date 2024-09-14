import React from "react";
import { ContainerFluid, Row, Col, Card, Pill, ProgressCircle, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Contact from './../Home/Components/Contact/index.js';
import Footer from '@Templates/Footer/index.js';
import { data } from './data.js';

const Specials = () =>{
 const Items = ({ data })=>{
  return (<div style={{ marginBottom:'45px', paddingLeft:'12px', paddingRight:'15px' }}>
    <Row>
    {data?.map((d,i)=>{
        return (<Col md={3}>
            <img src={process.env.PROJECT_URL+'assets/specials/'+d} 
          style={{ marginTop:'25px', borderRadius:'8px', boxShadow:'2px 2px 2px 2px #808080'}} />
        </Col>);
    })}
    </Row>
    </div>);
 };
 const ListItem = ({ data }) =>{
  return (<Row>
    {data?.map((dat,index)=>{
        return (<Col key={index} md={4}>
            <div style={{ marginBottom:'15px' }}>
            <Card padding={15} backgroundColor={(index%2===0)?"#ffecea":"#e8f5ff"} style={{ boxShadow:'1px 1px 1px 1px #ccc' }}>
            <Row>
              <Col sm={12} md={12}>
              <div align="center" style={{ display:'flex', flexDirection:'row', marginBottom:'15px' }}>
                  <div align="center" style={{ width:'50%' }}>
                  <img src={dat?.img} style={{ width:'110px', height:'auto', borderRadius:'12px' }} />
                  </div>
                  <div align="center" style={{ width:'50%' }}>
                      <div style={{ fontSize:'12px', color:'#555', paddingBottom:'10px' }}><b>Alcohol Percentage</b></div>
                      <ProgressCircle percentage={dat?.alcoholPercentage} />
                  </div>   
              </div>
              </Col>
           </Row>
           <Row>
              <Col md={12}><div align="center"><h5 style={{ textTransform:'uppercase' }}><b>{dat?.title}</b></h5></div>
              <div style={{ fontSize:'16px', color:'#555' }}>{dat?.desc}</div>
              </Col>
            </Row>
            </Card>
            </div>
            </Col>);
    })}    
  </Row>);
 };
 const ListItem2 = ({ data }) =>{
    return (<Row>
      {data?.map((dat,index)=>{
          return (<Col key={index} md={4}>
              <div style={{ marginBottom:'15px' }}>
              <Card padding={15} backgroundColor={(index%2===0)?"#ffecea":"#e8f5ff"} style={{ boxShadow:'1px 1px 1px 1px #ccc' }}>
              <Row>
                <Col sm={12} md={12}>
                <div align="center" style={{ marginBottom:'15px' }}>
                    <img src={dat?.img} style={{ width:'110px', height:'110px', borderRadius:'50%' }} />
                </div>
                </Col>
             </Row>
             <Row>
                <Col md={12}><div align="center"><h5 style={{ textTransform:'uppercase' }}><b>{dat?.title}</b></h5></div>
                <div style={{ fontSize:'16px', color:'#555' }}>{dat?.desc}</div>
                </Col>
              </Row>
              </Card>
              </div>
              </Col>);
      })}    
    </Row>);
   };
 return (<div>
    <div>
    <div style={{ position:'absolute', top:'40px' }}>
        <img src={"./assets/images/logo.png"} style={{ padding:'5px', width:'100px', height:'auto' }} />
    </div>
    <Header menulinks={HeaderMenu} activeId="Specials" />
    </div>
    <div style={{ marginBottom:'35px' }}>
    <ContainerFluid>
        <Row>
            <Col xxl={12} xl={12}>
                <div align="center" className="heading-title"><b>Specials</b></div>
            </Col>
        </Row>
    </ContainerFluid>
        <Items data={['1.png','2.png','3.png','4.png']} />
    <ContainerFluid>
        <Row>
            <Col xxl={12} xl={12}>
                <div id="NFLSpecials">
                <div align="center" className="heading-title"><b>NFL Specials</b></div>
                <div style={{ fontSize:'16px', marginTop:'25px' }}>
                <Pill mode="vertical" 
 layout={{
    menu:{ xs:'12', sm:'3', md:'3', lg:'3', xl:'3', xxl:'3' },
    content:{  xs:'12', sm:'9', md:'9', lg:'9', xl:'9', xxl:'9' }
 }}
 menulinks={[
     { id:'v3home', url:'#NFLSpecials', label:'BUCKET BEERS', content:(<div className="mtop15p">
        <div align="center" className="mbot15p" style={{ fontSize:'22px', letterSpacing:'1px' }}><b>DOMESTICS</b></div>
     <ListItem data={data?.["Bucket Beers - Domestics"]} />
     <div align="center" className="mbot15p" style={{ fontSize:'22px', letterSpacing:'1px' }}><b>IMPORTS</b></div>
     <ListItem data={data?.["Bucket Beers - Imports"]} />
     </div>) },
     { id:'v3menu1', url:'#NFLSpecials', label:'COCKTAILS', content:(<div className="mtop15p">
        <ListItem2 data={data?.["CockTails"]} />
        </div>) },
     { id:'v3menu2', url:'#NFLSpecials', label:'TOUCH DOWN SHOTS', content:(<div className="mtop15p">
        <ListItem2 data={data?.["Touch Down Shots"]} />
        </div>) }]} 
 activeId="v3home" 
 colorConfig={{
    active: { color: Colors.light, backgroundColor: '#000' },
    default: { color: Colors.secondary, backgroundColor: '' }
 }} /></div>
 </div>

                {/**/}
            </Col>
        </Row>
        
    </ContainerFluid>

   
    </div>
 <Contact />
 <Footer />
 </div>);
};

export default Specials;