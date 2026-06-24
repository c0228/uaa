import React from 'react';
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Badge, TextBox, Button, Icon } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';

const DiscussionHub = () =>{
 const { lang } = useParams();
 return (<div className="fs22p">
    <Header menulinks={HeaderMenu(lang)} activeId="DiscussionHub" />
    <div style={{ marginLeft:'15px', marginRight:'15px', border:'1px solid #ccc', padding:'15px',
            height: screen.width>1024 && screen.height* 0.74, 
     }}>
        <Row>
            <Col md={4}>
            <div style={{ borderRight:'1px solid #ccc', height: screen.width>1024 && screen.height* 0.70,   }}>
                <div align="center">
                <i>{lang==='hi'?(<span>दूसरे एस्पिरेंट्स के साथ लाइव बातचीत में शामिल हों। बातचीत को ताज़ा और काम का बनाए रखने के लिए, 
                वे 24 घंटे बाद अपने-आप खत्म हो जाती हैं।</span>):(<span>Join live discussions with aspirants. Conversations automatically expire after 
                24 hours to keep discussions fresh and relevant.</span>)}</i>
                </div>
                <div className="mtop5p">
                {["Daily UPSC Discussion Hub","UPSC Study Lounge","UPSC Live Discussion Room","UPSC Daily Debate Hub",
                "UPSC Daily Study Hub",
                "UPSC Aspirants Community","UPSC Current Affairs Circle","UPSC Open Study Forum","UPSC Study Room (24 Hours)",
                "UPSC Discussion Arena"]?.map((t,i)=>{
                    return (<Badge key={i} type="secondary-o" label={<b>#{t}</b>} size="12" style={{ marginRight:'5px' }} />);
                })}
                </div>
            </div>
            </Col>
            <Col md={8}>
            <div  style={{ position:'absolute', bottom:'5%', width:'61%' }}>
                <div class="input-group">
                    <TextBox name="textMessage" placeholder="Type your Text" />
                    <Button type="primary" size={11}>
                        <Icon type="FontAwesome" name="fa-send" size={14} />
                    </Button>
                </div>
            </div>
            </Col>
        </Row>
    </div>
 </div>);
};

export default DiscussionHub;