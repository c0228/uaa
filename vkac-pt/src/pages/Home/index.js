import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Icon, Carousel, Card, Colors, Rating, Avatar } from "e-ui-react";
import './index.css';
import NewslettersTemplate from "@Pages/NewslettersTemplate/index.js";
import ContactUs from "@Pages/ContactUs/index.js";
import ReachUsOut from "@Pages/ReachUsOut/index.js";

const CustomerFeedback = ()=>{
  return(<>
  <Card className="intro" padding={15} backgroundColor={Colors.light}>
    <div className="mtop15p mbot15p" align="center">
    <Rating name="myRating" size={5} position="static"
    colors={{
      default: [ "#ccc" ],
      onSelect:[{ "1,2": "red", "3": "orange", "4,5": "green" }]
    }} 
    value={3} />
        <div className="mtop15p mbot15p">
        <h5 class="bs-header">"The guidance I received from VK Abroad consultancy in preparing for my study 
        abroad experience was invaluable. They helped me navigate through the visa application process, ensuring 
        I had all the necessary documents in order. Their personalized approach made me feel valued and supported
         throughout my study abroad journey. Thank you for being available and responsive through phone calls and
          WhatsApp whenever required"</h5>
        </div>
        <div className="mtop15p mbot15p" style={{marginBottom:"5px"}}>
        <Avatar size={100} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" />
        </div>
        <h5 class="bs-header" style={{color:"black", opacity:".65"}}>@AdithyaKankipati</h5>
    </div>
  </Card>
  </>);
};

const LocateUs = ()=>{
  return(<>
  <div className="mtop15p mbot15p" align="center">
    <h2 class="bs-header" style={{marginBottom:"5px"}}><b>Locate<span className="text-primary"> Us</span></b></h2> 
  </div>
  </>);
};

const Component1 = ()=>{
    return (<div className="section1Component">
     <h4 className="bs-header">Section #1</h4>
     <div>
     Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
     molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
     viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
     </div>
    </div>);
  };
 
  const Component2 = ()=>{
   return (<div className="section2Component">
     <h4 className="bs-header">Section #2</h4>
     <div>
     Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
     molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
     viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
     </div>
   </div>);
  };
 
  const Component3 = ()=>{
   return (<div className="section3Component">
     <h4 className="bs-header">Section #3</h4>
     <div>
     Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, 
     molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin 
     viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    </div>
   </div>);
  };

  let data = [<>
    <img src="https://www.w3schools.com/bootstrap/la.jpg" class="d-block w-100" alt="..." />
    <div class="carousel-caption d-none d-md-block">
      <h4 className="bs-header">USA</h4>
      <p>Study Masters in Top Universities of USA with <b><i>Vk Abroad Consultancy</i></b></p>
    </div>
  </>,
  <><img src="https://www.w3schools.com/bootstrap/chicago.jpg" class="d-block w-100" alt="..." />
  <div class="carousel-caption d-none d-md-block">
      <h4 className="bs-header">USA</h4>
      <p>Study Masters in Top Universities of USA with <b><i>Vk Abroad Consultancy</i></b></p>
    </div>
  </>,
  <><img src="./assets/logo/home.png" class="d-block w-100" alt="..." />
  <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
      <h4 className="bs-header">USA</h4>
      <p>Study Masters in Top Universities of USA with <b><i>Vk Abroad Consultancy</i></b></p>
    </div>
  </>];

const HeaderContent = ()=>{
    return(<>
        <div style={{backgroundColor:"#006EB3", color:"white"}}>
            <ContainerFluid>
                <Row>
                    <Col xl={1} xxl={1}>
                    </Col>
                    <Col xl={7} xxl={7}>
                        <div className="mtop5p mbot5p" align="left">
                            <Icon type="FontAwesome" name="fa-whatsapp" size={16} /> <b>+91-</b> 9948390094
                        </div>
                    </Col>
                    <Col xl={4} xxl={4}>
                    <div className="mtop5p mbot5p" align="right">
                    <span style={{ marginRight: '10px' }}><b>Follow us on</b></span>
                        <Icon type="FontAwesome" name="fa-instagram" size={20} style={{ marginRight: '10px', cursor:"pointer" }} />
                        <Icon type="FontAwesome" name="fa-twitter" size={20} style={{ marginRight: '10px', cursor:"pointer" }} />
                        <Icon type="FontAwesome" name="fa-facebook" size={20} style={{ marginRight: '30px', cursor:"pointer" }} />
                    </div>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    </>);
};


