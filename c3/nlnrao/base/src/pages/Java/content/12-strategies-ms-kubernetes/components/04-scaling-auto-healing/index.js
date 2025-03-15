import React from "react";
import { Highlight } from "e-ui-react";

const HORI_POD_AUTOSCALER = `apiVersion: autoscaling/v2beta2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50`;

const ScalingAutoHealing = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="mtop15p"><b>Step 4: Scaling and Auto-healing</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p">Enable auto-scaling and self-healing features in Kubernetes.</div>
        <div>
            <ol>
                <li className="mtop15p">
                    <div><b>Horizontal Pod Autoscaler (hpa.yaml)</b></div>
                    <Highlight content={HORI_POD_AUTOSCALER} lang="html" />
                </li>
                <li className="mtop15p">
                    <div>Apply it:</div>
                    <Highlight content={`kubectl apply -f hpa.yaml`} lang="html" />
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default ScalingAutoHealing;