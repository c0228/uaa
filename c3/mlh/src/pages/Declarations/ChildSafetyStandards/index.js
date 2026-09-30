import React from "react";
import { ContainerFluid, Row, Col, Pill, Accordian, Colors  } from "e-ui-react";
import Header3 from "@Templates/Header3/index.js";
import Content01 from "./components/content-01/index.js";
import Content02 from "./components/content-02/index.js";
import Content03 from "./components/content-03/index.js";
import Content04 from "./components/content-04/index.js";
import Content05 from "./components/content-05/index.js";
import Content06 from "./components/content-06/index.js";
import Content07 from "./components/content-07/index.js";
import Content08 from "./components/content-08/index.js";
import Content09 from "./components/content-09/index.js";
import Content10 from "./components/content-10/index.js";
import Content11 from "./components/content-11/index.js";
import Content12 from "./components/content-12/index.js";
import Content13 from "./components/content-13/index.js";
import Content14 from "./components/content-14/index.js";
import Content15 from "./components/content-15/index.js";
import Content16 from "./components/content-16/index.js";
import Content17 from "./components/content-17/index.js";
import Content18 from "./components/content-18/index.js";
import Content19 from "./components/content-19/index.js";
import Content20 from "./components/content-20/index.js";
import Content21 from "./components/content-21/index.js";
import Content22 from "./components/content-22/index.js";
import Content23 from "./components/content-23/index.js";
import Content24 from "./components/content-24/index.js";
import Content25 from "./components/content-25/index.js";
import Content26 from "./components/content-26/index.js";
import Content27 from "./components/content-27/index.js";
import Content28 from "./components/content-28/index.js";
import Content29 from "./components/content-29/index.js";
import Content30 from "./components/content-30/index.js";
import Content31 from "./components/content-31/index.js";
import Content32 from "./components/content-32/index.js";
import Content33 from "./components/content-33/index.js";
import Content34 from "./components/content-34/index.js";
import Content35 from "./components/content-35/index.js";
import Content36 from "./components/content-36/index.js";
import './index.css';

