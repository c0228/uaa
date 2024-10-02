import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';

const Services = ()=>{
 const Title = () =>{
  return (<div align="center" style={{ backgroundColor:'#000040', color:'#fff', padding:'15px' }}>
    <h4 style={{ textTransform:'uppercase', marginTop:'6px', fontSize:'23px', fontFamily:'MetropolisBold' }}>
      <b>Our Services</b>
    </h4>
  </div>);
 };

 const SubTitle = ({ name }) =>{
  return (<div align="center" className="pt-5 pb-3">
    <h5 style={{ fontSize:'22px', lineHeight:'34px' }}><b>{name}</b></h5>
  </div>);
 };

 const ShortTitle = ({ name }) =>{
  return (<div>
    <h5 style={{ fontSize:'20px', lineHeight:'32px' }}><b>{name}</b></h5>
  </div>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="Services" />
 <Title />
 <ContainerFluid>
    <Row>
        <Col md={1}></Col>
        <Col md={10}>
            <SubTitle name="Empowering Businesses with Top Talent: HR Consulting Services at Workday Consultancy" />
            <ShortTitle name="Building a Thriving Workforce, One Connection at a Time" />
            <div style={{ fontSize:'16px', lineHeight:'32px' }}>
            At Workday Consultancy, we understand that your people are your most valuable asset. In today's dynamic 
            business landscape, finding and retaining top talent is critical for success. This is where we come in. 
            As a leading HR consulting firm, we specialize in connecting businesses with exceptional consultants who can 
            seamlessly integrate with your team and elevate your HR function.
            </div>
            <div className="pt-3">
                <h5 style={{ fontSize:'20px', lineHeight:'32px' }}>
                    <b>Here's what sets us apart from competitors:</b>
                </h5>
            </div>
            <div style={{ fontSize:'16px', lineHeight:'32px' }}>
                <ul>
                    <li className="pt-2"><b>Personalized Approach: </b><br/>
                    Unlike one-size-fits-all solutions, we take the time to understand your unique business needs and 
                    challenges. We then curate a team of consultants with the specific expertise you require.
                    </li>
                    <li className="pt-2"><b>Agile & Scalable Solutions:</b><br/>
                    We offer a flexible model, allowing you to leverage the expertise of consultants for specific projects 
                    or scale their involvement as your needs evolve.</li>
                    <li className="pt-2"><b>Start-Up Expertise:</b><br/>
                    We have a deep understanding of the unique challenges faced by start-ups, and our consultants are equipped 
                    to provide tailored guidance on building a strong HR foundation for future growth.</li>
                </ul>
            </div>
        </Col>
        <Col md={1}></Col>
    </Row>

    <Row>
        <Col md={1}></Col>
        <Col md={5}>
            <SubTitle name="Introduction & Your HR Consulting Advantage" />
            <ShortTitle name="Bridging the Talent Gap: Expert HR Consulting Solutions for Businesses of All Sizes" />
            <div style={{  fontSize:'16px', lineHeight:'32px' }}>
            We empower businesses with a curated network of highly skilled HR consultants, allowing you to build a 
            high-performing workforce, optimize processes, and achieve your strategic HR goals.
            </div>
            <div className="pt-2">
            <Card padding={15} backgroundColor="#d4ffd6">
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div><b>Benefits:</b></div>
                <ul>
                    <li><b>Cost-Effectiveness:</b><br/> Access top HR talent without the overhead of full-time hiring.</li>
                    <li><b>Increased Efficiency:</b><br/> Streamline your HR operations while focusing on core business functions.</li>
                    <li><b>Improved Compliance:</b><br/> Ensure adherence to complex labor laws and regulations.</li>
                    <li><b>Enhanced Employee Experience:</b><br/> Develop a positive employee environment for better engagement and talent retention.</li>
                </ul>
                </div>
            </Card>
            </div>

            <SubTitle name="The HR Advantage: Flexibility & Scalability" />
            <ShortTitle name="Adapting to Your Needs: Flexible and Scalable HR Consulting Solutions" />
            <div className="pt-1">
            <Card padding={15} backgroundColor="#fde4e4">
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div><b>Content:</b></div>
                <ul>
                    <li>Emphasize the flexibility of your services compared to traditional HR software or full-time hires.</li>
                    <li>Companies can engage consultants for specific projects or scale their involvement as their needs change.</li>
                </ul>
                </div>
            </Card>
            </div>
            <div className="pt-1">
            <Card padding={15} backgroundColor="#cafdf7">
            <div style={{ fontSize:'16px', lineHeight:'32px' }}>
            <div><b>Service Options:</b></div>
            <ul>
                <li><b>Project-based consulting:</b><br/> Engage consultants for specific tasks like designing a new 
                performance management system or conducting a compensation analysis.</li>
                <li><b>On-demand HR support:</b><br/> Access consultant expertise on an hourly or retainer basis for 
                ongoing HR guidance.</li>
                <li><b>Interim HR leadership:</b><br/>  Utilize highly experienced consultants to fill temporary gaps in 
                your HR leadership team.</li>
            </ul>
            </div>
            </Card>
            </div>
            <div className="pt-1">
            <Card padding={15} backgroundColor="#f5baff">
            <div style={{ fontSize:'16px', lineHeight:'32px' }}>
            <div><b>Benefits:</b></div>
            <ul>
                <li><b>Cost-efficiency:</b><br/> Pay only for the expertise you need, when you need it.</li>
                <li><b>Adaptability:</b><br/> Adjust your HR resources as your company grows and evolves.</li>
            </ul>
            </div>
            </Card>
            </div>
        </Col>
        <Col md={5}>
            <SubTitle name="Our Core HR Consulting Services" />
            <div className="pt-1">
            <Card padding={15} backgroundColor="#ffcab9">
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div align="center"><b>Talent Acquisition & Onboarding</b></div>
                <ul>
                    <li><b>Cost-Effectiveness:</b><br/> Access top HR talent without the overhead of full-time hiring.</li>
                    <li><b>Increased Efficiency:</b><br/> Streamline your HR operations while focusing on core business functions.</li>
                    <li><b>Improved Compliance:</b><br/> Ensure adherence to complex labor laws and regulations.</li>
                    <li><b>Enhanced Employee Experience:</b><br/> Develop a positive employee environment for better engagement and talent retention.</li>
                </ul>
                </div>
            </Card>
            </div>
            <div className="pt-1">
            <Card padding={15} backgroundColor="#f2a5ff">
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div align="center"><b>Performance Management & Development</b></div>
                <ul>
                    <li>Implement a clear and effective performance management system, including goal setting and 
                        performance reviews.</li>
                    <li>Offer customized training and development programs to nurture employee skill sets.</li>
                    <li>Foster a culture of employee feedback for continuous improvement.</li>
                </ul>
                </div>
            </Card>
            </div>
            <div className="pt-1">
            <Card padding={15}>
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div align="center"><b>Compensation & Benefits Strategy</b></div>
                <ul>
                    <li>Develop a competitive compensation strategy to attract and retain top talent.</li>
                    <li>Design a comprehensive benefits package aligned with your company culture and budget.</li>
                    <li>Ensure compliance with all required benefits regulations.</li>
                </ul>
                </div>
            </Card>
            </div>

            <div className="pt-1">
            <SubTitle name="Specialized HR Solutions for Startups" />
            <ShortTitle name="Navigating the Start-Up Landscape: Your HR Roadmap to Success" />
            <div className="pt-2">
            <Card padding={15}>
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div><b>Targeted Content:</b></div>
                <ul>
                    <li>Understand the unique HR challenges faced by startups (e.g., building HR infrastructure, attracting talent 
                        on a limited budget).</li>
                    <li>Highlight how your consultants are equipped to provide strategic HR guidance for start-ups.</li>
                    <li>Showcase success stories of how you've helped startups establish strong HR practices and 
                        foster rapid growth.</li>
                </ul>
                </div>
            </Card>
            </div>
            <div className="pt-1">
            <Card padding={15}>
                <div style={{  fontSize:'16px', lineHeight:'32px' }}>
                <div><b>Services for Startups could include:</b></div>
                <ul>
                    <li>Strategic HR planning aligned with your company's growth trajectory.</li>
                    <li>Development of employee handbooks and policies tailored to your needs.</li>
                    <li>Designing a cost-effective benefits plan for your team.</li>
                </ul>
                </div>
            </Card>
            </div>
            </div>

        </Col>
        <Col md={1}></Col>
    </Row>

 </ContainerFluid>
 </>);
};

export default Services;