import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Zuul2 = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div><h2 className="blog-head"><b>Zuul 2 – The Upgraded Version</b></h2></div>
    <div className="mtop15p">
    Netflix introduced Zuul 2 with improvements like:
    <OrderList data={[(<div>Non-blocking I/O model</div>),
                (<div>Improved scalability</div>),
                (<div>Better performance for streaming</div>)]} />
    </div>
    <div className="mtop15p">However, Netflix never officially released <b>Zuul 2 as open source</b>, 
    making it less accessible to the broader community.</div>

    <div className="mto1p15p"><h2 className="blog-head"><b>What is Spring Cloud Gateway?</b></h2></div>
    <div className="mtop15p">Spring Cloud Gateway (SCG) is a <b>modern API Gateway</b> built on <b>Spring WebFlux</b> 
    and <b>Project Reactor</b> to provide a fully reactive, non-blocking architecture.</div>

    <div className="mtop15p"><h4><b>Key Features of Spring Cloud Gateway:</b></h4></div>
    <div classsName="mtop15p">
        <ol>
            <li><b>Reactive Architecture -</b> Uses <b>Spring WebFlux</b>, making it highly scalable and efficient.</li>
            <li><b>Declarative Routing -</b> Uses Java-based or YAML-based configuration for defining routes.</li>
            <li><b>Predicates and Filters -</b> Offers a powerful way to handle request validation, modification, and transformation.</li>
            <li><b>Integration with Spring Ecosystem -</b> Works seamlessly with Spring Security, Spring Boot, and Spring Cloud.</li>
            <li><b>WebSockets Support -</b > Provides built-in support for real-time WebSockets communication.</li>
            <li><b>Rate Limiting and Circuit Breaker -</b> Works with <b>Resilience4j</b> for rate limiting, retries, and fault tolerance.</li>
            <li><b>Load Balancing -</b> Uses <b>Spring Cloud LoadBalancer</b>, eliminating dependency on deprecated Ribbon.</li>
            <li><b>Authentication and Security -</b> Supports OAuth2, JWT, and API key authentication natively.</li>
            <li><b>Observability -</b> Integrates with distributed tracing tools like <b>Spring Cloud Sleuth</b> and <b>Zipkin</b>.</li>
            <li><b>Easy Customization -</b> Allows custom filters and predicates for advanced use cases.</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Comparison: Spring Cloud Gateway vs. Zuul</b></h2></div>
    <div className="mtop15p">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr style={{ backgroundColor:'#eee' }}>
                        <td><b>Feature</b></td>
                        <td><b>Spring Cloud Gateway</b></td>
                        <td><b>Zuul (Netflix OSS)</b></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Architecture</b></td>
                        <td>Non-blocking, reactive</td>
                        <td>Blocking (Zuul 1)</td>
                    </tr>
                    <tr>
                        <td><b>Routing</b></td>
                        <td>Declarative (Java/YAML)</td>
                        <td>Programmatic Filters</td>
                    </tr>
                    <tr>
                        <td><b>Performance</b></td>
                        <td>High (WebFlux & Netty)</td>
                        <td>Moderate (Servlet-based)</td>
                    </tr>
                    <tr>
                        <td><b>Load Balancing</b></td>
                        <td>Spring Cloud LoadBalancer</td>
                        <td>Ribbon (Deprecated)</td>
                    </tr>
                    <tr>
                        <td><b>Security</b></td>
                        <td>Spring Security, OAuth2, JWT</td>
                        <td>Custom Implementations</td>
                    </tr>
                    <tr>
                        <td><b>WebSockets Support</b></td>
                        <td>Yes</td>
                        <td>Limited</td>
                    </tr>
                    <tr>
                        <td><b>Rate Limiting</b></td>
                        <td>Built-in (Resilience4j)</td>
                        <td>Requires custom filters</td>
                    </tr>
                    <tr>
                        <td><b>Observability</b></td>
                        <td>Sleuth, Zipkin, Prometheus</td>
                        <td>Basic metrics</td>
                    </tr>
                    <tr>
                        <td><b>Custom Filters</b></td>
                        <td>Java-based predicates</td>
                        <td>Groovy-based filters</td>
                    </tr>
                    <tr>
                        <td><b>Community Support</b></td>
                        <td>Active (Spring Ecosystem)</td>
                        <td>Declining</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Which One Should You Choose?</b></h2></div>
    <div className="mtop15p"><h4><b>When to Choose Zuul:</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div>If you are working in an <b>existing Netflix OSS</b> ecosystem that relies on Zuul.</div>),
                    (<div>If you need <b>simple API Gateway functionalities</b> with minimal configuration.</div>),
                    (<div>If you can manage custom implementations for missing features.</div>)]} />
    </div>
    <div className="mtop15p"><h4><b>When to Choose Spring Cloud Gateway:</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div>If you need a <b>reactive, non-blocking API Gateway</b>.</div>),
                    (<div>If you want seamless <b>integration with Spring Boot and Spring Cloud</b>.</div>),
                    (<div>If you require <b>built-in security, authentication, and rate limiting</b>.</div>),
                    (<div>If you want <b>WebSockets support for real-time communication</b>.</div>),
                    (<div>If you are looking for <b>better performance and scalability</b> in modern microservices.</div>),
                    (<div>If you need <b>advanced observability</b> and tracing.</div>)]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Final Verdict: Spring Cloud Gateway is the Future</b></h2></div>
    <div className="mtop15p">While <b>Zuul</b> was a great choice in the past, its limitations and Netflix’s lack of support for <b>Zuul 2 
         as open source</b> make it less viable for modern applications. <b>Spring Cloud Gateway</b> offers <b>better performance, scalability, 
         security, and observability</b> with its <b>reactive architecture</b>, making it the superior choice for a <b>modern microservices API 
         Gateway</b>.<br/><br/>
        If you're building a <b>new microservices system, Spring Cloud Gateway</b> is the best choice. However, if you have an 
        <b>existing Zuul setup</b>, consider migrating to <b>Spring Cloud Gateway</b> for long-term benefits.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mbot15p">Both <b>Spring Cloud Gateway</b> and <b>Zuul</b> have their use cases, but for a 
    <b>modern, high-performance, secure, and scalable</b> API Gateway solution, <b>Spring Cloud Gateway is the recommended choice</b>. 
    It is actively maintained, integrates well with the <b>Spring ecosystem</b>, and offers <b>powerful built-in features</b> that 
    simplify microservices architecture.</div>
 </div>);
};

export default Zuul2;