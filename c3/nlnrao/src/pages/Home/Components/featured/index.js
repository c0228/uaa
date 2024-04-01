import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "e-ui-react";
import FeaturedData from '@StaticData/featured.json';

const FeaturedItem = ({ data }) =>{
 const Items = ({ itemList }) =>{
  const descFix = 250;
  return (<>
    {itemList?.map((list,index)=>{
       return (<div key={index} className="blog-fade" style={{ paddingLeft:'15px', paddingRight:'15px', paddingBottom:'15px' }}>
        <Link to={process.env.PROJECT_URL+list?.url} style={{ textDecoration:'none' }}>
          <div style={{ fontFamily:'Metropolis', lineHeight:'24px', fontSize:'14px', color:'#000' }}>
            {list?.title}
          </div>
          <div style={{  fontFamily:'Metropolis', marginTop:'5px', marginBottom:'10px', color:'#888' }}>
            {(list?.desc?.length>descFix)?(list?.desc?.substring(0,descFix)+'...') : (list?.desc)}
          </div>
          <div style={{ color:'#aaa',marginTop:'6px',marginRight:'15px'}}>
            <i className="fa fa-file-text" style={{ marginLeft:'2px', marginRight:'3px'}} aria-hidden="true"></i> 
            {list?.createdOn}
            <span className="pull-right">
                <i className="fa fa-dot-circle-o" style={{ marginRight:'3px' }} aria-hidden="true"></i> 
                {list?.minRead}
            </span>
          </div>
        </Link>
      </div>) 
    })}
</>);
 };
 return (<div>
    <hr/>
    <div align="center" style={{ fontFamily:'AvenisSemiBold', textTransform:'uppercase', letterSpacing:'2px', fontSize:'16px', lineHeight: '28px', paddingTop:'15px' }}>{data.title}</div>
    <hr/>
    <div className="mtop15p">
    <Row>
        <Col xxl={6} xl={6}>
            <Items itemList={data?.list1} />
        </Col>
        <Col xxl={6} xl={6}>
            <Items itemList={data?.list2} />
        </Col>
    </Row>
    </div>
 </div>);
};

export const FeaturedList = ()=>{
 return (<>
 {FeaturedData?.data?.map((feature, index)=>{
  return (<FeaturedItem data={feature} />);
 })}
  
 </>);
};
