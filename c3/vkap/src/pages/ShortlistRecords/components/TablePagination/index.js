import React, { useState, useEffect } from 'react';
import { ContainerFluid, Row, Col, Card, Colors, UrlAsyncFetch } from 'e-ui-react';

const TablePagination = () => {
  const [tblData, setTblData] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [viewRecords, setViewRecords] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const initialize = async (page = 1, search = '') => {
    const start = (page - 1) * viewRecords;
    const end = page * viewRecords;
    const searchQuery = search ? `&search=${search}` : '';
    const response = await UrlAsyncFetch(`${process.env.NEXUS_URL}student/view/records?start=${start}&end=${end}${searchQuery}`, 'GET', {});
    setTotalRecords(parseInt(response?.totalCount || 0));
    setTblData(response?.data || []);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / viewRecords));
  }, [totalRecords, viewRecords]);

  useEffect(() => {
    initialize(currentPage, searchTerm);
  }, [currentPage, viewRecords, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const DisplayTemplate = ({ size, label, value }) => {
    const sizes = size?.split('|');
    return (
      <div align="left" style={{ paddingTop: '5px' }}>
        <Row>
          <Col md={sizes[0]}>
            <div style={{ fontSize: '12px', color: '#333' }}>
              <b>{label}:</b>
            </div>
          </Col>
          <Col md={sizes[1]}>
            <div style={{ fontSize: '12px', color: '#555' }}>
              <b>{value}</b>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  const PersonalDetails = () =>{
    return (<Card padding={15}>
      <DisplayTemplate size="6|6" label="Student Full Name" value="Nellutla L N Rao" />
      <DisplayTemplate size="6|6" label="Email Address" value="nellutlalnrao@gmail.com" />
      <DisplayTemplate size="6|6" label="Mobile Number" value="+91-6300193369" />
      <hr/>
      <div style={{ marginTop:'10px' }}>
      <DisplayTemplate size="6|6" label="SSC (%)" value="71%" />
      <DisplayTemplate size="6|6" label="Intermediate (%)" value="76.7%" />
      <DisplayTemplate size="6|6" label="Degree" value="74.3%" />
      <DisplayTemplate size="6|6" label="Job Experience" value="2 years" />
      <DisplayTemplate size="6|6" label="Job Field" value="Non-IT" />
      </div>
    </Card>);
   };

  const SearchDetails = () => {
    return (
      <Card padding={15}>
        <DisplayTemplate size="4|8" label="Name" value="Nellutla L N Rao" />
        <DisplayTemplate size="4|8" label="Email" value="nellutlalnrao@gmail.com" />
        <DisplayTemplate size="4|8" label="User Role" value="STUDENT" />
      </Card>
    );
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
   const MasterEntrance = () =>{
    
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
        <div style={{ paddingBottom:'5px' }}><DisplayTemplate size="5|7" label="Preferred Country Details" value="US" /></div>
        <div><DisplayTemplate size="5|7" label="Preferred Master Details" value="" /></div>
        <hr/>
        <div style={{ marginTop:'15px', paddingBottom:'7px' }}><ExamTemplate name="TOEFL" r="10" w="10" l="10" s="10" o="10" /></div>
        <div style={{ paddingBottom:'7px' }}><ExamTemplate name="IELTS" r="10" w="10" l="10" s="10" o="10" /></div>
        <div style={{ paddingBottom:'7px' }}><ExamTemplate name="PTE" r="10" w="10" l="10" s="10" o="10" /></div>
        <div style={{ paddingBottom:'7px' }}><ExamTemplate name="Duolingo" o="10" /></div>
        <ExamTemplate name="GRE" o="10" />
      </Card>);
  };
  
  const PaginationControls = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <ContainerFluid>
        <Row>
          <Col md={12}>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="table-responsive">
              <table className="table" style={{ width: '100%' }}>
                <thead>
                  <tr align="center" style={{ backgroundColor: '#eee' }}>
                    <td style={{ width: '4%' }}><b>S.No.</b></td>
                    <td style={{ width: '32%' }}><b>Student Personal Details</b></td>
                    <td style={{ width: '40%' }}><b>Master pursuing Details</b></td>
                    <td style={{ width: '24%' }}><b>Searched Details</b></td>
                  </tr>
                </thead>
                <tbody>
                  {tblData.length > 0 ? (
                    tblData.map((data, index) => (
                      <tr key={index} align="center">
                        <td style={{ width: '4%' }}>{index + 1 + (currentPage - 1) * viewRecords}.</td>
                        <td style={{ width: '32%' }}><PersonalDetails /></td>
                        <td style={{ width: '40%' }}><MasterEntrance /></td>
                        <td style={{ width: '12%' }}><SearchDetails /></td>
                      </tr>
                    ))
                  ) : (
                    <tr align="center">
                      <td colSpan="4">No records found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <PaginationControls />
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
};

export default TablePagination;
