import React from "react";
import { ContainerFluid, Row, Col, Pill, UrlParams, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Summary from './Summary/index.js';
import YouWatchedList from './YouWatchedList/index.js';
import OurMatchSuggestions from './OurMatchSuggestions/index.js';
import PeopleWatchedYou from './PeopleWatchedYou/index.js';

const MyDashboard = ()=>{
 const url = UrlParams()?.baseUrl;
 return (<>
    <Header menulinks={HeaderMenu()} activeId="MyDashboard" />
    <ContainerFluid>
        <Row>
            <Col xl={12} xxl={12}>
            <Pill mode="vertical" 
 layout={{
    menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
    content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
 }}
 menulinks={[
     { id:'summary', url:url+'MyDashboard#summary', label:'Summary', content:(<Summary />) },
     { id:'youWatchedList', url:url+'MyDashboard#youWatchedList', label:'Your Watched List', content:(<YouWatchedList />) },
     { id:'ourMatchSuggestions', url:url+'MyDashboard#ourMatchSuggestions', label:'Our Match Suggestions', content:(<OurMatchSuggestions />) },
     { id:'peopleWatchedYou', url:url+'MyDashboard#peopleWatchedYou', label:'People Watched You', content:(<PeopleWatchedYou />) }]} 
 activeId="summary" 
 colorConfig={{
    active: { color: Colors.light, backgroundColor: '#953062' },
    default: { color: Colors.secondary, backgroundColor: '' }
 }} />
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default MyDashboard;