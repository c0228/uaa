import React from "react";
import { Row, Col, TextBox, Button, Icon } from "e-ui-react";
import { getNewsListContext } from "@Pages/NewsFeedPage/NewsList/context.js";
import './index.css';

const TitleTopSection = () =>{
 const newsListContext = getNewsListContext();
 const CreateArticleHandler = () =>{
    newsListContext?.setContextData([{
        path: "createArticle.modalStatus",
        value: "open",
        mode: "replace"
    }]);
 };
 return (<div>
    <div style={{ display:'flex', backgroundColor:'#065fc5', padding:'15px', borderBottom:'1px solid #ccc' }}>
        <div style={{ width:'26%'}}>
            {/** */}
            <div className="page-title">
                <div className="title-icon"><i className="fa fa-newspaper-o" style={{ color:'#065fc5' }}></i></div>
                <div>
                    <h1 style={{ color:'#fff' }}>News Feed</h1>
                    <p style={{ color:'#eee' }}>Discover what's happening in your community</p>
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
                <Button type="light" size={11}>
                    <Icon type="FontAwesome" name="fa-filter" color="#065fc5" size={16} />
                </Button>
            </div>
        </div>
        <div style={{ width:'10%'}}>
            <div style={{ paddingTop:'5px', paddingLeft:'8px' }}>
                <Button type="light" size={12}  style={{ paddingLeft:'8px', color:'#065fc5' }} 
                    onClick={()=>CreateArticleHandler()}>
                    <Icon type="FontAwesome" name="fa-plus-circle" color="#065fc5" size={12} style={{ marginRight:'5px' }} />
                    <b>Create an Article</b>
                </Button>
            </div>
        </div>
    </div>

 </div>);
};

export default TitleTopSection;