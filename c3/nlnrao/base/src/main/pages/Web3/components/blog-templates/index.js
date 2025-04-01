import React from "react";
import { ContainerFluid, Row, Col, Badge } from "e-ui-react";
import Header from "@Templates/Header/index.js";
import { HeaderMenu } from "@Config/HeaderMenu.js";
import BlogArticleHeader from "@Components/blog-article-header/index.js";
import Terminologies from '@Components/terminologies-list/index.js';
import Routes from "@Pages/Web3/component.routes.json";

const Blog = ({ metaData, children }) => {
  const contentChildren = React.Children.toArray(children);
  const content = contentChildren.find(child => child.type === Content);
  const rightSide = contentChildren.find(child => child.type === RightSide);

  return (
    <div>
      <Header menulinks={HeaderMenu} activeId="Blockchain" />
      <ContainerFluid>
        <Row>
          <Col xs={12} xl={8} xxl={8}>
            <div className="mbot60p">
              <BlogArticleHeader metaData={metaData} />
              {content}
            </div>
          </Col>
          <Col xs={12} xl={4} xxl={4}>
          {rightSide}
          <Terminologies title="Terminologies" prefix="tech/web3.0/terminologies/" data={Routes?.urls} />
          {metaData?.keywords?.map((keyword)=>{
            return <Badge type="secondary-lgt" label={keyword} size="12" 
              style={{ fontFamily: 'Metropolis', marginRight:'5px', paddingTop: '6px', paddingBottom: '6px', 
                marginBottom: '5px'  }} />
          })}
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
};

const Content = ({ children }) => {
  return <>{children}</>;
};

const RightSide = ({ children }) => {
  return <>{children}</>;
};

export { Blog, Content, RightSide };
