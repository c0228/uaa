import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Icon } from "e-ui-react";

const AppBreadcrumb = () =>{
 return (<Breadcrumb backgroundColor="#f5f2f0" 
                     data={[{ label: (<><Icon type="FontAwesome" name="fa-dashboard" color="#ed3d0e" size={12} style={{ marginRight:'5px' }} /> 
                     <span style={{ color:'#ed3d0e'}}><b>My Dashboard</b></span></>), url:'#' },
                         { label:(<><Icon type="FontAwesome" name="fa-clock-o" size={12} color="#000" style={{ marginRight:'5px' }} /> 
                     <span style={{ color:'#000'}}><b>My Study Plan</b></span></>), url:'#' }]} />);
};