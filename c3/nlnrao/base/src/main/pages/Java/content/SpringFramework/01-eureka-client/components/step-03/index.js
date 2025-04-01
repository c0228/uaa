import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const Ribbon_Dependency = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>`;

const Ribbon_ClientApp = `@Bean
@LoadBalanced
public RestTemplate restTemplate() {
    return new RestTemplate();
}`;

const Ribbon_ServiceCall = `String response = restTemplate.getForObject("http://eureka-client/", String.class);`;

const Step03 = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Step 3: Implementing Load Balancing with Ribbon</b></h2></div>
    <div className="mtop15p">Spring Cloud provides Ribbon for client-side load balancing across service instances.</div>
    <div className="padLeft15p">
        <div className="mtop15p"><h4><b>3.1 Add Load Balancer Dependency</b></h4></div>
        <div className="mtop15p">
            <Highlight content={Ribbon_Dependency} lang="html" />
        </div>
        <div align="center" className="mtop15p"><b>Maven (pom.xml)</b></div>

        <div className="mtop15p"><h4><b>3.2 Configure RestTemplate with Load Balancer</b></h4></div>
        <div className="mtop15p"><b>Modify <code><b>EurekaClientApplication.java</b></code>:</b></div>
        <div className="mtop15p">
            <Highlight content={Ribbon_ClientApp} lang="java" />
        </div>
        <div className="mtop15p">To make a service-to-service call:</div>
        <div className="mtop15p">
            <Highlight content={Ribbon_ServiceCall} lang="java" />
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Step 4: Best Practices</b></h2></div>
    <div className="padLeft15p">
        <div className="mtop15p">
            <OrderList data={[(<div>Use <b>Spring Cloud Config</b> for centralized configuration management.</div>),
                (<div>Implement <b>circuit breakers</b> using Resilience4J for fault tolerance.</div>),
                (<div>Secure Eureka with <b>Spring Security</b>.</div>),
                (<div>Deploy <b>Eureka in a clustered setup</b> for high availability.</div>)]} />
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="padLeft15p mbot15p">
        This guide covered the essential steps to set up a Eureka Server, register microservices as Eureka Clients, 
        and enable service discovery with load balancing. Eureka plays a crucial role in building scalable, resilient 
        microservices architectures. To further enhance your setup, explore Spring Cloud Gateway or Zuul for API Gateway 
        functionalities.
    </div>

 </div>);
};

export default Step03;