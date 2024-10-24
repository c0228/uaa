import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeaderMenu } from '@Routes/NavbarList.js';
import { ContainerFluid, Row, Col, Breadcrumb } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import ViewDetails from './components/view-details/index.js';

const ShortlistView = () =>{
 const [shortlistFormDetails, setShortlistFormDetails] = useState();
 const { id  } = useParams();
 const HeaderTitle = () =>{
    return (<div><h4 className="shortlist-title"><b>Student's Shortlist View</b></h4></div>);
  };
 useEffect(()=>{
  let data = atob(id);
    data = JSON.parse(data);
  setShortlistFormDetails(data);
  console.log("shortlistFormDetails: ", data);
 },[id]);
 return (<div>
     <Header menulinks={HeaderMenu()} activeId="ShortlistForm" />
     <ContainerFluid>
   <Row><Col md={12}><HeaderTitle /></Col></Row>
   <Row>
      <Col md={12}>
            <div className="mbot5p">
                <Breadcrumb backgroundColor="#f1f1f1" 
                    data={[{ label:'Shortlist Form', url:process.env.PROJECT_URL+'consultancy/students-shortlist-form' },
                            { label:'Student Details', url:'#' }]} />
            </div>
        </Col>
        <Col md={12}>
        {shortlistFormDetails && Object?.keys(shortlistFormDetails)?.length>0 && <ViewDetails data={shortlistFormDetails} />}   
        </Col>
    </Row>
    </ContainerFluid>
    <Footer/>
 </div>);
};

export default ShortlistView;