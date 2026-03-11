import React, { useState } from "react";
import { Icon, Modal, Button, TextBox } from "e-ui-react";

const DownloadButton = ()=>{
  const [ showModel, setShowModal ] = useState(false);
    return (<div>
      <Modal title="Unlock Resume Access" show={showModel} onClose={setShowModal}
        colorConfig={{
          header:{ color:'#0e172b', backgroundColor:'#ffc107' },
          body:{ color:'#999', backgroundColor:'#0e172b', borderColor:'#ffc107' }
        }}
      >
        <div align="left" style={{ padding:'15px' }}>
          <div align="center">Please enter your <b>Access Code</b> to continue 
            downloading my resume.</div>
          <div className="mt-2">
            <TextBox name="accessCode" label="Your Access Code" placeholder="Enter your Access Code" />
          </div><hr/>
          <div className="mt-2">
            <span className="text-grey2"><b>Note:</b></span><br/>
            Access Codes are shared only with recruiters, hiring managers and authorized professionals. 
            To get Access, you can contact me at <b>me@nellutlalnrao.com</b>
          </div>
        </div>
      </Modal>
    <div className="mt-2">
      <div className="btn-group">
        <Button type="warning" size={11} disabled={true}>
          <Icon type="FontAwesome" name="fa-download" size={14} />
          <span style={{ fontFamily:'Arial, sans-serif', marginLeft:'5px' }}><b>Download Resume</b></span>
        </Button>
        <Button type="outline-warning" size={11} onClick={()=>setShowModal(!showModel)}>
          <span style={{ fontFamily:'Arial, sans-serif' }}><b>.pdf</b></span>
        </Button>
        <Button type="outline-warning" size={11} onClick={()=>setShowModal(!showModel)}>
          <span style={{ fontFamily:'Arial, sans-serif' }}><b>.docx</b></span>
        </Button>
    </div>
    </div>
    </div>);
};

export default DownloadButton;