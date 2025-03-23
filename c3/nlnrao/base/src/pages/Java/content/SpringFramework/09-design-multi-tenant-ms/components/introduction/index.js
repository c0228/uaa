import React from "react";
import OrderList from "@Components/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <OrderList data={[(<div><i>The evolution of cloud computing and SaaS applications has increased the demand for multi-tenant architectures.</i></div>),
        (<div>Multi-tenancy allows a single application to serve multiple customers (tenants) efficiently while maintaining data isolation and scalability.</div>),
        (<div>In this blog, we will explore multi-tenant microservices, their architectural patterns, and how to implement them using Spring Boot.</div>)]} />
    
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Understanding Multi-Tenancy in Microservices</b></h2></div>
    
    <div className="mtop15p"><h4><b>What is Multi-Tenancy?</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div>Multi-tenancy is an architectural approach where a single instance of an application serves multiple 
            customers (tenants).</div>),
            (<div>Each tenant can have its own configuration, data, and access control policies.</div>)]} />
    </div>

    <div className="mtop15p"><h4><b>Types of Multi-Tenancy Models</b></h4></div>
    <div className="mtop15p mbot15p">
        <OrderList data={[(<div><b>Database-per-Tenant:</b> Each tenant gets a separate database.</div>),
            (<div><b>Schema-per-Tenant:</b> A shared database with isolated schemas for each tenant.</div>),
            (<div><b>Shared Schema with Tenant Identifier:</b> A single database where data is distinguished 
            using a tenant column.</div>)]} />
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Choosing the Right Multi-Tenancy Strategy</b></h2></div>
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <th><b>Strategy</b></th>
                    <th><b>Pros</b></th>
                    <th><b>Cons</b></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Database-per-Tenant</b></td>
                    <td>Strong isolation, security</td>
                    <td>High overhead, complex migrations</td>
                </tr>
                <tr>
                    <td><b>Schema-per-Tenant</b></td>
                    <td>Better balance of isolation & performance</td>
                    <td>Harder schema updates</td>
                </tr>
                <tr>
                    <td><b>Shared Schema</b></td>
                    <td>Efficient, easy scaling</td>
                    <td>Risk of data leakage, complex filtering</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>The choice depends on scalability, security, and maintenance costs.</div>
 </div>);
};

export default Introduction;