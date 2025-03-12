import React from "react";
import { Highlight } from "e-ui-react";

const APP_ENV_YML = `env:
  - name: SPRING_DATASOURCE_URL
    value: "jdbc:mysql://mysql-service:3306/mydb"`;

const APP_CONFIG_YML = `apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
  namespace: default
  labels:
    app: myapp
  data:
    application.properties: |
      server.port=8080`;

const HEALTH_CHECK_YML = `livenessProbe:
  httpGet:
    path: /actuator/health
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10`;

const IntegrateKubernetes = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
  <div align="center" className="mtop15p"><h2 className="blog-head"><b>Integrating Kubernetes with Spring Boot Features</b></h2></div>

  <div className="mtop15p"><h4><b>Configuring Environment Variables</b></h4></div>
  <div>Kubernetes allows environment variables to be injected into the Spring Boot application.</div>
  <div><Highlight content={APP_ENV_YML} lang="html" /></div>

  <div className="mtop15p"><h4><b>Using Kubernetes ConfigMaps</b></h4></div>
  <div>A <b>ConfigMap</b> allows you to externalize configuration.</div>
  <div><Highlight content={APP_CONFIG_YML} lang="html" /></div>

  <div className="mtop15p"><h4><b>Health Checks with Kubernetes Readiness and Liveness Probes</b></h4></div>
  <div>Define probes to ensure the application is running correctly.</div>
  <div><Highlight content={HEALTH_CHECK_YML} lang="html" /></div>

  <div align="center" className="mtop15p"><h2 className="blog-head"><b>Scaling and Load Balancing Java Microservices</b></h2></div>
  <div className="mtop15p"><h4><b>Scaling with Replicas</b></h4></div>
  <div><Highlight content={`kubectl scale deployment myapp-deployment --replicas=5`} lang="html" /></div>
  <div className="mtop15p"><b>Using Kubernetes Horizontal Pod Autoscaler (HPA)</b></div>
  <div>
    <Highlight content={`kubectl autoscale deployment myapp-deployment --cpu-percent=50 --min=2 --max=10`} lang="html" />
  </div>

  <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
  <div className="mtop15p mbot15p">
  By leveraging <b>Docker</b>, we ensure that Java microservices are packaged in portable containers, eliminating 
  environment-related issues. <b>Kubernetes</b> then orchestrates these containers, providing high availability, auto-scaling, and 
  efficient resource management.<br/><br/>
  Using these technologies, you can deploy <b>resilient</b>, <b>scalable</b>, and <b>highly available</b> microservices with 
  <b>Spring Boot</b> in a distributed environment.
  </div>
 </div>);
};

export default IntegrateKubernetes;