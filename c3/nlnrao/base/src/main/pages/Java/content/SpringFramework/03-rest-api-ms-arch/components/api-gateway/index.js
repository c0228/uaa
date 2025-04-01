import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from '@MainComponents/blog-index-header/index.js';
import OrderList from '@MainComponents/order-list/index.js';

const APP_YAML_FILE = `spring:
  cloud:
    gateway:
      routes:
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/products/**`;

const APP_GATEWAY_FILE = `@EnableEurekaClient
@SpringBootApplication
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}`;

const APIGateway = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>API Gateway with Spring Cloud Gateway</b></h2></div>

    <div className="mtop15p"><BlogIndexHeader type="h4" index="1" title="Setting Up the Gateway" /></div>
    <div className="padLeft15p">
        <div className="mtop15p">Add the following dependencies:</div>
        <div className="mtop15p">
            <OrderList data={[(<div>Spring Cloud Gateway</div>),
                        (<div>Eureka Client</div>)]} />
        </div>
        <div className="padLeft5p"><b>Configuring Routes</b></div>
        <div>
            <Highlight content={APP_YAML_FILE} lang="json" />
        </div>
        <div className="mtop15p padLeft5p">Enable API Gateway:</div>
        <div>
            <Highlight content={APP_GATEWAY_FILE} lang="java" />
        </div>
    </div>


 </div>);
};

export default APIGateway;