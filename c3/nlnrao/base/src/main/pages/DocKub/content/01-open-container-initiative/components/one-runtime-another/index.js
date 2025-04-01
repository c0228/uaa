import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const OneRunTimeAnother = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Why Choose One Runtime Over Another?</b></h2></div>
    <div className="table-responsive">
        <table className="table">
        <thead>
            <tr style={{ backgroundColor:'#eee' }}>
                <th><b>Feature</b></th>
                <th><b>runc</b></th>
                <th><b>containerd</b></th>
                <th><b>CRI-O</b></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><b>OCI Compliance</b></td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td><b>Kubernetes Compatibility</b></td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td><b>Docker Dependency</b></td>
                <td>Yes</td>
                <td>Partial</td>
                <td>No</td>
            </tr>
            <tr>
                <td><b>Performance</b></td>
                <td>High</td>
                <td>Moderate</td>
                <td>High</td>
            </tr>
            <tr>
                <td><b>Security</b></td>
                <td>Moderate</td>
                <td>High</td>
                <td>High</td>
            </tr>
            <tr>
                <td><b>Best For</b></td>
                <td>Custom Integrations</td>
                <td>Docker-based setups</td>
                <td>Kubernetes Clusters</td>
            </tr>
        </tbody>
        </table>
    </div>
    <div className="mtop15p"><h4><b>Choosing the Right Runtime</b></h4></div>
    <div>
        <OrderList data={[(<div>Use <code><b>runc</b></code> for <b>low-level, fine-grained control</b> over container execution.</div>),
            (<div>Use <code><b>containerd</b></code> if you need <b>Docker integration</b> or Kubernetes compatibility.</div>),
            (<div>Use <code><b>CRI-O</b></code> if you're running <b>Kubernetes natively</b> and want a <b>lightweight runtime</b>.</div>)]} />
    </div>
 </div>);
};

export default OneRunTimeAnother;