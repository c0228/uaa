import React from "react";
import { Card, Highlight, Icon } from "e-ui-react";

const Sharding = () =>{
 const ItemCheck = ({ status }) =><Icon type="FontAwesome" name={status?"fa-check-circle":"fa-times-circle"} color={status?"green":"red"} />
 const Architecture = () =>{
    return (<div>
        <div align="center" className="mtop15p"><h4><b>1. Sharding Architecture - Deep Dive</b></h4></div>
        <div className="padLeft5p">
            <div className="mtop5p">A properly sharded system has:</div>
            <ol>
                <li className="mtop5p">
                    <div><b>Shard Key (Partition Key)</b></div>
                    <div className="mtop5p">A field (or a set of fields) used to determine <b>which shard the data goes to</b>.</div>
                </li>
                <li className="mtop5p">
                    <div><b>Sharding Strategy</b></div>
                    <div className="mtop5p">The logic that splits and maps the data to appropriate shards.</div>
                </li>
                <li className="mtop5p">
                    <div><b>Shard Routing Layer</b></div>
                    <div className="mtop5p">Often a <b>middleware</b> or proxy layer that knows where to direct queries.</div>
                </li>
                <li className="mtop5p">
                    <div><b>Replication per Shard (Optional)</b></div>
                    <div className="mtop5p">To ensure high availability and fault tolerance.</div>
                </li>
            </ol>
        </div>
        <div className="mtop5p"><h4><b>Shard Design Principles</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p"><b>Shard Key Selection:</b> Choose keys that ensure even distribution and high cardinality 
                    (e.g., <code><b>user_id</b></code>, not <code><b>country</b></code>).</li>
                <li className="mtop5p"><b>Shard Locality:</b> Keep user-related data together on same shard.</li>
                <li className="mtop5p"><b>Shard Size Management:</b> Monitor disk, IOPS, and query latency per shard.</li>
            </ul>
        </div>
        <div className="mtop5p"><h4><b>Global Indexes vs Local Indexes</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p"><b>Local Indexes:</b> Exist within a shard. Fast, but can’t support global lookups.</li>
                <li className="mtop5p"><b>Global Indexes:</b> Span across all shards. Enable cross-shard search, but slower and require consistency management.</li>
            </ul>
        </div>
    </div>);
 };

 const ShardingTypes = () =>{
    return (<div>
        <div align="center" className="mtop15p"><h4><b>2. Types of Sharding</b></h4></div>
    <div className="padLeft5p">
        <ol>
            <li className="mtop15p">
                <div><b>Range-Based Sharding</b></div>
                <div className="padLeft5p">
                    <div className="mtop5p">Divides data based on <b>contiguous ranges of a shard key</b>.</div>
                    <div className="mtop15p"><b>Example:</b></div>
                    <div className="mtop5p">
                        <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                    <td><b>Shard 1</b></td>
                                    <td>User IDs</td>
                                    <td>1 Million</td>
                                </tr>
                                <tr>
                                    <td><b>Shard 2</b></td>
                                    <td>User IDs</td>
                                    <td>1 Million - 2 Million</td>
                                </tr>
                                <tr>
                                    <td><b>Shard 3</b></td>
                                    <td>User IDs</td>
                                    <td>2 Million - 3 Million</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li><ItemCheck status={true} /> Easy to understand</li>
                            <li><ItemCheck status={false} /> Prone to <b>hotspotting</b> if data is skewed (e.g., sequential IDs)</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Hash-Based Sharding</b></div>
                <div className="padLeft5p">
                <div className="mtop5p">Applies a <b>hash function</b> on the shard key to evenly distribute data.</div>
                <div className="mtop15p"><b>Example:</b></div>
                <div className="mtop15p">
                    <Highlight content={`shard = hash(user_id) % N`} lang="javascript" />
                </div>
                <div>
                    <ul>
                        <li><ItemCheck status={true} /> Good distribution</li>
                        <li><ItemCheck status={false} /> Harder to do range queries</li>
                        <li><ItemCheck status={false} /> Difficult resharding (if N changes)</li>
                    </ul>
                </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Geo-Sharding</b></div>
                <div className="padLeft5p">
                <div className="mtop5p">Shards are based on <b>geographical region</b>.</div>
                <div className="mtop15p"><b>Example:</b></div>
                <div className="mtop5p">
                        <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                    <td><b>US-East data</b></td>
                                    <td>Shard A (Virginia)</td>
                                </tr>
                                <tr>
                                    <td><b>EU data</b></td>
                                    <td>Shard B (Frankfurt)</td>
                                </tr>
                                <tr>
                                    <td><b>Asia data</b></td>
                                    <td>Shard C (Mumbai)</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                </div>
                <div>
                    <ul>
                        <li><ItemCheck status={true} /> Low-latency localized access</li>
                        <li><ItemCheck status={true} /> Meets data sovereignty laws</li>
                        <li><ItemCheck status={false} /> Complex failover and syncing</li>
                    </ul>
                </div>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Entity-Based Sharding (Application-Level)</b></div>
                <div className="padLeft5p">
                    <div className="mtop5p">Useful for multitenant or microservice systems. Each tenant gets a dedicated shard.</div>
                    <div className="mtop15p"><b>Example:</b></div>
                    <div className="mtop5p">
                        <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                    <td><b>Company A</b></td>
                                    <td>Shard 1</td>
                                </tr>
                                <tr>
                                    <td><b>Company B</b></td>
                                    <td>Shard 2</td>
                                </tr>
                                <tr>
                                    <td><b>Company C</b></td>
                                    <td>Shard 3</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                    <ul>
                        <li><ItemCheck status={true} /> Easy tenant isolation</li>
                        <li><ItemCheck status={true} /> Per-tenant backup/failover</li>
                        <li><ItemCheck status={false} /> Can lead to under-utilized resources</li>
                    </ul>
                </div>
                </div>
            </li>
        </ol>
    </div>
    </div>);
 };

 const QueryRouting = () =>{
    return (<div>
        <div align="center" className="mtop15p"><h4><b>3. Query Routing</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop5p">Sharding introduces complexity in <b>routing queries</b> to the correct shard(s). There are two common patterns:</div>
        <div className="mtop5p">
            <ol>
                <li className="mtop5p">
                    <div><b>Client-Side Routing</b></div>
                    <div className="mtop5p">The client or application is aware of sharding logic and knows where to send queries.</div>
                    <div>
                        <ul>
                            <li><ItemCheck status={true} /> High performance</li>
                            <li><ItemCheck status={false} /> Tight Coupling between app and sharding logic.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop5p">
                    <div><b>Middleware Routing</b></div>
                    <div className="mtop5p">A dedicated proxy or router handles shard lookup and query forwarding.</div>
                    <div>
                        <ul>
                            <li><ItemCheck status={true} /> Better separation of concerns</li>
                            <li><ItemCheck status={true} /> Easier for clients</li>
                            <li><ItemCheck status={false} /> Adds network hop and potential bottleneck</li>
                        </ul>
                    </div>
                </li>
            </ol>
        </div>
    </div>
    </div>);
 };

 const ShardingPopularSystems = () =>{
    return (<div>
        <div align="center" className="mtop15p"><h4><b>4. Sharding in Popular Systems</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop15p">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <td><b>System</b></td>
                        <td><b>Sharding Method</b></td>
                        <td><b>Notes</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>MongoDB</b></td>
                        <td>Range / Hash / Zone</td>
                        <td>Uses <code><b>mongos</b></code> router, supports automatic rebalancing</td>
                    </tr>
                    <tr>
                        <td><b>Cassandra</b></td>
                        <td>Consistent Hashing</td>
                        <td>Built-in partitioner with tunable consistency</td>
                    </tr>
                    <tr>
                        <td><b>Vitess (MySQL)</b></td>
                        <td>Range / Custom</td>
                        <td>Built on MySQL, with application-transparent sharding</td>
                    </tr>
                    <tr>
                        <td><b>Elasticsearch</b></td>
                        <td>Hash + Replication</td>
                        <td>Uses shards and replicas automatically</td>
                    </tr>
                    <tr>
                        <td><b>HBase</b></td>
                        <td>Range-Based</td>
                        <td>Region servers handle shard splits</td>
                    </tr>
                    <tr>
                        <td><b>DynamoDB</b></td>
                        <td>Hash + Partition Key</td>
                        <td>Fully managed, auto-sharded</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>);
 };

 const ShardReSharding = () =>{
    return (<div>
        <div align="center" className="mtop15p"><h4><b>5. Shard Rebalancing & Resharding</b></h4></div>
    <div className="padLeft5p">
        <div className="mtop15p">Over time, usage patterns change. One shard might become "hot", others cold. You’ll need resharding, which is:</div>
        <div>
            <ul>
                <li className="mtop5p">Moving data from one shard to another</li>
                <li className="mtop5p">Updating routing metadata</li>
            </ul>
        </div>
        <div><b>Approaches:</b></div>
        <div>
            <ol>
                <li className="mtop5p"><b>Online Rebalancing:</b> Stream + dual write + switch</li>
                <li className="mtop5p"><b>Offline Migrations:</b> Downtime + batch move</li>
                <li className="mtop5p"><b>Key-space expansion:</b> e.g., increase hash mod <code><b>N → N+1</b></code></li>
            </ol>
        </div>
        <div className="mtop15p">Vitess, MongoDB, and YugabyteDB offer built-in tools for rebalancing.</div>
    </div>
    </div>);
 };

 const ChallengesAndPractices = () =>{
    return (<div>
        <div align="center" className="mtop15p"><h4><b>6. Challenges in Sharded Systems</b></h4></div>
    <div>
        <ol>
            <li className="mtop5p">
                <div><b>Cross-Shard Joins</b></div>
                <div className="mtop5p">Expensive and slow. Avoid if possible or denormalize data.</div>
            </li>
            <li className="mtop5p">
                <div><b>Cross-Shard Transactions</b></div>
                <div className="mtop5p">Complex and require distributed coordination (2PC or Paxos).</div>
            </li>
            <li className="mtop5p">
                <div><b>Backup and Restore</b></div>
                <div className="mtop5p">Requires orchestration across shards.</div>
            </li>
            <li className="mtop5p">
                <div><b>Failover Handling</b></div>
                <div className="mtop5p">Per-shard replica election and recovery needed.</div>
            </li>
            <li className="mtop5p">
                <div><b>Operational Complexity</b></div>
                <div className="mtop5p">Monitoring, alerting, consistency validation become harder.</div>
            </li>
        </ol>
    </div>

    <hr/>

    <div align="center" className="mtop15p"><h4><b>7. Best Practices for Sharding</b></h4></div>
    <div>
        <ol>
            <li className="mtop5p">Choose a <b>shard key</b> that balances write/read load.</li>
            <li className="mtop5p">Avoid keys with <b>sequential growth</b>.</li>
            <li className="mtop5p">Denormalize data to avoid joins.</li>
            <li className="mtop5p">Use a <b>metadata catalog</b> service to track shard mappings.</li>
            <li className="mtop5p">Automate <b>shard provisioning and migrations</b>.</li>
            <li className="mtop5p">Prefer <b>idempotent writes</b> and retry logic.</li>
            <li className="mtop5p">Keep <b>application-layer retry awareness</b> for transient shard failures.</li>
        </ol>
    </div>

    <hr/>

    <div align="center" className="mtop15p"><h4><b>8. Real-World Sharding at Scale</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p"><b>Instagram (PostgreSQL)</b> uses range-based sharding on user_id.</li>
            <li className="mtop5p"><b>YouTube (Vitess)</b> scaled MySQL using sharding.</li>
            <li className="mtop5p"><b>Amazon DynamoDB</b> uses partitioning by hash + replication.</li>
            <li className="mtop5p"><b>Facebook TAO</b> uses consistent hashing + memory cache tier.</li>
        </ul>
    </div>
    </div>);
 };

 return (<div>
    <div className="mtop15p">When your application's data volume grows beyond what a single database server can handle — whether due to read/write throughput, 
    disk I/O, memory constraints, or even sheer size — you’re at the inflection point where traditional vertical scaling hits its limits.<br/>
    At that moment, <b>horizontal scaling</b> becomes the game-changer — and at its core lies <b>sharding</b>.<br/>
    Sharding isn’t just a buzzword — it’s a foundational architectural strategy for high-scale, low-latency, fault-tolerant systems. But like all powerful tools, 
    it demands precision, understanding, and thoughtful implementation.
    </div>
    <div className="mtop15p">
    <Card padding={15}>
        <div align="center"><h4><b>What is Sharding?</b></h4></div>
        <div className="mtop15p"><b>Sharding</b> is the practice of <b>splitting a large dataset across multiple databases</b> or <b>database nodes</b>, 
        called <b>shards</b>, so each shard holds a <b>subset</b> of the entire data.</div>
        <div className="mtop15p">This approach enables <b>horizontal scaling</b>, allowing your system to:</div>
        <div>
            <ul>
                <li className="mtop5p">Handle higher query throughput</li>
                <li className="mtop5p">Distribute storage</li>
                <li className="mtop5p">Avoid hot spots</li>
                <li className="mtop5p">Improve availability and fault tolerance</li>
            </ul>
        </div>
        <div className="mtop15p">Each shard can be deployed on a separate physical or virtual machine, and ideally, they operate independently.</div>
    </Card>
    </div>
    <div className="mtop15p"><h4><b>When Do You Need Sharding?</b></h4></div>
    <div className="padLeft5p">
        <ul>
            <li className="mtop5p">Your <b>dataset exceeds disk capacity</b> or memory constraints of a single node.</li>
            <li className="mtop5p">Read/write <b>QPS is beyond vertical scaling limits</b>.</li>
            <li className="mtop5p">You need <b>geo-partitioned data</b> for latency reduction or compliance.</li>
            <li className="mtop5p">Index sizes exceed memory and degrade performance.</li>
            <li className="mtop5p">Hotspotting due to <b>uneven access patterns</b>.</li>
        </ul>
    </div>
    <hr/>
    <Architecture />
    <hr/>
    <ShardingTypes />
    <hr/>
    <QueryRouting />
    <hr/>
    <ShardingPopularSystems />
    <hr/>
    <ShardReSharding />
    <hr/>
    <ChallengesAndPractices />

 </div>);
};

export default Sharding;