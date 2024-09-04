import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ContainerFluid, Row, Col, Button,  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Component1 from './components/Component1/index.js';
import Component2 from './components/Component2/index.js';

const Home = ()=>{
 const navigate = useNavigate();
 return (<>
 
 <Header menulinks={HeaderMenu} activeId="Home" />
 <ContainerFluid>
    <Row>
        <Col xl={12} xxl={12}xs={12}>
            <div align="right" style={{ padding:'15px' }}>
                    <Link to="/exam"
                    state={{ data: 'Message from Link' }}>
                        <Button type="primary"><b>Attend online Examination</b></Button>
                    </Link>
            </div>
            <div align="right" style={{ padding:'15px' }}>
                <Button type="danger" onClick={()=>{ navigate("/exam", { state: { data: 'Hello' } }) }}>
                 <b>Attend online Examination</b>
                </Button>
            </div>
        </Col>
    </Row>
 </ContainerFluid>

 <Component1 />
 <Component2 />
 </>);
};

export default Home;