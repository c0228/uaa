import React from "react";
import { Highlight } from "e-ui-react";

const HELM_PROM_GRAF = `helm install prometheus stable/prometheus
helm install grafana stable/grafana`;

const APP_CONFIG_LOGS  = `apiVersion: v1
kind: ConfigMap
metadata:
  name: fluentd-config
data:
  fluent.conf: |
    <source>
      @type tail
      path /var/log/*.log
      pos_file /var/log/fluentd.log.pos
      tag myapp
    </source>`;

const LogMonitorHelm = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div><h2 className="blog-head"><b>Step 5: Logging and Monitoring</b></h2></div>
    <div className="mtop15p">Use Prometheus and Grafana for monitoring and centralized logging with Fluentd or ELK stack.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Install Prometheus and Grafana using Helm:</b></div>
                <Highlight content={HELM_PROM_GRAF} lang="html" />
            </li>
            <li className="mtop15p">
                <div><b>Configure logs using Fluentd or Elasticsearch</b></div>
                <Highlight content={APP_CONFIG_LOGS} lang="html" />
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Step 6: Managing Deployments with Helm</b></h2></div>
    <div className="mtop15p">Helm simplifies Kubernetes deployments with version control and easy rollbacks.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Create Helm chart:</b></div>
                <Highlight content={`helm create myapp-chart`} lang="html" />
            </li>
            <li className="mtop15p">
                <div><b>Modify <code>values.yaml</code> and deploy:</b></div>
                <Highlight content={`helm install myapp ./myapp-chart`} lang="html" />
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p mbot15p">By following these steps, you can successfully deploy a Spring Boot microservice on Kubernetes 
        with proper scaling, security, and observability. Kubernetes makes it easier to manage microservices in production 
        with minimal downtime and efficient resource utilization.</div>
 </div>);
};

export default LogMonitorHelm;