import React from "react";
import { ResumeSubHeader } from '@Components/profile-card/components/resume/components/resume-header/index.js';

const data = [{
 "title":"Web Application Development",
 "details":[{
    "header":"Frontend (Client-Side Development)",
    "data":[{
        "kpis":{
        "Basic Programming Languages": "HTML, CSS, Javascript, ECMAScript, NodeJS, Typescript",
        "UI Frameworks": "JQuery, Bootstrap, Ant Design Frameworks",
        "Web Development Frameworks": "Angular, React",
        "Javascript Compilers": "Babel",
        "Node Package Managers": "npm, yarn, pnpm",
        "CSS Managers":"PurgeCSS (removes unused CSS from the project)",
        "Windows Package Managers": "chocolatey",
        "Build Tools": "Webpack Bundler (used in React Project), Metro Bundler (used in React Native)",
        "Unit Testing and Code Coverage": "Jest Framework, Mocha Framework, Chai Framework, Sinon Framework and Istanbul Code coverage Tool.",
        "Integrated Development Environments (IDE)": "Visual Studio Code"
    }
    }]
 },{
    "header":"Backend (Server-side Development)",
    "data":[{
        "title":"Java Platform",
        "kpis":{
            "Basic Programming Languages": "Java (Standard Edition & Advanced Edition)",
            "Java Web/API Frameworks": "Spring Framework and Hibernate (XML-based and Annotation-based).",
            "Spring Framework Modules": "Spring Core, Spring Boot, Spring JPA, Spring AOP, Spring Security and Spring Cloud",
            "Model Design Architecture": "Monolithic Architecture, Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Coding Design Patterns": "OOP's SOLID Principle",
            "Distributed System Architectures":"Peer-to-Peer (P2P) Pattern, API Gateway Pattern, Pub-Sub (Publish-Subscribe) Pattern, Request-Response Pattern, Event Sourcing Pattern, ETL (Extract, Transform, Load) Pattern, Batching Pattern, Streaming Processing Pattern, Orchestration Pattern",
            "Java Dependencies": "lombok (Beans/Pojos Manager), javaFaker (Generating Test Data)",
            "Web Servers": "GlassFish Web Server and Apache Tomcat",
            "Build Tools": "Apache Ant, Apache Maven and Gradle Build Tool",
            "Unit Testing and Code Coverage": "JUnit Framework, Mockito Framework, FindBugs and Sonarcube Code coverage Tool",
            "Integrated Development Environments (IDE)": "Eclipse, Spring Tool Suite, IntelliJ"
    }
    },{
        "title":"Node JS Platform",
        "kpis":{
            "Basic Programming Languages": "Javascript, ECMAScript, Typescript and Node JS",
            "API Designing Frameworks": "Express JS",
            "Design Architecture": "Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Javascript Compilers": "Babel",
            "Build Tools": "Webpack",
            "Unit Testing and Code Coverage": "Jest Framework, Mocha Framework, Chai Framework, Sinon Framework and Istanbul Code coverage Tool.",
            "Integrated Development Environments (IDE)": "Visual Studio Code"
    }
    },{
        "title":"Python Platform",
        "kpis":{
            "Basic Programming Languages": "Python",
            "Worked with Python Modules": "NumPy, Pandas, Matplotlib and Scikit-learn",
            "Web/API Designing Frameworks": "DJango and Flask",
            "Design Architecture": "Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Integrated Development Environments (IDE)": "Visual Studio Code"
    }
    }]
 }]
},{
    "title":"Mobile Application Development",
    "details":[{
       "data":[{
           "kpis":{
           "UI Frameworks": "Android Studio, React Native and Expo",
           "Backend Development": "Using Firebase (Backend-As-A-Service)"
       }
       }]
    }]
},{
    "title":"Desktop Application Development",
    "details":[{
       "data":[{
           "kpis":{
           "UI Design Frameworks": "Electron JS (On Node JS Platform), Java SWING and Java FX (On Java Platform)"
       }
       }]
    }]
},{
    "title":"Database Technologies",
    "details":[{
       "data":[{
           "kpis":{
            "Database System Design": "Creating Database Clusters, Database Sharding (Parallel Processing), Database Hotspots",
            "Relational Databases": "Microsoft SQL Server, MySQL Server and Oracle Database",
            "Document-Oriented Databases": "MongoDB and Cloud Firestore"
       }
       }]
    }]
},{
    "title":"Networking Communication Solutions"
},{
    "title":"Cloud Platform Solutions",
    "details":[{
       "data":[{
           "kpis":{
            "Platforms": "Amazon Web Services (AWS), Google Cloud Platform (GCP) and Firebase",
       }
       }]
    }]
},{
    "title":"Other Technologies",
    "details":[{
       "data":[{
           "kpis":{
            "Protocols": "HTTP/HTTPS, H.323 and SIP (Communication Protocols), WebSockets (Over TCP Protocols) and AMQP (Messaging Queue) Protocol.",
            "Messaging Queue": "Apache Kafka, Google's Firebase Cloud Messaging (FCM)",
            "Version Control": "Github and Bitbucket"
       }
       }]
    }]
}];

const TechStack = () =>{
 return (<div>
    {data?.map((dat,i1)=>{
      return (<div key={i1}>
            <div align="center"><ResumeSubHeader title={dat?.title} /></div>
            {dat?.["details"]?.map((da,i2)=>{
                return (<div key={i2}>
                    {da?.header && (<div align="center" className="text-white uppercase mb-3"><b>{da?.header}</b></div>)}
                    {da?.data?.map((d,i3)=>{
                        const kpiKeys = Object.keys(d?.kpis);
                        return (<div key={i3} className="card resume-card mb-3">
                            <div className="card-body resume-cardBody">
                            {d?.title && <div align="center" className="text-grey3 uppercase pb-3"><b>{d?.title}</b></div>}
                            {kpiKeys?.map((kpiKey,i4)=>{
                                const kpiVal = d?.kpis?.[kpiKey];
                                return (<div key={i4} className="pb-2">
                                    <span className="text-grey2"><b>{kpiKey} :</b></span> {kpiVal}
                                </div>);
                            })}
                            </div>
                            </div>);
                    })}
                    
                </div>);
            })}
        </div>);
    })}
 </div>);
};

export default TechStack;