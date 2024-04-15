import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "e-ui-react";

const BlogItems = ({ itemList }) =>{
    return (<>
      {itemList?.map((list,index)=>{
         return (<div key={index} className="blog-fade" style={{ paddingTop:'15px', paddingBottom: '20px' }}>
          <Link to={process.env.PROJECT_URL+list?.url} style={{ textDecoration:'none' }}>
            <div style={{ fontFamily:'Metropolis', lineHeight:'24px', fontSize:'16px', color:'#000' }}>
              {list?.title}
            </div>
            <div style={{  fontFamily:'Metropolis', lineHeight:'24px', fontSize:'14px', marginTop:'5px', marginBottom:'10px', color:'#777' }}>
              {(list?.desc?.length>list?.descFix)?(list?.desc?.substring(0,list?.descFix)+'...') : (list?.desc)}
            </div>
            <div style={{ color:'#aaa',marginTop:'6px',marginRight:'15px'}}>
              <Icon type="FontAwesome" name="fa-file-text" style={{ marginLeft:'2px', marginRight:'3px' }} /> 
              {list?.createdOn}
              <span className="pull-right">
                <Icon type="FontAwesome" name="fa-dot-circle-o" style={{ marginRight:'3px' }} />
                  {list?.minRead}
              </span>
            </div>
          </Link>
        </div>) 
      })}
  </>);
};

export default BlogItems;