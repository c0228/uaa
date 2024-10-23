import React from "react";
import { Row, Col, Icon, Card } from "e-ui-react";

const CompanyInfo = ({ data }) =>{
 return (<Card padding={15}>
    <div>
        <Row>
        <Col md={3}>
            <img src={data?.img} />
        </Col>
        <Col md={9}>
            <div style={{ paddingTop:'5px' }}>
                <div><h4><b>{data?.companyName}</b></h4></div>
                <div style={{ color:'#999' }}>
                    <Icon type="FontAwesome" name="fa-map-marker" size={16} />
                    <span style={{ fontSize:'14px', marginLeft:'8px' }}><b>{data?.location}</b></span>
                </div>
                <div style={{ marginTop:'8px' }}><u>{data?.openJobs} Open Jobs</u></div>
            </div>
        </Col>
    </Row>
    <hr/>
    {data?.details?.map((m,i)=>{
      return (<div key={i} style={{ marginTop:'15px' }}>
        <Row>
            <Col md={3}>
              <Icon type="FontAwesome" name={m?.icon} size={14} />
              <span style={{ marginLeft:'5px', fontSize:'14px' }}><b>{m?.label}</b></span>
            </Col>
            <Col md={9}>
                <span style={{ lineHeight:'22px', fontSize:'14px' }}>{m?.value}</span>
            </Col>
        </Row>
        </div>);
    })}
    </div>
</Card>);
};

export default CompanyInfo;