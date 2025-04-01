import React from "react";
import OrderList from "@Components/order-list/index.js";

const Techniques = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Techniques for Managing Schema Evolution</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Schema Registry and Avro, Protobuf, or Thrift</b></h4></div>
                <div>Using schema registries with formats like Avro, Protobuf, or Thrift helps manage versioned schemas 
                    in a structured way.</div>
                <OrderList data={[(<div><b>Apache Avro</b> supports schema evolution by allowing default values and 
                    ignoring unknown fields.</div>),
                    (<div><b>Protocol Buffers (Protobuf)</b> ensure compatibility through numbered fields.</div>),
                    (<div><b>Apache Thrift</b> enables cross-language schema management.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>JSON and XML Versioning</b></h4></div>
                <div>For systems using JSON or XML, common approaches include:</div>
                <OrderList data={[(<div>Embedding a <code><b>version</b></code> field within the payload.</div>),
                    (<div>Keeping changes additive (new fields should be optional and have defaults).</div>),
                    (<div>Using API gateways to translate between versions.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Event-Driven Architecture and Schema Evolution</b></h4></div>
                <div>In event-driven systems, message formats must evolve while maintaining compatibility. 
                    Techniques include:</div>
                <OrderList data={[(<div>Using <b>event versioning</b> (e.g., <code><b>UserCreatedV1</b></code> → 
                    <code><b>UserCreatedV2</b></code>).</div>),
                    (<div>Keeping event consumers backward-compatible.</div>),
                    (<div>Storing schema metadata alongside event logs.</div>)]} />
            </li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Best Practices for Schema Evolution</b></h2></div>
    <div>
        <ol>
            <li><b>Design for Compatibility –</b> Follow contract-first design principles to anticipate changes.</li>
            <li><b>Use Feature Flags –</b> Enable gradual rollout of new schemas.</li>
            <li><b>Implement API Gateways –</b> Act as a buffer layer for version translation.</li>
            <li><b>Automate Schema Validation –</b> Use tools like Confluent Schema Registry for validation.</li>
            <li><b>Document Changes –</b> Maintain clear documentation for all schema updates.</li>
        </ol>
    </div>
 </div>);
};

export default Techniques;