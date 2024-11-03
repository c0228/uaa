import React, { useState } from "react";
import { ContainerFluid, Row, Col, Icon, Button, VerticalStaticMenu, Pill, Colors, Carousel  } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Employees from './components/Employees/index.js';
import Employers from './components/Employers/index.js';
import FeaturedServices from './components/FeaturedServices/index.js';
import SlimImageTitles from './SlimImageTitles/index.js';
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Home = ()=>{
 const TagLine = () =>{
   return (<div align="center" style={{ fontSize:'16px', width:'100%', backgroundColor:'#ddd', padding:'8px' }}>
    <b>"Your Trusted Partner for empowering Healthcare Providers for providing Healthcare Financial Success."</b>
 </div>);
 };
 const LandingTemp1 = () =>{
  return ( <div style={{ marginTop:'65px', backgroundColor:'#efefef', paddingTop:'55px', paddingBottom:'35px' }}>
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
  return (<div style={{ marginTop:'65px', padding:'15px' }}>
    <Row>
      <Col md={8}>
        <div><h1 style={{ lineHeight:'46px' }}><b>Streamline Your Revenue Cycle, Maximize Your Practice's Potential.</b></h1></div>
        <div style={{ lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
        Navigating the intricate landscape of medical billing can be a daunting task for healthcare providers. From 
        accurate coding and timely claims submission to efficient payment collection, the process demands meticulous 
        attention and expertise. However, with the right partner, you can streamline your revenue cycle and focus on 
        what truly matters: delivering quality patient care.<br/><br/>
        At Broadway Info Services, we understand the challenges healthcare providers face in managing their financial 
        operations. Our dedicated team of experts is committed to simplifying your medical billing process, allowing 
        you to maximize your revenue and minimize administrative burdens.
        </div>
      </Col>
    </Row>
  </div>);
 };

 const LandingTemp3 = () =>{
  return (<div style={{ marginTop:'65px', backgroundColor:'#efefef', paddingTop:'55px', paddingBottom:'35px' }}>
    <Row>
      <Col md={12}>
      <div align="center">
        <h1 style={{ lineHeight:'46px' }}>
        <b>How We Simplify Your Healthcare Billing Process?</b></h1>
      </div>
      </Col>
    </Row>
    <Row>
      <Col md={7}>
        <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
        We employ a proven approach to streamline your medical billing process:
        </div>
        <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
          <ul>
            <li>
              <div><b>Comprehensive Assessment:</b></div>
              <div>We conduct a thorough assessment of your current billing practices to 
                identify areas for improvement.</div>
            </li>
            <li>
              <div><b>Customized Solutions:</b></div>
              <div>We tailor our services to meet your specific needs, ensuring optimal results.</div>
            </li>
            <li>
              <div><b>Advanced Technology:</b></div>
              <div>We leverage cutting-edge technology to automate tasks and improve efficiency.</div>
            </li>
            <li>
              <div><b>Expert Team:</b></div>
              <div>Our experienced professionals handle every aspect of your medical billing, from coding to collections.</div>
            </li>
            <li>
              <div><b>Transparent Communication:</b></div>
              <div>We maintain open communication with you throughout the process, keeping you informed and involved.</div>
            </li>
          </ul>
        </div>
        <div style={{ padding:'15px', lineHeight:'34px', fontSize:'18px', color:'#000'  }}>
        By partnering with Broadway Info Services, you can simplify your healthcare billing, maximize your revenue, and 
        focus on delivering exceptional patient care. 
        </div>
      </Col>
      <Col md={5}>
      
      </Col>
    </Row>
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
    const Item = ({ data })=>{
      return (<div style={{ display:'flex', padding:'15px' }}>
        <div style={{ width:'25%', paddingTop:'18px' }}>
          <Icon type="FontAwesome" name={data?.icon} size={100} />
        </div>
        <div style={{ width:'75%', padding:'15px' }}>
          <div><h4><b>{data?.title}</b></h4></div>
          <div style={{ lineHeight:'34px', fontSize:'18px', color:'#000'  }}>{data?.content}</div>
        </div>
      </div>);
    };
    return (<Row>
      {data?.map((d,i)=>{
        return (<Col md={4}><Item key={i} data={d} /></Col>); 
      })}
    </Row>);
  };
  return (<div style={{ marginTop:'65px' }}>
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
 <Carousel 
    id="listing" 
    data={[{
          img: { src:'http://192.168.1.5/BIS/4.png', style:{  maxHeight:'600px' }, alt:'Los Angeles' },
          content:(<div>
              <div className="bis-onlyDesktopView">
                <CarouselContent title="Elevate Your Healthcare Practice with Broadway Info Services" 
                  desc={<div style={{ marginTop:'25px', color:'#ddd' }}>
                    &emsp;Broadway Info Services is your partner in optimizing healthcare operations. 
                    Our dedicated team of experts specializes in ensuring accurate medical coding, timely claims 
                    submission, and efficient payment collection. By streamlining these critical administrative tasks, 
                    we empower healthcare providers to focus on what truly matters: delivering exceptional patient care.<br/><br/> 
                    &emsp;Our comprehensive services are designed to enhance revenue cycle management, minimize claim denials, 
                    and maximize reimbursement. Trust Broadway Info Services to provide the support you need to thrive 
                    in today's complex healthcare landscape.</div>} />
              </div>
              <div className="bis-onlyMobileView">
                <CarouselContent title="Elevate Your Healthcare Practice with Broadway Info Services" 
                  desc={<div>Our expert team ensures accurate coding, timely claims submission & efficient payment 
                    collection, allowing you to focus on patient care.</div>} />
              </div>
            </div>)

            
     },{
         img:{ src:'http://192.168.1.5/BIS/3.png', style:{  maxHeight:'600px' }, alt:'Chicago' },
         content:(<div>
          <div className="bis-onlyDesktopView">
            <CarouselContent title="Streamline Your Revenue Cycle with Broadway Info Services" 
              desc={<div style={{ marginTop:'25px', color:'#ddd' }}>
                Broadway Info Services is committed to optimizing your revenue cycle. 
                Our cutting-edge technology, coupled with the expertise of our seasoned professionals, 
                ensures accelerated payment cycles and maximized revenue. By leveraging our advanced solutions, 
                you can streamline your administrative processes, reduce claim denials, and improve overall 
                financial performance.<br/><br/>
                Our advanced technology and experienced professionals work in tandem to revolutionize your revenue 
                cycle management. By automating tedious tasks and optimizing workflows, we accelerate payment cycles, 
                minimize claim denials, and maximize your revenue.Our comprehensive approach empowers you to focus on 
                delivering quality patient care, while we handle the complexities of revenue cycle management.</div>} />
          </div>
          <div className="bis-onlyMobileView">
            <CarouselContent title="Streamline Your Revenue Cycle with Broadway Info Services" 
            desc={<div>Our advanced technology and 
              experienced professionals work together to accelerate payment cycles, and 
              maximize your revenue.</div>} />
          </div>
         </div>)
     },{
         img:{ src:'http://192.168.1.5/BIS/2.png', style:{  maxHeight:'600px' }, alt:'New York' },
         content:(<div>
          <div className="bis-onlyDesktopView">
            <CarouselContent title="Partner with the Best in Healthcare Billing" 
            desc={
            <div>Elevate your healthcare practice with Broadway Info Services. 
              Our dedicated team of experts is committed to providing top-notch healthcare billing solutions. 
              By leveraging advanced technology and industry best practices, we streamline your revenue cycle, 
              maximize reimbursement, and minimize administrative burdens.<br/><br/>
              Our comprehensive services include:<br/><br/>
              <ol>
                <li>Accurate Coding: Ensuring precise coding for optimal reimbursement.</li>
                <li>Timely Claims Submission: Expediting the claims process for faster payments.</li>
                <li>Efficient Payment Collection: Streamlining the collection process to improve cash flow.</li>
              </ol>
              Trust Broadway Info Services to deliver exceptional results and help you focus on what matters 
              most: patient care.</div>} />
          </div>
          <div className="bis-onlyMobileView">
            <CarouselContent title="Partner with the Best in Healthcare Billing" 
            desc={
            <div>Experience the Broadway Info Services difference. Our commitment to excellence, 
              combined with our expertise and cutting-edge technology, ensures your financial success.</div>} />
          </div>
          </div>)
     }]} />
 {/*} <div className="p-5">
    <VerticalStaticMenu data={data} activeId={activeMenu}
        config={{ active:{ color:'#0c9712' }, inactive:{ color:'#000' } }} />
  </div>*/}
  <div style={{ paddingTop:'45px', paddingLeft:'15px', paddingRight:'15px', backgroundColor:'#000040', color:'#fff' }}>
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
      content: (<SlimImageContent title={<div>Medical<br/> Billing</div>} />)
    },{
      img:"http://192.168.1.5/BIS/6.png",
      content: (<SlimImageContent title={<div>Medical<br/> Transcription</div>} />)
    },{
      img:"http://192.168.1.5/BIS/7.png",
      content: (<SlimImageContent title={<div>Medical<br/> Coding</div>} />)
    },{
      img:"http://192.168.1.5/BIS/8.png",
      content: (<SlimImageContent title={<div>Compliance<br/> Audits</div>} />)
    },{
      img:"http://192.168.1.5/BIS/9.png",
      content: (<SlimImageContent title={<div>Practice<br/> Consulting</div>} />)
    },{
      img:"http://192.168.1.5/BIS/10.png",
      content: (<SlimImageContent title={<div>Credentialing<br/> Services</div>} />)
    }]} />
  </ContainerFluid>

  </div>

  <LandingTemp1 />
  <LandingTemp2 />
  <LandingTemp3 />
  <LandingTemp4 />
 
 {/*
 <Jumbotron /> */}

 <Footer />

 
 
 </>);
};

const SlimImageContent = ({ title }) =>{
 return (<div align="center" 
  style={{ textTransform:'uppercase', padding:'15px', fontSize:'18px', 
    color:'#fff', cursor:'pointer' }}>{title}</div>);
};

export default Home;