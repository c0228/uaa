import React, { useState } from "react";
import { ContainerFluid, Row, Col, Card, TextBox, TextArea, Button, Modal } from "e-ui-react";
import ViewCategories from "./components/ViewCategories/index.js";

const NichesManager = () =>{
 const [ showModel, setShowModal ] = useState(false);
 const [formMode, setFormMode] = useState();
 const AddCategoryHandler = () =>{
  setFormMode('add');
  setShowModal(true);
 };
 const UpdateCategoryHandler = () =>{
  setFormMode('update');
  setShowModal(true)
 };
 return (<div className="mtop15p">
    <Button type="primary" size={11} onClick={()=>AddCategoryHandler()}>Add Category</Button>
    <Button type="primary" size={11} onClick={()=>UpdateCategoryHandler()}>Update Category</Button>
    <ViewCategories />
 </div>);
};

export default NichesManager;