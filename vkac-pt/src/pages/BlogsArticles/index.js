import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Icon, TextBox, Card, Colors, Button, Avatar, TextArea, Accordian, Rating } from "e-ui-react";
import NewslettersTemplate from "@Pages/NewslettersTemplate/index.js";

const BlogsExamples = () =>{
    return(<>
    <div className="mtop15p">
        <div className="mtop15p" align="center">
                    <h1 class="bs-header"><b>Examples</b></h1>
        </div>
        <div className="mtop15p">
            <ContainerFluid>
                <Row>
                    <Col xl={1} xxl={1}>
                    </Col>
                    <Col xl={10} xxl={10}>
                        <div className="mtop15p">
                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                            <Row>
                                <Col xl={6} xxl={6}>
                                    <Avatar size={75} src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" style={{marginRight:"5px"}} />
                                </Col>
                                <Col xl={6} xxl={6}>
                                    <div align="end">
                                        <h5 class="bs-header" style={{color:"black", opacity:".65", marginRight:"5px"}}><b>@AdithyaKankipati</b></h5>
                                        <h5 class="bs-header" style={{color:"black", opacity:".65"}}><b>Published On </b>28-01-2023 </h5>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                            <div className="mtop15p mbot15p">
                                <div className="mtop15p">
                                    <h1 class="bs-header"><b>
                                     Top 10 best Universities to get placed for Masters in United States of America   
                                    </b></h1><hr/>
                                </div>
                                <div className="mtop15p">
                                    <h5 class="bs-header" style={{color:"black", opacity:".65"}}>
                                    Choosing the right university for your master's degree in the United States is a crucial decision that can 
                                    shape your academic and professional future. With a plethora of options available, it's essential to consider 
                                    factors such as program quality, faculty expertise, research opportunities, and campus culture. In this article, 
                                    we'll explore the top 10 universities in the USA that offer exceptional master's programs, providing you with 
                                    valuable insights to aid your decision-making process.
                                    </h5>
                                </div>
                                <div className="mtop15p">
                                    <h5 class="bs-header"><b>
                                        Studying for a master's degree in the USA can be a transformative experience, 
                                        and the choice of university plays a significant role in your educational journey. 
                                        Here are the top 10 universities to consider for your master's program:
                                    </b></h5>
                                </div>
                                <div className="mtop15p">
                                    <h5 class="bs-header" style={{color:"black", opacity:".65"}}>
                                        <ul>
                                            <li><b>Harvard University:</b> Known for its prestigious reputation and world-class faculty, Harvard offers a wide range of master's programs across various fields.</li>
                                            <li><b>Stanford University:</b> Renowned for its innovation and research, Stanford is an ideal choice for those seeking cutting-edge programs.</li>
                                            <li><b>Massachusetts Institute of Technology (MIT):</b> MIT excels in science, engineering, and technology-related master's programs, providing access to groundbreaking research opportunities.</li>
                                            <li><b>California Institute of Technology (Caltech):</b> Caltech is a leader in science and engineering studies, making it a top choice for aspiring scientists and engineers.</li>
                                            <li><b>University of Chicago:</b> With a strong emphasis on interdisciplinary studies, the University of Chicago offers diverse master's programs</li>
                                            <li><b>Columbia University:</b> Located in the heart of New York City, Columbia offers a vibrant academic environment and a wide range of master's programs.</li>
                                            <li><b>Yale University:</b> Known for its strong humanities and social sciences programs, Yale provides a well-rounded education.</li>
                                            <li><b>Princeton University:</b> Princeton's commitment to research and academic excellence makes it an attractive option for master's students.</li>
                                            <li><b>University of California, Berkeley:</b> UC Berkeley offers diverse programs and is particularly renowned for its business and engineering schools.</li>
                                            <li><b>University of Michigan, Ann Arbor:</b> Known for its strong research programs, Michigan is an excellent choice for students seeking hands-on experience.</li>
                                        </ul>
                                    </h5>
                                </div>
                                <div className="mtop15p">
                                    <Row>
                                        <Col xl={3} xxl={3}>
                                            <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                        Harvard University
                                                    </b></h4>
                                                </div>
                                            </div>
                                            <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                        Stanford University
                                                    </b></h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={3} xxl={3}>
                                        <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                        Massachusetts Institute of Technology (MIT)
                                                    </b></h4>
                                                </div>
                                            </div>
                                            <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                    California Institute of Technology (Caltech)
                                                    </b></h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={3} xxl={3}>
                                        <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                    University of Chicago
                                                    </b></h4>
                                                </div>
                                            </div>
                                            <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                    Yale University
                                                    </b></h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={3} xxl={3}>
                                        <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                    Princeton University
                                                    </b></h4>
                                                </div>
                                            </div>
                                            <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                    University of California, Berkeley
                                                    </b></h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={3} xxl={3}>
                                        <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                                                <div className="mtop15p">
                                                    <h4 class="bs-header"><b>
                                                    University of Michigan, Ann Arbor
                                                    </b></h4>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xl={9} xxl={9}>
                                        <div className="mtop15p" align="center">
                                                <img src="./assets/logo/img_card.png" style={{height:"300px", width:"700px"}} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mtop15p mbot15p">
                                    <h5 class="bs-header"><b>
                                    Selecting the right university for your master's degree is a significant decision that requires careful consideration. 
                                    The top 10 universities in the USA mentioned in this article represent a diverse range of academic excellence, research 
                                    opportunities, and campus cultures. Ultimately, the best choice for you will depend on your field of interest, career 
                                    aspirations, and personal preferences. By thoroughly researching these universities and evaluating their offerings, 
                                    you can make an informed decision that will set you on the path to success in your master's program and beyond. Remember 
                                    that your educational journey is a stepping stone towards achieving your goals, so choose wisely and embrace the opportunities that lie ahead.
                                    </b></h5>
                                </div>
                            </div>
                            <div className="mtop15p">
                                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                                    <Row>
                                        <Col xl={8} xxl={8}>
                                            <div className="mtop15p mbot15p" align="left">
                                                <h4 class="bs-header" style={{color:"black", opacity:".65"}}>
                                                    Follow the Author on different Social Media Platforms
                                                </h4>
                                            </div>
                                        </Col>
                                        <Col xl={4} xxl={4}>
                                            <div className="mtop15p mbot15p" align="right">
                                                <Button type="primary" label="Subscribe to the page" size={11} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </div>
                            <div className="mtop15p">
                                <Row>
                                    <Col xl={6} xxl={6}>
                                        <div className="mtop15" align="center">
                                            <h3 class="bs-header"><b>Rate this Article</b></h3><hr/>
                                            <div className="mtop15p">
                                                <Rating name="myRating" size={5} 
                                                colors={{
                                                    default: [ "#ccc" ],
                                                    onSelect:[{ "1,2": "red", "3": "orange", "4,5": "green" }]
                                                }} />
                                            </div>
                                            <div className="mtop15p">
                                                <h4 class="bs-header"><b>Give Feedback</b></h4>
                                                <div className="mtop15p mbot15p">
                                                <TextArea name="feedback" placeholder="Comment on the Article or leave your opinion on the Article" lines={5} />
                                                </div>
                                            </div>
                                        <div className="mtop15p">
                                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                                        <ContainerFluid>
                                            <h4 className="bs-header"><div className="mtop15p">
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star-o" size={25} />
                                            </div></h4>
                                        <div style={{ color:'#555'}}>I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to 
                                        a person in this situation so that he can make the most out of his time out from work and get the 
                                        maximum benefit from such a program?</div>
                                        </ContainerFluid>
                                        </Card>
                                        </div>
                                        <div className="mtop15p">
                                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                                        <ContainerFluid>
                                        <h4 className="bs-header"><div className="mtop15p">
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star-o" size={25} />
                                            </div></h4>
                                        <div style={{ color:'#555'}}>I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to 
                                        a person in this situation so that he can make the most out of his time out from work and get the 
                                        maximum benefit from such a program?</div>
                                        </ContainerFluid>
                                        </Card>
                                        </div>
                                        <div className="mtop15p">
                                        <Card className="intro" padding={15} backgroundColor={Colors.light}>
                                        <ContainerFluid>
                                        <h4 className="bs-header"><div className="mtop15p">
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star" size={25} />
                                                <Icon type="FontAwesome" name="fa-star-o" size={25} />
                                            </div></h4>
                                        <div style={{ color:'#555'}}>I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to 
                                        a person in this situation so that he can make the most out of his time out from work and get the 
                                        maximum benefit from such a program?</div>
                                        </ContainerFluid>
                                        </Card>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} xxl={6}>
                                        <div className="mtop15" align="center">
                                            <h3 class="bs-header"><b>Post a Question</b></h3><hr/>
                                        </div>
                                        <div className="mtop15p">
                                            <Button type="warning" label="Recently Asked Questions" size={11} style={{marginRight:"5px"}} />
                                            <Button type="light" label="Answered Questions" size={11} style={{marginRight:"5px"}} />
                                        </div> 
                                        <div className="mtop15p mbot15p">
                                            <Accordian id="AccordianExample" 
                                                data={[{ id:"Item#1", title: <h5 className="bs-header"><b>What are the different courses provided in Harvard University?</b></h5>, 
                                                component:"I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to a person in this situation so that he can make the most out of his time out from work and get the maximum benefit from such a program?"  },
                                                { id:"Item#1", title: <h5 className="bs-header"><b>What are the different courses provided in Harvard University?</b></h5>, 
                                                component:"I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to a person in this situation so that he can make the most out of his time out from work and get the maximum benefit from such a program?"  },
                                                { id:"Item#1", title: <h5 className="bs-header"><b>What are the different courses provided in Harvard University?</b></h5>, 
                                                component:"I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to a person in this situation so that he can make the most out of his time out from work and get the maximum benefit from such a program?"  },
                                                { id:"Item#1", title: <h5 className="bs-header"><b>What are the different courses provided in Harvard University?</b></h5>, 
                                                component:"I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to a person in this situation so that he can make the most out of his time out from work and get the maximum benefit from such a program?"  },
                                                { id:"Item#1", title: <h5 className="bs-header"><b>What are the different courses provided in Harvard University?</b></h5>, 
                                                component:"I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to a person in this situation so that he can make the most out of his time out from work and get the maximum benefit from such a program?"  },
                                                { id:"Item#1", title: <h5 className="bs-header"><b>What are the different courses provided in Harvard University?</b></h5>, 
                                                component:"I will be studying full-time for a 1-year MS in Business Analytics. What advise would you give to a person in this situation so that he can make the most out of his time out from work and get the maximum benefit from such a program?"  }]} 
                                            />
                                        </div>
                                        <div className="mtop15" align="center">
                                            <h5 class="bs-header"><b>Ask any questions, the Author will try to respond to that</b></h5><hr/>
                                        </div>
                                        <div className="mtop15p">
                                            <TextBox name="faq" placeholder="Enter your question" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xl={1} xxl={1}>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    </div>
    </>);
};


