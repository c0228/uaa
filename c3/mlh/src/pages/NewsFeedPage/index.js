import React from "react";
import { ContainerFluid, Row, Col, Icon, Card, Select, TextBox, Autocomplete, Button  } from "e-ui-react";
import { AppColors } from "@Utils/AppColors.js";
import Header1 from "@Templates/Header1/index.js";

const NewsFeedPage = () =>{
 const NewsFeedHeader = () =>{
    return (<div style={{ display:'flex', flexDirection:'row' }}>
     <div>
        <Icon type="FontAwesome" name="fa-newspaper-o" size={22} color={AppColors?.primary}
            style={{ padding:'11px', backgroundColor: AppColors?.info, borderRadius:'50%' }} />
     </div>
     <div style={{ paddingLeft:'12px', paddingTop:'3px', paddingBottom:'3px' }}>
        <span style={{ fontSize:'16px'}}><b>News Feed</b></span>
        <div style={{ fontSize:'14px', color:'#555' }}>Discover what's happening in your community</div>
     </div>
    </div>);
 };
 return (<>
  <Header1 />
  <div style={{ marginTop:'15px'}}>
    <ContainerFluid>
    <Row>
        <Col md={12}>
            <div className="d-flex">
                <div style={{ width:'27%' }}><NewsFeedHeader /></div>
                <div style={{ width:'73%' }}>
                    
                </div>
            </div>
        </Col>
    </Row>
    <div style={{ marginTop:'15px' }}>
        <Row>
        <Col md={3}>
            <div className="list-group">
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <div>
                    <div style={{ fontSize:'15px', paddingTop:'2px', paddingBottom:'2px' }}><b>Search by Filters</b>
                    <span className="pull-right" style={{ fontSize:'11px', color: AppColors?.primary, paddingBottom:'2px',
                        borderBottom:'1px solid '+AppColors?.primary
                     }}><b>Clear All</b></span>
                    </div>
                </div>
            </div>
            <div className="list-group-item">
                <div>
                    <div>
                        <TextBox name="searchNews" label="Search News" placeholder="Enter News Title" />
                    </div>
                    <div style={{ marginTop:'15px' }}>
                        <Select label="Date Range" placeholder="Select Date Range"
                            options={[{ id: 'light', label: 'Light Theme', value: 'Light' },
                            { id: 'dark', label: 'Dark Theme', value: 'Dark' }]} />
                    </div>
                </div>

                <div style={{ marginTop:'15px' }}>
                    <Autocomplete name="nichesList" label="Categories / Sub-Categories" 
                    placeholder="Enter Categories / Sub-Categories" autoCompleteData={[]} />
                </div>

            </div>
            <div className="list-group-item">    

                <div align="right" style={{ marginTop:'15px' }}>
                    <Button type="outline-primary" size={11}><b>Reset Filters</b></Button>
                </div>
            </div>
            </div>
        </Col>
        <Col md={5}>
        
        </Col>
        <Col md={3}>
        
        </Col>
        </Row>
    </div>
  </ContainerFluid>
  </div>
 </>);
};

export default NewsFeedPage;