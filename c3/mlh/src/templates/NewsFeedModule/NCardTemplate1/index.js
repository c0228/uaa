import React from "react";
import { Icon } from "e-ui-react";
import NewsPropertyTag from "@Components/NewsFeedModule/NewsPropertytag/index.js";
import AuthorIdentity from "@Components/NewsFeedModule/AuthorIdentity/index.js";
import ArticleCategoryTag from "@Components/NewsFeedModule/ArticleCategoryTag/index.js";
import DateTemplate from "@Components/NewsFeedModule/DateTemplate";
import './index.css';

const NCardTemplate1 = () =>{
 return (<>
  <div className="newsFeedModule-nCardTemplate1-section">
    <div className="newsFeedModule-nCardTemplate1-imgSection">
        <img className="newsFeedModule-nCardTemplate1-articleImg" 
            src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2026/11/20/ac3fe4cb-8602-4f1f-b60f-9d61d454438b_67df5ce5.jpg?itok=4KnS3zD_&v=1795162062" />
        <div className="newsFeedModule-nCardTemplate1-bookmarkSection">
            <div align="center" className="newsFeedModule-nCardTemplate1-bookmarkIconBg">
                <Icon type="FontAwesome" name="fa-bookmark-o" size={14} />
            </div>
        </div>
    </div>
    <div className="newsFeedModule-nCardTemplate1-nichesSection">    
        <div><ArticleCategoryTag category="Community & Society" subCategory="Local Events" /></div>
        <div className="mtop5p">
            <NewsPropertyTag type="article" />
            <NewsPropertyTag type="poll" />
            <NewsPropertyTag type="ideas" />
            <NewsPropertyTag type="social_movements" />
        </div>
        <div className="mtop5p">
            <h4><b>The Future of Local Businesses: Building Stronger Communities</b></h4>
        </div>
        <div className="mtop5p" style={{ color:'#777' }}>
            Discover how local businesses are transforming neighborhoods through innovation, 
             community participation and sustainable growth.
        </div>
        <div className="mtop5p">
            {["LocalIssues", "Elections", "Voting", "Candidates", "Polling", "Result"]?.map((d,i)=>{
                return (<span key={i} style={{ marginRight:'5px', marginBottom:'5px', fontSize:'12px', 
                                    padding:'5px', border:'1px solid #ccc', color:'#777', 
                                backgroundColor:'#eee', borderRadius:'5px' }}>#{d}</span>);
            })}
        </div>
        

        <div style={{ display:'flex', marginTop:'15px' }}>
            <div>

            </div>
            <div style={{ width:'40%', color:'#999', fontSize:'13px', paddingTop:'5px' }}>
                <div style={{
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
}}>
    <b style={{ display: 'flex' }}>
        <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80"
            style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                objectFit: 'cover'
            }}
        />

        <span style={{ marginLeft: '5px' }}>
            <div style={{ color:'#000'  }}>Dr. Aris Thorne</div>
            <div>April 16, 2026</div>
        </span>
    </b>
</div>
                
            </div>
            <div style={{ width:'60%', display:'flex', alignItems:'center' }}>
                <Icon type="FontAwesome" name="fa-thumbs-up" size="13" color="#777" style={{ marginRight:'5px' }} />
                <span style={{ fontSize:'13px', color:'#999', marginRight:'15px' }}>3.5k</span>
                <Icon type="FontAwesome" name="fa-thumbs-down" size="13" color="#777" style={{ marginRight:'5px' }} />
                <span style={{ fontSize:'13px', color:'#999', marginRight:'15px'  }}>0</span>
                <Icon type="FontAwesome" name="fa-comment" size="13" color="#777" style={{ marginRight:'5px' }} />
                <span style={{ fontSize:'13px', color:'#999', marginRight:'15px'  }}>0</span>
                <Icon type="FontAwesome" name="fa-share" size="13" color="#777" style={{ marginRight:'5px' }} />
                <span style={{ fontSize:'13px', color:'#999', marginRight:'15px'  }}>0</span>
                <span style={{ marginLeft:'15px', fontSize:'14px', color:'#999' }}><b>214 Voices</b></span>
            </div>
        </div>
    </div>
  </div>
 </>);
};

export default NCardTemplate1;