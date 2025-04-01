import React from "react";

const SDKeyGoals = () =>{
 const KeyGoal = ({ title, desc }) =>{
  return (<div className="mbot15p">
   <div><b>{title}:</b></div>
   <div className="lh25p">{desc}</div>  
  </div>);
 };

 return (<div className="list-group">
    <div className="list-group-item" style={{ backgroundColor:'#f5f5f5' }}>
        <div align="center">
            <div style={{fontFamily:'BebasNeue', margin:'15px', letterSpacing:'1px', fontSize:'20px' }}>
                Key Goals of System Design</div>
        </div>
        <KeyGoal title="Scalability" 
            desc={(<div>The system should handle growth in users, data, or traffic without 
                performance degradation.</div>)} />
        <KeyGoal title="Reliability" 
            desc={(<div>The system should function correctly and consistently under expected 
                conditions.</div>)} />
        <KeyGoal title="Availability" 
            desc={(<div>The system should be operational and accessible when needed, often 
                measured as uptime (e.g., 99.9%).</div>)} />
        <KeyGoal title="Performance" 
            desc={(<div>The system should respond quickly and handle requests efficiently.</div>)} />
        <KeyGoal title="Maintenance" 
            desc={(<div>The system should be easy to update, debug, and extend over time.</div>)} />
        <KeyGoal title="Security" 
            desc={(<div>The system should protect data and resources from unauthorized access and vulnerabilities.</div>)} />
    </div>
    </div>);
};

export default SDKeyGoals;