const BlogsTemplates = ()=> {
    return(<>
    <ContainerFluid>
        <Row>
            <Col xl={1} xxl={1}></Col>
            <Col xl={8} xxl={8}>
                <div className="mtop15p">
                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                    <Row>
                        <Col xl={3} xxl={3}>
                            <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                            <div className="mtop15p">
                                <Button type="light" label="Subscribe to get more Articles" size={11} style={{opacity:"0.5"}} />
                            </div>
                        </Col>
                        <Col xl={9} xxl={9}>
                            <div>
                                    <h3 class="bs-header"><b>Top 10 Best Universities to join for Masters in United Kingdom</b></h3>
                            </div><hr/>
                            <div className="mtop15p">
                                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Studying for a master's degree in the United Kingdom 
                                offers numerous opportunities for academic excellence and personal growth. Here is a summary of some of the best 
                                universities in the UK to consider for your master's studies:
                                <ul>
                                    <li>University of Oxford</li>
                                    <li>University of Cambridge....</li>
                                </ul>
                                </h5>
                                <div align="end">
                                    <Button type="danger" label="Read More" size={11} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
                </div>
                <div className="mtop15p">
                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                    <Row>
                        <Col xl={3} xxl={3}>
                            <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                            <div className="mtop15p">
                            <Button type="light" label="Subscribe to get more Articles" size={11} style={{opacity:"0.5"}} />
                            </div>
                        </Col>
                        <Col xl={9} xxl={9}>
                            <div>
                                    <h3 class="bs-header"><b>Compare different Universities in USA and which is better to join for Masters</b></h3>
                            </div><hr/>
                            <div className="mtop15p">
                                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Studying for a master's degree in the United Kingdom 
                                offers numerous opportunities for academic excellence and personal growth. Here is a summary of some of the best 
                                universities in the UK to consider for your master's studies:
                                <ul>
                                    <li>University of Oxford</li>
                                    <li>University of Cambridge....</li>
                                </ul>
                                </h5>
                                <div align="end">
                                    <Button type="danger" label="Read More" size={11} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
                </div>
                <div className="mtop15p">
                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                    <Row>
                        <Col xl={3} xxl={3}>
                            <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                            <div className="mtop15p">
                            <Button type="light" label="Subscribe to get more Articles" size={11} style={{opacity:"0.5"}} />
                            </div>
                        </Col>
                        <Col xl={9} xxl={9}>
                            <div>
                                    <h3 class="bs-header"><b>Top 10 Worst Universities with high percentage of Students getting Failed in Exams</b></h3>
                            </div><hr/>
                            <div className="mtop15p">
                                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Studying for a master's degree in the United Kingdom 
                                offers numerous opportunities for academic excellence and personal growth. Here is a summary of some of the best 
                                universities in the UK to consider for your master's studies:
                                <ul>
                                    <li>University of Oxford</li>
                                    <li>University of Cambridge....</li>
                                </ul>
                                </h5>
                                <div align="end">
                                    <Button type="danger" label="Read More" size={11} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
                </div>
                <div className="mtop15p">
                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                    <Row>
                        <Col xl={3} xxl={3}>
                            <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                            <div className="mtop15p">
                            <Button type="light" label="Subscribe to get more Articles" size={11} style={{opacity:"0.5"}} />
                            </div>
                        </Col>
                        <Col xl={9} xxl={9}>
                            <div>
                                    <h3 class="bs-header"><b>Top 10 Best Universities to join for Masters in Canada</b></h3>
                            </div><hr/>
                            <div className="mtop15p">
                                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Studying for a master's degree in the United Kingdom 
                                offers numerous opportunities for academic excellence and personal growth. Here is a summary of some of the best 
                                universities in the UK to consider for your master's studies:
                                <ul>
                                    <li>University of Oxford</li>
                                    <li>University of Cambridge....</li>
                                </ul>
                                </h5>
                                <div align="end">
                                    <Button type="danger" label="Read More" size={11} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
                </div>
                <div className="mtop15p">
                <Card className="intro" padding={15} backgroundColor={Colors.light}>
                    <Row>
                        <Col xl={3} xxl={3}>
                            <img src="./assets/logo/img_card.png" style={{height:"150px", width:"180px"}} />
                            <div className="mtop15p">
                            <Button type="light" label="Subscribe to get more Articles" size={11} style={{opacity:"0.5"}} />
                            </div>
                        </Col>
                        <Col xl={9} xxl={9}>
                            <div>
                                    <h3 class="bs-header"><b>How To get Placed in Top Universities of Australia</b></h3>
                            </div><hr/>
                            <div className="mtop15p">
                                <h5 class="bs-header" style={{color:"black", opacity:".65"}}>Studying for a master's degree in the United Kingdom 
                                offers numerous opportunities for academic excellence and personal growth. Here is a summary of some of the best 
                                universities in the UK to consider for your master's studies:
                                <ul>
                                    <li>University of Oxford</li>
                                    <li>University of Cambridge....</li>
                                </ul>
                                </h5>
                                <div align="end">
                                    <Button type="danger" label="Read More" size={11} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
                </div>
            </Col>
            <Col xl={3} xxl={3}>
                <div className="mtop15p">
                <Card className="intro" padding={15}>
                    <h4 class="bs-header"><b>Checkout Different Newsletters we host</b></h4>
                        <div className="mtop15p" align="center">
                            <Button type="outline-primary" label="Search Newsletters" size={11} style={{marginRight:"5px"}} />
                        </div>
                </Card>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
    </>);
};

