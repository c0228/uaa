import React from "react";
import { ResumeSubHeader } from '@MainComponents/resume/components/resume-header/index.js';

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
        "CSS Managers":"PurgeCSS (removes unused CSS)",
        "Windows Package Managers": "chocolatey",
        "Build Tools": "Webpack Bundler (used in React Project), Metro Bundler (used in React Native)",
        "Unit Testing and Code Coverage": "Jest Framework, Mocha Framework, Chai Framework, Sinon Framework and Istanbul Code coverage Tool.",
        "Integrated Development Environments (IDE)": "Visual Studio Code"
    }
    },{
        "title":"ReactJS Framework",
        "kpis":{
            "State Management":"Context API, Flux, Redux, Recoil and Zustand",
            "Routing & Navigation":"React Router, Dynamic Routing and Nested Routes",
            "Forms & Validations":"Controlled/UnControlled Components, Formik, Yup Validation",
            "API Integration":"RESTFul API, GraphQL (using Axios, Fetch)",
            "UI Styling":"CSS, SASS, SCSS, Styled-Components and Material UI",
            "Build & Deployment":"Webpack, CI/CD Pipelines, Docker for React Apps",
            "Web Performance Optimization":"Memoization, Lazy-loading, Caching, Code splitting and tree-shaking",
            "Testing":"Unit Testing with Jest, React Testing Library, Cypress for E2E Testing",
            "Ecosystem Tools":"Storybook, ESLint, Prettier, Husky for pre-commit Hooks",
            "Extended Frameworks":"Create React App (CRA), Next.Js Framework, Remix Framework",
            "SEO Optimization":"Server-side Rendering(SSR) with Next.Js, Static-Site Generation (SSG), Dynamic Meta-tags Management (with React Helmet), Schema Markup (to enhance Search Engine Visibility), Core Web Vitals Optimization (CLS, LCP, FID)."
        }
    },
    {
        "title":"Angular Framework",
        "kpis":{
            "State Management": "NgRx, Services with RxJS, Akita",
            "Routing & Navigation": "Angular Router, Lazy Loading, Nested Routes, Route Guards",
            "Forms & Validations": "Template-driven Forms, Reactive Forms, Angular Validators, Custom Validators",
            "API Integration": "HTTPClient Module (RESTful API, GraphQL using Apollo Client)",
            "UI Styling": "CSS, SASS, SCSS, Angular Material, PrimeNG, ng-zorro",
            "Build & Deployment": "Angular CLI, Webpack, CI/CD Pipelines, Docker for Angular Apps",
            "Web Performance Optimization": "Lazy-loading, AOT (Ahead-of-Time) Compilation, Tree-shaking, Caching, Code Splitting",
            "Testing": "Unit Testing with Jasmine, Karma, Angular Testing Library, Cypress for E2E Testing",
            "Ecosystem Tools": "ESLint, Prettier, Husky for Pre-commit Hooks, TSLint (deprecated, replaced by ESLint)",
            "Extended Frameworks": "Angular Universal (SSR), Ionic Framework, Nx Workspace",
            "SEO Optimization": "Angular Universal (SSR), Static-Site Generation (SSG) with Angular, Dynamic Meta-tags Management (using Angular Meta), Schema Markup, Core Web Vitals Optimization (CLS, LCP, FID)"
        }
    }
    ]
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
            "Integrated Development Environments (IDE)": "Eclipse, Spring Tool Suite, IntelliJ",
            "Performance Tuning & Profiling":"JMeter"
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
            "Math-related Libraries": "NumPy (for Arthmetic/Arrays, Basic Linear Algebra, Basic Statistics & Probability), SciPy (for Advanced Linear Algebra, Calculus (Integration & Differentiation), Advanced Statistics & Probability) and Fourier / Signal Processing, SymPy (For Symbolic/Expression Mathematics on Linear Algebra, Calculus, Geometry, Statistics & Probability, Permutations & Combinations)",
            "Data-management Libraries":"Pandas (data handling from different formats - CSV, Excel, SQL, JSON, etc)",
            "Web/API Designing Frameworks": "DJango and Flask",
            "Design Architecture": "Microservices Architecture, Event Design Architecture, Serverless Architecture",
            "Integrated Development Environments (IDE)": "Visual Studio Code"
    }
    },{
        "title":"Web3 & Blockchain Platform",
        "kpis":{ 
            "Blockchain Layer #1 Networks": "",
            "Public Platforms": "Ethereum, Solana, Avalanche, Polkadot, Cardano",
            "Private Platforms": "Hyperledger Fabric, Quorum",
            "Consortium Platforms": "Hyperledger Besu, Corda",
            "Blockchain Layer #2 / Equivalent Networks": ""
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
                                    <span className={(kpiVal?.length>0)?"text-grey2":"text-grey2 resume-techstack-underline"}><b>{kpiKey} </b></span> 
                                    {(kpiVal?.length>0)?(<span><b>:</b> {kpiVal}</span> ):
                                        (<span className="text-grey2">-</span>)}
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