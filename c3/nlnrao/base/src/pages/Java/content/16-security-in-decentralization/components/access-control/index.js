import React from "react";
import { Highlight } from "e-ui-react";

const APP_API_GATEWAY = `spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**
          filters:
            - AuthenticationFilter`;

const AccessControl = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Access Control Mechanisms</b></h2></div>
    <div>Access control ensures that users and services access only the necessary resources.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>API Gateway for Centralized Enforcement</b></div>
                <div>An API Gateway, such as Spring Cloud Gateway, helps enforce access control policies 
                    before requests reach microservices.</div>
                <div className="mtop15p"><b>Example Configuration:</b></div>
                <Highlight content={APP_API_GATEWAY} lang="html" />
            </li>
            <li className="mtop15p">
                <div><b>Service Mesh for Fine-Grained Control</b></div>
                <div>A service mesh (e.g., Istio) enables fine-grained access control through mTLS, 
                    authorization policies, and secure service communication.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default AccessControl;