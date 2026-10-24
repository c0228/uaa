import React, { useState, useEffect } from "react";
import { Row, Col, Icon, Card } from "e-ui-react";
import { NichesData } from '@Pages/OnBoarding/SetCategories/data.js';
import { getNichesContext } from "@Pages/OnBoarding/SetCategories/context.js";
import './index.css';

const DisplayNiches = () =>{
 const [data, setData] = useState(NichesData?.data);
 const nichesContext = getNichesContext();
 useEffect(()=>{
    console.log("nichesContext?.contextData?.searchQuery: ", nichesContext?.contextData?.searchQuery);
    const data = searchNiches(NichesData, nichesContext?.contextData?.searchQuery);
    setData(data);
  },[nichesContext?.contextData?.searchQuery]);
 const searchNiches = (nichesData, searchText = "") => {
    const search = searchText.trim().toLowerCase();

    // If no search text, return all categories
    if (!search) {
        return nichesData.data;
    }

    return nichesData.data.filter((category) => {
        // Match category label
        const categoryMatch = category.label
            .toLowerCase()
            .includes(search);

        // Match any subcategory label
        const subCategoryMatch = category.subCategories.some(
            (subCategory) =>
                subCategory.label.toLowerCase().includes(search)
        );

        // Return the entire category if either matches
        return categoryMatch || subCategoryMatch;
    });
  };

  const HighlightText = ({ label = "", searchText = "" }) => {
    const search = searchText.trim();

    if (!search) {
        return <>{label}</>;
    }

    const escapedSearch = search.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
    );

    const regex = new RegExp(`(${escapedSearch})`, "gi");

    return (
        <>
            {label.split(regex).map((part, index) =>
                part.toLowerCase() === search.toLowerCase() ? (
                    <mark key={index}>{part}</mark>
                ) : (
                    <React.Fragment key={index}>
                        {part}
                    </React.Fragment>
                )
            )}
        </>
    );
};

const NicheSelectionHandler = (event) => {
    const { id, checked } = event.target;
    const userSelected = nichesContext?.contextData?.userSelected;

    let updatedSelection;

    if (userSelected?.categories === "A") {
        const excludes = checked
            ? userSelected.excludes.filter(item => item !== id)
            : [...new Set([...userSelected.excludes, id])];

        updatedSelection = {
            ...userSelected,
            includes: [],
            excludes
        };
    } else {
        const includes = checked
            ? [...new Set([...userSelected.includes, id])]
            : userSelected.includes.filter(item => item !== id);

        updatedSelection = {
            ...userSelected,
            includes,
            excludes: []
        };
    }

    // Update selected count
    updatedSelection.selectedCount =
        updatedSelection.categories === "A"
            ? updatedSelection.subCategoriesCount -
              updatedSelection.excludes.length
            : updatedSelection.includes.length;

    nichesContext?.setContextData({
        userSelected: updatedSelection
    });
};

const isSelected = (id) => {
    const userSelected = nichesContext?.contextData?.userSelected;

    if (userSelected?.categories === "A") {
        return !userSelected?.excludes?.includes(id);
    }

    return userSelected?.includes?.includes(id);
};

 return (<>
 <div>{JSON.stringify(nichesContext?.contextData?.userSelected)}</div>
 <div>{nichesContext?.contextData?.searchQuery}</div>
  <div className="mtop15p" style={{ paddingLeft:'15px', paddingRight:'15px' }}>
        {data?.map((c,i1)=>{
            return (<div key={i1} className="mtop15p">
                <Row>
                    <Col md={12}><div><h4>
                        <Icon type="FontAwesome" name={c?.icon} size={18} style={{ marginRight:'8px' }} />
                        <span style={{ fontSize: '22px', fontFamily: 'Metropolis', letterSpacing: '0.4px' }}> 
                            <b>
                                <HighlightText label={c?.label}
                                    searchText={nichesContext?.contextData?.searchQuery || ""} />
                            </b>
                        </span>
                        <span className="pull-right">
                            <Icon type="FontAwesome" name="fa-angle-double-down" size={18} />
                        </span>
                        </h4><hr/></div></Col>
                </Row>
                <Row className="mtop10p">
                {c?.subCategories?.map((s,i2)=>{
                    return (<Col key={i2} md={3}>
                        <div style={{ marginBottom:'12px' }}>
                        <Card padding={15}>
                            <div style={{ display:'flex' }}>
                                <div style={{ width:'15%' }}>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" 
                                            role="switch" id={s?.id} checked={isSelected(s?.id)}
                                            onChange={(event)=>NicheSelectionHandler(event)} />
                                    </div>
                                </div>
                                <div style={{ width:'85%' }}>
                                    <div><h5>
                                        <Icon type="FontAwesome" name={s?.icon} size={18} style={{ marginRight:'5px' }} />
                                        <b>
                                            <HighlightText label={s?.label}
                                                searchText={nichesContext?.contextData?.searchQuery || ""} />
                                        </b>
                                    </h5></div>
                                    <div style={{ color:'#777' }}>{s?.desc}</div>
                                </div>
                            </div>
                        </Card>
                        </div>
                    </Col>);
                })} 
                </Row>    
            </div>);
        })}
    </div>
 </>);
};

export default DisplayNiches;