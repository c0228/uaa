import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon, TextBox, TextArea } from "e-ui-react";
import { AppColors } from "@Utils/AppColorManager.js";

const ViewCategories = () =>{
 const [displayMode, setDisplayMode] = useState({ op: "view", id: "" });
 const [apiResponseData, setApiResponseData] = useState([]);
 const [formData, setFormData] = useState({ enTitle: "", enDesc: "", hiTitle: "", hiDesc: "" });
 useEffect(() => {
    fetch("http://localhost/projects/uaa/c3/upn/nexus/niches/category/view").then((response) => response.json())
       .then((data) => {
         console.log("apiResponse:", data);
         setApiResponseData(data);
        })
       .catch((error) => {
         console.error("API Error:", error);
       });
 }, []);
 return (<div className="mtop15p">
  <ContainerFluid>
    <Row>
        {apiResponseData?.map((d,i)=>{
         const catId = d?.cat_id;
         return (<Col key={i} md={6}>
          <div className="mbot15p">
            <Card padding={15}>
                <div>
                    <Badge type="primary-o" label={catId} size="12" style={{ marginRight:'5px' }} />
                    <span className="pull-right" style={{ cursor:'pointer' }}>
                        <Icon type="FontAwesome" name="fa-edit" size={14} color="#0d6efd" />
                    </span>
                </div>
            </Card>
          </div>
         </Col>);
        })}
    </Row>
  </ContainerFluid>
 </div>);
};

export default ViewCategories;