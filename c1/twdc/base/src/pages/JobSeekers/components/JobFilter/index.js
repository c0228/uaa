import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Card, Icon, Button, Select, TextBox, Switch  } from "e-ui-react";
import JobSeekersData from '@StaticData/job-seekers.json';

const JobFilter = ({ advancedFilters }) =>{
 return (<div style={{ marginBottom:'65px' }}>
    <div>
      <h4 style={{ borderBottom:'1px solid #ccc', paddingBottom:'10px' }}>
        <b>Advanced Filter</b>
        <Button type="outline-secondary" size={10} className="pull-right"><b>Reset</b></Button>
      </h4>
    </div>
    <div>
       <div style={{ border:'1px solid #ccc', padding:'8px', borderRadius:'8px' }}>
         <Icon type="FontAwesome" name="fa-map-marker" size={13} color="#bbb" style={{ paddingLeft:'8px', marginRight:'5px' }} />
         <span style={{ color:'#999' }}>New York City, USA</span>
       </div>
    </div>

    {advancedFilters?.industry && (<div className="mtop15p">
      <h4><b>Industry</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterIndustry" name="FilterIndustry" value={advancedFilters?.industry} />
      </Card>
    </div>)}

    {advancedFilters?.salaryRange && (<div className="mtop15p">
      <h4><b>Salary Range</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterSalaryRange" name="FilterSalaryRange" value={advancedFilters?.salaryRange} />
      </Card>
    </div>)}

    {advancedFilters?.position && (<div className="mtop15p">
      <h4><b>Position</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterPosition" name="FilterPosition" value={advancedFilters?.position} />
      </Card>
    </div>)}

    {advancedFilters?.expLevel && (<div className="mtop15p">
      <h4><b>Experience Level</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterExpLevel" name="FilterExpLevel" value={advancedFilters?.expLevel} />
      </Card>
    </div>)}

    {advancedFilters?.workMode && (<div className="mtop15p">
      <h4><b>Onsite / Remote</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterWorkMode" name="FilterWorkMode" value={advancedFilters?.workMode} />
      </Card>
    </div>)}

    {advancedFilters?.jobType && (<div className="mtop15p">
      <h4><b>Job Type</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterJobType" name="FilterJobType" value={advancedFilters?.jobType} />
      </Card>
    </div>)}

    {advancedFilters?.jobPosted && (<div className="mtop15p">
      <h4><b>Job Posted</b></h4>
      <Card padding={15}>
        <Switch type="checkbox" id="FilterJobPosted" name="FilterJobPosted" value={advancedFilters?.jobPosted} />
      </Card>
    </div>)}

  </div>);
};

export default JobFilter;