import React, { useState } from "react";
import { ContainerFluid, Row, Col, Modal, Icon, Button } from "e-ui-react";

const AddNewCategory = () =>{
 const [showModal, setShowModal] = useState(false);
 return (<div>
  <Modal title="Add New Category" width="800px" show={showModal} onClose={setShowModal}>
    <div className="mtop15p mbot15p">
     <ContainerFluid>
        <Row>
            <Col md={12}>
            Test
            </Col>
        </Row>
     </ContainerFluid>
    </div>
  </Modal>
  <div align="right" className="mbot5p">
    <Button type="outline-dark" size={11} onClick={()=>setShowModal(true)}>
        <Icon type="FontAwesome" name="fa-plus-circle" size={11} style={{ marginRight:'8px' }}  />
        <b>Add New Category</b>
    </Button>
  </div>
 </div>);
};

export default AddNewCategory;