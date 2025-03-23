import React from "react";
import { Highlight } from "e-ui-react";

const EurekaClient_Maven_Dependency = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>`;

const EurekaClient_Gradle_Dependency = `dependencies {
    implementation 'org.springframework.cloud:spring-cloud-starter-netflix-eureka-client'
}`;

const EurekaClient_Enable = `@SpringBootApplication
@EnableEurekaClient
@RestController
public class EurekaClientApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaClientApplication.class, args);
    }
    
    @GetMapping("/")
    public String home() {
        return "Hello from Eureka Client!";
    }
}`;

const EurekaClient_AppYml = `server:
  port: 8081

spring:
  application:
    name: eureka-client

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/`;

const EurekaClient_RunServer = `mvn spring-boot:run`;

const Step02 = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Step 2: Configuring Eureka Client</b></h2></div>
    <div className="padLeft15p">

        <div className="mtop15p"><h4><b>2.1 Create a New Spring Boot Application</b></h4></div>
        <div className="padLeft15p mtop15p">
            Generate another Spring Boot project for the client service with the necessary dependencies.
        </div>

        <div className="mtop15p"><h4><b>2.2 Add Eureka Client Dependency</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p">
                <Highlight content={EurekaClient_Maven_Dependency} lang="html" />
                <div className="mtop15p"><b>Maven (pom.xml)</b></div>
            </div>
            <div className="mtop15p">
                <Highlight content={EurekaClient_Gradle_Dependency} lang="javascript" />
                <div className="mtop15p"><b>Gradle (build.gradle)</b></div>
            </div>
        </div>

        <div className="mtop15p"><h4><b>2.3 Enable Eureka Client</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p">Modify the main application class:</div>
            <div className="mtop15p">
                <Highlight content={EurekaClient_Enable} lang="java" />
            </div>
        </div>

        <div className="mtop15p"><h4><b>2.4 Configure application.yml</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p">
                <Highlight content={EurekaClient_AppYml} lang="json" />
            </div>
        </div>

        <div className="mtop15p"><h4><b>2.5 Run the Eureka Client</b></h4></div>
        <div className="mtop15p">Start the application:</div>
        <div className="mtop15p">
            <Highlight content={EurekaClient_RunServer} lang="json" />
        </div>
        <div className="mtop15p">Visit <code><b>http://localhost:8761</b></code>, and you should see the 
            <code><b>eureka-client</b></code> registered.</div>
    </div>
 </div>);
};

export default Step02;