import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";

const KUBER_DEPLOY_YML =   `apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp
          image: myapp:latest
          ports:
            - containerPort: 8080`;

const KUBER_SERVICE_YML = `apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer`;

const ManageMS = () =>{
 return (<div className="lh28p fs16p mtop15p">
  <div align="center"><h2 className="blog-head"><b>Managing Microservices with Kubernetes</b></h2></div>
  <div className="mtop15p"><h4><b>What is Kubernetes?</b></h4></div>
  <div className="mtop15p">Kubernetes (K8s) is an open-source container orchestration platform 
    that automates deployment, scaling, and management of containerized applications.</div>
  <div className="mtop15p"><h4><b>Benefits of Kubernetes for Java Microservices:</b></h4></div>
  <div className="mtop15p">
    <OrderList data={[(<div><b>Load Balancing:</b> Distributes traffic across containers.</div>),
            (<div><b>Auto-scaling:</b> Dynamically scales services.</div>),
            (<div><b>Self-healing:</b> Restarts failed containers automatically.</div>),
            (<div><b>Service Discovery:</b> Simplifies inter-service communication.</div>)]} />
  </div>
  <div className="mtop15p"><h4><b>Deploying a Spring Boot Microservice to Kubernetes</b></h4></div>
  <div className="mtop15p"><b>Step 1: Create a Kubernetes Deployment YAML</b></div>
  <div><Highlight content={KUBER_DEPLOY_YML} lang="html" /></div>
  <div className="mtop15p"><b>Step 2: Create a Service YAML</b></div>
  <div><Highlight content={KUBER_SERVICE_YML} lang="html" /></div>
  <div className="mtop15p"><b>Step 3: Deploy to Kubernetes</b></div>
  <div>
    <ol>
        <li>
            <div>1. Apply the deployment:</div>
            <Highlight content={`kubectl apply -f deployment.yaml`} lang="html" />
        </li>
        <li>
            <div>2. Apply the service:</div>
            <Highlight content={`kubectl apply -f service.yaml`} lang="html" />
        </li>
        <li>
            <div>3. Verify the running pods:</div>
            <Highlight content={`kubectl get pods`} lang="html" />
        </li>
    </ol>
  </div>
 </div>);
};

export default ManageMS;