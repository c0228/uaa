import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div><i>At the beginning of most software journeys, our database story starts simple — a single instance, a 
        normalized schema, and queries optimized with a few indexes. This works well.<br/>
        Soon, users grow, product features expand, analytics explode, and SLAs tighten.</i> 
        <div>
            <Card padding={10}><b>Service Level Agreement (SLA)</b> - a formal 
        contract between a service provider and a client that defines: <u><i>Availability</i></u> (e.g., 99.99% uptime), 
        <u><i>Latency</i></u> (e.g., API must respond within 200ms), <u><i>Error Rate</i></u> (e.g., less than 0.1% failed 
        requests), <u><i>Recovery Time</i></u> (e.g., fix within 30 minutes of outage)</Card>
        </div>
        <i>Suddenly, the elegant little 
        Postgres instance that once ran on your laptop is struggling under the weight of millions of queries, terabytes 
        of writes, and concurrency bursts that bring production to its knees. You're left asking:
        <ul>
            <li className="mtop5p">Should I just increase the instance size?</li>
            <li className="mtop5p">Is it time to shard?</li>
            <li className="mtop5p">How will I maintain consistency across nodes?</li>
            <li className="mtop5p">How do global players like Meta and Amazon design this layer?</li>
        </ul>
        <div className="mtop15p">We'll look at not just the how of scaling databases, but the <i>why</i>, the <i>when</i> 
        and the <i>trade-offs</i> — across <b>vertical and horizontal scaling</b>, <b>sharding</b>, <b>chunk migrations</b>, 
        <b>query routing</b> and more.</div>
        <div className="mtop15p">If you're designing systems to handle <b>one user to a billion</b>, this is your \
        deep-dive guide.</div>
    </i></div>

    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p">In the lifecycle of any successful application, the journey from a single-user MVP (Minimum Viable Product) 
        to a billion-user ecosystem brings forward architectural evolution challenges. One of the most critical components that feels 
        this pressure is your <b>data layer</b> — your database(s).<br/>
        At small scale, the simplest monolithic SQL instance is enough. But as user count, data size, and concurrency increase, you hit 
        vertical and horizontal limits. The solution? <b>Scaling</b>. In this post, we’ll dive deep into <b>vertical and horizontal 
        scaling</b>, with a focus on <b>sharding</b>, <b>chunking</b>, and <b>data retrieval strategies</b> used by mature systems like 
        Facebook, YouTube, and Amazon.
    </div>
 </div>);
};

export default Introduction;