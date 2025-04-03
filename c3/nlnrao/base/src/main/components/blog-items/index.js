import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "e-ui-react";

const BlogItems = ({ itemList }) =>{
    return (<>
      {itemList?.map((list,index)=>{
         return (<div key={index} className="blog-fade" style={{ paddingBottom: '35px' }}>
          <Link to={process.env.PROJECT_MAIN_URL+list?.url} style={{ textDecoration:'none' }}>
            <div style={{ lineHeight:'30px', fontSize:'16px', color:'#222' }}>
              <b>{list?.title}</b>
            </div>
            <div style={{  fontFamily:'Metropolis', lineHeight:'28px', letterSpacing:'0.1px', fontSize:'14px', 
              marginTop:'5px', marginBottom:'10px', color:'#555' }}>
              {(list?.desc?.length>list?.descFix)?(list?.desc?.substring(0,list?.descFix)+'...') : (list?.desc)}
            </div>
            <div style={{ color:'#777',marginTop:'6px',marginRight:'15px'}}>
              <Icon type="FontAwesome" name="fa-file-text" style={{ marginLeft:'2px', marginRight:'5px' }} /> 
              <i>{list?.createdOn}</i>
              <span className="pull-right">
                <Icon type="FontAwesome" name="fa-dot-circle-o" style={{ marginRight:'5px' }} />
                <i>{list?.minRead}</i>
              </span>
            </div>
          </Link>
        </div>) 
      })}
  </>);
};

export default BlogItems;