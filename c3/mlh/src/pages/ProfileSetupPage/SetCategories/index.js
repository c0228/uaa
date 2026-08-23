import React from "react";
import { ContainerFluid, Row, Col, Icon, Button } from "e-ui-react";
import Header2 from "@Templates/Header2/index.js";

const data = [
    {
        "icon": "fa-users",
        "label": "Local Community",
        "subCategories": [
            {
                "icon": "fa-map-marker",
                "label": "Neighborhood Updates"
            },
            {
                "icon": "fa-calendar",
                "label": "Local Events"
            },
            {
                "icon": "fa-users",
                "label": "Community Groups"
            },
            {
                "icon": "fa-exclamation-circle",
                "label": "Public Issues"
            },
            {
                "icon": "fa-bullhorn",
                "label": "Local Announcements"
            }
        ]
    },
    {
        "icon": "fa-cutlery",
        "label": "Food & Dining",
        "subCategories": [
            {
                "icon": "fa-cutlery",
                "label": "Restaurants"
            },
            {
                "icon": "fa-coffee",
                "label": "Cafes & Bakeries"
            },
            {
                "icon": "fa-shopping-basket",
                "label": "Street Food"
            },
            {
                "icon": "fa-home",
                "label": "Home Food"
            },
            {
                "icon": "fa-tag",
                "label": "Food Offers"
            }
        ]
    },
    {
        "icon": "fa-shopping-bag",
        "label": "Shopping & Services",
        "subCategories": [
            {
                "icon": "fa-shopping-cart",
                "label": "Local Shops"
            },
            {
                "icon": "fa-shopping-basket",
                "label": "Grocery & Supermarkets"
            },
            {
                "icon": "fa-scissors",
                "label": "Salons & Spas"
            },
            {
                "icon": "fa-wrench",
                "label": "Repair Services"
            },
            {
                "icon": "fa-home",
                "label": "Home Services"
            }
        ]
    },
    {
        "icon": "fa-graduation-cap",
        "label": "Education & Learning",
        "subCategories": [
            {
                "icon": "fa-university",
                "label": "Schools"
            },
            {
                "icon": "fa-university",
                "label": "Colleges"
            },
            {
                "icon": "fa-book",
                "label": "Coaching Centers"
            },
            {
                "icon": "fa-lightbulb-o",
                "label": "Skill Development"
            },
            {
                "icon": "fa-calendar",
                "label": "Educational Events"
            }
        ]
    },
    {
        "icon": "fa-briefcase",
        "label": "Jobs & Business",
        "subCategories": [
            {
                "icon": "fa-briefcase",
                "label": "Local Jobs"
            },
            {
                "icon": "fa-line-chart",
                "label": "Business Opportunities"
            },
            {
                "icon": "fa-laptop",
                "label": "Freelancing"
            },
            {
                "icon": "fa-building",
                "label": "Small Businesses"
            },
            {
                "icon": "fa-handshake-o",
                "label": "Networking"
            }
        ]
    },
    {
        "icon": "fa-star",
        "label": "Entertainment & Lifestyle",
        "subCategories": [
            {
                "icon": "fa-film",
                "label": "Movies & Theatres"
            },
            {
                "icon": "fa-futbol-o",
                "label": "Sports"
            },
            {
                "icon": "fa-music",
                "label": "Music & Concerts"
            },
            {
                "icon": "fa-heartbeat",
                "label": "Fitness"
            },
            {
                "icon": "fa-paint-brush",
                "label": "Hobbies"
            }
        ]
    }
];

const SetCategories = () =>{
 const handleNext = () =>{
    window.location.href=process.env.PROJECT_URL+'home';
 };
 return (<>
 <Header2 />
 <ContainerFluid>
    <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <div align="center">
                <div className="mtop25p">
                    <h2 style={{ fontSize: '28px', fontFamily: 'Metropolis', letterSpacing: '0.4px' }}>
                        <b>What are you interested in?</b>
                    </h2>
                </div>
                <div style={{ fontSize:'16px', color:'#333' }}>Choose the topics you'd like to see in your MyLocalHook feed. You can change your interests anytime.</div>
            </div>
            <div align="center" className="mtop15p">
                <div style={{ display:'inline-block', border:'1px solid #065fc5', padding:'15px', borderRadius:'12px',
                    backgroundColor:'#e8f3ff' }}>
                    <div>
                        <h4 style={{ color:'#065fc5', fontSize: '18px', fontFamily: 'Metropolis', letterSpacing: '0.4px' }}>
                            <b>Your Feed will be personalized based on your location and interests</b>
                        </h4>
                    </div>
                    <div style={{ fontSize:'16px', color:'#333' }}>We will show you what matters most in your community. 
                        Stay informed. Stay Connected.</div>
                </div>
            </div>
        </Col>
        <Col md={2}></Col>
    </Row>
    <div className="mtop15p" style={{ paddingLeft:'15px', paddingRight:'15px' }}>
        {data?.map((c,i1)=>{
            return (<div key={i1} className="mtop15p">
                <Row>
                    <Col md={12}><div><h4>
                        <Icon type="FontAwesome" name={c?.icon} size={18} style={{ marginRight:'8px' }} />
                        <span style={{ fontSize: '22px', fontFamily: 'Metropolis', letterSpacing: '0.4px' }}> <b>{c?.label}</b></span>
                        <span className="pull-right">
                            <Icon type="FontAwesome" name="fa-angle-double-down" size={18} />
                        </span>
                        </h4><hr/></div></Col>
                </Row>
                <Row className="mtop10p">
                {c?.subCategories?.map((s,i2)=>{
                    return (<Col key={i2} md={3}>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={s?.label} />
                            <label className="form-check-label" htmlFor="switchCheckDefault">{s?.label}</label>
                        </div>
                    </Col>);
                })} 
                </Row>    
            </div>);
        })}
    </div>
    <Row>
        <Col md={12}>
            <div align="center" className="mbot25p">
                <Button type="primary" size={14} style={{ marginRight:'8px' }} onClick={handleNext}>
                    <Icon type="FontAwesome" name="fa-save" size={14} style={{ marginRight:'8px' }} />
                    <b>Save and Continue</b></Button>
                <Button type="outline-primary" size={14}>
                    <Icon type="FontAwesome" name="fa-refresh" size={14} style={{ marginRight:'8px' }} />
                    <b>Reset</b>
                </Button>
            </div>
        </Col>
    </Row>
 </ContainerFluid>
 </>);
};

export default SetCategories;