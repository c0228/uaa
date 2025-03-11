import React from "react";
import OrderList from "@Components/order-list/index.js";
import { Highlight } from "e-ui-react";

const EurekaServer_Maven_Dependency = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>`;

const EurekaServer_Gradle_Dependency = `dependencies {
    implementation 'org.springframework.cloud:spring-cloud-starter-netflix-eureka-server'
}`;

const EurekaServer_Enable = `@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}`;

const EurekaServer_AppYml = `server:
  port: 8761

spring:
  application:
    name: eureka-server

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    enable-self-preservation: false`;

const EurekaServer_RunServer = `mvn spring-boot:run`;

const Step01 = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div><h2 className="blog-head"><b>Step 1: Setting Up Eureka Server</b></h2></div>
    <div className="padLeft15p">
        <div className="mtop15p"><h4><b>1.1 Create a New Spring Boot Project</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p">You can use Spring Initializr to generate a new Spring Boot project.</div>
            <div className="mtop15p"><b>Required Dependencies:</b></div>
            <div>
                <OrderList data={[(<div>Spring Boot Web</div>),
                        (<div>
                            <div>Spring Cloud Starter Netflix Eureka Server</div>
                            <div className="mtop15p"><Highlight content={EurekaServer_Maven_Dependency} lang="html" /></div>
                            <div align="center"><b>Maven (pom.xml)</b></div>
                            <div align="center" className="mtop15p">[ OR ]</div>
                            <div className="mtop15p"><Highlight content={EurekaServer_Gradle_Dependency} lang="html" /></div>
                            <div align="center"><b>Gradle (build.gradle)</b></div>
                        </div>)]} />
            </div>
        </div>

        <div className="mtop15p"><h4><b>1.2 Enable Eureka Server</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p">Modify your main application class:</div>
            <div className="mtop15p">
                <Highlight content={EurekaServer_Enable} lang="java" />
            </div>
        </div>

        <div className="mtop15p"><h4><b>1.3 Configure application.yml</b></h4></div>
        <div className="padLeft15p">
            <div className="mtop15p">Create <code><b>application.yml</b></code> in <code><b>src/main/resources</b></code>:</div>
            <div className="mtop15p">
                <Highlight content={EurekaServer_AppYml} lang="java" />
            </div>
        </div>

        <div className="mtop15p"><h4><b>1.4 Run the Eureka Server</b></h4></div>
        <div className="mbot15p padLeft15p">
            <div className="mtop15p">Execute the command:</div>
            <div className="mtop15p">
                <Highlight content={EurekaServer_RunServer} lang="java" />
            </div>
            <div className="mtop15p">Open <code><b>http://localhost:8761</b></code> in your browser to access 
            the Eureka dashboard.</div>
        </div>
    </div>
 </div>);
};

export default Step01;