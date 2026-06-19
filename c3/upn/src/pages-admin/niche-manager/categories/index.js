import React, { useState, useEffect } from "react";
import { SideWrapperNavbar, SideWrapperPage, SideWrapperMenu, SideWrapperHeader, SideWrapperBody,
Icon, ContainerFluid, Row, Col, Badge, Card, TextBox, TextArea, Button, Colors } from "e-ui-react";
import AdminSideWrapperMenu from "@Components/admin-sidewrapper-menu/index.js";
import DisplayEdit from "./components/display-edit/index.js";
import { AppColors } from "@Utils/AppColorManager.js";

const Categories = () =>{
 const [displayMode, setDisplayMode] = useState({ op: "view", id: "" });
 const [apiResponseData, setApiResponseData] = useState([]);
 const [formData, setFormData] = useState({ enTitle: "", enDesc: "", hiTitle: "", hiDesc: "" });
 const DisplayView = ({ title, desc }) =>{
     return (<div className="mtop5p">
         <div><b>{title}</b></div>
         <div className="mtop5p">{desc}</div>
     </div>);
  };
  useEffect(() => {
     document.body.style.backgroundColor='#f6f6f9';
     fetch("http://localhost/projects/uaa/c3/upn/nexus/niches/category/view").then((response) => response.json())
        .then((data) => {
          console.log("apiResponse:", data);
          setApiResponseData(data);
         })
        .catch((error) => {
          console.error("API Error:", error);
        });
  }, []);
 return (<div>
    <AdminSideWrapperMenu>
      <div className="mtop15p">
        <ContainerFluid>
         <Row>
            <Col md={12}>
            <h3><b>Manage Categories</b><hr/></h3>
            </Col>
         </Row>
          <Row>
              {apiResponseData?.map((d,i)=>{
               const catId = d?.cat_id;
               const enTitle = d?.en_cat_name;
               const enDesc = d?.en_cat_desc;
               const hiTitle = d?.hi_cat_name;
               const hiDesc = d?.hi_cat_desc;
               const isEditing = displayMode.op === "edit" && displayMode.id === catId;
               return (<Col key={i} md={6}>
                <div className="mbot15p">
                  <Card padding={15}>
                      <div>
                          <Badge type="primary-o" label={<b>{catId}</b>} size="12" style={{ marginRight:'5px' }} />
                          <span className="pull-right" style={{ cursor:'pointer' }} 
                              onClick={()=>{
                                  setDisplayMode({ op: 'edit', id: catId })
                                  setFormData({ 
                                      "enTitle": enTitle,
                                      "enDesc": enDesc,
                                      "hiTitle": hiTitle,
                                      "hiDesc": hiDesc
                                  })
                              }}>
                              <Icon type="FontAwesome" name="fa-edit" size={18} color="#0d6efd" />
                          </span>
                      </div>
                      <div className="mtop5p">
                      {isEditing?(<><DisplayEdit formData={formData} setFormData={setFormData} /></>):(<div>
                          <Row>
                              <Col md={6}><DisplayView title={enTitle} desc={enDesc} /></Col>
                              <Col md={6}><DisplayView title={hiTitle} desc={hiDesc} /></Col>
                          </Row>
                      </div>)}
                      </div>
                  </Card>
                </div>
               </Col>);
              })}
          </Row>
        </ContainerFluid>
       </div>
    </AdminSideWrapperMenu>
 </div>);
};

export default Categories;