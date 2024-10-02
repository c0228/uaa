import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Footer from '@Templates/Footer/index.js';

const AboutUs = ()=>{
 const Title = () =>{
  return (<div align="center" style={{ backgroundColor:'#000040', color:'#fff', padding:'15px' }}>
    <h4 style={{ textTransform:'uppercase', marginTop:'6px', fontSize:'23px', fontFamily:'MetropolisBold' }}>
        <b>About Work day Consultancy</b>
    </h4>
 </div>);
 };
 return (<>
 <Header menulinks={HeaderMenu} activeId="AboutUs" />
 <Title />
 <div style={{ fontSize:'16px', lineHeight:'32px' }}>
 <div style={{ marginTop:'25px', paddingBottom:'55px' }}>

    <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <div>At Work day Consultancy, we are passionate about connecting talented consultants with exciting opportunities. 
            We believe that every individual has the potential to make a significant impact, and we are committed to helping 
            them find the right role to showcase their skills and achieve their career goals. Our mission is to be the leading 
            HR consulting firm, providing exceptional service to both employers and consultants. We strive to build long-lasting 
            relationships based on trust, integrity, and mutual respect.</div>
            <div style={{ marginTop:'25px' }}>
            <Row>
        <Col md={4}>
            <Card padding={15} backgroundColor="#f1f9ff">
                <div style={{ minHeight:'155vh' }}>
                <div align="center"><h5><b>What We Do</b></h5></div>
                <div>
                <br/>We offer a wide range of HR consulting services to help employers and consultants achieve their goals.<br/> 
                Our services include:
                <ul>
                    <li><b>Consultant Sourcing:</b><br/> We specialize in finding top talent to meet your specific needs.</li>
                    <li><b>Project Management:</b><br/> We can help you manage your projects efficiently and effectively.</li>
                    <li><b>HR Advisory Services:</b><br/> We can provide expert advice on all aspects of HR management.</li>
                    <li><b>Payroll Services:</b><br/> We can help you manage your payroll and benefits administration.</li>
                    <li><b>Recruitment Marketing:</b><br/> We can help you attract top talent to your organization.</li>
                </ul>
                </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card padding={15} backgroundColor="#fff6dc">
                <div style={{ minHeight:'155vh' }}>
                <div align="center"><h5><b>Who We Are</b></h5></div>
                <div>
                <br/>We believe in the power of human connection. That's why we've built a platform that fosters genuine relationships 
                between employers and consultants. We go beyond the traditional job search to understand your unique goals and 
                find the perfect match. We encourage open communication and teamwork, and we believe that by working together, we can 
                achieve great things. We are committed to providing a supportive and inclusive environment for all of our employees.
                <br/><br/>
                Our team is composed of experienced HR experts who are committed to providing exceptional service. We're here to 
                guide you every step of the way, from resume building to interview preparation.<br/><br/>
                Whether you're a seasoned consultant looking for your next challenge or an employer seeking top talent, we're here 
                to help you succeed.<br/><br/>
                </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card padding={15} backgroundColor="#fcecff">
                <div style={{ minHeight:'155vh' }}>
                <div align="center"><h5><b>What We Believe</b></h5></div>
                <div>
                    <br/>We believe that every individual brings unique skills, experiences, and perspectives to the table. By 
                    connecting talented consultants with the right opportunities, we're empowering them to make a positive impact 
                    on the world.<br/><br/>
                    We believe in the importance of building strong relationships. We're dedicated to fostering trust and 
                    collaboration between employers and consultants, creating a mutually beneficial partnership.<br/><br/>
                    We believe in the value of diversity and inclusion. We're committed to creating a workplace where everyone 
                    feels valued and respected, regardless of their background.<br/><br/>
                    We believe in the power of continuous learning and growth. We're always striving to stay ahead of the curve 
                    and provide our clients and consultants with the latest industry insights and best practices.
                </div>
                </div>
            </Card>
        </Col>
    </Row>
            </div>
        </Col>
        <Col md={2}></Col>
    </Row>

    <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <div className="pt-5">
                <div align="center" className="pb-3">
                    <h5 style={{ fontSize:'22px' }}><b>Our Mission</b></h5>
                </div>
                <div>
                At Workday Consultancy, our mission is to revolutionize the way employers and consultants connect and 
                collaborate. We believe that every individual has the potential to make a significant impact, and we're dedicated 
                to helping them find the right opportunities to showcase their skills and achieve their career goals.<br/><br/>
                We're committed to breaking down barriers and creating a more equitable and inclusive job market. We're passionate 
                about empowering individuals and organizations to reach their full potential.<br/><br/>
                Our mission is to be the leading HR consulting firm, providing exceptional service to both employers and 
                consultants. We strive to build long-lasting relationships based on trust, integrity, and mutual respect
                We're committed to fostering a culture of innovation and excellence. We're always seeking new and better ways to 
                serve our clients and consultants.
                We're dedicated to empowering individuals to pursue their passions and make a positive impact on the world. We 
                believe that everyone deserves the opportunity to find a fulfilling career.<br/><br/>
                We're committed to creating a more sustainable and equitable future. We believe that by connecting talented 
                individuals with the right opportunities, we can help to build a better world for everyone.
                </div>
            </div>
        </Col>
        <Col md={2}></Col>
    </Row>

    <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <div className="pt-5">
                <div align="center" className="pb-3">
                    <h5 style={{ fontSize:'22px' }}><b>Our Culture, Diversity & Inclusion</b></h5>
                </div>
                <div>
                At Workday Consultancy, we believe that diversity and inclusion are essential to our success. We're committed 
                to creating a workplace where everyone feels valued, respected, and empowered to contribute their unique 
                perspectives.<br/><br/>
                We embrace diversity in all its forms, including race, gender, ethnicity, sexual orientation, religion, disability, 
                and age. We believe that diversity enriches our workplace and helps us to better understand our clients and 
                consultants. We're committed to fostering a culture of inclusivity where everyone feels welcome and supported. 
                We believe that everyone has the right to work in an environment free from discrimination and harassment.<br/><br/>
                We're committed to promoting diversity and inclusion both within our organization and in the communities we serve. 
                We believe that by working together, we can create a more equitable and inclusive world. We're proud to be an equal 
                opportunity employer. We do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender 
                identity, national origin, disability, or veteran status. We're committed to providing our employees with 
                opportunities for professional development and growth. We believe that by investing in our employees, we can 
                create a more engaged and productive workforce. We're committed to creating a workplace where everyone feels safe 
                and supported. We believe that a safe and supportive environment is essential to our success.
                </div>
            </div>
        </Col>
        <Col md={2}></Col>
    </Row>

 </div>       

 </div>
 <Footer />
 </>);
};

export default AboutUs;