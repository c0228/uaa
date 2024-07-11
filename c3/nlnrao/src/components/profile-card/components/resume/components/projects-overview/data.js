import React from "react";

export const data = [{
    "companyName":"Synergy Netsoft pvt. ltd",
    "workDuration":"5 years 8 months",
    "timelines":[{
       "timeline":"June 2012 ~ August 2013",
       "workTitle":"Cisco - Voice Developers Platform",
       "projects":[{
           "title":"CCBU Demo Portal",
           "isProject": true,
           "desc":(<div>Customer Contact Business Unit (CCBU) is an IVR Architecture based telecom platform that is used to deploy and test the 
           IVR Phone-call projects. This Project consists of VXML Server that configured to a Phone Number and a Web Portal where customer can remotely 
           deploy their VXML Application into the VXML Server.</div>),
           "tags":["Website"],
           "projectDetails":{
             "Client Name":"Cisco Systems, Inc",
             "Team Size": 8,
             "My Roles": "Web Application Developer"
           },
           "projectTechStack":{
               "Software Life Cycle": "Agile Methodology",
               "Project Architecture": "Microservice Architecture",
               "Management Tools": "Jira, Atlassian Confluence",
               "Frontend Stack": "HTML, CSS, Javascript, Bootstrap, JQuery, Ajax, Angular JS",
               "Frontend Unit Testing": "Jasmine Framework and Karma Test Runner",
               "Backend Stack": "Java 7, Spring Framework (v.3), Spring MVC with Hibernate (Backend API Development)",
               "Backend Unit Testing": "JUnit Testing Framework and Mockito Framework",
               "Telecom Stack": "VoIP Gateway, Cisco Unified Intelligent Contact Management Enterprise (ICME), VXML Server, Cisco Call Studio",
               "End-to-End Testing": "Java Selenium Framework",
               "Protocols Used": "HTTP / HTTPS, SIP, H.323, WebSocket protocols and WebRTC Technologies",
               "Database Server": "Microsoft SQL Server",
               "Web Server": "GlassFish Web Server",
               "DevOps & CICD Tools": "Github (Source Version Control), Jenkins (Pipeline Orchestration), FindBugs and SonarCube Code Coverage Tool",
               "Integrated Development Environment (IDE)": (<div>NetBeans IDE,<br/> Cisco Call Studio</div>),
               "Browsers Supported": "Mozilla FireFox, Google Chrome and Internet Explorer 5, 6, 7"
           },
           "rolesAndresponsibilities":{
             "desc": (<div>I served as a Web Application Developer, seamlessly integrating telecommunications and web technologies to construct a 
             robust application. My Duties are</div>),
             "details":[{
               "role": "Frontend Development",
               "responsibilities": [(<div>Designing and Implementing user interfaces by incorporating responsive design principles for a 
                       seamless user experience.</div>),
                       (<div>Ensured cross-browser compatibility for consistent performance across various web browsers, 
                       enhancing the accessibility of the Website.</div>)]
             },{
               "role": "Backend API Development",
               "responsibilities": [(<div>Implementing Server-side business logic that connects Telecom and Web Connectivity.</div>),
                 (<div>Integrating Hibernate for efficient data persistence and data management.</div>),
                 (<div>Ensuring data security and integrity through proper authentication and authorization mechanism.</div>)
               ]
             },{
               "role":"Telecom Tech Integration",
               "responsibilities":[(<div>Configured VoIP Gateways for optimized PSTN Inbound call handling, implementing dynamic 
                       routing strategies for optimal resource usage.</div>),
                       (<div>Utilized Cisco Unified Intelligent Contact Management Enterprise (ICME) for intelligent call routing.</div>),
                     (<div>Integrated the VXML Server to facilitate remote IVR project deployment through a user-friendly portal.</div>)]
             },{
               "role":"Working with Communication Protocols",
               "responsibilities":[(<div>Leveraged SIP for robust VoIP communication, H.323 for audio data transmission, and WebSocket for real-time 
                 bidirectional communication, enhancing the seamless integration of telecom technologies within the IVR Phone-call 
                 deployment and testing platform.</div>)]
             }]
           },
         "challenges":[{
           "title":"Integration Complexity",
           "challenge": (<div>Integrating diverse technologies such as VoIP, VXML, and web technologies can be complex, leading to 
             interoperability challenges</div>),
           "solution": [(<div>Leveraged SIP for robust VoIP communication, H.323 for audio data transmission, and WebSocket for real-time 
             bidirectional communication, enhancing the seamless integration of telecom technologies within the IVR Phone-call 
             deployment and testing platform.</div>)]
         },{
           "title":"Telecom Technology Challenges",
           "challenge":(<div>Addressing the intricacies of VoIP protocols (SIP, H.323) and ensuring seamless communication.</div>),
           "solution":[(<div>Engaged in continuous learning to stay updated on telecom protocols. Collaborated with telecom 
             experts to troubleshoot and resolve protocol-related issues promptly. Implemented robust error handling mechanisms 
             to enhance system resilience.</div>)]
         },{
           "title":"Scalability Challenges",
           "challenge":(<div>Ensuring the system can handle a growing number of concurrent users and increasing project deployments.</div>),
           "solution":[(<div>Implemented microservices architecture to allow for scalable and independent deployment of components. 
             Utilized load testing tools to identify bottlenecks and optimize system performance. Implemented caching mechanisms and 
             optimized database queries for improved scalability.</div>)]
         },{
           "title":"Security Measures",
           "challenge":(<div>Ensuring data security and integrity in a telecom and web environment with sensitive information.</div>),
           "solution":[(<div>Implemented secure coding practices, including input validation and output encoding, to prevent common 
             security vulnerabilities. Employed HTTPS for secure communication, implemented role-based access control, and regularly 
             updated security protocols to stay compliant with industry standards.</div>)]
         }],
         "achievements":[{
           "title":"Microservice Architecture Implementation",
           "achievement":(<div>Designed and implemented a microservices architecture for the CCBU Demo Portal, enhancing scalability, 
             maintainability, and deployment flexibility.</div>),
           "outcome":[(<div>Streamlined development processes and improved the platform's ability to handle growing user loads.</div>)]
         },{
           "title":"Efficient Frontend Development with Responsive UI",
           "achievement":(<div>Spearheaded frontend development efforts, incorporating responsive design principles for a 
             seamless user experience across various devices.</div>),
           "outcome":[(<div>Delivered an intuitive and user-friendly web portal, improving accessibility and overall user satisfaction.</div>)]
         },{
           "title":"Robust Backend API Development Using Java and Spring",
           "achievement":(<div>Developed a resilient backend API using Java 7 and the Spring Framework, integrating Hibernate 
             for efficient data persistence and management.</div>),
           "outcome":[(<div>Ensured data integrity, efficient data handling, and a scalable backend infrastructure.</div>)]
         },{
           "title":"Telecom Technology Integration for IVR Phone-Call Projects",
           "achievement":(<div>Successfully integrated VoIP Gateways, Cisco Unified Intelligent Contact Management Enterprise (ICME), and 
             VXML Server, creating a comprehensive platform for deploying and testing IVR phone-call projects.</div>),
           "outcome":[(<div>Enabled the seamless deployment and testing of IVR projects, enhancing the telecommunications capabilities 
             of the platform.</div>)]
         },{
           "title":"Effective Use of Communication Protocols",
           "achievement":(<div>Leveraged HTTP/HTTPS, SIP, H.323, and WebSocket protocols to establish robust communication channels, 
             enhancing the seamless integration of telecom technologies within the IVR deployment and testing platform.</div>),
           "outcome":[(<div>Improved communication reliability and real-time bidirectional capabilities for enhanced user interactions.</div>)]
         },{
           "title":"Secure and Authenticated Web Portal",
           "achievement":(<div>Implemented strong authentication and authorization mechanisms to ensure data security and integrity in the web portal.</div>),
           "outcome":[(<div>Enhanced overall security, protecting sensitive information and ensuring a secure user environment.</div>)]
         },{
           "title":"Agile Development Methodology",
           "achievement":(<div>Successfully adhered to Agile development methodologies, fostering collaboration, iterative development, 
             and adaptability to changing project requirements.</div>),
           "outcome":[(<div>Improved project responsiveness to changing requirements, leading to faster development cycles and increased 
             customer satisfaction.</div>)]
         },{
           "title":"Continuous Integration and Deployment (CI/CD)",
           "achievement":(<div>Implemented a CI/CD pipeline using GitHub for source version control and Jenkins for pipeline orchestration.</div>),
           "outcome":[(<div>Streamlined development workflows, enabling automated builds, tests, and deployments for increased development efficiency.</div>)]
         },{
           "title":"Improved Deployment Efficiency",
           "achievement":(<div>Achieved remote deployment capabilities through the user-friendly web portal.</div>),
           "outcome":[(<div>Empowered customers to deploy VXML applications into the VXML Server seamlessly, improving overall deployment efficiency.</div>)]
         },{
           "title":"Optimized VoIP Gateway Configuration",
           "achievement":(<div>Configured VoIP Gateways for optimized PSTN inbound call handling, implementing dynamic routing strategies.</div>),
           "outcome":[(<div>Improved call efficiency and resource usage, ensuring optimal performance of the telecommunications infrastructure.</div>)]
         }
       ]
       },{
         "title":"Vocal Flow Simulator",
         "isPOC": true,
         "desc":(<div>This an extensive POC Idea of adding VocalFlow Simulator to the Customer Contact Business Unit (CCBU) to enhance IVR 
           testing and simulation capabilities. This simulator is engineered to emulate real-world IVR interactions through simulated calls, 
           providing a controlled environment for rigorous testing while concurrently reducing the dependency on the traditional telephony 
           infrastructure.</div>),
         "tags":["Website","Desktop App"],
         "projectDetails":{
             "Client Name":"Cisco Systems, Inc",
             "Team Size": 5,
             "My Roles": "Web & Desktop App Developer"
           },
       }]
    }]
   }];