import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";

const APP_RESPONSE_ENTITY = `@PreAuthorize("hasRole('ADMIN')")
@GetMapping("/admin")
public ResponseEntity<String> adminEndpoint() {
    return ResponseEntity.ok("Admin Access Granted");
}`;

const Authorization = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Authorization in a Decentralized Architecture</b></h2></div>
    <div>Authorization determines what actions authenticated users or services can perform. There 
        are several models to implement authorization in Spring Boot microservices.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Role-Based Access Control (RBAC)</b></h4></div>
                <div>RBAC assigns users to roles that define their permissions.</div>
                <div className="mtop15p"><b>Implementation Steps:</b></div>
                <OrderList data={[(<div>Define roles in the identity provider.</div>),
                    (<div>Extract roles from JWT tokens in Spring Boot.</div>),
                    (<div>Enforce role-based access in Spring Security.</div>)]} />
                <div className="mtop15p"><b>Code Example:</b></div>
                <Highlight content={APP_RESPONSE_ENTITY} lang="java" />
            </li>
            <li className="mtop15p">
                <div><h4><b>Attribute-Based Access Control (ABAC)</b></h4></div>
                <div>ABAC provides fine-grained access control by evaluating attributes such as user roles, resource type, 
                    and request context.</div>
                <div className="mtop15p"><b>Implementation Steps:</b></div>
                <OrderList data={[(<div>Define policies in a Policy Engine (e.g., OPA, Keycloak policies).</div>),
                    (<div>Apply dynamic access control in services.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Service-to-Service Authorization</b></h4></div>
                <div>In microservices, internal services must also authorize communication.</div>
                <OrderList data={[(<div>Use API Gateway for centralized authorization.</div>),
                        (<div>Enforce service-level policies using mTLS and OAuth2 scopes.</div>)]} />
            </li>
        </ol>
    </div>
 </div>);
};

export default Authorization;