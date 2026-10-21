import React from "react";
import { ContainerFluid, Row, Col, Icon, Button, TextBox, Card } from "e-ui-react";
import Header2 from "@Templates/Header2/index.js";

const data = [
    {
        id: "local-community",
        icon: "fa-users",
        label: "Local Community",
        subCategories: [
            {
                id: "neighborhood-updates",
                icon: "fa-map-marker",
                label: "Neighborhood Updates",
                desc: "Stay informed about local news, neighborhood changes, and important community updates."
            },
            {
                id: "local-events",
                icon: "fa-calendar",
                label: "Local Events",
                desc: "Discover upcoming events, festivals, meetups, and activities happening nearby."
            },
            {
                id: "community-groups",
                icon: "fa-users",
                label: "Community Groups",
                desc: "Connect with people who share your interests, hobbies, and neighborhood connections."
            },
            {
                id: "public-issues",
                icon: "fa-exclamation-circle",
                label: "Public Issues",
                desc: "Discuss local problems, report civic concerns, and work together to improve your community."
            },
            {
                id: "local-announcements",
                icon: "fa-bullhorn",
                label: "Local Announcements",
                desc: "Share important notices, public announcements, and updates with people in your area."
            }
        ]
    },
    {
        id: "food-and-dining",
        icon: "fa-cutlery",
        label: "Food & Dining",
        subCategories: [
            {
                id: "restaurants",
                icon: "fa-cutlery",
                label: "Restaurants",
                desc: "Explore nearby restaurants, discover new dishes, and share dining experiences."
            },
            {
                id: "cafes-and-bakeries",
                icon: "fa-coffee",
                label: "Cafes & Bakeries",
                desc: "Find cozy cafes, fresh bakeries, specialty coffee, and sweet treats around you."
            },
            {
                id: "street-foods",
                icon: "fa-shopping-basket",
                label: "Street Food",
                desc: "Discover popular street food stalls, local flavors, and must-try snacks in your area."
            },
            {
                id: "home-food",
                icon: "fa-home",
                label: "Home Food",
                desc: "Find homemade meals, home chefs, and authentic local food prepared with care."
            },
            {
                id: "food-offers",
                icon: "fa-tag",
                label: "Food Offers",
                desc: "Discover food discounts, special combos, limited-time deals, and restaurant promotions."
            }
        ]
    },
    {
        id: "shopping-and-services",
        icon: "fa-shopping-bag",
        label: "Shopping & Services",
        subCategories: [
            {
                id: "local-shops",
                icon: "fa-shopping-cart",
                label: "Local Shops",
                desc: "Discover nearby stores, explore products, and find great deals from local retailers."
            },
            {
                id: "grocery-and-supermarkets",
                icon: "fa-shopping-basket",
                label: "Grocery & Supermarkets",
                desc: "Find nearby grocery stores, supermarkets, daily essentials, and special offers."
            },
            {
                id: "salons-and-spas",
                icon: "fa-scissors",
                label: "Salons & Spas",
                desc: "Explore local salons, spas, beauty treatments, and personal grooming services."
            },
            {
                id: "repair-services",
                icon: "fa-wrench",
                label: "Repair Services",
                desc: "Find trusted local professionals for mobile, electronics, appliance, and other repairs."
            },
            {
                id: "home-services",
                icon: "fa-home",
                label: "Home Services",
                desc: "Connect with local experts for cleaning, plumbing, electrical work, and home maintenance."
            }
        ]
    },
    {
        id: "education-and-learning",
        icon: "fa-graduation-cap",
        label: "Education & Learning",
        subCategories: [
            {
                id: "schools",
                icon: "fa-university",
                label: "Schools",
                desc: "Explore nearby schools, educational updates, admissions, and school activities."
            },
            {
                id: "colleges",
                icon: "fa-university",
                label: "Colleges",
                desc: "Discover colleges, admission opportunities, campus updates, and student activities."
            },
            {
                id: "coaching-centers",
                icon: "fa-book",
                label: "Coaching Centers",
                desc: "Find coaching institutes, exam preparation classes, tutors, and learning opportunities."
            },
            {
                id: "skill-development",
                icon: "fa-lightbulb-o",
                label: "Skill Development",
                desc: "Discover courses, practical training, workshops, and opportunities to learn new skills."
            },
            {
                id: "educational-events",
                icon: "fa-calendar",
                label: "Educational Events",
                desc: "Stay updated on seminars, workshops, competitions, educational fairs, and academic events."
            }
        ]
    },
    {
        id: "jobs-and-business",
        icon: "fa-briefcase",
        label: "Jobs & Business",
        subCategories: [
            {
                id: "local-jobs",
                icon: "fa-briefcase",
                label: "Local Jobs",
                desc: "Discover job openings, part-time work, full-time roles, and employment opportunities nearby."
            },
            {
                id: "business-opportunities",
                icon: "fa-line-chart",
                label: "Business Opportunities",
                desc: "Explore business ideas, partnerships, investment opportunities, and local market trends."
            },
            {
                id: "freelancing",
                icon: "fa-laptop",
                label: "Freelancing",
                desc: "Find freelance projects, share your expertise, and connect with clients seeking skilled professionals."
            },
            {
                id: "small-businesses",
                icon: "fa-building",
                label: "Small Businesses",
                desc: "Discover local businesses, explore their products and services, and support local entrepreneurs."
            },
            {
                id: "networking",
                icon: "fa-handshake-o",
                label: "Networking",
                desc: "Build professional connections, meet entrepreneurs, and discover collaboration opportunities."
            }
        ]
    },
    {
        id: "entertainment",
        icon: "fa-star",
        label: "Entertainment & Lifestyle",
        subCategories: [
            {
                id: "movies-and-theatres",
                icon: "fa-film",
                label: "Movies & Theatres",
                desc: "Discover movies, nearby theatres, showtimes, and the latest entertainment releases."
            },
            {
                id: "sports",
                icon: "fa-futbol-o",
                label: "Sports",
                desc: "Follow local sports, discover tournaments, join games, and connect with fellow sports enthusiasts."
            },
            {
                id: "music-and-concerts",
                icon: "fa-music",
                label: "Music & Concerts",
                desc: "Explore live concerts, music events, local performances, and upcoming shows near you."
            },
            {
                id: "fitness",
                icon: "fa-heartbeat",
                label: "Fitness",
                desc: "Discover gyms, fitness classes, workout communities, and local health and wellness activities."
            },
            {
                id: "hobbies",
                icon: "fa-paint-brush",
                label: "Hobbies",
                desc: "Connect with hobby enthusiasts, explore creative activities, and discover clubs and workshops nearby."
            }
        ]
    }
];

