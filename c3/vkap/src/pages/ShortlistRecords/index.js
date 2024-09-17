import React from "react";
import { ContainerFluid, Row, Col, TablePagination, searchTableTerm, Card, Colors, formatDate } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
// import TablePagination from './components/TablePagination/index.js';

const ShortlistRecords = () =>{
  const DisplayTemplate = ({ size, label, value }) => {
    const sizes = size?.split('|');
    return (<div align="left" style={{ paddingTop: '5px' }}>
      <Row>
        <Col md={sizes[0]}>
         <div style={{ fontSize: '12px', color: '#333' }}><b>{label}:</b></div>
        </Col>
        <Col md={sizes[1]}>
         <div style={{ fontSize: '12px', color: '#555' }}><b>{value}</b></div>
        </Col>
      </Row>
    </div>);
  };

  const PersonalDetails = ({ row, searchTerm }) =>{
    const expYears = parseInt(row?.empExpYears) === 1 ? `${row.empExpYears} year` : `${row.empExpYears || 0} years`;
    return (<Card padding={15}>
     <DisplayTemplate size="6|6" label="Student Full Name" value={searchTableTerm(row?.fullName, searchTerm)} />
     <DisplayTemplate size="6|6" label="Email Address" value={searchTableTerm(row?.email,searchTerm)} />
     <DisplayTemplate size="6|6" label="Mobile Number" value={searchTableTerm(row?.mobile,searchTerm)} />
     <hr/>
     <div style={{ marginTop:'10px' }}>
      <DisplayTemplate size="6|6" label="SSC (%)" value={searchTableTerm(row?.ssc+'%',searchTerm)} />
      <DisplayTemplate size="6|6" label="Intermediate (%)" value={searchTableTerm(row?.inter+'%',searchTerm)} />
      <DisplayTemplate size="6|6" label="Degree" value={searchTableTerm(row?.degree+'%',searchTerm)} />
      <DisplayTemplate size="6|6" label="Job Experience" value={searchTableTerm(expYears,searchTerm)} />
      <DisplayTemplate size="6|6" label="Job Field" value={searchTableTerm(row?.empExpField+' Industry',searchTerm)} />
     </div>
    </Card>);
   };

   const SearchDetails = ({ row, searchTerm }) =>{
    const timeStamp = formatDate(row?.createdOn,{ year: 'numeric', month: 'short',  day: '2-digit', hour: '2-digit', 
        minute: '2-digit', second: '2-digit', hour12: true });
    return (<Card padding={15}>
      <DisplayTemplate size="4|8" label="Name" value={searchTableTerm(row?.searchedPersonName,searchTerm)} />
      <DisplayTemplate size="4|8" label="Email" value={searchTableTerm(row?.searchedPersonEmail,searchTerm)} />
      <DisplayTemplate size="4|8" label="User Role" value={searchTableTerm(row?.searchePersonRole,searchTerm)} />
      <div align="right" style={{ marginTop:'5px', color:'#777', lineHeight:'20px' }}>
        <i>The details of this Student eligibility was searched at {timeStamp}</i></div>
    </Card>);
   };

   const MasterEntrance = ({ row, searchTerm }) =>{
    
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

    const ExamTemplate = ({ name, r, w, l, s, o}) =>{
      return (<div>
      <Row>
        <Col md={2}><div align="left"><b>{name}</b></div></Col>
        {r && (<Col md={2}><ScoreTemplate label="R" value={r} colors={{ bg:Colors.primary, color:'#fff' }} /></Col>)}
        {w && (<Col md={2}><ScoreTemplate label="W" value={w} colors={{ bg:Colors.warning, color:'#000' }} /></Col>)}
        {l && (<Col md={2}><ScoreTemplate label="L" value={l} colors={{ bg:Colors.danger, color:'#fff' }} /></Col>)}
        {s && (<Col md={2}><ScoreTemplate label="S" value={s} colors={{ bg:Colors.secondary, color:'#fff' }} /></Col>)}
        {o && (<Col md={2}><ScoreTemplate label="O" value={o} colors={{ bg:Colors.success, color:'#fff' }} /></Col>)}
      </Row>
      </div>);
    };
    return (<Card padding={15}>
        <div style={{ paddingBottom:'5px' }}>
            <DisplayTemplate size="5|7" label="Preferred Country Details" 
                value={searchTableTerm(row?.moveTo,searchTerm)} />
        </div>
        <div>
            <DisplayTemplate size="5|7" label="Preferred Master Details" 
                value={searchTableTerm(row?.prefMasterCourse,searchTerm)} />
        </div>
        <hr/>
        <div style={{ marginTop:'15px', paddingBottom:'7px' }}>
            <ExamTemplate name="TOEFL" r={row?.toefl_r} w={row?.toefl_w} l={row?.toefl_l} s={row?.toefl_s} o={row?.toefl_o} />
        </div>
        <div style={{ paddingBottom:'7px' }}>
            <ExamTemplate name="IELTS" r={row?.ielts_r} w={row?.ielts_w} l={row?.ielts_l} s={row?.ielts_s} o={row?.ielts_o} />
        </div>
        <div style={{ paddingBottom:'7px' }}>
            <ExamTemplate name="PTE" r={row?.pte_r} w={row?.pte_w} l={row?.pte_l} s={row?.pte_s} o={row?.pte_o} />
        </div>
        <div style={{ paddingBottom:'7px' }}>
            <ExamTemplate name="Duolingo" o={row?.duolingo} />
        </div>
        <ExamTemplate name="GRE" o={row?.gre} />
      </Card>);
  };

  const columns = [{
          header: 'S.No.',
          align:'center',
          key: 'id',
          width:'4%',
          render: (_row, _searchTerm, rowIndex) => (<strong>{rowIndex+1}</strong>)
        },
        {
          header: 'Student Personal Details',
          key: 'studentPersonalDetails',
          width:'32%',
          render: (row, searchTerm) =>(<PersonalDetails row={row} searchTerm={searchTerm} />)
        },
        { 
          header: 'Master pursuing Details', 
          key: 'masterPursuingDetails', 
          width:'40%',
          render: (row, searchTerm) =>(<MasterEntrance row={row} searchTerm={searchTerm} />)
        },
        { 
          header: 'Searched Details', 
          key: 'searchedDetails', 
          width:'40%',
          render: (row, searchTerm) =>(<SearchDetails row={row} searchTerm={searchTerm} />)
        },
      ];

 return (<div>
  <Header menulinks={HeaderMenu()} activeId="ShortlistRecords" />
  <ContainerFluid>
    <Row>
        <Col md={12}>
          <div style={{ marginBottom:'45px' }}>
            <TablePagination header={{ backgroundColor:'blue', color:'#fff', columns: columns }} pageSize={10} 
                apiUrl="http://localhost/projects/uaa/c3/vkap/nexus/student/view/records" />
          </div>
        </Col>
    </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default ShortlistRecords;