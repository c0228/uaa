import React from "react";
import { Card, Accordian } from "e-ui-react";
import Replication from "./components/replication/index.js";
import Partitioning from "./components/partitioning/index.js";
import Sharding from "./components/sharding/index.js";

const DatabaseScaling = () =>{
 
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <Card padding={15}>
        <div align="center" className="mtop10p"><h2 className="blog-head"><b>What Is Database Scaling?</b></h2></div>
        <div className="mtop15p">Database scaling refers to the ability to <b>increase capacity to handle more load</b>, more users, 
        more queries per second (QPS), and larger data volumes without sacrificing latency, consistency, or reliability.</div>
        <div className="mtop15p">
        There are two major paths:
        <ul>
            <li className="mtop5p"><b>Vertical Scaling (Scale-Up):</b> Adding more CPU, RAM, storage to the same node.</li>
            <li className="mtop5p"><b>Horizontal Scaling (Scale-Out):</b> Adding more nodes/servers to distribute the load and data.</li>
        </ul>
        </div>
    </Card>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Vertical Scaling – The Early Stage Optimization</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p"><h4><b>Definition</b></h4></div>
        <div>Vertical scaling is simple: upgrade your machine.<br/> 
        <u><i>Example:</i></u> Move from 4-core, 16GB RAM to 64-core, 512GB RAM.</div>

        <div className="mtop15p"><h4><b>When It Works</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p">Works well for monolith apps or early-stage microservices.</li>
                <li className="mtop5p">No major code changes required.</li>
                <li className="mtop5p">Ideal for read-heavy workloads with low write contention.</li>
            </ul>
        </div>

        <div className="mtop15p"><h4><b>Limitations</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p"><b>Hard Limit Ceiling:</b> There’s only so much hardware can grow.</li>
                <li className="mtop5p"><b>Expensive Scaling:</b> High-performance instances can be very costly.</li>
                <li className="mtop5p"><b>Downtime Risk:</b> Upgrades may require restart or re-deployment.</li>
                <li className="mtop5p"><b>Single Point of Failure (SPOF):</b> Vertical scaling typically means 
                    one machine = one failure domain.</li>
            </ul>
        </div>

        <div className="mtop15p"><h4><b>Use Case Examples</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p">Postgres/MySQL with SSDs + large RAM for cache hit rates.</li>
                <li className="mtop5p">MongoDB standalone with WiredTiger and large memory-mapped files.</li>
                <li className="mtop5p">Redis instance upgraded for larger in-memory cache.</li>
            </ul>
        </div>
    </div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Horizontal Scaling – Designing for Elastic Growth</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p"><h4><b>Definition</b></h4></div>
        <div className="mtop15p">
            <div>Horizontal scaling distributes data and/or requests across multiple machines, ensuring the system can scale 
            linearly with the traffic. This includes:</div>
            <div>
                <ul>
                    <li className="mtop5p"><b>Data Replication</b></li>
                    <li className="mtop5p"><b>Data Partitioning</b></li>
                    <li className="mtop5p"><b>Data Sharding</b></li>
                </ul>
            </div>
        </div>
    </div>
    <Accordian id="horizontalScaling" 
        data={[{ id:"replication", title: (<h4><b>1. Data Replication</b></h4>), component: <Replication />  },
            { id:"partitioning", title: (<h4><b>2. Data Partitioning</b></h4>), component: <Partitioning /> },
            { id:"sharding", title: (<h4><b>3. Data Sharding</b></h4>), component: <Sharding />  }]} />
    
 </div>);
};

export default DatabaseScaling;