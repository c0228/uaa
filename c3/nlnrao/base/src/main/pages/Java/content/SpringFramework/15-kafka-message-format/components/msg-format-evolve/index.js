import React from "react";

const MsgFormatEvolve = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Kafka's Message Format Evolution</b></h2></div>
    <div><i>Kafka's message format has undergone several improvements over time to enhance efficiency, 
        performance, and compatibility. The key aspects of Kafka’s message format evolution include:</i></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Early Kafka Versions (0.8 and before)</b></div>
                <div>In the early versions of Kafka, the message format was relatively simple, consisting of a key, 
                    value, and an optional timestamp. The messages were serialized as raw bytes, and there was no standard 
                    schema enforcement. This lack of schema governance led to compatibility issues when different producers 
                    and consumers handled messages inconsistently.</div>
            </li>
            <li className="mtop15p">
                <div><b>Introduction of Message Magic Byte (Kafka 0.10)</b></div>
                <div>Kafka 0.10 introduced the concept of a message "magic byte," which represents the version of the message 
                    format. This addition allowed Kafka to support multiple message formats simultaneously and enabled a smooth 
                    transition when upgrading Kafka versions.</div>
            </li>
            <li className="mtop15p">
                <div><b>Compaction and Headers (Kafka 0.11)</b></div>
                <div>Kafka 0.11 introduced record headers and the Idempotent Producer API. These enhancements improved the 
                    ability to store metadata alongside messages and enabled exactly-once semantics (EOS) in Kafka transactions.</div>
            </li>
            <li className="mtop15p">
                <div><b>Kafka 2.x and Beyond: Efficiency and Flexibility</b></div>
                <div>With Kafka 2.x, optimizations such as batch compression, transactional messaging, and schema registries became 
                    more prominent. These improvements ensured that Kafka could handle complex data structures while maintaining 
                    compatibility across distributed systems.</div>
            </li>
        </ol>
    </div>
 </div>);
};

export default MsgFormatEvolve;