const HeaderContent = ()=>{
    return(<>
        <div style={{backgroundColor:"#006EB3", color:"white"}}>
            <ContainerFluid>
                <Row>
                    <Col xl={1} xxl={1}>
                    </Col>
                    <Col xl={7} xxl={7}>
                        <div className="mtop5p mbot5p" align="left">
                            <Icon type="FontAwesome" name="fa-envelope" size={16} /> info@vkAbroadconsultancy.com
                        </div>
                    </Col>
                    <Col xl={4} xxl={4}>
                    <div className="mtop5p mbot5p" align="left">
                        <Icon type="FontAwesome" name="fa-plane" size={20} style={{ marginRight: '10px' }} />
                        <span style={{ marginRight: '10px' }}>USA</span>
                        <span style={{ marginRight: '10px' }}>UK</span>
                        <span style={{ marginRight: '10px' }}>AUS</span>
                        <span style={{ marginRight: '10px' }}>CANADA</span>
                        <span>+ Many More</span>
                    </div>
                    </Col>
                </Row>
            </ContainerFluid>
        </div>
    </>);
};

const BlogsArticles = ()=>{
 return (<>
 <HeaderContent />
 <Header menulinks={HeaderMenu} activeId="BlogsArticles" />
 <div className="mtop15p mbot15p">
    <ContainerFluid>
        <Row>
            <Col xl={3} xxl={3}></Col>
            <Col xl={6} xxl={6}>
                <div className="mtop15p mbot15p" align="center" style={{ position: 'relative' }}>
                    <TextBox name="surname" placeholder="Search Blogs/Articles, Latest Stories etc.." />
                </div>  
                <div className="mtop15p">
                    <Button type="danger" label="Featured Articles" size={11} style={{marginRight:"5px"}} />
                    <Button type="light" label="Recently Published" size={11} style={{marginRight:"5px"}} />
                    <Button type="light" label="Top Rated Blogs" size={11} style={{marginRight:"5px"}} />
                    <Button type="primary" label="Promotions and Events" size={11} style={{marginRight:"25px"}} />
                </div> 
            </Col>
            <Col xl={3} xxl={3}>
                <div className="mtop15p">
                    <h4 class="bs-header"><b>Not know what to Search?</b></h4>
                    <h5 class="bs-header" style={{color:"black", opacity:".65"}}>
                        <ul>
                            <li>Search according to Categories, like: Countries, Universities etc. </li>
                            <li>Search popular hashtags, like: <b>#MastersinUK</b></li>
                            <li>Search Articles based on the Author</li>
                        </ul>
                    </h5>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
    <div className="mtop15p">
    <BlogsTemplates />
    </div>
    <div className="mtop15p">
    <ContainerFluid>
    <Row>
        <Col xl={10} xxl={10}>
            <div className="mtop15p mbot15p">
            <NewslettersTemplate />
            </div>
        </Col>
    </Row>
</ContainerFluid>
    </div><hr/>
        <BlogsExamples />
    </div>
 </>);
};

export default BlogsArticles;