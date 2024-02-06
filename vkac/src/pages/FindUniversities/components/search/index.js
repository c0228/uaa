import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, Dropdown, Card } from "e-ui-react";

const Search = ()=>{

 const SearchForm = ()=>{
    const menuOptions = [{ options:[{ label:"USA", value:"USA" },
    { label:"UK", value:"UK" },
    { label:"Australia", value:"Australia" },
    { label:"UAE", value:"UAE" }]
}];

    return (<>
        <ContainerFluid>
        <Row>
            <Col xxl={2} xl={1}></Col>
            <Col xxl={1} xl={2} className="mb-3">
                <Dropdown placeholder="Select Country" menu={menuOptions} 
                container={{
                    searchLabel: "Search"
                }} />
            </Col>
            <Col xxl={6} xl={6}>
                <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search University and Courses" aria-label="Recipient's username" 
                    aria-describedby="basic-addon2" />
                <button className="btn btn-primary" type="button" id="button-addon1">
                    <Icon type="FontAwesome" name="fa-search" size={12} /> <b>Search</b>
                </button>
                </div>
            </Col>
            <Col xxl={3} xl={3}>
                <button className="btn btn-outline-primary" type="button" id="button-addon1">
                    <Icon type="FontAwesome" name="fa-filter" size={12} /> <b>Additional Filters</b>
                </button>
            </Col>
        </Row>
    </ContainerFluid>
    </>);
 };

 return (<>
    <SearchForm />
    <ContainerFluid>
        <Row>
            <Col xxl={2} xl={3}>
                <Card padding={15} style={{ cursor:'pointer' }}>
                    <img style={{ borderTopLeftRadius: '4px', borderTopRightRadius:'4px' }} 
                        src="https://t4.ftcdn.net/jpg/05/48/85/97/360_F_548859788_vPLEqHuZ5AP2ONmTMZQOta2df1p4hNJE.jpg" />
                        <div className="mb-3">
                            <div style={{ padding:'5px 10px' }}>
                                <div align="center" style={{ marginBottom: '10px' }}><h4 className="bs-header"><b>Arizona State University</b></h4></div>
                                <div>
                                    <b>Location:</b> Tempe, USA
                                </div>
                            </div>
                            <div style={{ padding:'5px 10px' }}>
                                <b>Score Required:</b>
                            </div>
                            <div class="table-responsive" style={{ padding:'0px 10px' }}>
    <table class="table table-bordered">
      <thead>
        <tr align="center" style={{ backgroundColor:'#eee' }}>
          <th>TOEFL</th>
          <th>IELTS</th>
          <th>Duolingo</th>
          <th>PTE</th>
        </tr>
      </thead>
      <tbody>
        <tr align="center">
          <td><span style={{ fontSize:'18px' }}>56</span></td>
          <td><span style={{ fontSize:'18px' }}>56</span></td>
          <td><span style={{ fontSize:'18px' }}>56</span></td>
          <td><span style={{ fontSize:'18px' }}>56</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div align="center" style={{ padding:'5px 10px' }}>
  University is offering around <span style={{ fontSize:'18px', color:'dodgerBlue' }}><b>16</b></span> Courses
                            </div>
                        </div>

                </Card>
            </Col>
        </Row>
    </ContainerFluid>
 </>);
};

export default Search;