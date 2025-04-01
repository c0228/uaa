import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const SerializationFormatsImpacts = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Serialization Formats and Their Impact on Compatibility</b></h2></div>
    <div className="mtop15p">Serialization formats define how data is structured and transmitted in Kafka. The three most 
        commonly used formats are <b>Avro</b>, <b>Protobuf</b>, and <b>JSON</b>. Each has its advantages and trade-offs in 
        terms of compatibility, efficiency, and ease of use.</div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>JSON (JavaScript Object Notation)</b></div>
                <div className="mtop15p"><b>Pros:</b></div>
                <OrderList data={[(<div>Human-readable and easy to debug.</div>),
                    (<div>Schema-free, making it simple to use without additional infrastructure.</div>),
                    (<div>Widely supported across various programming languages.</div>)]} />
                <div className="mtop15p"><b>Cons:</b></div>
                <OrderList data={[(<div>Inefficient due to verbose text-based representation.</div>),
                    (<div>Lack of schema enforcement leads to compatibility issues.</div>),
                    (<div>Difficult to manage schema evolution effectively.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Avro (Apache Avro)</b></div>
                <div className="mtop15p"><b>Pros:</b></div>
                <OrderList data={[(<div>Compact binary format reduces data size.</div>),
                    (<div>Strong schema enforcement ensures compatibility.</div>),
                    (<div>Supports both <b>backward</b> and <b>forward</b> schema evolution.</div>),
                    (<div>Schema can be stored separately in a <b>Schema Registry</b>.</div>)]} />
                <div className="mtop15p"><b>Cons:</b></div>
                <OrderList data={[(<div>Requires a schema registry setup for efficient usage.</div>),
                    (<div>Harder to debug due to its binary format.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Protocol Buffers (Protobuf)</b></div>
                <div className="mtop15p"><b>Pros:</b></div>
                <OrderList data={[(<div>Highly efficient, compact binary format with fast serialization/deserialization.</div>),
                    (<div>Strong schema enforcement with built-in backward and forward compatibility.</div>),
                    (<div>Supports schema evolution with explicit field numbering.</div>)]} />
                <div className="mtop15p"><b>Cons:</b></div>
                <OrderList data={[(<div>Requires <code><b>.proto</b></code> definition files, making integration slightly complex.</div>),
                    (<div>More complex than JSON in terms of setup and debugging.</div>)]} />
            </li>
        </ol>
    </div>
 </div>);
};

export default SerializationFormatsImpacts;