const AboutUsPage = ()=>{
  return(<>
  <div className="mtop15p mbot15p">
          <ContainerFluid>
          <Card className="intro" padding={15} style={{backgroundColor:"#d1ffea"}}>
          <div className="mtop15p mbot15p">
            <Row>
              <Col xl={5} xxl={5}>
                <div className="mtop15p mbot15p">
                  <img src="./assets/logo/about.jpg" alt="..." />
                </div>
              </Col>
              <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" style={{marginBottom:"10px"}}>
                  <h4 class="bs-header" style={{color:"black", opacity:".65"}}>
                  <b>VK Abroad Consultancy</b> not only provides students the Visa Consultancy Services but all the 
                  exclusive services that the aspiring students need to access to land themselves at their 
                  choicest universities abroad. VK Abroad Consultancy has that kind of infrastructure. Right
                  from visa consultancy services to processing student applications, visa and passport to
                  air-ticketing to admissions in overseas colleges, all we do it in a transparent manner and
                  at jet speed without wasting your precious time. And mind you, there are no hidden costs or
                  any hitches of glitches. All we do and function in a transparent manner with utmost honesty
                  and integrity. After all, trust and confidence go a long way. And so this has been our core
                  strength and our business philosophy too. Thus VK Abroad Consultancy has earned the reputation
                  of being the only and the best USA Visa Consultancy Services in Hyderabad.
                  </h4>
                  </div>
                  <div className="mtop15p mbot15p">
                    <h4 class="bs-header"><b>What gives VK Abroad a Competitive Edge</b></h4>
                  </div>
                  <h4 class="bs-header" style={{color:"black", opacity:".65"}}>
                  This network of resources helps us in giving you the latest info relating to your studies overseas in a 
                  particular university or college. Any country, any university, any college, or any faculty; just name your choice.
                  </h4>
              </Col>
              <Col xl={1} xxl={1}></Col>
            </Row>
            
          </div>
        </Card>
        </ContainerFluid>
        </div>
  </>);
};


