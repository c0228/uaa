import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Button, Icon, Modal, Alert, TablePagination, searchTableTerm, UrlAsyncFetch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import AddEmployeeForm from './components/add-employees/index.js';
import UpdateEmployeeForm from './components/update-employees/index.js';
import './index.css';

const ManageEmployees = ()=>{
 const [showAlert, setShowAlert] = useState({ type:'', icon:'', show: false, message:'' });
 const [ showAddModal, setShowAddModal ] = useState(false);
 const [ showEditModal, setShowEditModal ] = useState(false);
 const [ showDeleteModal, setShowDeleteModal ] = useState(false);
 const [updateEmployeeData, setUpdateEmployeeData] = useState();
 const [deleteEmployeeData, setDeleteEmployeeData] = useState();
 const [viewEmployeedata, setViewEmployeeData] = useState([]);

 useEffect(()=>{
  document.title = 'Manage Employees | VKAbroad';
  document.body.style.backgroundColor = "#fcfcfc";
  initialize();
 },[]);

 const initialize = async() =>{
  const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/list/employees', 'GET', {} );
  setViewEmployeeData( response );
 };

 const handleEdit = (editData) =>{
  setUpdateEmployeeData(editData);
  setShowEditModal(true);
 };

 const handleDelete = (deleteData) =>{
  let userAuthDetails = localStorage.getItem("USER_AUTH_DETAILS");
      userAuthDetails = JSON.parse(userAuthDetails);
  if(userAuthDetails?.data?.userId !== deleteData?.userId){
    setShowAlert({ type:'', icon:'', show: false, message:'' });
    setDeleteEmployeeData(deleteData);
    setShowDeleteModal(true);
  } else {
     setShowAlert({ type:'danger', icon:'fa-warning', show: true, message:'Deletion of Employee\'s Self Account is prohibited on this web portal. Please Contact your Administrator for Support.' });
  }
 };

 const handleDeleteAccount = async() =>{
  const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'user/delete', 
      'POST', { userId: deleteEmployeeData?.userId } );
  if(response?.status?.toLowerCase()==='success'){
      setShowAlert({ type:'success', icon:'fa-check-circle', show: true, message: response?.message });
      setShowDeleteModal(false);
      initialize();
  } else {
      setShowAlert({ type:'danger', icon:'fa-warning', show: true, message: response?.message });
      setShowDeleteModal(false);
  } 
 };

 const HeaderTitle = ({ title }) =>{
  return (<div className="manageEmployees-headerTitle">
    <div className="manageEmployees-div-title"><h4><b>{title}</b></h4></div>
    <div className="manageEmployees-div-btn" align="right">
        <Button type="primary" size={11} onClick={()=>setShowAddModal(true)}>
          <Icon type="FontAwesome" name="fa-plus-circle" size={13} />
          <span className="mLeft5p"><b>Add New Employee Account</b></span>
        </Button>
    </div>
  </div>);
 };

 const columns = [{
    header: 'Employee ID',
    align:'center',
    key: 'employeeId',
    width:'10%',
    render: (row) => (<div>{row?.userId}</div>)
  },
  {
    header: 'Employee Name',
    key: 'employeeName',
    width:'20%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.name, searchTerm)}</div>)
  },
  { 
    header: 'Account Type', 
    key: 'accountType', 
    width:'10%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.userRole, searchTerm)}</div>)
  },
  { 
    header: 'Email Address', 
    key: 'email', 
    width:'15%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.email, searchTerm)}</div>)
  },
  { 
    header: 'Mobile Address', 
    key: 'mobile', 
    width:'10%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.mcountrycode+"-"+row?.mobile, searchTerm)}</div>)
  },
  { 
    header: 'Created On', 
    key: 'createdOn', 
    width:'10%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.createdOn, searchTerm)}</div>)
  },
  { 
    header: 'Last Updated On', 
    key: 'lastUpdatedOn', 
    width:'10%',
    render: (row, searchTerm) =>(<div>{searchTableTerm(row?.lastUpdatedOn, searchTerm)}</div>)
  },
  { 
    header: 'Actions', 
    key: 'actions', 
    width:'10%',
    render: (row, searchTerm) =>(<div>
        <span onClick={()=>handleEdit(row)}>
        <Icon type="FontAwesome" name="fa-edit" size={16} />
    </span>
    <span onClick={()=>handleDelete(row)} style={{ marginLeft:'5px' }}>
        <Icon type="FontAwesome" name="fa-trash" size={16} />
    </span>
    </div>)
  },
];



 return (<>
 {showAddModal && (<Modal title="Add New Employee" show={showAddModal} onClose={setShowAddModal}>
  <AddEmployeeForm initialize={initialize} />
 </Modal>)}

 {showEditModal && (<Modal title="Update Existing Employee" show={showEditModal} onClose={setShowEditModal}>
     {updateEmployeeData && Object.keys(updateEmployeeData) && <UpdateEmployeeForm data={updateEmployeeData} initialize={initialize} />}
    </Modal>)}

    {showDeleteModal && (<Modal title="Update Existing Employee" show={showDeleteModal} onClose={setShowDeleteModal}>
     {deleteEmployeeData && (<div align="center">
        <div>Are you sure to delete <b>{deleteEmployeeData?.userRole}</b> Account of <b>"{deleteEmployeeData?.name}"</b>?</div>
        <div className="mtop5p">
            <Button type="success" size={11} onClick={()=>handleDeleteAccount()}><b>Yes</b></Button>
            <Button type="danger" size={11} onClick={()=>setShowDeleteModal(false)}><b>No</b></Button>
        </div>
     </div>)}
    </Modal>)}

 <Header menulinks={HeaderMenu()} activeId="ManageEmployees" />
 <ContainerFluid>
    <Row>
      <Col md={12}>
        <HeaderTitle title="Manage Employees" />
        {showAlert?.show && (<div className="mbot15p">
          <Alert type={showAlert?.type} show={showAlert?.show} body={<div>
              <Icon type="FontAwesome" name={showAlert?.icon} size={16} />
              <span className="mLeft5p">{showAlert?.message}</span>
            </div>} />
        </div>)}
        <div className="mtop15p">
        <TablePagination header={{ backgroundColor:'#f1f1f1', color:'#000', columns: columns }} pageSize={10} api={{
    url:process.env.NEXUS_URL + 'user/list/employees',
    method:"GET" }} />
        </div>
      </Col>
    </Row>
 </ContainerFluid>
 <Footer />
 </>);
};

export default ManageEmployees;