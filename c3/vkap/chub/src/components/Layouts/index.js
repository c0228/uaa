import React from "react";
import { Row, Col, Card, searchTableTerm, Colors } from "e-ui-react";

export const DisplayTemplate = ({ size, label, value }) => {
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
    {(!["Duolingo","GRE"].includes(name)) && 
    (<>
    <Col md={2}><ScoreTemplate label="R" value={r} colors={{ bg:Colors.primary, color:'#fff' }} /></Col>
    <Col md={2}><ScoreTemplate label="W" value={w} colors={{ bg:Colors.warning, color:'#000' }} /></Col>
    <Col md={2}><ScoreTemplate label="L" value={l} colors={{ bg:Colors.danger, color:'#fff' }} /></Col>
    <Col md={2}><ScoreTemplate label="S" value={s} colors={{ bg:Colors.secondary, color:'#fff' }} /></Col>
    </>)}
    <Col md={2}><ScoreTemplate label="O" value={o} colors={{ bg:Colors.success, color:'#fff' }} /></Col>
  </Row>
  </div>);
};

export const DisplayExamDetails = ({ row  })=>{
  return (<div>
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
  </div>);
};

const MasterEntrance = ({ row, searchTerm }) =>{
    
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
        <DisplayExamDetails />
      </Card>);
  };

export default MasterEntrance;