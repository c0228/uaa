import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const SECURITY_FILTER_CHAIN = `@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.oauth2Login()
            .and()
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated());
        return http.build();
    }
}`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>In modern cloud-native applications, decentralized architectures—such as microservices and distributed systems—have 
        gained immense popularity due to their scalability, modularity, and resilience. However, securing these architectures is 
        challenging as multiple independent services must authenticate, authorize users, and securely communicate without a central 
        control point. This blog explores how to implement security in a decentralized Spring Boot architecture, covering 
        authentication, authorization, access control, and service communication protection.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>Authentication in Decentralized Systems</b></h2></div>
    <div className="mtop15p">Authentication is the process of verifying the identity of users or services. In a decentralized Spring 
        Boot architecture, authentication mechanisms should be robust and scalable.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Using OAuth 2.0 and OpenID Connect</b></div>
                <div>OAuth 2.0 and OpenID Connect (OIDC) are widely used for authentication in distributed systems. The most common setup 
                    involves using an Identity Provider (IdP) like Keycloak, Okta, or Auth0.</div>
                <div className="mtop15p"><b>Implementation Steps:</b></div>
                <OrderList data={[(<div>Configure an authorization server (e.g., Keycloak) to issue JWT access tokens.</div>),
                    (<div>Spring Boot applications authenticate users by validating tokens.</div>),
                    (<div>Use Spring Security to integrate authentication with JWT token validation.</div>)]} />
                <div className="mtop15p"><b>Code Example:</b></div>
                <Highlight content={SECURITY_FILTER_CHAIN} lang="java" />
            </li>
            <li className="mtop15p">
                <div><b>Implementing Federated Identity Management</b></div>
                <div>Federated authentication allows users to log in using external identity providers such as Google, GitHub, or 
                    Azure AD. This approach eliminates the need for separate credentials for each service.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Introduction;