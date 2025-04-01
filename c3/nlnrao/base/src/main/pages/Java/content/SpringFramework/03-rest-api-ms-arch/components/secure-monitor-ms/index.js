import React from "react";
import { Highlight } from "e-ui-react";
import { BlogIndexHeader } from '@MainComponents/blog-index-header/index.js';
import OrderList from '@MainComponents/order-list/index.js';

const JWT_JAVA_CLASS = `@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
            .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);
        return http.build();
    }
}`;

const JWT_PREAUTH_CLASS = `@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService service;
    
    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public List<Product> getProducts() {
        return service.getAllProducts();
    }
}`;

const FEIGN_JAVA_CLASS =  `@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/orders/{id}")
    Order getOrder(@PathVariable Long id);
}`;

const APP_PROPERTIES_FILE = `spring.zipkin.base-url=http://localhost:9411
management.tracing.sampling.probability=1.0`;

const ENABLE_SLEUTH_CONFIG = `@Bean
public Sampler defaultSampler() {
    return Sampler.ALWAYS_SAMPLE;
}`;

const APP_DOCKER_FILE = `FROM openjdk:17
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]`;

const APP_DOCKERPROP_FILE= `version: '3.8'
services:
  product-service:
    image: product-service:latest
    ports:
      - "8081:8081"`;

const SecureMonitorMS = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">

    <div align="center"><h2 className="blog-head"><b>Securing Microservices with Spring Security</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p"><b>Adding JWT Authentication</b></div>
        <div className="mtop15p">
            <OrderList data={[(<div>Implement JWT token generation and validation.</div>),
                    (<div>Secure endpoints using <code><b>@PreAuthorize</b></code>.</div>)]} />
        </div>
        <div><b>Example Security Configuration -</b></div>
        <div>
            <Highlight content={JWT_JAVA_CLASS} lang="java" />
        </div>
        <div className="mtop15p"><b>Securing Endpoints with <code>@PreAuthorize</code> -</b></div>
        <div>
            <Highlight content={JWT_PREAUTH_CLASS} lang="java" />
        </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Inter-Service Communication</b></h2></div>
    <div className="padLeft5p">
        <div>Use <b>OpenFeign</b> for declarative REST clients.</div>
        <div>
            <Highlight content={FEIGN_JAVA_CLASS} lang="java" />
        </div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Monitoring with Zipkin and Sleuth</b></h2></div>
    <div className="padLeft5p">
        <div><h4><b>Enabling Tracing</b></h4></div>
        <div>Add dependencies:</div>
        <div><OrderList data={[(<div>Spring Cloud Sleuth</div>),
                (<div>Zipkin Client</div>)]} /></div>
        <div className="mtop15p">Configure Zipkin in <code><b>application.properties</b></code>:</div>
        <div><Highlight content={APP_PROPERTIES_FILE} lang="html" /></div>
        <div className="mtop15p">Enable Sleuth in microservices:</div>
        <div><Highlight content={ENABLE_SLEUTH_CONFIG} lang="java" /></div>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Deploying Microservices with Docker</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p"><b>Creating Dockerfile for Each Service -</b></div>
        <div><Highlight content={APP_DOCKER_FILE} lang="html" /></div>
        <div className="mtop15p padLeft5p"><b>Build and run using Docker Compose -</b></div>
        <div><Highlight content={APP_DOCKERPROP_FILE} lang="html" /></div>
    </div>

    <div className="mtop15p mbot15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="padLeft5p">
    Microservices architecture provides scalability, flexibility, and resilience to modern applications. By leveraging 
    Java and Spring Boot, we can develop, secure, and deploy microservices efficiently. Integrating tools like Eureka, 
    Feign, and Zipkin further enhances the robustness of the system. By following these best practices, developers can 
    build production-ready microservices that are scalable and maintainable.
    </div>
 </div>);
};

export default SecureMonitorMS;