import React from "react";
import { ContainerFluid, Row, Col, Accordian } from "E-ui-react";
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
import Content37 from "./components/content-37/index.js";
import Content38 from "./components/content-38/index.js";
import Content39 from "./components/content-39/index.js";
import Content40 from "./components/content-40/index.js";
import Content41 from "./components/content-41/index.js";
import Content42 from "./components/content-42/index.js";
import Content43 from "./components/content-43/index.js";
import Content44 from "./components/content-44/index.js";
import Content45 from "./components/content-45/index.js";
import Content46 from "./components/content-46/index.js";
import Content47 from "./components/content-47/index.js";
import Content48 from "./components/content-48/index.js";
import Content49 from "./components/content-49/index.js";
import Content50 from "./components/content-50/index.js";
import Content51 from "./components/content-51/index.js";
import Content52 from "./components/content-52/index.js";
import Content53 from "./components/content-53/index.js";
import Content54 from "./components/content-54/index.js";
import Content55 from "./components/content-55/index.js";
import Content56 from "./components/content-56/index.js";
import Content57 from "./components/content-57/index.js";
import Content58 from "./components/content-58/index.js";
import Content59 from "./components/content-59/index.js";
import Content60 from "./components/content-60/index.js";

const PrivacyPolicy = () =>{
 const AccordianTitle = ({ label }) =>{
   return (<div style={{ fontFamily:'Metropolis', fontSize:'16px', letterSpacing:'0.4px' }}><b>{label}</b></div>);
 };
 const data = [{ 
                    id:"content-01", 
                    title: <AccordianTitle label="01. Our Commitment to Privacy" />, 
                    component: <Content01 />  
                },
                { 
                    id:"content-02", 
                    title: <AccordianTitle label="02. Who This Privacy Policy Applies To" />, 
                    component: <Content02 />,
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-03", 
                    title: <AccordianTitle label="03. Information We Collect" />, 
                    component: <Content03 />  
                },
                { 
                    id:"content-04", 
                    title: <AccordianTitle label="04. Information You Provide to Us" />, 
                    component:<Content04 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-05", 
                    title: <AccordianTitle label="05. Profile Information" />, 
                    component: <Content05 /> 
                },
                { 
                    id:"content-06", 
                    title: <AccordianTitle label="06. Location and Locality Information" />, 
                    component: <Content06 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-07", 
                    title: <AccordianTitle label="07. Survey and Questionnaire Information" />, 
                    component: <Content07 /> 
                },
                { 
                    id:"content-08", 
                    title: <AccordianTitle label="08. How We Use Survey Responses?" />, 
                    component: <Content08 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-09", 
                    title: <AccordianTitle label="09. Public Survey Results" />, 
                    component: <Content09 /> 
                },
                { 
                    id:"content-10", 
                    title: <AccordianTitle label="10. Individual Survey Responses" />, 
                    component: <Content10 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-11", 
                    title: <AccordianTitle label="11. Anonymous and Aggregated Survey Data" />, 
                    component: <Content11 />  
                },
                { 
                    id:"content-12", 
                    title: <AccordianTitle label="12. Survey Data Used for Businesses" />, 
                    component: <Content12 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-13", 
                    title: <AccordianTitle label="13. Survey Data Used for Advertising" />, 
                    component: <Content13 />  
                },
                { 
                    id:"content-14", 
                    title: <AccordianTitle label="14. We Do Not Sell Personal Information Simply Because You Use MyLocalHook" />, 
                    component: <Content14 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-15", 
                    title: <AccordianTitle label="15. Business Pages and Business Services" />, 
                    component: <Content15 />
                },
                { 
                    id:"content-16", 
                    title: <AccordianTitle label="16. User-Generated Content" />, 
                    component: <Content16 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-17", 
                    title: <AccordianTitle label="17. Public Ideas and Community Proposals" />, 
                    component: <Content17 />  
                },
                { 
                    id:"content-18", 
                    title: <AccordianTitle label="18. Information We Collect Automatically" />, 
                    component: <Content18 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-19", 
                    title: <AccordianTitle label="19. Cookies and Similar Technologies" />, 
                    component: <Content19 />  
                },
                { 
                    id:"content-20", 
                    title: <AccordianTitle label="20. Google Login and Third-Party Authentication" />, 
                    component: <Content20 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-21", 
                    title: <AccordianTitle label="21. How We Use Personal Information?" />, 
                    component: <Content21 />  
                },
                { 
                    id:"content-22", 
                    title: <AccordianTitle label="22. Personalized Content and Recommendations" />, 
                    component: <Content22 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-23", 
                    title: <AccordianTitle label="23. Advertising" />, 
                    component: <Content23 /> 
                },
                { 
                    id:"content-24", 
                    title: <AccordianTitle label="24. Advertising and Survey Insights" />, 
                    component: <Content24 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-25", 
                    title: <AccordianTitle label="25. Information Shared With Service Provider" />, 
                    component: <Content25 />  
                },
                { 
                    id:"content-26", 
                    title: <AccordianTitle label="26. Information Shared for Legal Reasons" />, 
                    component: <Content26 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-27", 
                    title: <AccordianTitle label="27. Corporate Transactions" />, 
                    component: <Content27 />  
                },
                { 
                    id:"content-28", 
                    title: <AccordianTitle label="28. Data Retention" />, 
                    component: <Content28 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-29", 
                    title: <AccordianTitle label="29. Account Deletion" />, 
                    component: <Content29 /> 
                },
                { 
                    id:"content-30", 
                    title: <AccordianTitle label="30. Survey Withdrawal and Data Choices" />, 
                    component: <Content30 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-31", 
                    title: <AccordianTitle label="31. Children's Privacy" />, 
                    component: <Content31 />  
                },
                { 
                    id:"content-32", 
                    title: <AccordianTitle label="32. Sensitive Personal Information" />, 
                    component: <Content32 />  ,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-33", 
                    title: <AccordianTitle label="33. User Responsibility for Public Information" />, 
                    component: <Content33 />    
                },
                { 
                    id:"content-34", 
                    title: <AccordianTitle label="34. Data Security" />, 
                    component: <Content34 />  , 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-35", 
                    title: <AccordianTitle label="35. Data Breaches and Security Incidents" />, 
                    component: <Content35 />    
                },
                { 
                    id:"content-36", 
                    title: <AccordianTitle label="36. International and Cross-Border Processing" />, 
                    component: <Content36 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-37", 
                    title: <AccordianTitle label="37. Your Privacy Rights" />, 
                    component: <Content37 />    
                },
                { 
                    id:"content-38", 
                    title: <AccordianTitle label="38. Verifying Identity" />, 
                    component: <Content38 />  , 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-39", 
                    title: <AccordianTitle label="39. Third-Party Links" />, 
                    component: <Content39 />   
                },
                { 
                    id:"content-40", 
                    title: <AccordianTitle label="40. Social Sharing and External Platforms" />, 
                    component: <Content40 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-41", 
                    title: <AccordianTitle label="41. Children's Public Content and Safet" />, 
                    component: <Content41 />    
                },
                { 
                    id:"content-42", 
                    title: <AccordianTitle label="42. User Reports and Moderation" />, 
                    component: <Content42 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-43", 
                    title: <AccordianTitle label="43. Fraud, Abuse and Security Monitoring" />, 
                    component: <Content43 />  
                },
                { 
                    id:"content-44", 
                    title: <AccordianTitle label="44. Survey Manipulation and Integrity" />, 
                    component: <Content44 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-45", 
                    title: <AccordianTitle label="45. Communications" />, 
                    component: <Content45 /> 
                },
                { 
                    id:"content-46", 
                    title: <AccordianTitle label="46. Analytics and Measurement" />, 
                    component: <Content46 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-47", 
                    title: <AccordianTitle label="47. Artificial Intelligence and Automated Processing" />, 
                    component: <Content47 />  
                },
                { 
                    id:"content-48", 
                    title: <AccordianTitle label="48. Business and Advertising Analytics" />, 
                    component: <Content48 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-49", 
                    title: <AccordianTitle label="49. Information You Provide About Other People" />, 
                    component: <Content49 /> 
                },
                { 
                    id:"content-50", 
                    title: <AccordianTitle label="50. Privacy of Private Communications" />, 
                    component: <Content50 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-51", 
                    title: <AccordianTitle label="51. Data Minimization" />, 
                    component: <Content51 />  
                },
                { 
                    id:"content-52", 
                    title: <AccordianTitle label="52. Changes to This Privacy Policy" />, 
                    component: <Content52 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-53", 
                    title: <AccordianTitle label="53. Governing Law" />, 
                    component: <Content53 />
                },
                { 
                    id:"content-54", 
                    title: <AccordianTitle label="54. Contact Us Regarding Privacy" />, 
                    component: <Content54 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-55", 
                    title: <AccordianTitle label="55. Privacy Complaints" />, 
                    component: <Content55 /> 
                },
                { 
                    id:"content-56", 
                    title: <AccordianTitle label="56. Important Information About This Policy" />, 
                    component: <Content56 />,
                    backgroundColor:'#eee' 
                },
                { 
                    id:"content-57", 
                    title: <AccordianTitle label="57. Your Choices Matter" />, 
                    component: <Content57 />
                },
                { 
                    id:"content-58", 
                    title: <AccordianTitle label="58. Our Approach to Survey-Based Personalization" />, 
                    component: <Content58 />, 
                    backgroundColor:'#eee'  
                },
                { 
                    id:"content-59", 
                    title: <AccordianTitle label="59. Public Information vs. Private Information" />, 
                    component: <Content59 /> 
                },
                { 
                    id:"content-60", 
                    title: <AccordianTitle label="60. Final Privacy Principle" />, 
                    component: <Content60 />,
                    backgroundColor:'#eee' 
                },
            ];
 const DeclarationHeader = ({ title, lastUpdated }) =>{
  return (<>
    <h1 style={{ marginLeft:'5px' }}><b>{title}</b></h1>
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
                 <DeclarationHeader title="Privacy Policy" lastUpdated="September 29, 2026" /> 
              </div>
            </Col>
            <Col md={12}>
                <div style={{ paddingTop:'15px', paddingLeft:'5px', fontSize:'15px', color:'#555', lineHeight:'24px' }}>
                    <div>Welcome to MyLocalHook (“MyLocalHook”, “we”, “us”, or “our”).</div>
                    <div className="mtop15p">MyLocalHook is a social local-community platform designed to connect people with 
                        information, discussions, businesses, services, opportunities, surveys, community activities, local 
                        issues, events, and other content relevant to their geographic area and interests.</div>
                    <div className="mtop15p">This Privacy Policy explains how MyLocalHook collects, uses, stores, processes, 
                        shares, protects, and otherwise handles information relating to people who access or use our website, 
                        mobile applications, services, features, surveys, advertisements, business pages, community features, 
                        and other products provided by MyLocalHook (collectively, the “Platform”).</div>
                    <div className="mtop15p">By accessing or using MyLocalHook, you acknowledge that you have read and 
                        understood this Privacy Policy. Where applicable, we will obtain the consent required by law before 
                        collecting or processing personal information.</div>
                </div>
            </Col>
            <Col md={12}>
                <div className="mtop15p">
                    <Accordian id="AccordianExample" data={data} />
                </div>
            </Col>
            <Col md={12}>
                <div style={{ fontSize:'15px', color:'#555' }}>
                    <div className="mtop15p">Your privacy is an important part of building a trusted local community.</div>
                    <div className="mtop15p">MyLocalHook is committed to providing a platform where people can connect with their 
                        communities, discover local information, participate in surveys, share ideas, discover businesses and 
                        services, and receive relevant information while maintaining responsible practices for handling personal 
                        information.</div>
                    <div className="mtop15p">We encourage you to review this Privacy Policy periodically so that you remain 
                        informed about how MyLocalHook handles information.</div>
                    <div className="mtop15p">By continuing to use MyLocalHook after an updated Privacy Policy becomes effective, 
                        you acknowledge the updated practices to the extent permitted by applicable law.</div>
                    <div align="center" className="mtop15p"><b>Thank you for being part of the MyLocalHook community.</b></div>
                    <div className="mtop15p color-black"><b>For Privacy, Data Protection, or Grievance Queries:</b></div>
                    <div className="mtop5p">Please use the official Privacy / Contact / Grievance channel available on 
                        the MyLocalHook Platform.</div>
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
                    <div className="mtop5p"><b>Policy:</b> Privacy Policy</div>
                 </div>
              </Col>
            </Row>
            </div>
        </ContainerFluid>
    </div>
 </>);
};

export default PrivacyPolicy;