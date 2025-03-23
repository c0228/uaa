import React from "react";
import { Highlight } from "e-ui-react";

const APP_DOCKER_FILE = `FROM openjdk:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE=target/myapp.jar
COPY \${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]`;

const BUILD_DOCKER_IMG = `mvn clean package
docker build -t myapp:latest .`;

const PUSH_IMG_CONTAINER = `docker tag myapp:latest myregistry/myapp:latest
docker push myregistry/myapp:latest`;

const Containerize = () =>{
 return (<div className="lh28p fs16p mtop15p">
     <div><h2 className="blog-head"><b>Step 1: Containerizing the Spring Boot Application</b></h2></div>
    <div className="padLeft5p">
        <div className="mtop15p">To deploy on Kubernetes, you must first containerize your application using Docker.</div>
        <div>
            <ol>
                <li className="mtop15p">
                    <div>Create a Dockerfile in the root of your Spring Boot project:</div>
                    <Highlight content={APP_DOCKER_FILE} lang="html" /> 
                </li>
                <li className="mtop15p">
                    <div>Build the Docker image:</div>
                    <Highlight content={BUILD_DOCKER_IMG} lang="html" /> 
                </li>
                <li className="mtop15p">
                    <div>Push the image to a container registry:</div>
                    <Highlight content={PUSH_IMG_CONTAINER} lang="html" /> 
                </li>
            </ol>
        </div>
    </div>
 </div>);
};

export default Containerize;