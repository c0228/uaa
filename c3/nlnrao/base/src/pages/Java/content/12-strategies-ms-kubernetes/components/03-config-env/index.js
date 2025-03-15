import React from "react";
import { Highlight } from "e-ui-react";

const API_CONFIG_MAP = `apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  DATABASE_URL: "jdbc:mysql://mysql-service:3306/mydb"`;

const API_CONFIG_SECRET = `apiVersion: v1
kind: Secret
metadata:
  name: myapp-secret
type: Opaque
data:
  DB_PASSWORD: bXlwYXNzd29yZA==  # Base64 encoded password`;

const ConfigEnv = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Step 3: Configuring Environment Variables and Secrets</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p">Use ConfigMaps and Secrets to manage sensitive data and environment-specific configurations.</div>
        <div>
            <ol>
                <li className="mtop15p">
                    <div><b>ConfigMap (configmap.yaml)</b></div>
                    <Highlight content={API_CONFIG_MAP} lang="html" />
                    <div>Appy it:</div>
                    <Highlight content={`kubectl apply -f configmap.yaml`} lang="html" />
                </li>
                <li className="mtop15p">
                    <div><b>Secret (secret.yaml)</b></div>
                    <Highlight content={API_CONFIG_SECRET} lang="html" />
                    <div>Appy it:</div>
                    <Highlight content={`kubectl apply -f secret.yaml`} lang="html" />
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default ConfigEnv;