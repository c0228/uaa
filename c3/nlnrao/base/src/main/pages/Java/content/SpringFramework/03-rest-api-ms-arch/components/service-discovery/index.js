import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from '@MainComponents/blog-index-header/index.js';
import OrderList from '@MainComponents/order-list/index.js';

const APP_SERVER_PROPERTIES = `server.port=8761
spring.application.name=eureka-server
eureka.client.register-with-eureka=false
eureka.client.fetch-registry=false`;

const EUREKA_SERVER_CLASS = `@EnableEurekaServer
@SpringBootApplication
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}`;

const APP_CLIENT_PROPERTIES = `spring.application.name=product-service
server.port=8081
eureka.client.service-url.defaultZone=http://localhost:8761/eureka`;

const EUREKA_CLIENT_CLASS = `@EnableEurekaClient
@SpringBootApplication
public class ProductServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }
}`;

const ServiceDiscovery = () =>{
 return (<div className="lh28p fs16p">
  <div className="mtop15p"><h2 className="blog-head"><b>Service Discovery with Eureka</b></h2></div>

  <div className="mtop15p"><BlogIndexHeader type="h4" index="1" title="Setting Up Eureka Server" /></div>
  <div className="padLeft15p mtop15p">
    <div className="padLeft5p">Create a new Spring Boot project with Eureka Server dependency.</div>
    <div className="padLeft5p mtop15p"><b>Application Properties (Eureka Server)</b></div>
    <div className="padLeft5p mtop15p">
        <Highlight content={APP_SERVER_PROPERTIES} lang="html" />
    </div>
    <div className="padLeft5p mtop15p"><b>Enabling Eureka Server</b></div>
    <div className="padLeft5p mtop15p">
        <Highlight content={EUREKA_SERVER_CLASS} lang="java" />
    </div>
  </div>

  <div className="mtop15p"><BlogIndexHeader type="h4" index="2" title="Registering Microservices with Eureka" /></div>
  <div className="padLeft15p mtop15p">
    <div className="padLeft5p">Add the following properties in <code><b>application.properties</b></code> of each microservice:</div>
    <div className="mtop15p">
        <Highlight content={APP_CLIENT_PROPERTIES} lang="java" />
    </div>
    <div className="padLeft5p mtop15p">Enable Eureka Client in your microservices:</div>
    <div className="mtop15p">
        <Highlight content={EUREKA_CLIENT_CLASS} lang="java" />
    </div>
  </div>
 </div>);
};

export default ServiceDiscovery;