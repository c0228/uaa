import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";

const REQ_DEPENDENCY_FILE = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-zipkin</artifactId>
</dependency>`;

const REQ_APPYML_FILE = `spring:
  zipkin:
    base-url: http://localhost:9411
  sleuth:
    sampler:
      probability: 1.0`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
  <div><i>In modern distributed systems, microservices architecture has gained significant traction. With multiple services 
    communicating over networks, it becomes challenging to monitor and trace requests. This is where distributed tracing tools 
    like Zipkin and Sleuth come into play. While both are used for tracing, they serve different purposes and complement each 
    other. In this blog, we will explore the differences between Zipkin and Sleuth, their purposes, and when to use which one.</i></div>
  <div className="mtop15p"><h2 className="mtop15"><b>What is Sleuth?</b></h2></div>
  <div className="mtop15p">
  Spring Cloud Sleuth is a library that provides distributed tracing support for Spring Boot applications. It helps in adding 
  unique trace IDs and span IDs to logs, making it easier to correlate logs from different microservices.
  </div>
  <div className="mtop15p"><h4><b>Key Features of Sleuth:</b></h4></div>
  <div><OrderList data={[(<div>Adds trace and span IDs to logs automatically</div>),
            (<div>Supports MDC (Mapped Diagnostic Context) for logging frameworks like Logback and SLF4J</div>),
            (<div>Integrates seamlessly with Spring Boot applications</div>),
            (<div>Works with Zipkin and OpenTelemetry for distributed tracing</div>),
            (<div>Supports asynchronous tracing</div>)]} /></div>
  <div className="mtop15p"><h2 className="mtop15"><b>What is Zipkin?</b></h2></div>
  <div className="mtop15p">Zipkin is a distributed tracing system that collects, stores, and visualizes traces. It helps 
    in analyzing latency issues by providing insights into request flow across microservices.</div>
    <div className="mtop15p"><h4><b>Key Features of Zipkin:</b></h4></div>
    <div><OrderList data={[(<div>Provides a web-based UI for visualizing traces</div>),
                (<div>Collects tracing data from multiple services</div>),
                (<div>Stores trace data in databases like MySQL, Elasticsearch, or Cassandra</div>),
                (<div>Supports integration with Sleuth, OpenTelemetry, and other tracing libraries</div>),
                (<div>Helps in identifying performance bottlenecks</div>)]} /></div>
    <div className="mtop15p"><h2 className="mtop15"><b>Sleuth vs Zipkin: The Key Differences</b></h2></div>
    <div className="mtop15p">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <th><b>Feature</b></th>
                        <th><b>Sleuth</b></th>
                        <th><b>Zipkin</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Purpose</b></td>
                        <td>Adds trace and span IDs to logs</td>
                        <td>Collects, stores, and visualizes traces</td>
                    </tr>
                    <tr>
                        <td><b>Logging Support</b></td>
                        <td>Yes</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td><b>UI for Tracing</b></td>
                        <td>No</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><b>Storage</b></td>
                        <td>No storage</td>
                        <td>Stores traces in databases</td>
                    </tr>
                    <tr>
                        <td><b>Integration</b></td>
                        <td>Works with Zipkin, OpenTelemetry</td>
                        <td>Works with Sleuth, OpenTelemetry, Jaeger</td>
                    </tr>
                    <tr>
                        <td><b>Use Case</b></td>
                        <td>Used for adding trace context to logs</td>
                        <td>Used for viewing and analyzing traces</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div className="mtop15p"><h2 className="mtop15"><b>When to Use Sleuth?</b></h2></div>
    <div className="mtop15p">Sleuth is useful when:</div>
    <div><OrderList data={[(<div>You need to add trace and span IDs to logs</div>),
                        (<div>You want to correlate logs across multiple microservices</div>),
                        (<div>You are using a logging framework like Logback or SLF4J</div>),
                        (<div>You want lightweight tracing without storing traces</div>)]} /></div>

    <div className="mtop15p"><h2 className="mtop15"><b>When to Use Zipkin?</b></h2></div>
    <div className="mtop15p">Zipkin is useful when:</div>
    <div><OrderList data={[(<div>You need a visualization tool for distributed tracing</div>),
                        (<div>You want to analyze latency and performance issues</div>),
                        (<div>You need a centralized storage for trace data</div>),
                        (<div>You want to debug request flow across microservices</div>)]} /></div>

    <div className="mtop15p"><h2 className="mtop15"><b>Using Sleuth with Zipkin</b></h2></div>
    <div className="mtop15p">Sleuth and Zipkin can be used together to achieve complete distributed tracing. 
        Sleuth generates trace IDs and spans, while Zipkin collects and visualizes them. To integrate them:</div>
    <ol>
        <li>
            <div>Add the required dependencies:</div>
            <Highlight content={REQ_DEPENDENCY_FILE} lang="html" />
        </li>
        <li>
            <div>Configure properties in <code><b>application.yml</b></code>:</div>
            <Highlight content={REQ_APPYML_FILE} lang="html" />
        </li>
        <li>Run <code><b>Zipkin server</b></code> and start your application.</li>
    </ol>

    <div className="mtop15p"><h2 className="mtop15"><b>Conclusion</b></h2></div>
    <div className="mbot15p">Sleuth and Zipkin are essential tools for distributed tracing in microservices. Sleuth helps in adding trace 
        context to logs, whereas Zipkin collects and visualizes traces. Depending on your needs, you can use Sleuth for 
        basic tracing and Zipkin for advanced monitoring. Combining both provides a complete distributed tracing solution 
        for microservices architecture.</div>
 </div>);
};

export default Introduction;