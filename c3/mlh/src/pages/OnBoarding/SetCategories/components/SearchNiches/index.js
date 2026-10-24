import React, { useState } from "react";
import { Row, Col, Button, TextBox } from "e-ui-react";
import { getNichesContext } from "@Pages/OnBoarding/SetCategories/context.js";

const SearchNiches = () =>{
 const nichesContext = getNichesContext();
 const [searchText, setSearchText] = useState("");

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

 const SearchHandler = (event) => {
    nichesContext?.setContextData({ searchQuery: (event.target.value.trim()) });
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
                    <div style={{ display: "flex", gap: "8px" }}>
                        <div  className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                style={{ borderTopRightRadius:'8px', borderBottomRightRadius:'8px' }}
                                placeholder="Search Topics (e.g., Food, Tech)..."
                                value={nichesContext?.contextData?.searchQuery}
                                onChange={(event) =>SearchHandler(event)}
                                onKeyDown={(event) =>SearchHandler(event)}
                            />
                            <span style={{position:'absolute', right:'8px', top:'7px' }}>
                                <i class="fa fa-search" style={{ color:'#777' }}></i>
                            </span>
                        </div>
                    </div>
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