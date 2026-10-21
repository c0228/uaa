import React from "react";
import { Row, Col, TextBox, Button, Icon } from "e-ui-react";
import './index.css';

const TitleTopSection = () =>{
 return (<div>
    <div style={{ display:'flex', backgroundColor:'#f7f7f7', padding:'15px', borderBottom:'1px solid #ccc' }}>
        <div style={{ width:'26%'}}>
            {/** */}
            <div className="page-title">
                <div className="title-icon"><i className="fa fa-newspaper-o"></i></div>
                <div>
                    <h1>News Feed</h1>
                    <p>Discover what's happening in your community</p>
                </div>
            </div>
        {/** */}
        </div>
        <div style={{ width:'60%'}}>
            <div style={{ paddingTop:'5px' }}><TextBox name="newsfeed_search" 
                placeholder="Search What's happening around you.." /></div>
        </div>
        <div style={{ width:'3%'}}>
            <div style={{ paddingTop:'5px', paddingLeft:'8px' }}>
                <Button type="outline-secondary" size={11}>
                    <Icon type="FontAwesome" name="fa-filter" size={16} />
                </Button>
            </div>
        </div>
        <div style={{ width:'10%'}}>
            <div style={{ paddingTop:'5px', paddingLeft:'8px' }}>
                <Button type="dark" size={12}  style={{ paddingLeft:'8px' }}>
                    <Icon type="FontAwesome" name="fa-plus-circle" size={12} style={{ marginRight:'5px' }} />
                    <b>Create News</b>
                </Button>
            </div>
        </div>
    </div>

 </div>);
};

export default TitleTopSection;