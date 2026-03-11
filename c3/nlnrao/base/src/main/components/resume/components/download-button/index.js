import React, { useState } from "react";
import { Alert, Icon, Modal, Button, TextBox, Row, Col } from "e-ui-react";

const RESUME_PATH = "assets/resume";
const RESUME_FILE = "N.L.N.Rao-Resume";

const DownloadButton = ()=>{
  const [ showModal, setShowModal ] = useState(false);
  const [ docExtension, setDocExtension ] = useState();
  const [ accessCode, setAccessCode ] = useState('');
  const [ showMsg, setShowMsg ] = useState({ type:'', status: false, msg:'' });

  const AlertMsgTemplate = ( type, status, msg ) =>{
    return {
      type: type,
      status:  status,
      msg: (<div><Icon type="FontAwesome" 
          name={type==='danger'?'fa-warning':'fa-check-circle'} size={11} style={{ marginRight:'5px' }} /> {msg}</div>)
    };
  };

  const ResetModalData = () =>{
    setAccessCode(''); // Clear Access Code when Modal is open
    setShowMsg({ type:'', status: false, msg:'' });
  };

  const AccessSetup = (docExt) => {
    ResetModalData();
    setShowModal(!showModal);
    setDocExtension(docExt);
  };
  const DownloadFile = async() =>{
    const fileURL = window.location.origin + '/' + RESUME_PATH + '/'+ accessCode + '/' + RESUME_FILE + docExtension;
    console.log(fileURL);
    try {
      setAccessCode('');
      const response = await fetch(fileURL, { method: "HEAD" });
      if (!response.ok) {
        setShowMsg(AlertMsgTemplate('danger', true, 'You have entered Invalid Access Code. Please Try again.'));
        console.log('1 Failed');
        return;
      }
      const link = document.createElement("a");
        link.href = fileURL;
        link.download = RESUME_FILE;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowMsg(AlertMsgTemplate('success', true, 'My Resume is downloaded Successfully.'));
    } catch (error) {
        setShowMsg(AlertMsgTemplate('danger', true, 'Unable to download file. Please try again later.'));
        console.log('2 Failed');
    }
  };
    return (<div>
      <Modal title="Unlock Resume Access" show={showModal} onClose={setShowModal}
        colorConfig={{
          header:{ color:'#0e172b', backgroundColor:'#ffc107' },
          body:{ color:'#999', backgroundColor:'#0e172b', borderColor:'#ffc107' }
        }}
      >
        <div align="left" style={{ padding:'15px' }}>
          <div align="center">Please enter your <b>Access Code</b> to continue 
            downloading my resume.</div>
          <div className="mt-2">
            <Alert type={showMsg?.type} key={showMsg?.status} show={showMsg?.status} body={showMsg?.msg} />
          </div>
          <div className="mt-2">
            <Row>
              <Col md={12}>
                <TextBox key={accessCode} name="accessCode" label="Your Access Code" 
                  value={accessCode}
                  placeholder="Enter your Access Code" 
                  onChange={(data)=>{
                    setAccessCode(data?.value?.toLowerCase())
                  }} />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col align="right" md={12}>
                <Button type="warning" className="col-md-12" size={11} onClick={DownloadFile}><b>Download File</b></Button>
              </Col>
            </Row>
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
        <Button type="outline-warning" size={11} onClick={()=>AccessSetup('.pdf')}>
          <span style={{ fontFamily:'Arial, sans-serif' }}><b>.pdf</b></span>
        </Button>
        <Button type="outline-warning" size={11} onClick={()=>AccessSetup('.docx')}>
          <span style={{ fontFamily:'Arial, sans-serif' }}><b>.docx</b></span>
        </Button>
    </div>
    </div>
    </div>);
};

export default DownloadButton;