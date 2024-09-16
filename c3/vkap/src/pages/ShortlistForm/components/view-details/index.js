import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Colors, Button, Icon } from "e-ui-react";
import './index.css';

const ViewDetails = ({ data }) =>{
 const[studentDetails, setStudentDetails] = useState();
 useEffect(()=>{
  console.log("data: ", data);
  setStudentDetails( data );
 },[data]);
 const ScoreTemplate = ({ label, value, colors })=>{
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '20px', height: '20px', color:colors.color, backgroundColor: colors.bg, 
            borderRadius: '50%', textAlign: 'center', paddingTop:'1px' }}><b>{label}</b></div>
        </div>
        <div style={{ width: '60%', display: 'flex', alignItems: 'center' }}> : {value}</div>
      </div>);
  };
 return (<div>
    <div align="right">
     <Button type="outline-primary" size={11}><b>Send <Icon type="FontAwesome" name="fa-envelope-o" size={14} /> Mail</b></Button>
    </div>
  <div align="center" className="shortlist-view-subTitle">
    <b>STUDENT DETAILS</b>
  </div>
  <ContainerFluid>
    <Row>
        <Col md={3} className="shortlist-view-box shortlist-view-top-left">
            <div><b>Full Name:</b></div>
            <div>{studentDetails?.fullName}</div>
        </Col>
        <Col md={3} className="shortlist-view-box shortlist-view-top">
            <div><b>Email:</b></div>
            <div>{studentDetails?.email}</div>
        </Col>
        <Col md={2} className="shortlist-view-box shortlist-view-top">
            <div><b>Mobile:</b></div>
            <div>{studentDetails?.mobile}</div>
        </Col>
        <Col md={2} className="shortlist-view-box shortlist-view-top">
            <div><b>Preferred Country:</b></div>
            <div>{studentDetails?.moveTo}</div>
        </Col>
        <Col md={2} className="shortlist-view-box shortlist-view-top-right">
            <div><b>Preferred Master Course:</b></div>
            <div>{studentDetails?.prefMasterCourse}</div>
        </Col>
    </Row>
    <Row>
        <Col md={3} className="shortlist-view-box shortlist-view-bottom-left">
            <div><b>SSC (% Marks):</b></div>
            <div>{(studentDetails?.ssc) && (studentDetails?.ssc+'%')}</div>
        </Col>
        <Col md={3} className="shortlist-view-box shortlist-view-bottom">
            <div><b>Intermediate (% Marks):</b></div>
            <div>{(studentDetails?.inter) && (studentDetails?.inter+'%')}</div>
        </Col>
        <Col md={2} className="shortlist-view-box shortlist-view-bottom">
            <div><b>B.Tech/Degree (% Marks):</b></div>
            <div>{(studentDetails?.degree) && (studentDetails?.degree+'%')}</div>
        </Col>
        <Col md={2} className="shortlist-view-box shortlist-view-bottom">
            <div><b>Experience (in years):</b></div>
            <div>{(studentDetails?.empExpYears) && 
                (parseInt(studentDetails?.empExpYears)>0)?studentDetails?.empExpYears+' years':
                    studentDetails?.empExpYears+' year' }</div>
        </Col>
        <Col md={2} className="shortlist-view-box shortlist-view-bottom-right">
            <div><b>Experience (in Field):</b></div>
            <div>{studentDetails?.empExpField}</div>
        </Col>
    </Row>
    </ContainerFluid>
    <div style={{ border:'1px solid #000', borderRadius:'8px', marginTop:'15px', backgroundColor:'#ffe7e6' }}>
    <ContainerFluid>
    <Row>
        <Col md={3} style={{ borderRight:'1px solid #000', paddingTop:'10px', paddingBottom:'10px' }}>
          <Row>
            <Col md={3}><div style={{ marginTop:'15px' }}><b>TOEFL</b></div></Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="R" value="10" colors={{ bg:Colors.primary, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="W" value="10" colors={{ bg:Colors.warning, color:'#000' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="L" value="10" colors={{ bg:Colors.danger, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="S" value="10" colors={{ bg:Colors.secondary, color:'#fff' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ marginTop:'15px' }}>
                    <ScoreTemplate label="O" value="10" colors={{ bg:Colors.success, color:'#fff' }} />
                </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ borderRight:'1px solid #000', paddingTop:'10px', paddingBottom:'10px' }}>
          <Row>
            <Col md={3}><div style={{ marginTop:'15px' }}><b>IELTS</b></div></Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="R" value="10" colors={{ bg:Colors.primary, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="W" value="10" colors={{ bg:Colors.warning, color:'#000' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ margin:'5px'}}>
                    <ScoreTemplate label="L" value="10" colors={{ bg:Colors.danger, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="S" value="10" colors={{ bg:Colors.secondary, color:'#fff' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ marginTop:'15px' }}>
                    <ScoreTemplate label="O" value="10" colors={{ bg:Colors.success, color:'#fff' }} />
                </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ borderRight:'1px solid #000', paddingTop:'10px', paddingBottom:'10px' }}>
          <Row>
            <Col md={3}><div style={{ marginTop:'15px' }}><b>PTE</b></div></Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="R" value="10" colors={{ bg:Colors.primary, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="W" value="10" colors={{ bg:Colors.warning, color:'#000' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="L" value="10" colors={{ bg:Colors.danger, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="S" value="10" colors={{ bg:Colors.secondary, color:'#fff' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ marginTop:'15px' }}>
                    <ScoreTemplate label="O" value="10" colors={{ bg:Colors.success, color:'#fff' }} />
                </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ paddingTop:'10px', paddingBottom:'10px' }}>
            <Row>
                <Col md={3}><div style={{ marginTop:'15px' }}><b>Duolingo</b></div></Col>
                <Col md={3}>
                    <div style={{ marginTop:'15px' }}>
                        <ScoreTemplate label="O" value="10" colors={{ bg:Colors.success, color:'#fff' }} />
                    </div>
                </Col>
                <Col md={3}><div style={{ marginTop:'15px' }}><b>GRE</b></div></Col>
                <Col md={3}>
                    <div style={{ marginTop:'15px' }}>
                        <ScoreTemplate label="O" value="10" colors={{ bg:Colors.success, color:'#fff' }} />
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
    </ContainerFluid>
    </div>
    <div align="center" className="shortlist-view-subTitle" style={{ marginTop:'15px' }}><b>UNIVERSITIES SHORTLIST</b></div>
    <div className="table-responsive">
        <table className="table" style={{ border:'1px solid #000' }}>
        <thead>
            <tr style={{ backgroundColor:'#ccc' }}>
                <td><b>S No.</b></td>
                <td><b>University Name</b></td>
                <td><b>Campus</b></td>
                <td><b>Course Name</b></td>
                <td><b>Duration</b></td>
                <td><b>Fees</b></td>
                <td><b>App Fees</b></td>
                <td><b>Leaving Expenses</b></td>
                <td><b>Init Deposit</b></td>
                <td><b>Intake</b></td>
                <td><b>Deadline</b></td>
                <td><b>Link</b></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1.</td>
                <td>University Name</td>
                <td>Campus</td>
                <td>Course Name</td>
                <td>Duration</td>
                <td>Fees</td>
                <td>App Fees</td>
                <td>Leaving Expenses</td>
                <td>Init Deposit</td>
                <td>Intake</td>
                <td>Deadline</td>
                <td>Link</td>
            </tr>
        </tbody>
        </table>
    </div>
 </div>);
};

export default ViewDetails;