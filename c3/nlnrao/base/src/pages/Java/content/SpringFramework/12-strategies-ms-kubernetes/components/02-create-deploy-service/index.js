import React from 'react';
import { Highlight } from 'e-ui-react';

const APP_DEPLOY_YML = `apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
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
        image: myregistry/myapp:latest
        ports:
        - containerPort: 8080`;

const APP_SERVICE_YML = `apiVersion: v1
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

const APP_APPLY_CONFIG = `kubectl apply -f deployment.yaml
kubectl apply -f service.yaml`;

const CreateDeployService = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Step 2: Creating Kubernetes Deployment and Service</b></h2></div>
    <div className="padLeft5p">
    <div className="mtop15p">Once the application is containerized, you need to define Kubernetes resources.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Deployment YAML (deployment.yaml)</b></div>
                <Highlight content={APP_DEPLOY_YML} lang="html" />
            </li>
            <li className="mtop15p">
                <div><b>Service YAML (service.yaml)</b></div>
                <Highlight content={APP_SERVICE_YML} lang="html" />
            </li>
            <li className="mtop15p">
                <div><b>Apply the configurations:</b></div>
                <Highlight content={APP_APPLY_CONFIG} lang="html" />
            </li>
        </ol>
    </div>
    </div>
 </div>);
};

export default CreateDeployService;