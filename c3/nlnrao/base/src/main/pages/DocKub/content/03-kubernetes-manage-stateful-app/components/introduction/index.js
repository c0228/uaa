import React from "react";
import OrderList from "@Components/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Kubernetes has become the de facto standard for container orchestration, allowing organizations to deploy, scale, 
        and manage applications efficiently. While Kubernetes excels in managing stateless applications, running stateful 
        workloads like databases (MySQL, PostgreSQL), message queues (Kafka, RabbitMQ), and distributed storage systems 
        (Cassandra, MongoDB) presents unique challenges. This blog explores how Kubernetes manages stateful applications, 
        the associated challenges, and best practices for running stateful workloads effectively.</i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Understanding Stateful Applications in Kubernetes</b></h2></div>
    <div>Unlike stateless applications, which do not store persistent data and can be replaced easily, stateful applications 
        require stable identities, persistent storage, and ordered deployments. Kubernetes provides specialized constructs to 
        support stateful workloads, including:</div>
    <OrderList data={[(<div><b>StatefulSets:</b> A Kubernetes resource designed specifically for managing stateful applications.</div>),
        (<div><b>Persistent Volumes (PVs) and Persistent Volume Claims (PVCs):</b> Storage abstractions that allow applications to 
            persist data beyond pod lifecycles.</div>),
        (<div><b>Operators and Helm Charts:</b> Automation tools that simplify the deployment and management of complex stateful 
        applications.</div>)]} />
    <div className="mtop15p"><h4><b>Key Features of StatefulSets</b></h4></div>
    <div>StatefulSets ensure the following:</div>
    <OrderList data={[(<div><b>Stable network identities:</b> Each pod gets a stable DNS name (e.g., 
        <code><b>mysql-0</b></code>, <code><b>mysql-1</b></code>).</div>),
        (<div><b>Persistent storage:</b> Each pod maintains a dedicated volume, ensuring data persistence.</div>),
        (<div><b>Ordered deployment and scaling:</b> Pods are started, updated, and deleted in a specific order to 
        maintain consistency.</div>),
        (<div><b>Graceful pod termination and recreation:</b> Ensures that application data is preserved during restarts.</div>)]} />
 </div>);
};

export default Introduction;