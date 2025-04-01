import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
  <div><i>Microservices architecture has revolutionized modern application development by breaking down monolithic 
    applications into independent services. Java, combined with the Spring stack, provides a robust framework for 
    building scalable and maintainable microservices. In this blog, we will explore the essential concepts, components, 
    and implementation details required to build a RESTful API using Java and Spring Boot.</i></div>

  <div className="mtop15p"><h2 className="blog-head"><b>Why Microservices?</b></h2></div>
  <div className="mtop15p">Microservices provide the following benefits:</div>
  <div>
    <OrderList data={[(<div><b>Scalability:</b> Independent services can be scaled separately based on demand.</div>),
        (<div><b>Resilience:</b> Failure in one microservice does not impact the entire system.</div>),
        (<div><b>Flexibility:</b> Different technologies and databases can be used for different services.</div>),
        (<div><b>Continuous Deployment:</b> Enables independent deployment of services.</div>),
        (<div><b>Improved Maintainability:</b> Codebases are smaller and easier to manage.</div>)]} />
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Core Technologies Used</b></h2></div>
  <div className="mtop15p">
    <OrderList data={[(<div><b>Spring Boot –</b> Simplifies microservice development.</div>),
            (<div><b>Spring Cloud –</b> Provides tools for microservices orchestration.</div>),
            (<div><b>Spring Security –</b> Enables authentication and authorization.</div>),
            (<div><b>Spring Data JPA –</b> Simplifies database interactions.</div>),
            (<div><b>Eureka (Netflix OSS) –</b> Service discovery.</div>),
            (<div><b>Spring Cloud Gateway –</b> API Gateway for routing and security.</div>),
            (<div><b>OpenFeign –</b> Inter-service communication.</div>),
            (<div><b>Zipkin/Sleuth –</b> Distributed tracing.</div>),
            (<div><b>Docker/Kubernetes –</b> Containerization and orchestration.</div>)]} />
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Designing Microservices</b></h2></div>
  <div className="mtop15p padLeft15p">
    <div>A well-structured microservices system includes:</div>
    <div>
        <OrderList data={[(<div><b>API Gateway:</b> Central entry point for clients.</div>),
            (<div><b>Authentication Service:</b> Handles user authentication and authorization.</div>),
            (<div><b>Product Service:</b> Manages product-related operations.</div>),
            (<div><b>Order Service:</b> Handles order placements and processing.</div>),
            (<div><b>Payment Service:</b> Manages payments and transactions.</div>),
            (<div><b>Notification Service:</b> Sends notifications to users.</div>)]} />
    </div>
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Database Design</b></h2></div>
  <div className="mtop15p padLeft15p">
    <div>Each microservice should have its own database to ensure loose coupling. For example:</div>
    <div>
        <OrderList data={[(<div><code><b>ProductService</b></code> - MySQL</div>),
            (<div><code><b>OrderService </b></code> - PostgreSQL</div>),
            (<div><code><b>PaymentService</b></code> - MongoDB</div>)]} />
    </div>
  </div>
 </div>);
};

export default Introduction;