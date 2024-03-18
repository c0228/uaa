import React from "react";
import { Row, Col } from "e-ui-react";

const Welcome = ()=>{
 return (<>
  <div style={{ paddingTop:'40px', paddingLeft:'10px', paddingRight:'30px' }}>
 <div align="center">
   <span style={{ fontSize:'40px', fontFamily:'BebasNeue', letterSpacing:'4px', color:'#E91E63' }}>
        <b>Welcome to RollEasyBlinds – Your Window to Elegance!</b>
   </span>
 </div>

  <Row>
   <Col xl={6}>
    <div style={{ fontFamily:'Metropolis', color:'#555', fontSize:'18px', padding:'25px' }}>
        <div>
        &emsp;At RollEasyBlinds, we're more than just a blinds business; we're your dedicated partners in transforming 
        spaces into stunning reflections of your style and comfort. Step into a world where functionality meets 
        sophistication, and every window tells a unique story.
        </div>
        <div style={{ paddingTop:'15px' }}>
        &emsp;Our passion for impeccable design and commitment to quality craftsmanship drive us to deliver blinds that 
        not only enhance privacy and light control but also add a touch of elegance to your home or office. As you 
        explore our website, you'll discover a curated collection of blinds designed to elevate your living spaces.
        </div>
        <div style={{ paddingTop:'15px' }}>
         We understand that choosing the perfect blinds is a significant decision, and we're here to guide you every step 
         of the way. Whether you're looking for timeless classics or contemporary styles, RollEasyBlinds has the solution 
         to match your vision.
        </div>
        <div style={{ paddingTop:'15px' }}>
        Thank you for considering RollEasyBlinds as your go-to destination for premium window treatments. We invite you to 
        explore our range, discover the possibilities, and embark on a journey to redefine your living spaces.
        </div>
        <div style={{ paddingTop:'15px' }}>
        Your satisfaction is our priority, and we look forward to being a part of your home transformation.
        </div>
    </div>
    </Col>
    <Col xl={6}>
        <Row>
        <Col xl={4}>
        <div style={{ paddingTop:'25px' }}>
          <img src="assets/images/welcome1.png" style={{ boxShadow:'2px 2px 2px 2px #ccc',borderRadius:'12px', width:'100%', height:'auto' }} />
        </div>  
    </Col>  
    <Col xl={4}>
        <div style={{ paddingTop:'25px' }}>
          <img src="assets/images/welcome2.png" style={{ boxShadow:'2px 2px 2px 2px #ccc',borderRadius:'12px', width:'100%', height:'auto' }} />
        </div>  
    </Col> 
    <Col xl={4}>
        <div style={{ paddingTop:'25px' }}>
          <img src="assets/images/welcome3.png" style={{ boxShadow:'2px 2px 2px 2px #ccc',borderRadius:'12px', width:'100%', height:'auto' }} />
        </div>  
    </Col>    
        </Row>
        <Row>
        <Col xl={4}>
        <div style={{ paddingTop:'25px' }}>
          <img src="assets/images/welcome4.png" style={{ boxShadow:'2px 2px 2px 2px #ccc',borderRadius:'12px', width:'100%', height:'auto' }} />
        </div>  
    </Col>  
    <Col xl={4}>
        <div style={{ paddingTop:'25px' }}>
          <img src="assets/images/welcome5.png" style={{ boxShadow:'2px 2px 2px 2px #ccc',borderRadius:'12px', width:'100%', height:'auto' }} />
        </div>  
    </Col> 
    <Col xl={4}>
        <div style={{ paddingTop:'25px' }}>
          <img src="assets/images/welcome6.png" style={{ boxShadow:'2px 2px 2px 2px #ccc',borderRadius:'12px', width:'100%', height:'auto' }} />
        </div>  
    </Col>    
        </Row>
    </Col>       
  </Row>
 </div>
 </>);
};

export default Welcome;