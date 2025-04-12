import React from "react";
import { Card, Highlight } from "e-ui-react";

const SCALING_HARMONY_TMPL = `User DB
|--- Shard 1 (User IDs 0–1M)
|       |--- Primary
|       |--- Replica 1
|       |--- Replica 2
|--- Shard 2 (User IDs 1M - 2M)
|       |--- Primary
|       |--- Replica 1
|       |--- Replica 2`;

const Replication = () =>{
    return (<div>
    <div className="mtop15p">While <b>data partitioning</b> improves scalability and performance by distributing <b>what</b> data is stored 
    where, <b>data replication</b> focuses on <b>how</b> data is <b>copied and synchronized</b> across nodes to improve <b>availability</b>, 
    <b>fault tolerance</b> and <b>read scalability</b>.<br/>
    In modern distributed database architectures, <b>partitioning and replication go hand in hand</b>, forming the core of any 
    horizontally scaled, resilient data layer.
    </div>
    <div className="mtop15p">
        <Card padding={10}>
            <div align="center" className="mtop15p"><h4><b>What is Data Replication?</b></h4></div>
            <div className="mtop15p"><b>Replication</b> is the process of <b>duplicating data across multiple nodes</b>, typically in 
            real-time or near-real-time, so that if one node fails, others can take over. Replication helps with:</div>
            <div className="mtop15p">
                <ul>
                    <li className="mtop5p">High availability (HA)</li>
                    <li className="mtop5p">Disaster recovery (DR)</li>
                    <li className="mtop5p">Read performance (read replicas)</li>
                    <li className="mtop5p">Fault tolerance</li>
                    <li className="mtop5p">Data locality (geo-replication)</li>
                </ul>
            </div>
        </Card>
    </div>
    <div align="center" className="mtop15p"><h4><b>Types of Replication</b></h4></div>
    <div className="mtop15p">Let’s examine the primary forms of replication used in horizontally scaled systems:</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Master-Slave (Primary-Replica) Replication:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Write</b> operations go to the <b>master (primary)</b>.</li>
                        <li className="mtop5p"><b>Read</b> operations can be served from <b>replicas</b> (read-only).</li>
                    </ul>
                </div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">MySQL asynchronous replication</li>
                            <li className="mtop5p">MongoDB replica sets</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Easy to reason about</li>
                            <li className="mtop5p">Good read scalability</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Master is a single point of write failure (unless promoted)</li>
                            <li className="mtop5p">Replication lag possible</li>
                            <li className="mtop5p">Doesn’t help write scalability</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Multi-Master (Active-Active) Replication</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Every node can perform both reads and writes.</li>
                        <li className="mtop5p">Data is <b>synchronized bidirectionally</b>.</li>
                    </ul>
                </div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Cassandra, Riak, CouchDB</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">High availability and write throughput</li>
                            <li className="mtop5p">Supports multi-region write locality</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Conflict resolution becomes complex</li>
                            <li className="mtop5p">Eventual consistency (CAP trade-offs)</li>
                            <li className="mtop5p">Latency in convergence</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Quorum-Based Replication</b></div>
                <div>
                    <ul>
                        <li className="mtop15p">A write is considered successful once it reaches a <b>quorum</b> (majority of replicas).</li>
                        <li className="mtop15p">Reads can be served from any replica, often requiring quorum reads for consistency.</li>
                    </ul>
                </div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Apache Cassandra, Amazon DynamoDB</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Pros:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Tunable consistency (via read/write quorum settings)</li>
                            <li className="mtop5p">Stronger guarantees than eventual consistency</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Cons:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Requires careful tuning</li>
                            <li className="mtop5p">Increased latency for strong consistency</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Synchronous vs Asynchronous Replication</b></div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>Synchronous:</b> Writes are acknowledged only <b>after all replicas confirm</b>. (Stronger consistency)</li>
                        <li className="mtop5p"><b>Asynchronous:</b> Writes return as soon as primary persists, <b>replication happens in background</b>. (Faster, riskier)</li>
                    </ul>
                </div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p"><u><i>Synchronous:</i></u> Financial systems (no tolerance for data loss)</li>
                            <li className="mtop5p"><u><i>Asynchronous:</i></u> Social media feed systems (eventual consistency is fine)</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Geo-Replication (Cross-Region):</b></div>
                <div className="mtop15p">In global applications, data is replicated across regions or continents to:</div>
                <div>
                    <ul>
                        <li className="mtop5p">Reduce latency for global users</li>
                        <li className="mtop5p">Provide regional failover</li>
                        <li className="mtop5p">Comply with data locality laws (e.g., GDPR)</li>
                    </ul>
                </div>
                <div className="padLeft5p">
                    <div className="mtop15p"><b>Example:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Google Spanner uses Paxos-based consensus for global consistency</li>
                            <li className="mtop5p">Azure Cosmos DB offers multiple consistency models</li>
                        </ul>
                    </div>
                    <div className="mtop15p"><b>Challenges:</b></div>
                    <div>
                        <ul>
                            <li className="mtop5p">Higher latency due to WAN communication</li>
                            <li className="mtop5p">Network partitions</li>
                            <li className="mtop5p">Write conflicts in multi-region setups</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ol>
    </div>
    <div align="center" className="mtop15p"><h4><b>Replication in Practice</b></h4></div>
    <div className="mtop15p">Let’s examine how replication is implemented in popular systems:</div>
    <div className="padLeft5p">
        <div className="mtop15p"><b>MongoDB</b></div>
        <div>
            <ul>
                <li className="mtop5p">Uses <b>Replica Sets</b> (1 primary + N secondaries)</li>
                <li className="mtop5p">Automatic failover with election</li>
                <li className="mtop5p">Supports <b>read preference</b> for routing</li>
            </ul>
        </div>
        <div className="mtop15p"><b>PostgreSQL</b></div>
        <div>
            <ul>
                <li className="mtop5p">Streaming replication (asynchronous by default)</li>
                <li className="mtop5p">WAL-based (Write Ahead Log)</li>
                <li className="mtop5p">Can use <b>Patroni</b>, <b>Stolon</b>, or <b>Citus</b> for scaling and managing clusters</li>
            </ul>
        </div>
        <div className="mtop15p"><b>Cassandra</b></div>
        <div>
            <ul>
                <li className="mtop5p"><b>Multi-master</b> architecture</li>
                <li className="mtop5p">Tunable consistency (ONE, QUORUM, ALL)</li>
                <li className="mtop5p">Writes go to <b>coordinator node</b>, replicated via gossip protocol</li>
            </ul>
        </div>
        <div className="mtop15p"><b>Vitess (MySQL Sharding Engine)</b></div>
        <div>
            <ul>
                <li className="mtop5p">Horizontal sharding + <b>read replicas</b> per shard.</li>
                <li className="mtop5p">Supports <b>vReplication</b> for advanced migration and replication.</li>
            </ul>
        </div>
    </div>
    <Card padding={15}>
        <div align="center"><h4><b>Replication + Partitioning = Scaling Harmony</b></h4></div>
        <div className="mtop15p">
            <div>Each <b>shard</b> (partition) in a horizontally scaled database often has <b>its own replica set</b>. This architecture gives:</div>
            <div>
                <ul>
                    <li className="mtop5p"><b>Increased parallelism</b> for reads and writes</li>
                    <li className="mtop5p"><b>High fault tolerance</b> (a single node or even shard can fail)</li>
                    <li className="mtop5p"><b>Localized recovery</b> (only affected shard fails over)</li>
                </ul>
            </div>
        </div>
        <Highlight content={SCALING_HARMONY_TMPL} lang="text" />
    </Card>
    </div>);
 };

export default Replication;