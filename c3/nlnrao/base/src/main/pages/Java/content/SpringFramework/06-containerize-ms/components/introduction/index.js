import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from '@Components/order-list/index.js';

const SPRING_CONTROLLER_FILE = `@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Dockerized Spring Boot App!";
    }
}`;

const APP_DOCKER_FILE = `# Use an official OpenJDK base image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built JAR file into the container
COPY target/myapp.jar myapp.jar

# Run the application
ENTRYPOINT ["java", "-jar", "myapp.jar"]`;

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Modern software development increasingly relies on microservices architectures due to their scalability, flexibility, 
        and ease of maintenance. Java, particularly with Spring Boot, is a popular choice for building microservices. However, 
        deploying and managing multiple microservices can be complex. This is where Docker and Kubernetes come into play.<br/><br/>
        Docker provides containerization, allowing microservices to run in isolated environments, while Kubernetes orchestrates 
        these containers, ensuring availability, scalability, and efficient resource utilization. This blog will guide you through 
        containerizing Java microservices using Docker and managing them with Kubernetes.</i></div>
    <div className="mtop15p">
        <div align="center"><h2 className="blog-head"><b>Understanding Docker for Java Microservices</b></h2></div>
        <div className="mtop15p"><h4><b>What is Docker?</b></h4></div>
        <div className="mtop15p">
        Docker is a containerization platform that allows developers to package applications and their dependencies into 
        lightweight, portable containers.</div>
        <div className="mtop15p"><h4><b>Benefits of Docker for Java Microservices:</b></h4></div>
        <div className="mtop15p">
            <OrderList data={[(<div><b>Portability:</b> Runs consistently across different environments.</div>),
                    (<div><b>Isolation:</b> Each microservice runs in its own container.</div>),
                    (<div><b>Scalability:</b> Easily scale individual services.</div>),
                    (<div><b>Faster Deployment:</b> Eliminates environment-related issues.</div>)]} />
        </div>
        <div className="mtop15p"><h4><b>Steps to Containerize a Spring Boot Application</b></h4></div>
        <div className="mtop15p"><b>Step 1: Create a Spring Boot Application</b></div>
        <div>Ensure you have a working Spring Boot application. If not, create a simple REST API using Spring Boot.</div>
        <div><Highlight content={SPRING_CONTROLLER_FILE} lang="java" /></div>
        <div className="mtop15p"><b>Step 2: Create a Dockerfile</b></div>
        <div>A Dockerfile contains the instructions to build a Docker image.</div>
        <div>
            <Highlight content={APP_DOCKER_FILE} lang="html" />
        </div>
        <div className="mtop15p"><b>Step 3: Build and Run the Docker Image</b></div>
        <div className="padLeft15p">
            <div className="mtop15p">1. Build the JAR file:</div>
            <div><Highlight content={`mvn clean package`} lang="html" /></div>
            <div className="mtop15p">2. Build the Docker image:</div>
            <div><Highlight content={`docker build -t myapp .`} lang="html" /></div>
            <div className="mtop15p">3. Run the container:</div>
            <div><Highlight content={`docker run -p 8080:8080 myapp`} lang="html" /></div>
            <div className="mtop15p">Your Spring Boot application is now running inside a Docker container.</div>
        </div>
    </div>
 </div>);
};

export default Introduction;