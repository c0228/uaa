import React, { useState } from "react";
import { Modal, Button, Form, TextBox, Email, FileUpload  } from "e-ui-react";

const ApplyJob = () =>{
 const [ showModel, setShowModal ] = useState(false);
 return (<>
  <Button type="primary" size={11} onClick={()=>setShowModal(true)}><b>Apply Now</b></Button>
  <Modal title="Share your Details" show={showModel} onClose={setShowModal}>
    <Form name="applyJobForm" btnSubmit={{
            align: 'center',
            btnType:'primary',
            label:'Submit My Details',
            size: 11
        }}
        btnReset={{ 
          align: 'center',
          btnType:'danger',
          label:'Reset Form',
          size: 12,
          style:{ fontWeight:'bold' }
      }}
        onSubmit={async(form, isValidForm, setFormMode)=>{
            // Error Validation check
            if(isValidForm){  
                
            }
        }}>
      <TextBox name="name" label="Name" placeholder="Enter your Name" />
      <div className="mtop15p">
          <Email validation={{
            email:{
                formatCheck: true,
            }
        }} />
      </div>
      <div className="mtop15p">
        <FileUpload name="helloWorld" type="fileDropper" label="Upload your Resume" height="200" autoSubmit={true} 
          backend={{
            "apiUrl":"http://localhost/fileUpload/index.php",
            "targetDirectory": "uploads/"
          }} />
      </div>
    </Form>
  </Modal>
 </>);
}; 

export default ApplyJob;