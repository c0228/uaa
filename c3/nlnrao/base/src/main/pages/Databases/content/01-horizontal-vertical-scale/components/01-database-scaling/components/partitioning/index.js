import React from "react";
import { Card, Highlight } from "e-ui-react";

const Partitioning = () =>{
 return (<div>
    <div className="mtop15p">When a single database node becomes insufficient due to <b>CPU, memory, storage, or connection limits, 
        horizontal scaling</b> becomes necessary. Rather than upgrading the server (<b>vertical scaling</b>), we <b>add more machines</b> 
        to distribute the load. At the core of this strategy lies one of the most powerful — and complex — design techniques: 
        <b>Data Partitioning</b>.
    </div>
    <Card padding={15}>
        <div align="center" className="mtop15p"><h4><b>What is Data Partitioning?</b></h4></div>
        <div className="mtop15p"><b>Data partitioning</b> (also known as <b>sharding</b>) is the practice of splitting a large database 
        into smaller, more manageable <b>logical subsets</b> — called <b>partitions</b> — which are distributed across multiple database 
        instances (shards or nodes). Each partition holds a <b>portion</b> of the dataset.</div>
        <div className="mtop15p">It ensures:</div>
        <div className="mtop15p">
            <ul>
                <li className="mtop5p">Lower contention</li>
                <li className="mtop5p">Better performance through parallel processing</li>
                <li className="mtop5p">Higher availability</li>
                <li className="mtop5p">Isolation of failure domains</li>
            </ul>
        </div>
    </Card>
    <div align="center" className="mtop15p"><h4><b>Types of Partitioning</b></h4></div>
    <div className="mtop15p">There are several partitioning strategies, each with trade-offs:</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Range-Based Partitioning:</b></div>
                <div className="mtop15p">Partitions data based on the value <b>range</b> of a certain column (usually the primary key).</div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">User IDs 1–1M → Shard A</li>
                            <li className="mtop5p">User IDs 1M–2M → Shard B</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Easy to understand</li>
                            <li className="mtop5p">Sequential write workloads perform well</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Risk of <b>hot shards</b> (e.g., all new users go to the last shard)</li>
                            <li className="mtop5p">Requires range rebalancing</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Hash-Based Partitioning:</b></div>
                <div className="mtop15p">A hash function is applied on a shard key to distribute records uniformly.</div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <Highlight content={`shard_id = hash(user_id) % N`} lang="javascript" />
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Good <b>uniformity</b> and load distribution</li>
                            <li className="mtop5p">Reduces hot-spotting</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Harder to support range queries</li>
                            <li className="mtop5p">Requires <b>re-sharding</b> and rebalancing when nodes are added/removed</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>List-Based Partitioning</b></div>
                <div className="mtop15p">Similar to range, but with <b>explicit value lists</b>.</div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p"><code><b>Region = "US"</b></code> to Shard A</li>
                            <li className="mtop5p"><code><b>Region = "EU"</b></code> to Shard B</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Useful for multi-tenant or geo-distributed systems</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Risk of <b>skew</b> if some lists have more data/users</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Directory-Based Partitioning</b></div>
                <div className="mtop15p">A central <b>metadata service</b> maintains a <b>lookup table</b> of which shard holds which data range or ID.</div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Very flexible (can handle any dynamic mapping)</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Adds complexity</li>
                            <li className="mtop5p">Introduces a single point of failure or bottleneck in lookup</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default Partitioning;