const SetCategories = () =>{
 const handleNext = () =>{
    window.location.href=process.env.PROJECT_URL+'news-feed';
 };
 return (<>
 <Header2 />
 <div style={{ paddingBottom:'75px' }}>
 <ContainerFluid>
    <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <div align="center">
                <div className="mtop25p">
                    <h2 style={{ fontSize: '28px', fontFamily: 'Metropolis', letterSpacing: '0.4px', marginTop:'15px' }}>
                        <b>What are you interested in?</b>
                    </h2>
                </div>
                <div style={{ fontSize:'16px', color:'#777' }}>Choose the topics you'd like to see in your MyLocalHook feed. 
                    You can change your interests anytime.<br/> Your Feed will be personalized based on your location and interests. 
                    We will show you what matters most in your community. 
                </div>
                <div>
                    
                </div>
                <div className="mtop5p">
                    <span style={{ textTransform:'uppercase', fontSize:'13px', color:'#888', marginRight:'5px' }}><b>Stay informed |</b></span>
                    <span style={{ fontSize:'12px', color:'#000', padding:'6px', border:'1px solid #555', borderRadius:'8px' }}>
                            <Icon type="FontAwesome" name="fa-bolt" size={11} style={{ marginLeft:'5px', marginRight:'5px' }} />
                            <span style={{ marginRight:'5px' }}>Personalize Your Feed</span>
                    </span>
                    <span style={{ textTransform:'uppercase', fontSize:'13px', color:'#888', marginLeft:'5px' }}><b>| Stay Connected</b></span>
                </div>
            </div>
        </Col>
        <Col md={2}></Col>
    </Row>
    <Row>
        <Col md={12}>
            <div className="list-group mtop15p">
                <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                    <Row>
                        <Col md={8}>
                            <TextBox name="search" placeholder="Search Topics (e.g., Food, Tech)..." />
                        </Col>
                        <Col md={2}>
                            <div align="right" style={{ paddingTop:'5px' }}>0 of 20 Selected</div>
                        </Col>
                        <Col md={2}>
                            <div align="right">
                                <Button type="dark" size={11} style={{ marginRight:'5px' }}><b>Select All</b></Button>
                                <Button type="outline-dark" size={11}><b>Clear All</b></Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
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
                        <div style={{ marginBottom:'12px' }}>
                        <Card padding={15}>
                            <div style={{ display:'flex' }}>
                                <div style={{ width:'15%' }}>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id={s?.label} />
                                    </div>
                                </div>
                                <div style={{ width:'85%' }}>
                                    <div><h5>
                                        <Icon type="FontAwesome" name={s?.icon} size={18} style={{ marginRight:'5px' }} />
                                        <b>{s?.label}</b>
                                    </h5></div>
                                    <div style={{ color:'#777' }}>{s?.desc}</div>
                                </div>
                            </div>
                        </Card>
                        </div>
                    </Col>);
                })} 
                </Row>    
            </div>);
        })}
    </div>
 </ContainerFluid>
 </div>
 <div style={{ position: 'fixed', left: '0', bottom: '0', width: '100%', backgroundColor:'#fff', 
        borderTop:'1px solid #ccc', boxShadow:'2px 2px 2px 2px #808080', padding:'8px' }}>
        <Row>
            <Col md={8}>
                <div align="left" style={{ padding:'8px', color:'#555' }}>
                    <b>Please select at least 3 topics (0 left)</b>
                </div>
                
            </Col>
            <Col md={4}>
                <div align="right">
                    <Button type="dark" size={14} style={{ marginRight:'8px' }} onClick={handleNext}>
                        <Icon type="FontAwesome" name="fa-save" size={14} style={{ marginRight:'8px' }} />
                        <b>Save and Continue</b></Button>
                </div>
            </Col>
        </Row>
 </div>
 </>);
};

export default SetCategories;