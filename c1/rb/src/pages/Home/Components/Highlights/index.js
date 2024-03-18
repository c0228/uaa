import React from "react";
import { Row, Col, Icon } from "e-ui-react";

export const Highlight1 = () =>{ 
    {/* backgroundColor:'#0b4e83' */}
 return (<div style={{ marginTop:'25px', paddingTop:'25px', paddingBottom:'55px', backgroundColor:'#03589b', color:'#fff' }}>
    <Row>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center" style={{ padding:'30px' }}>
                <Icon type="FontAwesome" name="fa-calendar-check-o" size={38} />
                <div style={{ fontSize:'24px', marginTop:'15px', fontFamily:'Metropolis' }}>Luxury Blind Collection</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>The High-Quality and Elegance of the Blinds Offered</div>
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center" style={{ padding:'30px' }}>
                <Icon type="FontAwesome" name="fa-clock-o" size={38} />
                <div style={{ fontSize:'24px', marginTop:'15px', fontFamily:'Metropolis' }}>Efficient Installation Services</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>Ensuring Timely and Professional Blind Installations</div>
            </div>
        </Col>
        <Col xs={12} xl={4} xxl={4}>
            <div align="center" style={{ padding:'30px' }}>
                <Icon type="FontAwesome" name="fa-user-secret" size={38} />
                <div style={{ fontSize:'20px', marginTop:'15px', fontFamily:'Metropolis' }}>Responsive Customer Care</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>Fast and Flexible Support to Meet Your Needs</div>
            </div>
        </Col>
    </Row>
 </div>);
};

export const Highlight2 = () =>{
 return (<>
    <div style={{ paddingLeft:'15px',paddingTop:'42px', paddingRight:'15px', paddingBottom:'60px', backgroundColor:'#eee', color:'#333' }}>
    <Row>
        <Col xs={12} xl={12} xxl={12}>
            <div align="center">
              <h3 style={{ fontFamily:'BebasNeue', fontSize:'36px' }}>Our Working process</h3> 
            </div>
        </Col>
    </Row>
    <Row>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center" style={{ padding:'15px' }}>
                <Icon type="FontAwesome" name="fa-mobile" size={96} />
                <div style={{ fontSize:'20px', marginTop:'15px', fontFamily:'Metropolis', lineHeight:'26px' }}>Discover Your Ideal Blinds</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>Helping You Find the Perfect Blinds for Your Space</div>
            </div>
        </Col>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center" style={{ padding:'15px' }}>
                <Icon type="FontAwesome" name="fa-comments" size={96} />
                <div style={{ fontSize:'20px', marginTop:'15px', fontFamily:'Metropolis', lineHeight:'26px' }}>Receive a Customized Quote</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>Providing a Tailored Quotation Based on Your Preferences</div>
            </div>
        </Col>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center" style={{ padding:'15px' }}>
                <Icon type="FontAwesome" name="fa-shopping-bag" size={96} />
                <div style={{ fontSize:'20px', marginTop:'15px', fontFamily:'Metropolis', lineHeight:'26px' }}>Confirm Your Order</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>Streamlining the Ordering Process for Your Convenience</div>
            </div>
        </Col>
        <Col xs={12} xl={3} xxl={3}>
            <div align="center" style={{ padding:'15px' }}>
                <Icon type="FontAwesome" name="fa-truck fa-flip-horizontal" size={96} />
                <div style={{ fontSize:'20px', marginTop:'15px', fontFamily:'Metropolis', lineHeight:'26px' }}>Experience Installation</div>
                <div style={{ fontSize:'16px', marginTop:'5px', fontFamily:'OpenSansItalic' }}>Ensuring a Smooth and Professional Installation of Your Blinds</div>
            </div>
        </Col>
    </Row>
    </div>   
 </>);
};
