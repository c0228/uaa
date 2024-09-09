import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Button, Icon, FileUpload  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';

const UploadData = () =>{
 useEffect(()=>{
  document.title = 'Upload Data | VKAbroad';
  document.body.style.backgroundColor = "#fcfcfc";
 },[]);
 const HeaderTitle = ({ title }) =>{
  return (<div style={{ display:'flex', flexDirection:'row', marginBottom:'5px', borderBottom:'1px solid #ccc' }}>
    <div style={{ width:'60%' }}><h4><b>{title}</b></h4></div>
  </div>);
 };
 const SubHeaderTitle = ({ title }) =>{
    return (<div align="center" style={{ textTransform:'uppercase', paddingBottom:'15px' }}>
      <b>{title}</b>
    </div>);
 };
 return (<div>
  <Header menulinks={HeaderMenu()} activeId="UploadData" />
  <ContainerFluid>
    <Row>
      <Col md={12}>
        <HeaderTitle title="Upload Data" />
      </Col>
    </Row>
    <Row>
        <Col md={6}>
         <Card padding={15}>
          <SubHeaderTitle title="Upload Excel Sheet" />
          <div style={{ minHeight:'40vh' }}>
            <div align="center">Files upload are renamed into the format of <code style={{ fontSize:'14px', marginLeft:'5px' }}><b>FILENAME_YYYY-MM-DD-H-i-s.xlsx</b></code></div>
          <FileUpload name="helloWorld" type="fileDropper" height="240" autoSubmit={true} 
            backend={{
                "apiUrl": process.env.NEXUS_URL+"upload/file",
                "targetDirectory": "/"
            }} 
            afterUploadSuccess={(fileUploaderDetails)=>{ console.log("afterUploadSuccess [fileUploaderDetails]: "+fileUploaderDetails); }}
            />
          </div>
         </Card>
        </Col>
        <Col md={6}>
         <Card padding={15}>
          <SubHeaderTitle title="Excel Sheet Template" />
          <div style={{ height:'41.6vh' }}>
            <div><b>Instructions:</b></div>
            <div>
                <ul>
                    <li style={{ marginTop:'15px', lineHeight:'24px' }}>
                        This Excel Sheet consists of two sheets - 
                        <ol>
                            <li><i>Universities</i> (To upload Universities Data) and </li>
                            <li><i>Courses</i> (To Upload Course Data)</li>
                        </ol>
                    </li>
                    <li style={{ marginTop:'15px', lineHeight:'24px' }}>
                        If you adding new University Data, make sure University Id given by you in AlphaNumeric Format 
                        (Accepted upto 5 characters).</li>
                    <li style={{ marginTop:'15px', lineHeight:'24px' }}>
                        If you adding course Data, nake sure Course Id is empty (Backend will generate Course Id).</li>
                </ul>
            </div>
            <div align="center">
                <Button type="success" size={11}>
                  <Icon type="FontAwesome" name="fa-cloud-download" size={13} />
                  <span style={{ marginLeft:'5px' }}>Download Excel Sheet</span>
                </Button>
            </div>
          </div>
         </Card>
        </Col>
    </Row>
    <Row>
      <Col md={12}>
        <div className="mtop15p"><HeaderTitle title="File Uploaded Logs" /></div>
        <div align="center" className="mtop15p" style={{ color:'#555', fontSize:'13px' }}><i>No Files were found to display here</i></div>
      </Col>
    </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default UploadData;