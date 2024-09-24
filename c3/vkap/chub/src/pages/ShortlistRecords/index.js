import React from "react";
import { ContainerFluid, Row, Col, TablePagination, searchTableTerm, Card, Colors, formatDate } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import Footer from '@Templates/Footer/index.js';
import { HeaderMenu } from '@Routes/NavbarList.js';
import MasterEntrance, { DisplayTemplate } from '@Components/Layouts/index.js';
// import TablePagination from './components/TablePagination/index.js';

const ShortlistRecords = () =>{
  

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
            <TablePagination header={{ backgroundColor:'#f1f1f1', color:'#000', columns: columns }} pageSize={10} 
                api={{ url:"http://localhost/projects/uaa/c3/vkap/nexus/student/view/records", method:'GET' }} />
          </div>
        </Col>
    </Row>
  </ContainerFluid>
  <Footer />
 </div>);
};

export default ShortlistRecords;