const Home = ()=>{
 return (<>
 <HeaderContent />
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div className="mbot15p"><Carousel data={data} /></div>
 <div className="mtop15p mbot15p">
  <ContainerFluid>
    <Row>
    <div className="mtop15p mbot15p" align="center">
          <h2 class="bs-header"><b>Clients <span className="text-primary">Reviews</span></b></h2>
        </div>
      <Col xl={4} xxl={4}>
      <CustomerFeedback/>
      </Col>
      <Col xl={4} xxl={4}>
      <CustomerFeedback/>
      </Col>
      <Col xl={4} xxl={4}>
      <CustomerFeedback/>
      </Col>
    </Row>
  </ContainerFluid>
 </div>
 <div className="mtop15p mbot15p">
  <div className="mtop15p mbot15p" align="center">
  <h1 class="bs-header" style={{cursor:"pointer", marginBottom:"5px"}}><b>Checkout Our <span className="text-primary">Services</span></b></h1>
  </div>
  <ContainerFluid>
    <Row>
      <Col xl={4} xxl={4}>
        <div className="mtop15p mbot15p" align="center" style={{marginBottom:"8px"}}>
        <Card className="intro" padding={15}>
          <div className="mtop15p" style={{marginBottom:"5px"}}>
            <img src="assets/logo/counselling.jpg" style={{height:"200px", width:"380px"}}></img>
          </div>
          <div className="mtop15p">
          <h2 class="bs-header" style={{ marginBottom:"5px", cursor:"pointer"}}><b>Counselling</b></h2>
          <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Our counselling sessions will immensely benefit you in 
          making the best academic decision suiting your career choices.</h5>
          </div>
        </Card>
        </div>
        <div className="mtop15p mbot15p" align="center" style={{marginBottom:"8px"}}>
        <Card className="intro" padding={15}>
          <div className="mtop15p" style={{marginBottom:"5px"}}>
            <img src="assets/logo/application.jpg" style={{height:"200px", width:"380px"}}></img>
          </div>
          <div className="mtop15p">
          <h2 class="bs-header" style={{ marginBottom:"5px", cursor:"pointer"}}><b>Application, Admission & Visa Processing</b></h2>
          <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Choose the right intake, apply timely and smartly in courses and 
          universities that are your right fit and receive admits/offers in no time.</h5>
          </div>
        </Card>
        </div>
      </Col>
      <Col xl={4} xxl={4}>
      <div className="mtop15p mbot15p" align="center" style={{marginBottom:"8px"}}>
        <Card className="intro" padding={15}>
          <div className="mtop15p" style={{marginBottom:"5px"}}>
            <img src="assets/logo/test_preparation.jpg" style={{height:"200px", width:"380px"}}></img>
          </div>
          <div className="mtop15p">
          <h2 class="bs-header" style={{ marginBottom:"5px", cursor:"pointer"}}><b>Test Preparation</b></h2>
          <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Effortlessly reach your highest potential test 
          score with our certified, adept and dedicated tutors who will efficiently prepare you for your desired tests.</h5>
          </div>
        </Card>
        </div>
        <div className="mtop15p mbot15p" align="center" style={{marginBottom:"8px"}}>
        <Card className="intro" padding={15}>
          <div className="mtop15p" style={{marginBottom:"5px"}}>
            <img src="assets/logo/scholarship.jpg" style={{height:"200px", width:"380px"}}></img>
          </div>
          <div className="mtop15p">
          <h2 class="bs-header" style={{ marginBottom:"5px", cursor:"pointer"}}><b>Scholarships</b></h2>
          <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Our global universities have plenty of scholarships on offer and we 
          will help you identify and apply for the ones you deserve the most.</h5>
          </div>
        </Card>
        </div>
      </Col>
      <Col xl={4} xxl={4}>
      <div className="mtop15p mbot15p" align="center" style={{marginBottom:"8px"}}>
        <Card className="intro" padding={15}>
          <div className="mtop15p" style={{marginBottom:"5px"}}>
            <img src="assets/logo/courses.jpg" style={{height:"200px", width:"380px"}}></img>
          </div>
          <div className="mtop15p">
          <h2 class="bs-header" style={{ marginBottom:"5px", cursor:"pointer"}}><b>Course, Country & University Selection</b></h2>
          <h5 class="bs-header" style={{color:"black", opacity:".65"}}>We help you choose the ideal course, university & country that perfectly 
          match your career, academic and budget preferences.</h5>
          </div>
        </Card>
        </div>
        <div className="mtop15p mbot15p" align="center" style={{marginBottom:"8px"}}>
        <Card className="intro" padding={15}>
          <div className="mtop15p" style={{marginBottom:"5px"}}>
            <img src="assets/logo/internship.jpg" style={{height:"200px", width:"380px"}}></img>
          </div>
          <div className="mtop15p">
          <h2 class="bs-header" style={{ marginBottom:"5px", cursor:"pointer"}}><b>Internship & Education Loan</b></h2>
          <h5 class="bs-header" style={{color:"black", opacity:".65"}}>We know how important internships are to your profile 
          and thus our course recommendations are full of options with inbuilt internships.</h5>
          </div>
        </Card>
        </div>
      </Col>
    </Row>
  </ContainerFluid>
 </div>
 <div className="mtop15p mbot15p">
  <Row>
    <Col xl={12} xxl={12}>
      <div className="mtop15p mbot15p" align="center">
        <h2 class="bs-header"><b>About <span className="text-primary">Us</span></b></h2>
        <AboutUsPage />
      </div>
    </Col>
  </Row>
 </div>
 <div className="mtop15p mbot15p">
  <ReachUsOut />
 </div>
 <div className="mtop15p mbot15p">
  <Row>
    <Col xl={6} xxl={6}>
      <LocateUs />
    </Col>
    <Col xl={5} xxl={5}>
      <div className="mtop15p">
        <ContactUs />
      </div>
    </Col>
    <Col xl={1} xxl={1}></Col>
  </Row>

 </div>
 <div className="mtop15p mbot15p">
  <Row> 
    <Col xl={1} xxl={1}></Col>
    <Col xl={10} xxl={10}>
      <div className="mtop15p mbot15p">
        <NewslettersTemplate />
      </div>
    </Col>
    <Col xl={1} xxl={1}></Col>
  </Row>
 </div>
 </>);
};

export default Home;