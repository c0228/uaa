import React, { useState, useEffect } from "react";
import { Icon, Modal, Button } from "e-ui-react";
import UpdateEmployeeForm from './../update-employees/index.js';

const ViewEmployees = () =>{
 const [ showEditModal, setShowEditModal ] = useState(false);
 const [ showDeleteModal, setShowDeleteModal ] = useState(false);
 const [data, setData] = useState([]);
 const [updateEmployeeData, setUpdateEmployeeData] = useState();
 const [deleteEmployeeData, setDeleteEmployeeData] = useState();
 useEffect(()=>{
  setData([{ userId:'1', name: 'Nellutla L N Rao', email:'nellutlalnrao@gmail.com', mcountrycode: '+91', mobile: '6300193369', userRole:'ADMINISTRATOR', createdOn: '', lastUpdatedOn: '' },
    { userId:'2', name: 'Nellutla Venkata Kishore', email:'kishorenellutla524@gmail.com', mcountrycode:'+91', mobile: '9160869337', userRole:'EMPLOYEE', createdOn: '', lastUpdatedOn: '' }]);
 },[]);
 const handleEdit = (editData) =>{
    setUpdateEmployeeData(editData);
    setShowEditModal(true);
 };
 const handleDelete = (deleteData) =>{
    setDeleteEmployeeData(deleteData);
    setShowDeleteModal(true);
 };
 const handleDeleteAccount = () =>{

 };
 return (<div>
    {showEditModal && (<Modal title="Update Existing Employee" show={showEditModal} onClose={setShowEditModal}>
     {updateEmployeeData && Object.keys(updateEmployeeData) && <UpdateEmployeeForm data={updateEmployeeData} />}
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
 <div className="table-responsive">
    <table className="table">
     <thead>
       <tr style={{ backgroundColor:'#eee' }}>
           <td><b>Employee ID</b></td>
           <td><b>Employee Name</b></td>
           <td><b>Account Type</b></td>
           <td><b>Email Address</b></td>
           <td><b>Mobile Address</b></td>
           <td><b>Created On</b></td>
           <td><b>Last Updated On</b></td>
           <td align="center"><b>Actions</b></td>
       </tr>
     </thead>
     <tbody>
        {data?.map((d)=>{
            return (<tr>
                <td>{d?.userId}</td>
                <td>{d?.name}</td>
                <td>{d?.userRole}</td>
                <td>{d?.email}</td>
                <td>{d?.mcountrycode}-{d?.mobile}</td>
                <td>{d?.createdOn}</td>
                <td>{d?.lastUpdatedOn}</td>
                <td align="center" style={{ cursor:'pointer' }}>
                    <span onClick={()=>handleEdit(d)}>
                        <Icon type="FontAwesome" name="fa-edit" size={16} />
                    </span>
                    <span onClick={()=>handleDelete(d)} style={{ marginLeft:'5px' }}>
                        <Icon type="FontAwesome" name="fa-trash" size={16} />
                    </span>
                </td>
            </tr>);
        })}
     </tbody>
    </table>
   </div>
   </div>);
};

export default ViewEmployees;