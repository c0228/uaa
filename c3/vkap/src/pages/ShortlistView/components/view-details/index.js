import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Colors, Button, Icon, UrlAsyncFetch, TablePagination, searchTableTerm } from "e-ui-react";
import './index.css';

const ViewDetails = ({ data }) =>{
 const[studentDetails, setStudentDetails] = useState({ });
 const[universityList, setUniversityList] = useState([]);
  
 const initialize = async(data) =>{
    const response = await UrlAsyncFetch(process.env.NEXUS_URL+'university/filter','POST',{ 
        degree: data?.degree, gre: data?.gre, duolingo: data?.duolingo, 
        ielts_l: data?.ielts_l, ielts_o: data?.ielts_o, ielts_r: data?.ielts_r, ielts_s: data?.ielts_s, ielts_w: data?.ielts_w, 
        pte_l: data?.pte_l, pte_o: data?.pte_o, pte_r: data?.pte_r, pte_s: data?.pte_s, pte_w: data?.pte_w,
        toefl_l: data?.toefl_l, toefl_o: data?.toefl_o, toefl_r: data?.toefl_r, toefl_s: data?.toefl_s, toefl_w: data?.toefl_w 
    });
    console.log("response: ", response);
    setUniversityList(response);
 };

 useEffect(()=>{
  console.log("data: ", data);
  initialize(data);
  setStudentDetails( data );
 },[data]);

 const sendMail = async() =>{
    const response = await UrlAsyncFetch(process.env.NEXUS_URL+'student/shortlist','POST', studentDetails);
    console.log("response: ", response);
 };

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

   const columns = [{
    header: 'S.No.',
    align:'center',
    key: 'id',
    width:'4%',
    render: (_row, _searchTerm, rowIndex) => (<strong>{rowIndex+1}</strong>)
  },
  {
    header: 'University Name',
    key: 'university',
    width:'26%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.university, searchTerm)}</strong>)
  },
  { 
    header: 'Campus', 
    key: 'campus', 
    width:'8%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.location+','+row?.country, searchTerm)}</strong>)
  },
  { 
    header: 'Course Name', 
    key: 'course', 
    width:'12%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.course, searchTerm)}</strong>)
  },
   { 
    header: 'Duration', 
    key: 'duration', 
    width:'8%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.duration, searchTerm)}</strong>)
  },
  { 
    header: 'Fees', 
    key: 'fees', 
    width:'5%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.fees, searchTerm)}</strong>)
  },
  { 
    header: 'App Fees', 
    key: 'appFees', 
    width:'6%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.appFees, searchTerm)}</strong>)
  },
  { 
    header: 'Expenses', 
    key: 'leavingExpenses', 
    width:'8%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.leavingExpenses, searchTerm)}</strong>)
  },
  { 
    header: 'Init Deposit', 
    key: 'initDeposit', 
    width:'8%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.initDeposit, searchTerm)}</strong>)
  },
  { 
    header: 'Intake', 
    key: 'intake', 
    width:'10%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.intake, searchTerm)}</strong>)
  },
  { 
    header: 'Deadline', 
    key: 'deadline', 
    width:'10%',
    render: (row, searchTerm) =>(<strong>{searchTableTerm(row?.deadline, searchTerm)}</strong>)
  },
  { 
    header: 'Link', 
    key: 'courseURL', 
    width:'5%',
    render: (row) =>(<a target="_blank" href={row?.courseURL}><strong>Visit</strong></a>)
  }
];

 return (<div>
    <div align="right">
     <Button type="outline-primary" size={11} onClick={()=>sendMail()}>
        <b>Send <Icon type="FontAwesome" name="fa-envelope-o" size={14} /> Mail</b>
     </Button>
    </div>
  <div align="center" className="shortlist-view-subTitle">
    <b>STUDENT DETAILS</b>
  </div>
  <div className="shortlist-view-box">
  <ContainerFluid>
    <Row>
        <Col md={3}>
            <div><b>Full Name:</b></div>
            <div>{studentDetails?.fullName}</div>
        </Col>
        <Col md={3}>
            <div><b>Email:</b></div>
            <div>{studentDetails?.email}</div>
        </Col>
        <Col md={2}>
            <div><b>Mobile:</b></div>
            <div>{studentDetails?.mobile}</div>
        </Col>
        <Col md={2}>
            <div><b>Preferred Country:</b></div>
            <div>{studentDetails?.moveTo}</div>
        </Col>
        <Col md={2}>
            <div><b>Preferred Master Course:</b></div>
            <div>{studentDetails?.prefMasterCourse}</div>
        </Col>
    </Row>
    <Row>
        <Col md={3} style={{ marginTop:'8px' }}>
            <div><b>SSC (% Marks):</b></div>
            <div>{(studentDetails?.ssc) && (studentDetails?.ssc+'%')}</div>
        </Col>
        <Col md={3} style={{ marginTop:'8px' }}>
            <div><b>Intermediate (% Marks):</b></div>
            <div>{(studentDetails?.inter) && (studentDetails?.inter+'%')}</div>
        </Col>
        <Col md={2} style={{ marginTop:'8px' }}>
            <div><b>B.Tech/Degree (% Marks):</b></div>
            <div>{(studentDetails?.degree) && (studentDetails?.degree+'%')}</div>
        </Col>
        <Col md={2} style={{ marginTop:'8px' }}>
            <div><b>Experience (in years):</b></div>
            <div>{(studentDetails?.empExpYears) && 
                (parseInt(studentDetails?.empExpYears)>0)?studentDetails?.empExpYears+' years':
                    studentDetails?.empExpYears+' year' }</div>
        </Col>
        <Col md={2} style={{ marginTop:'8px' }}>
            <div><b>Experience (in Field):</b></div>
            <div>{studentDetails?.empExpField}</div>
        </Col>
    </Row>
  </ContainerFluid>
  </div>
    <div style={{ border:'1px solid #000', borderRadius:'8px', marginTop:'15px', backgroundColor:'#f1f1f1' }}>
    <ContainerFluid>
    <Row>
        <Col md={3} style={{ borderRight:'1px solid #000', paddingTop:'10px', paddingBottom:'10px' }}>
          <Row>
            <Col md={3}><div className="shortlist-exam-title"><b>TOEFL</b></div></Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="R" value={studentDetails?.toefl_r} colors={{ bg:Colors.primary, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="W" value={studentDetails?.toefl_w} colors={{ bg:Colors.warning, color:'#000' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="L" value={studentDetails?.toefl_l} colors={{ bg:Colors.danger, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="S" value={studentDetails?.toefl_s} colors={{ bg:Colors.secondary, color:'#fff' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ marginTop:'15px' }}>
                    <ScoreTemplate label="O" value={studentDetails?.toefl_o} colors={{ bg:Colors.success, color:'#fff' }} />
                </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ borderRight:'1px solid #000', paddingTop:'10px', paddingBottom:'10px' }}>
          <Row>
            <Col md={3}><div  className="shortlist-exam-title"><b>IELTS</b></div></Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="R" value={studentDetails?.ielts_r} colors={{ bg:Colors.primary, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="W" value={studentDetails?.ielts_w} colors={{ bg:Colors.warning, color:'#000' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ margin:'5px'}}>
                    <ScoreTemplate label="L" value={studentDetails?.ielts_l} colors={{ bg:Colors.danger, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="S" value={studentDetails?.ielts_s} colors={{ bg:Colors.secondary, color:'#fff' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ marginTop:'15px' }}>
                    <ScoreTemplate label="O" value={studentDetails?.ielts_o} colors={{ bg:Colors.success, color:'#fff' }} />
                </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ borderRight:'1px solid #000', paddingTop:'10px', paddingBottom:'10px' }}>
          <Row>
            <Col md={3}><div className="shortlist-exam-title"><b>PTE</b></div></Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="R" value={studentDetails?.pte_r} colors={{ bg:Colors.primary, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="W" value={studentDetails?.pte_w} colors={{ bg:Colors.warning, color:'#000' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="L" value={studentDetails?.pte_l} colors={{ bg:Colors.danger, color:'#fff' }} />
                </div>
                <div style={{ margin:'5px' }}>
                    <ScoreTemplate label="S" value={studentDetails?.pte_s} colors={{ bg:Colors.secondary, color:'#fff' }} />
                </div>
            </Col>
            <Col md={3}>
                <div style={{ marginTop:'15px' }}>
                    <ScoreTemplate label="O" value={studentDetails?.pte_o} colors={{ bg:Colors.success, color:'#fff' }} />
                </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ paddingTop:'10px', paddingBottom:'10px' }}>
            <Row>
                <Col md={3}><div className="shortlist-exam-title"><b>Duolingo</b></div></Col>
                <Col md={3}>
                    <div style={{ marginTop:'15px' }}>
                        <ScoreTemplate label="O" value={studentDetails?.duolingo} colors={{ bg:Colors.success, color:'#fff' }} />
                    </div>
                </Col>
                <Col md={3}><div className="shortlist-exam-title"><b>GRE</b></div></Col>
                <Col md={3}>
                    <div style={{ marginTop:'15px' }}>
                        <ScoreTemplate label="O" value={studentDetails?.gre} colors={{ bg:Colors.success, color:'#fff' }} />
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
    </ContainerFluid>
    </div>
    <div align="center" className="shortlist-view-subTitle" style={{ marginTop:'15px' }}><b>UNIVERSITIES SHORTLIST</b></div>
    <div style={{ marginBottom:'45px' }}>
    {Object.keys(studentDetails)?.length>0 && <TablePagination header={{ backgroundColor:'blue', color:'#fff', columns: columns }} 
    pageSize={10} api={{ url:process.env.NEXUS_URL+'university/filter',
        method:'POST', params: studentDetails
    }} />}
    </div>
 </div>);
};

export default ViewDetails;