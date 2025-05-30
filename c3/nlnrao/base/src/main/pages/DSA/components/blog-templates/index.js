import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from "@MainTemplates/Header/index.js";
import { HeaderMenu } from "@MainConfig/HeaderMenu.js";
import BlogArticleHeader from "@MainComponents/blog-article-header/index.js";

const Blog = ({ metaData, children }) => {
  const contentChildren = React.Children.toArray(children);
  const content = contentChildren.find(child => child.type === Content);
  const rightSide = contentChildren.find(child => child.type === RightSide);

  return (
    <div>
      <Header menulinks={HeaderMenu} activeId="DSA" />
      <ContainerFluid>
        <Row>
          <Col xs={12} xl={8} xxl={8}>
            <div className="mbot60p">
              <BlogArticleHeader metaData={metaData} />
              {content}
            </div>
          </Col>
          <Col xs={12} xl={4} xxl={4}>{rightSide}</Col>
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
