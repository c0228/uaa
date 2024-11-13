import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, Button, VerticalStaticMenu, Pill, Colors, Carousel  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Employees from './components/Employees/index.js';
import Employers from './components/Employers/index.js';
import FeaturedServices from './components/FeaturedServices/index.js';
import SlimImageTitles from '@Components/SlimImageTitles/index.js';
import FeatureCard from '@Components/FeatureCard/index.js';
import Bottom from '@Templates/Bottom/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Home = ()=>{
 const TagLine = () =>{
   return (<div align="center" style={{ fontSize:'16px', width:'100%', color:'#fff', backgroundColor:'#000040', padding:'8px' }}>
    <b>"Your Trusted Partner for empowering Healthcare Providers for providing Healthcare Financial Success."</b>
 </div>);
 };
 const HyperLinkScroll = ({ id, label}) =>{
  return (<a href={process.env.PROJECT_URL+'services#'+id} style={{ color:'#fff', textDecoration:'none' }}>{label}</a>);
 };
 const LandingTemp1 = () =>{
  return ( <div style={{ marginTop:'65px', backgroundColor:'#efefef', paddingTop:'55px', paddingBottom:'35px',
    borderTop:'2px solid #aaa', borderBottom:'2px solid #aaa'
   }}>
    <Row>
      <Col md={12}>
        <div align="center"><h1><b>Broadway Info Services: Your Partner in Healthcare Revenue Cycle Management</b></h1></div>
      </Col>
    </Row>
    <Row>
      <Col md={1}></Col>
      <Col md={4}>
      <div>
      <img src="http://192.168.1.5/BIS/1.png" style={{ marginTop:'35px', width:'100%', borderRadius:'50%' }} />
      </div>
      </Col>
      <Col md={6}>
      <div className="bis-carousel-jumbotron" style={{ lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
        <div>
        "<b>Broadway Info Services</b> is a leading provider of medical billing and revenue cycle management solutions 
        for healthcare providers and medical practices. We are dedicated to simplifying the complex world of 
        medical billing, allowing healthcare providers to focus on what they do best - patient care.
        <br/><br/>
        With a team of experienced professionals and advanced technology, we offer a comprehensive range 
        of services to streamline your revenue cycle and maximize your financial performance."
        <br/><br/>
        At Broadway Info Services, we are dedicated to building long-term partnerships with our clients. 
        We are committed to providing exceptional service, transparency, and a focus on your financial success.
        </div>
      </div>
      </Col>
      <Col md={1}></Col>
    </Row>
    </div>);
 };

 const LandingTemp2 = ()=>{
  return (<div style={{ marginTop:'65px', marginBottom:'65px', padding:'15px' }}>
    <Row>
      <Col md={12}>
        <div align="center">
          <h1 style={{ lineHeight:'46px' }}><b>Streamline Your Revenue Cycle, Maximize Your Practice's Potential.</b></h1>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={1}></Col>
      <Col md={7}>
        <div style={{ marginTop:'25px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
        Navigating the intricate landscape of medical billing can be a daunting task for healthcare providers. From 
        accurate coding and timely claims submission to efficient payment collection, the process demands meticulous 
        attention and expertise. However, with the right partner, you can streamline your revenue cycle and focus on 
        what truly matters: delivering quality patient care.<br/><br/>
        At Broadway Info Services, we understand the challenges healthcare providers face in managing their financial 
        operations. Our dedicated team of experts is committed to simplifying your medical billing process, allowing 
        you to maximize your revenue and minimize administrative burdens.
        </div>
      </Col>
      <Col md={3}>
        <img src="http://localhost/BIS/12.png" style={{ marginTop:'25px', borderRadius:'12px', boxShadow:'2px 2px 2px 2px #808080' }} />
      </Col>
      <Col md={1}></Col>
    </Row>
  </div>);
 };

 const LandingTemp3 = () =>{
  return (<div style={{ marginTop:'65px', backgroundColor:'#000040', color:'#ddd', paddingTop:'55px', paddingBottom:'35px',
    boxShadow:'2px 2px 2px 2px #808080'
   }}>
    <ContainerFluid>
    <Row>
      <Col md={12}>
      <div align="center">
        <h1 style={{ lineHeight:'46px', color:'#fff' }}>
        <b>How We Simplify Your Healthcare Billing Process?</b></h1>
      </div>
      </Col>
    </Row>
    <div style={{ marginTop:'25px', marginBottom:'25px' }}>
    <Row>
      <Col md={7}>
        <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px'  }}>
        We employ a proven approach to streamline your medical billing process:
        </div>
        <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px'  }}>
          <ul>
            <li>
              <div style={{ color:'#fff' }}><b>Comprehensive Assessment:</b></div>
              <div>We conduct a thorough assessment of your current billing practices to 
                identify areas for improvement.</div>
            </li>
            <li className="mtop15p">
              <div style={{ color:'#fff' }}><b>Customized Solutions:</b></div>
              <div>We tailor our services to meet your specific needs, ensuring optimal results.</div>
            </li>
            <li className="mtop15p">
              <div style={{ color:'#fff' }}><b>Advanced Technology:</b></div>
              <div>We leverage cutting-edge technology to automate tasks and improve efficiency.</div>
            </li>
            <li className="mtop15p">
              <div style={{ color:'#fff' }}><b>Expert Team:</b></div>
              <div>Our experienced professionals handle every aspect of your medical billing, from coding to collections.</div>
            </li>
            <li className="mtop15p">
              <div style={{ color:'#fff' }}><b>Transparent Communication:</b></div>
              <div>We maintain open communication with you throughout the process, keeping you informed and involved.</div>
            </li>
          </ul>
        </div>
        <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px' }}>
        By partnering with Broadway Info Services, you can simplify your healthcare billing, maximize your revenue, and 
        focus on delivering exceptional patient care. 
        </div>
      </Col>
      <Col md={5}>
        <img src="http://localhost/BIS/11.png" style={{ marginTop:'15px', borderRadius:'12px' }} />
      </Col>
    </Row>
    </div>
    </ContainerFluid>
  </div>);
 };

 const LandingTemp4 = () =>{
  const Items = () =>{
    const data = [{
      icon:'fa-window-maximize',
      title:'Maximized Reimbursement',
      content:'Our medical coding and claims submission expertise boosts your reimbursement rates.'
    },{
      icon:'fa-money',
      title:'Optimized Cash Flow',
      content:'Efficient claims processing and timely payment collection streamline your financial operations.'
    },{
      icon:'fa-cog',
      title:'Minimized Administrative Overhead',
      content:'Our streamlined processes and automation tools reduce your administrative burden.'
    },{
      icon:'fa-shield',
      title:'Assured Compliance',
      content:'We stay updated on the latest industry regulations to ensure compliance and mitigate risks.'
    },{
      icon:'fa-database',
      title:'Prioritized Data Security',
      content:'We safeguard your sensitive patient information with robust security measures.'
    },{
      icon:'fa-tachometer',
      title:'Improved Efficiency',
      content:'Our solutions enhance your overall operational efficiency, saving you time and resources.'
    }];
    return (<FeatureCard data={data} />);
  };
  return (<div style={{ marginTop:'65px', marginBottom:'65px' }}>
        <Row>
      <Col md={12}>
        <div align="center">
          <h1 style={{ lineHeight:'46px' }}><b>The Benefits of Partnering with Broadway Info Services</b></h1>
        </div>
        <div style={{ lineHeight:'34px', padding:'15px', fontSize:'18px', color:'#000'  }}>
          By choosing Broadway Info Services as your healthcare billing partner, you can enjoy the 
          following benefits:</div>
      </Col>
    </Row>
    <Items />
  </div>);
 };

 const Jumbotron = () =>{
  return ( <div className="p-5" style={{ backgroundColor:'#000040' }}>
   <ContainerFluid>
    <Row>
      <Col md={6}><img src={process.env.PROJECT_URL+"assets/images/1.png"} /></Col>
      <Col md={6}>
        <div className="p-1" style={{ fontSize:'18px', color:'#fff', lineHeight:'36px' }}>
        "The Workday Consultancy is your trusted partner for unlocking the full potential of Workday. 
        With our deep understanding of the platform, we deliver comprehensive solutions to help you achieve 
        your HR goals and improve employee experience."<br/><br/>
        Let's build a workplace where everyone feels valued, empowered, and inspired to contribute their best. 
        Together, we can create a positive and productive environment where we thrive both personally and professionally.
        </div>
        <div align="center" className="p-3">
          <a href="#for-employer" onClick={()=>setActiveMenu('for-employer')}>
          <Button style={{ margin:'5px', textTransform:'uppercase' }} type="light" size={11}><b>I am an Employer</b></Button>
          </a>
          <a href="#for-consultant" onClick={()=>setActiveMenu('for-consultant')}>
            <Button style={{ margin:'5px', textTransform:'uppercase' }} type="outline-light" size={11}><b>I Am a Consultant</b></Button>
          </a>
        </div>
       </Col>
      </Row>
    </ContainerFluid>
     </div>);
 };

 const [activeMenu, setActiveMenu] = useState('for-employer');
 const data = [{ id:'for-employer', label:'Eligibility & Benefits', component:(<Employers />) },
    { id:'for-consultant', label:'Contract Negotiations', component:(<Employees />) },
    { id:'for-consultant', label:'Practice Management', component:(<Employees />) }];

 const CarouselContent = ({ title, desc }) =>{
  return (<div className="bis-carouselContent" style={{ backgroundColor:'rgb(0,0,0,0.6)', 
      padding:'15px', borderRadius:'8px', color:'#fff' }}>
    <div align="center"><h2>{title}</h2></div>
    <div style={{ fontSize:'18px' }}>{desc}</div>
</div>);
 };
 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <TagLine />
 <div style={{ backgroundColor:'#ccc', color:'#000' }}>
  <Row>
    <Col md={6}>
      <img src="http://localhost/BIS/24.png" />
    </Col>
    <Col md={6}>
      <h2 style={{ marginTop:'25px', lineHeight:'46px', paddingTop:'15px' }}>
        <b>Elevate Your Healthcare Practice,<br/> Streamline Your Revenue Cycle and<br /> Partner with Broadway Info Services</b>
      </h2>
      <div className="bis-hgl-text">
      Broadway Info Services is your partner in optimizing healthcare operations. 
      Our dedicated team of experts specializes in ensuring accurate medical coding, timely claims 
      submission, and efficient payment collection.<br/><br/> 
      By streamlining these critical administrative tasks, 
      we empower healthcare providers to focus on what truly matters: delivering exceptional patient care.<br/><br/>
      Our cutting-edge technology, coupled with the expertise of our seasoned professionals, ensures accelerated 
      payment cycles and maximized revenue. 
      </div>
    </Col>
  </Row>
 </div>
  <div style={{ paddingTop:'45px', paddingLeft:'15px', paddingRight:'15px', backgroundColor:'#000040', color:'#eee',
      boxShadow:'2px 2px 2px 2px #808080'
   }}>
    <FeaturedServices />
  </div>

  <div>
  <ContainerFluid>
  <Row>
    <Col md={12}>
      <div align="center" style={{  marginTop:'35px', marginBottom:'35px', fontFamily:'MetropolisBold' }}>
        <h2 style={{  lineHeight:'42px' }}>Broadway Info Services - One Stop Solution</h2>  
      </div>
    </Col>
  </Row>
  <SlimImageTitles data={[{
      img:"http://192.168.1.5/BIS/5.png",
      content: (<SlimImageContent title={<HyperLinkScroll id="medical-billing" label={<div>Medical<br/> Billing</div>} />} />)
    },{ // medical-transcription
      img:"http://192.168.1.5/BIS/6.png",
      content: (<SlimImageContent  title={<HyperLinkScroll id="medical-transcription" label={<div>Medical<br/> Transcription</div>} />} />)
    },{ // medical-coding
      img:"http://192.168.1.5/BIS/7.png",
      content: (<SlimImageContent title={<HyperLinkScroll id="medical-coding" label={<div>Medical<br/> Coding</div>} />} />)
    },{
      img:"http://192.168.1.5/BIS/8.png",
      content: (<SlimImageContent title={<HyperLinkScroll id="compliance-audits" label={<div>Compliance<br/> Audits</div>} />} />)
    },{
      img:"http://192.168.1.5/BIS/9.png",
      content: (<SlimImageContent title={<HyperLinkScroll id="practice-consulting" label={<div>Practice<br/> Consulting</div>} />} />)
    },{
      img:"http://192.168.1.5/BIS/10.png",
      content: (<SlimImageContent title={<HyperLinkScroll id="credentialing-services" label={<div>Credentialing<br/> Services</div>} />} />)
    }]} />
  </ContainerFluid>

  </div>

  <LandingTemp1 />
  <LandingTemp2 />
  <LandingTemp3 />
  <LandingTemp4 />
 
 {/*
 <Jumbotron /> */}


 <Bottom />
 <Footer />

 
 
 </>);
};

const SlimImageContent = ({ title }) =>{
 return (<div align="center" 
  style={{ textTransform:'uppercase', padding:'15px', fontSize:'18px', 
    color:'#fff', cursor:'pointer' }}>{title}</div>);
};

export default Home;