const ChildSafetyStandards = () =>{
 const url = process.env.PROJECT_URL+'declarations/child-safety-standards-policy';
 const AccordianTitle = ({ label }) =>{
   return (<div style={{ fontFamily:'Metropolis', fontSize:'16px', letterSpacing:'0.4px' }}><b>{label}</b></div>);
 };
 const data = [{ 
                  id:"content-01", 
                  title: <AccordianTitle label="1. Our Commitment to Child Safety" />, 
                  component: <Content01 />  
               },
               { 
                  id:"content-02", 
                  title: <AccordianTitle label="2. Who Is Considered a Child or Minor?" />, 
                  component: <Content02 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-03", 
                  title: <AccordianTitle label="3. Minimum Age Requirements" />,
                  component: <Content03 />  
               },
               { 
                  id:"content-04", 
                  title: <AccordianTitle label="4. Child Sexual Abuse Material (CSAM)" />, 
                  component: <Content04 />,
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-05", 
                  title: <AccordianTitle label="5. Grooming and Predatory Behavior" />,
                  component: <Content05 />
               },
               { 
                  id:"content-06", 
                  title: <AccordianTitle label="6. Sexualization of Children" />, 
                  component: <Content06 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-07", 
                  title: <AccordianTitle label="7. Sexual Solicitation of Minors" />,
                  component: <Content07 />
               },
               { 
                  id:"content-08", 
                  title: <AccordianTitle label="8. Child Trafficking and Exploitation" />, 
                  component: <Content08 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-09", 
                  title: <AccordianTitle label="9. Sextortion, Blackmail, and Extortion" />,
                  component: <Content09 />  
               },
               { 
                  id:"content-10", 
                  title: <AccordianTitle label="10. Child Safety and Private Information" />, 
                  component: <Content10 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-11", 
                  title: <AccordianTitle label="11. Harassment and Bullying of Children" />,
                  component: <Content11 />
               },
               { 
                  id:"content-12", 
                  title: <AccordianTitle label="12. Dangerous Challenges and Activities" />, 
                  component: <Content12 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-13", 
                  title: <AccordianTitle label="13. Violence Involving Children" />,
                  component: <Content13 /> 
               },
               { 
                  id:"content-14", 
                  title: <AccordianTitle label="14. Child Self-Harm and Suicide-Related Safety" />, 
                  component: <Content14 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-15", 
                  title: <AccordianTitle label="15. Drugs, Alcohol, and Other Dangerous Substances" />,
                  component: <Content15 /> 
               },
               { 
                  id:"content-16", 
                  title: <AccordianTitle label="16. Child Safety in Messages and Direct Interactions" />, 
                  component: <Content16 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-17", 
                  title: <AccordianTitle label="17. External Links and Platforms" />,
                  component: <Content17 />  
               },
               { 
                  id:"content-18", 
                  title: <AccordianTitle label="18. User Reporting" />, 
                  component: <Content18 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-19", 
                  title: <AccordianTitle label="19. Emergency Situations" />,
                  component: <Content19 /> 
               },
               { 
                  id:"content-20", 
                  title: <AccordianTitle label="20. Moderation and Enforcement" />, 
                  component: <Content20 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-21", 
                  title: <AccordianTitle label="21. Repeat Violations" />,
                  component: <Content21 />
               },
               { 
                  id:"content-22", 
                  title: <AccordianTitle label="22. False Reports and Abuse of Reporting Tools" />, 
                  component: <Content22 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-23", 
                  title: <AccordianTitle label="23. Parents and Legal Guardians" />,
                  component: <Content23 /> 
               },
               { 
                  id:"content-24", 
                  title: <AccordianTitle label="24. Child Privacy" />, 
                  component: <Content24 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-25", 
                  title: <AccordianTitle label="25. Safety by Design" />,
                  component: <Content25 />
               },
               { 
                  id:"content-26", 
                  title: <AccordianTitle label="26. Cooperation With Authorities" />, 
                  component: <Content26 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-27", 
                  title: <AccordianTitle label="27. International Child Safety" />,
                  component: <Content27 />  
               },
               { 
                  id:"content-28", 
                  title: <AccordianTitle label="28. Content Created for Educational or Awareness Purposes" />, 
                  component: <Content28 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-29", 
                  title: <AccordianTitle label="29. Artistic, Fictional, or AI-Generated Content" />,
                  component: <Content29 />
               },
               { 
                  id:"content-30", 
                  title: <AccordianTitle label="30. Account Security and Child Protection" />, 
                  component: <Content30 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-31", 
                  title: <AccordianTitle label="31. How to Report a Child Safety Concern?" />,
                  component: <Content31 /> 
               },
               { 
                  id:"content-32", 
                  title: <AccordianTitle label="32. What Happens After a Report?" />, 
                  component: <Content32 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-33", 
                  title: <AccordianTitle label="33. Protection Against Retaliation" />,
                  component: <Content33 /> 
               },
               { 
                  id:"content-34", 
                  title: <AccordianTitle label="34. Continuous Improvement" />, 
                  component: <Content34 />, 
                  backgroundColor:'#eee'  
               },
               { 
                  id:"content-35", 
                  title: <AccordianTitle label="35. Our Safety Principle" />,
                  component: <Content35 />
               },
               { 
                  id:"content-36", 
                  title: <AccordianTitle label="36. Contact Us" />, 
                  component: <Content36 />, 
                  backgroundColor:'#eee'  
               }
            ];

 const DeclarationHeader = ({ title, lastUpdated }) =>{
  return (<>
    <h1><b>{title}</b></h1>
    <div style={{ marginLeft:'5px', fontSize:'18px' }}><b>Last Updated: {lastUpdated}</b></div>
  </>);
 };
 return (<>
 <Header3 />
 <div className="mtop15p">
    <ContainerFluid>
    <Row style={{ fontFamily:'Metropolis' }}>
        <Col md="12">
            <div className="mtop15p">
               <DeclarationHeader title="Child Safety Standards Policy" lastUpdated="September 29, 2026" /> 
            </div>
        </Col>
        <Col md={12}>
            <div style={{ paddingTop:'15px', paddingLeft:'5px', fontSize:'15px', color:'#555', lineHeight:'24px' }}>
                MyLocalHook is committed to providing a safe, respectful, and responsible online environment for 
            everyone who uses our platform. Protecting children and young people from sexual exploitation, abuse, 
            grooming, harassment, violence, and other harmful activities is one of our highest priorities.
            This Child Safety Standards Policy explains the standards that apply to MyLocalHook and the actions we may 
            take when content or behavior creates a risk to children.
            This policy applies to all areas of MyLocalHook, including profiles, posts, comments, messages, groups, 
            communities, business pages, ideas, media, links, and other user-generated content or interactions.
            </div>
        </Col>
    </Row>
    <Row>
      <Col md={12}>
         <div className="pad15p">
            <Accordian id="AccordianExample" data={data} />
         </div>
      </Col>
    </Row>
    <div style={{ fontFamily:'Metropolis', fontSize:'16px' }}>
    <div className="mtop15p"><hr/></div>
    <Row style={{ paddingLeft:'5px', paddingRight:'5px', paddingBottom:'35px' }}>
      <Col md={6}>
         <div className="mtop15p"><b>Last Updated:</b> September 29, 2026</div>
      </Col>
      <Col md={6}>
         <div align="right" className="mtop15p">
            <div className="mtop5p"><b>Platform:</b> MyLocalHook</div>
            <div className="mtop5p"><b>Policy:</b> Child Safety Standards</div>
         </div>
      </Col>
    </Row>
    </div>
 </ContainerFluid>
 </div>
 </>);
};

export default ChildSafetyStandards;