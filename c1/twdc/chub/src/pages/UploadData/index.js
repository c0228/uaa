import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Button, Icon, FileUpload, UrlAsyncFetch, Accordian, Breadcrumb } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import DisplayFiles from './components/display-files/index.js';
import DisplayLogs from "./components/display-logs/index.js"; 
import './index.css';

const UploadData = () =>{
 const [uploadedList, setUploadedList] = useState([]);
 const [selectedFile, setSelectedList] = useState('');
 const [breadcrumbData, setBreadcrumbData] = useState();
 // const [selectedFileLogs, setSelectedFileLogs] = useState();
 useEffect(()=>{
  document.title = 'Upload Data | VKAbroad';
  document.body.style.backgroundColor = "#fcfcfc";
  resetBreadCrumb();
  displayUploadFilesList();
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
 const bulkUploadExecution = async(files) =>{
  const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'university/bulk/upload', 
    'POST', { targetDirectory:'/', fileName:files  } );
  console.log("response", response);
 };
 const displayUploadFilesList = async() =>{
  const response = await UrlAsyncFetch( process.env.NEXUS_URL + 'university/files/list', 'GET', { } );
  console.log("response [displayUploadFilesList]: ", response);
  setUploadedList(response);
 };
 const resetBreadCrumb = ()=>{
  setBreadcrumbData([{ label:'List of Files', url:'#', onClick:()=>resetBreadCrumb() }]);
  setSelectedList('');
 };
 const addToBreadCrumb = async(selectedFile) =>{
  let newBreadCrumb = [...breadcrumbData];
      newBreadCrumb.push({ label: selectedFile, url:'#' });
  setBreadcrumbData(newBreadCrumb);
  setSelectedList(selectedFile);
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
          <div style={{ minHeight:'43.2vh' }}>
            <FileUpload name="helloWorld" type="fileDropper" height="240" autoSubmit={true} 
              backend={{
                "apiUrl": process.env.NEXUS_URL+"upload/file",
                "targetDirectory": "/"
              }} 
              afterUploadSuccess={async(fileUploaderDetails)=>{ 
                console.log("afterUploadSuccess [fileUploaderDetails]: "+fileUploaderDetails);
                const uploaderDetails = JSON.parse(fileUploaderDetails);
                const files = uploaderDetails?.map((detail)=>detail?.name);
                bulkUploadExecution(files);
                displayUploadFilesList();
                // university/bulk/upload
                // targetDirectory
                // fileName
              }}
            />
          </div>
         </Card>
        </Col>
        <Col md={6}>
         <Card padding={15}>
          <SubHeaderTitle title="Excel Sheet Template" />
          <div style={{ minHeight:'45vh' }}>
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
                        If you adding course Data, make sure Course Id given by you in AlphaNumeric Format 
                        (Accepted upto 5 characters).</li>
                </ul>
            </div>
            <div align="center">
                <a href={process.env.NEXUS_URL+'assets/doc/universities_upload_sheets.xlsx'} download>
                <Button type="success" size={11}>
                  <Icon type="FontAwesome" name="fa-cloud-download" size={13} />
                  <span style={{ marginLeft:'5px' }}>Download Excel Sheet</span>
                </Button>
                </a>
            </div>
          </div>
         </Card>
        </Col>
    </Row>
    <Row>
      <Col md={12}>
        <div style={{ marginBottom:'45px' }}>
          <div className="mtop15p"><HeaderTitle title="File Uploaded Logs" /></div>
          <Breadcrumb backgroundColor="#ddd" 
              data={breadcrumbData} />
          {selectedFile?.length>0?(<div className="mtop5p">
            <DisplayLogs selectedFile={selectedFile} />
          </div>):(<div className="mtop5p">
            <DisplayFiles uploadedList={uploadedList} addToBreadCrumb={addToBreadCrumb} />
            </div>)}
        </div>
      </Col>
    </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default UploadData;