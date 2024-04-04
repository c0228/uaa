import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Icon } from "e-ui-react";
import FeaturedData from '@StaticData/featured.json';

const FeaturedItem = ({ data }) =>{
 const Items = ({ itemList }) =>{
  const descFix = 245;
  return (<>
    {itemList?.map((list,index)=>{
       return (<div key={index} className="blog-fade" style={{ paddingTop:'15px', paddingBottom: '20px' }}>
        <Link to={process.env.PROJECT_URL+list?.url} style={{ textDecoration:'none' }}>
          <div style={{ fontFamily:'Metropolis', lineHeight:'24px', fontSize:'16px', color:'#000' }}>
            {list?.title}
          </div>
          <div style={{  fontFamily:'Metropolis', lineHeight:'24px', fontSize:'14px', marginTop:'5px', marginBottom:'10px', color:'#777' }}>
            {(list?.desc?.length>descFix)?(list?.desc?.substring(0,descFix)+'...') : (list?.desc)}
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
 return (<div>
    <hr/>
    <div align="center" style={{ fontWeight:'bold', textTransform:'uppercase', letterSpacing:'2px', fontSize:'15px', lineHeight: '28px', paddingTop:'15px' }}>{data.title}</div>
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
  return (<FeaturedItem key={index} data={feature} />);
 })}
  
 </>);
};
