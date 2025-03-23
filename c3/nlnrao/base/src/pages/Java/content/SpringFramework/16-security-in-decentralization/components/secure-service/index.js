import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";

const APP_AUTH_TOKEN = `@RequestHeader("Authorization") String token
Jwt decodedJwt = jwtDecoder.decode(token);`;

const SecureService = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div><h2 className="blog-head"><b>Securing Service Communication</b></h2></div>
    <div>Service-to-service communication must be encrypted and authenticated to prevent unauthorized access.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Using Mutual TLS (mTLS)</b></h4></div>
                <div>mTLS ensures that services authenticate each other.</div>
                <div className="mtop15p"><b>Steps to Implement:</b></div>
                <OrderList data={[(<div>Issue TLS certificates using a service like HashiCorp Vault or Istio CA.</div>),
                    (<div>Configure Spring Boot microservices to use mTLS.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b> JWT-Based Service Communication</b></h4></div>
                <div>JWT tokens can secure inter-service communication by including scopes and roles for validation.</div>
                <div className="mtop15p"><b>Example:</b></div>
                <Highlight content={APP_AUTH_TOKEN} lang="java" />
            </li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p mbot15p">Securing a decentralized Spring Boot architecture requires robust authentication, authorization,
         access control, and secure service communication. By implementing OAuth 2.0, RBAC, API Gateway security, and mTLS, 
         organizations can ensure secure and resilient microservices architectures. Adopting best practices such as zero trust 
         security and continuous monitoring will further enhance system security.<br/><br/>
         Implementing these strategies will help protect your distributed applications from security vulnerabilities while ensuring 
         seamless authentication and authorization processes.</div>
 </div>);
};

export default SecureService;