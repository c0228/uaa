import React from "react";
import { Row, Col, Button, TextBox } from "e-ui-react";
import { getNichesContext } from "@Pages/OnBoarding/SetCategories/context.js";

const SearchNiches = () =>{
 const nichesContext = getNichesContext();
 
const NicheSelectAllHandler = () => {
    const userSelected = nichesContext?.contextData?.userSelected;

    nichesContext?.setContextData({
        userSelected: {
            ...userSelected,
            categories: "A",
            selectedCount: userSelected.subCategoriesCount,
            excludes: [],
            includes: []
        }
    });
};
const NicheDeSelectAllHandler = () => {
    const userSelected = nichesContext?.contextData?.userSelected;

    nichesContext?.setContextData({
        userSelected: {
            ...userSelected,
            categories: "NA",
            selectedCount: 0,
            excludes: [],
            includes: []
        }
    });
};
 return (<>
    <div className="list-group mtop15p">
        <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
            <Row>
                <Col md={8}>
                    <TextBox name="search" placeholder="Search Topics (e.g., Food, Tech)..." />
                </Col>
                <Col md={2}>
                    <div align="right" style={{ paddingTop:'5px' }}>
                        <span style={{ marginLeft:'3px'}}>{nichesContext?.contextData?.userSelected?.selectedCount ?? 0}</span> 
                        <span style={{ marginLeft:'3px'}}>of</span>
                        <span style={{ marginLeft:'3px'}}>{nichesContext?.contextData?.userSelected?.subCategoriesCount ?? 0}</span>
                        <span style={{ marginLeft:'3px'}}>Selected</span>
                    </div>
                </Col>
                <Col md={2}>
                    <div align="right">
                        <Button type="dark" size={11} 
                            style={{ marginRight:'5px' }} 
                            onClick={()=>NicheSelectAllHandler()}><b>Select All</b></Button>
                        <Button type="outline-dark" size={11} 
                            onClick={()=>NicheDeSelectAllHandler()}><b>Clear All</b></Button>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
 </>);
};

export default SearchNiches;