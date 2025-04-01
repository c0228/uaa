import React from "react";

const Challenges = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Challenges in Running Stateful Applications on Kubernetes</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Persistent Storage Management</b></div>
                <div>Stateful applications require storage that survives pod restarts and rescheduling. Kubernetes addresses this 
                    through PVs and PVCs, but ensuring high availability, backup, and disaster recovery is challenging.</div>
            </li>
            <li className="mtop15p">
                <div><b>Data Consistency and Integrity</b></div>
                <div>Ensuring data consistency across distributed stateful workloads, particularly in databases and message queues, 
                    is complex. Issues like split-brain scenarios and consistency across replicas must be managed effectively.</div>
            </li>
            <li className="mtop15p">
                <div><b>High Availability and Scalability</b></div>
                <div>Scaling stateful applications involves not just adding more pods but ensuring that new replicas sync correctly 
                    with existing ones. Databases like MySQL and PostgreSQL require leader-follower configurations, while distributed 
                    databases like Cassandra rely on consistent hashing.</div>
            </li>
            <li className="mtop15p">
                <div><b>Network Dependencies</b></div>
                <div>Stateful applications often require stable networking to facilitate communication between pods. Kubernetes' dynamic 
                    nature can lead to networking challenges, requiring careful DNS and service configuration.</div>
            </li>
            <li className="mtop15p">
                <div><b>Backup and Disaster Recovery</b></div>
                <div>Unlike stateless workloads, stateful applications need robust backup and recovery strategies. Kubernetes does not 
                    provide built-in backup solutions, so external tools like Velero or database-specific backup strategies must be used.</div>
            </li>
            <li className="mtop15p">
                <div><b>Resource Management and Performance Optimization</b></div>
                <div>Stateful applications require optimal CPU and memory allocation to avoid performance bottlenecks. Tuning resource limits 
                    and requests is crucial to prevent pod eviction and ensure stability.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Challenges;