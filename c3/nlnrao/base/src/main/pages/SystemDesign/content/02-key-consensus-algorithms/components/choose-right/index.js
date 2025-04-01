import React from "react";

const ChooseRight = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Choosing the Right Consensus Algorithm</b></h2></div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Algorithm</b></td>
                        <td><b>Pros</b></td>
                        <td><b>Cons</b></td>
                        <td><b>Use Cases</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Paxos</b></td>
                        <td>Strong consistency, fault-tolerant</td>
                        <td>High latency, complex</td>
                        <td>Distributed databases, state machine replication</td>
                    </tr>
                    <tr>
                        <td><b>Multi-Paxos</b></td>
                        <td>Reduced latency, stable leader</td>
                        <td>Leader failure overhead</td>
                        <td>Google Spanner, Chubby</td>
                    </tr>
                    <tr>
                        <td><b>Raft</b></td>
                        <td>Easy to implement, understandable</td>
                        <td>Leader elections cause downtime</td>
                        <td>etcd, Consul, Kubernetes control plane</td>
                    </tr>
                    <tr>
                        <td><b>Zab</b></td>
                        <td>High availability, sequential consistency</td>
                        <td>Leader bottleneck</td>
                        <td>ZooKeeper, Kafka, Hadoop coordination</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="mtop15p"><h2 className="blog-head"><b>Challenges in Large-Scale Deployments</b></h2></div>
        <div>
            <ol>
                <li className="mtop15p">
                <b>Network Latency:</b> Consensus algorithms require multiple message exchanges, which increase delays in 
                large-scale networks.
                </li>
                <li className="mtop15p">
                <b>Leader Failures:</b> In leader-based algorithms like Raft and Multi-Paxos, leader failures cause temporary 
                unavailability.
                </li>
                <li className="mtop15p">
                <b>Scalability:</b> Paxos-based algorithms struggle with thousands of nodes due to message complexity.
                </li>
                <li className="mtop15p">
                <b>Partition Tolerance:</b> Maintaining strong consistency in the presence of network partitions is challenging.
                </li>
                <li className="mtop15p">
                <b>State Management:</b> Keeping logs and snapshots consistent across nodes increases storage and memory overhead.
                </li>
            </ol>
        </div>
 </div>);
};

export default ChooseRight;