import Raect from "react";
import { useParams } from 'react-router-dom';
import { Breadcrumb, Colors, ContainerFluid, Row, Col } from 'e-ui-react';
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
// import Terminologies from '@Components/terminologies-list/index.js';
// import TerminologiesData from "@StaticData/system-design/terminologies.json";

const SDTerminologies = () =>{
 const { input } = useParams();

 const BlogTopHeader = ({ title, date }) =>{
   return (<div className="mtop15p mbot15p">
     <Breadcrumb backgroundColor={Colors.light} 
         data={[{ label:'Web 3.0', url:process.env.PROJECT_MAIN_URL+'tech/web3.0/overview' },
             { label: title, url:'#' }]} />
     <BlogArticleHeader title={title} date={date} />
   </div>)
 };

 return (<div>
  <Header menulinks={HeaderMenu} activeId="Blockchain" />
  <ContainerFluid>
   <Row>
    <Col xl={8} xxl={8}>
    </Col>
    <Col xl={4} xxl={4}>
      {/* <Terminologies data={TerminologiesData} /> */}
    </Col>
   </Row>
  </ContainerFluid>
  </div>);
};

export default SDTerminologies;