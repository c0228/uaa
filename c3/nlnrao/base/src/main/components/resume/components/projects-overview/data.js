import React from "react";

export const data = [{
    "timelines":[{
       "timeline":"June 2012 ~ August 2014",
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
               "Software Life Cycle": "Agile Methodology (Scrum Framework)",
               "Project Architecture": "Microservice Architecture",
               "Management Tools": "Jira, Atlassian Confluence, SVN (Code Version-Control)",
               "Frontend Stack": "HTML, CSS, Javascript, Bootstrap, JQuery, Ajax, Angular JS",
               "Frontend Unit Testing": "Jasmine Framework and Karma Test Runner",
               "Backend Stack": "Java 7, Spring Framework (v.3), Spring MVC with Hibernate (Backend API Development)",
               "Backend Unit Testing": "JUnit Testing Framework and Mockito Framework",
               "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-First Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-First Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),
               "Telecom Stack": "VoIP Gateway, Cisco Unified Intelligent Contact Management Enterprise (ICME), VXML Server, Cisco Call Studio",
               "End-to-End Testing": "Java Selenium Framework",
               "Protocols Used": "HTTP / HTTPS, SIP, H.323, WebSocket protocols and WebRTC Technologies",
               "Database Servers": "Microsoft SQL Server",
               "Web Servers": "GlassFish Web Server",
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
         "desc":(<div>The <span className="text-grey2"><b>Vocal Flow Simulator</b></span> is an advanced Proof of Concept (POC) 
            initiative designed for the <span className="text-grey2"><b>Customer Contact 
            Business Unit (CCBU)</b></span> to augment and modernize IVR testing and simulation capabilities. The simulator replicates 
            real-world <span className="text-grey2"><b>Interactive Voice Response (IVR)</b></span> interactions by simulating call flows 
            and vocal inputs, allowing QA engineers and developers to test IVR applications in 
            a <span className="text-grey2"><b>controlled virtual environment</b></span> without dependency on traditional telephony 
            hardware.<br/> This solution aims to accelerate the IVR deployment lifecycle, enhance testing coverage, and optimize the cost of 
            infrastructure maintenance.</div>),
         "tags":["Website","Desktop App"],
         "projectDetails":{
             "Client Name":"Cisco Systems, Inc",
             "Team Size": 5,
             "My Roles": "Web & Desktop App Developer"
           },
           "projectTechStack":{
              "Software Life Cycle": "Agile Methodology (Scrum Framework)",
              "Project Architecture": "Multi-tier MVC Architecture",
              "Management Tools": "Jira, Atlassian Confluence, SVN (Code Version-Control)",
              "FRONTEND STACK": {
                "Technologies": "HTML5, CSS3, JavaScript, jQuery, Bootstrap",
                "Desktop Variant": "JavaFX-based desktop app (early prototype used Qt WebKit)",
                "UI Libraries": "jQuery UI, D3.js (for IVR flow visualization)",
                "Frontend Unit Testing": "Jasmine Framework, QUnit Framework, JUnit (for JavaFX UI logic)"
              },
              "FRONTEND TESTING": {
                "Unit Testing": (<div><span className="text-grey2"><b>Jasmine Framework</b></span> and <span className="text-grey2"><b>QUnit Framework</b></span> (for 
                  validating individual UI components, DOM events, and JavaScript logic)</div>),
                "Integration Testing":(<div><span className="text-grey2"><b>JUnit</b></span> (for JavaFX) and <span className="text-grey2"><b>Selenium WebDriver</b></span> (for 
                  verifying UI integration with backend APIs)</div>),
                "Functional Testing":"Manual and automated validation of IVR flow visualizations and dynamic state transitions",
                "Regression Testing": (<div>Automated test suites triggered via <span className="text-grey2"><b>Jenkins</b></span> after each frontend deployment</div>),
                "Cross-Browser Testing":(<div>Verified compatibility across Chrome, Firefox, and Internet Explorer 9+ 
                        using <span className="text-grey2"><b>BrowserStack</b></span> and manual QA validation</div>),
                "Performance Testing":(<div><span className="text-grey2"><b>Lighthouse</b></span> and <span className="text-grey2"><b>Browser developer tools</b></span> for measuring rendering performance and load times</div>),
              },
              "BACKEND STACK": {
                "Languages":"Java (Core, J2EE)",
                "Frameworks": "Spring MVC, Hibernate ORM",
                "Core Modules": "Custom-built IVR simulation engine using VXML and XML parsers", 
                "API Design": "RESTful endpoints developed using Jersey and Spring REST",
                "Concurrency": "Thread pooling and asynchronous job queues for multi-session simulations",
                "Caching":"Ehcache for simulation replay optimization",
                "Security":"Basic Auth and token validation for secure access",
                "Logging and Monitoring":"Log4j and JMX for runtime performance tracking",
              },
              "BACKEND TESTING": {
                "Unit Testing": (<div><span className="text-grey2"><b>JUnit</b></span>, <span className="text-grey2"><b>Mockito</b></span> (for 
                  service and DAO layer validation)</div>),
                "Integration Testing":"REST Assured for API-level contract testing",
                "Load Testing": (<div><span className="text-grey2"><b>Apache JMeter</b></span> (for concurrent simulation and stress testing)</div>),
                "Database Testing": (<div><span className="text-grey2"><b>DBUnit</b></span> (for CRUD operation validation and rollback verification)</div>),
                "Continuous Testing": (<div><span className="text-grey2"><b>Jenkins</b></span> integrated test pipelines for regression and nightly builds</div>),
              },
              "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-Last Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-Last Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),
              "Telecom Stack": "",
               "End-to-End Testing": "",
               "Protocols Used": "",
               "Database Servers": "",
               "Web Servers": "",
               "DevOps & CICD Tools": "",
               "Integrated Development Environment (IDE)": (<div>NetBeans IDE,<br/> Cisco Call Studio</div>),
               "Browsers Supported": ""
           }
       }]
    },{
      "timeline":"September 2014 ~ February 2015",
      "workTitle":"Roger's IVR Solutions",
      "projects":[{
          "title":"Roger's IVR Solutions",
          "isProject": true,
          "desc":(<div></div>),
          "tags":["Website"],
          "projectDetails":{
            "Client Name":"",
            "Team Size": 6,
            "My Roles": ""
          },
          "projectTechStack":{
              "Software Life Cycle": "Agile Methodology",
              "Project Architecture": "Microservice Architecture",
              "Management Tools": "Jira, Atlassian Confluence",
              "Frontend Stack": "HTML, CSS, Javascript, Bootstrap, JQuery, Ajax, Angular JS",
              "Frontend Unit Testing": "Jasmine Framework and Karma Test Runner",
              "Backend Stack": "Java 7, Spring Framework (v.3), Spring MVC with Hibernate (Backend API Development)",
              "Backend Unit Testing": "JUnit Testing Framework and Mockito Framework",
              "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-First Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-First Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),
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
            "desc": (<div></div>),
            "details":[{
              "role": "Frontend Development",
              "responsibilities": [(<div></div>),
                      (<div></div>)]
            },{
              "role": "Backend API Development",
              "responsibilities": [(<div></div>),
                (<div></div>),
                (<div></div>)
              ]
            },{
              "role":"Telecom Tech Integration",
              "responsibilities":[(<div></div>),
                      (<div></div>),
                    (<div></div>)]
            },{
              "role":"Working with Communication Protocols",
              "responsibilities":[(<div></div>)]
            }]
          },
        "challenges":[{
          "title":"Integration Complexity",
          "challenge": (<div></div>),
          "solution": [(<div></div>)]
        },{
          "title":"Telecom Technology Challenges",
          "challenge":(<div></div>),
          "solution":[(<div></div>)]
        },{
          "title":"Scalability Challenges",
          "challenge":(<div></div>),
          "solution":[(<div></div>)]
        },{
          "title":"Security Measures",
          "challenge":(<div></div>),
          "solution":[(<div></div>)]
        }],
        "achievements":[{
          "title":"Microservice Architecture Implementation",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Efficient Frontend Development with Responsive UI",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Robust Backend API Development Using Java and Spring",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Telecom Technology Integration for IVR Phone-Call Projects",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Effective Use of Communication Protocols",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Secure and Authenticated Web Portal",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Agile Development Methodology",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Continuous Integration and Deployment (CI/CD)",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Improved Deployment Efficiency",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        },{
          "title":"Optimized VoIP Gateway Configuration",
          "achievement":(<div></div>),
          "outcome":[(<div></div>)]
        }
      ]
      }]
   },
   {
    "timeline":"February 2015 ~ December 2016",
    "workTitle":"Greyhound Bus Transportation",
    "projects":[{
        "title":"Fleet Management and Booking System",
        "isProject": true,
        "desc":(<div></div>),
        "tags":["Website"],
        "projectDetails":{
          "Client Name":"",
          "Team Size": 6,
          "My Roles": ""
        },
        "projectTechStack":{
            "Software Life Cycle": "",
            "Project Architecture": "",
            "Management Tools": "",
            "Frontend Stack": "",
            "Frontend Unit Testing": "",
            "Backend Stack": "",
            "Backend Unit Testing": "",
            "Telecom Stack": "",
            "End-to-End Testing": "",
            "Protocols Used": "",
            "Database Server": "",
            "Web Server": "",
            "DevOps & CICD Tools": "",
            "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
            "Browsers Supported": ""
        },
        "rolesAndresponsibilities":{
          "desc": (<div></div>),
          "details":[{
            "role": "Frontend Development",
            "responsibilities": [(<div></div>),
                    (<div></div>)]
          }]
        },
      "challenges":[{
        "title":"Integration Complexity",
        "challenge": (<div></div>),
        "solution": [(<div></div>)]
      }],
      "achievements":[{
        "title":"Microservice Architecture Implementation",
        "achievement":(<div></div>),
        "outcome":[(<div></div>)]
      }]
    },{
      "title":"Live GPS Tracking and Geofencing System",
      "isPOC": true,
      "desc":(<div></div>),
      "tags":["Website"],
      "projectDetails":{
        "Client Name":"",
        "Team Size": 6,
        "My Roles": ""
      },
      "projectTechStack":{
          "Software Life Cycle": "",
          "Project Architecture": "",
          "Management Tools": "",
          "Frontend Stack": "",
          "Frontend Unit Testing": "",
          "Backend Stack": "",
          "Backend Unit Testing": "",
          "Telecom Stack": "",
          "End-to-End Testing": "",
          "Protocols Used": "",
          "Database Server": "",
          "Web Server": "",
          "DevOps & CICD Tools": "",
          "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
          "Browsers Supported": ""
      },
      "rolesAndresponsibilities":{
        "desc": (<div></div>),
        "details":[{
          "role": "Frontend Development",
          "responsibilities": [(<div></div>),
                  (<div></div>)]
        }]
      },
    "challenges":[{
      "title":"Integration Complexity",
      "challenge": (<div></div>),
      "solution": [(<div></div>)]
    }],
    "achievements":[{
      "title":"Microservice Architecture Implementation",
      "achievement":(<div></div>),
      "outcome":[(<div></div>)]
    }]
  }]
 },{
  "timeline":"January 2017 ~ March 2018",
  "workTitle":"Safeway Retail Service",
  "projects":[{
      "title":"Order, Returns and Refund System",
      "isProject": true,
      "desc":(<div></div>),
      "tags":["Website"],
      "projectDetails":{
        "Client Name":"",
        "Team Size": 6,
        "My Roles": ""
      },
      "projectTechStack":{
          "Software Life Cycle": "",
          "Project Architecture": "",
          "Management Tools": "",
          "Frontend Stack": "",
          "Frontend Unit Testing": "",
          "Backend Stack": "",
          "Backend Unit Testing": "",
          "Telecom Stack": "",
          "End-to-End Testing": "",
          "Protocols Used": "",
          "Database Server": "",
          "Web Server": "",
          "DevOps & CICD Tools": "",
          "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
          "Browsers Supported": ""
      },
      "rolesAndresponsibilities":{
        "desc": (<div></div>),
        "details":[{
          "role": "Frontend Development",
          "responsibilities": [(<div></div>),
                  (<div></div>)]
        }]
      },
    "challenges":[{
      "title":"Integration Complexity",
      "challenge": (<div></div>),
      "solution": [(<div></div>)]
    }],
    "achievements":[{
      "title":"Microservice Architecture Implementation",
      "achievement":(<div></div>),
      "outcome":[(<div></div>)]
    }]
  },
  {
    "title":"Personalized Recommendation Engine",
    "isProject": true,
    "desc":(<div></div>),
    "tags":["Website"],
    "projectDetails":{
      "Client Name":"",
      "Team Size": 6,
      "My Roles": ""
    },
    "projectTechStack":{
        "Software Life Cycle": "",
        "Project Architecture": "",
        "Management Tools": "",
        "Frontend Stack": "",
        "Frontend Unit Testing": "",
        "Backend Stack": "",
        "Backend Unit Testing": "",
        "Telecom Stack": "",
        "End-to-End Testing": "",
        "Protocols Used": "",
        "Database Server": "",
        "Web Server": "",
        "DevOps & CICD Tools": "",
        "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
        "Browsers Supported": ""
    },
    "rolesAndresponsibilities":{
      "desc": (<div></div>),
      "details":[{
        "role": "Frontend Development",
        "responsibilities": [(<div></div>),
                (<div></div>)]
      }]
    },
  "challenges":[{
    "title":"Integration Complexity",
    "challenge": (<div></div>),
    "solution": [(<div></div>)]
  }],
  "achievements":[{
    "title":"Microservice Architecture Implementation",
    "achievement":(<div></div>),
    "outcome":[(<div></div>)]
  }]
},{
  "title":"Visual Search & Augmented Reality",
  "isPOC": true,
  "desc":(<div></div>),
  "tags":["Website"],
  "projectDetails":{
    "Client Name":"",
    "Team Size": 6,
    "My Roles": ""
  },
  "projectTechStack":{
      "Software Life Cycle": "",
      "Project Architecture": "",
      "Management Tools": "",
      "Frontend Stack": "",
      "Frontend Unit Testing": "",
      "Backend Stack": "",
      "Backend Unit Testing": "",
      "Telecom Stack": "",
      "End-to-End Testing": "",
      "Protocols Used": "",
      "Database Server": "",
      "Web Server": "",
      "DevOps & CICD Tools": "",
      "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
      "Browsers Supported": ""
  },
  "rolesAndresponsibilities":{
    "desc": (<div></div>),
    "details":[{
      "role": "Frontend Development",
      "responsibilities": [(<div></div>),
              (<div></div>)]
    }]
  },
"challenges":[{
  "title":"Integration Complexity",
  "challenge": (<div></div>),
  "solution": [(<div></div>)]
}],
"achievements":[{
  "title":"Microservice Architecture Implementation",
  "achievement":(<div></div>),
  "outcome":[(<div></div>)]
}]
}]
}]
},
{
  "companyName":"Technosoft Company",
  "workDuration":"3 months",
  "timelines":[{
    "timeline":"March 2018 ~ June 2018",
    "workTitle":"United Health Group",
    "projects":[{
        "title":"Cirrus Systems",
        "isProject": true,
        "desc":(<div></div>),
        "tags":["Website"],
        "projectDetails":{
          "Client Name":"",
          "Team Size": 6,
          "My Roles": ""
        },
        "projectTechStack":{
            "Software Life Cycle": "",
            "Project Architecture": "",
            "Management Tools": "",
            "Frontend Stack": "",
            "Frontend Unit Testing": "",
            "Backend Stack": "",
            "Backend Unit Testing": "",
            "Telecom Stack": "",
            "End-to-End Testing": "",
            "Protocols Used": "",
            "Database Server": "",
            "Web Server": "",
            "DevOps & CICD Tools": "",
            "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
            "Browsers Supported": ""
        },
        "rolesAndresponsibilities":{
          "desc": (<div></div>),
          "details":[{
            "role": "Frontend Development",
            "responsibilities": [(<div></div>),
                    (<div></div>)]
          }]
        },
      "challenges":[{
        "title":"Integration Complexity",
        "challenge": (<div></div>),
        "solution": [(<div></div>)]
      }],
      "achievements":[{
        "title":"Microservice Architecture Implementation",
        "achievement":(<div></div>),
        "outcome":[(<div></div>)]
      }]
    }]
 }]
},
{
  "companyName":"Cognizant Technology Solutions (CTS)",
  "workDuration":"2 years 8 months",
  "timelines":[{
    "timeline":"November 2018 ~ January 2020",
    "workTitle":"Northern Trust Bank",
    "projects":[{
        "title":"Nexus Systems",
        "isProject": true,
        "desc":(<div></div>),
        "tags":["Website"],
        "projectDetails":{
          "Client Name":"",
          "Team Size": 6,
          "My Roles": ""
        },
        "projectTechStack":{
            "Software Life Cycle": "",
            "Project Architecture": "",
            "Management Tools": "",
            "Frontend Stack": "",
            "Frontend Unit Testing": "",
            "Backend Stack": "",
            "Backend Unit Testing": "",
            "Telecom Stack": "",
            "End-to-End Testing": "",
            "Protocols Used": "",
            "Database Server": "",
            "Web Server": "",
            "DevOps & CICD Tools": "",
            "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
            "Browsers Supported": ""
        },
        "rolesAndresponsibilities":{
          "desc": (<div></div>),
          "details":[{
            "role": "Frontend Development",
            "responsibilities": [(<div></div>),
                    (<div></div>)]
          }]
        },
      "challenges":[{
        "title":"Integration Complexity",
        "challenge": (<div></div>),
        "solution": [(<div></div>)]
      }],
      "achievements":[{
        "title":"Microservice Architecture Implementation",
        "achievement":(<div></div>),
        "outcome":[(<div></div>)]
      }]
    },{
      "title":"Pinnacles Files: A Comprehensive File Management Platform",
      "isPOC": true,
      "desc":(<div></div>),
      "tags":["Website"],
      "projectDetails":{
        "Client Name":"",
        "Team Size": 6,
        "My Roles": ""
      },
      "projectTechStack":{
          "Software Life Cycle": "",
          "Project Architecture": "",
          "Management Tools": "",
          "Frontend Stack": "",
          "Frontend Unit Testing": "",
          "Backend Stack": "",
          "Backend Unit Testing": "",
          "Telecom Stack": "",
          "End-to-End Testing": "",
          "Protocols Used": "",
          "Database Server": "",
          "Web Server": "",
          "DevOps & CICD Tools": "",
          "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
          "Browsers Supported": ""
      },
      "rolesAndresponsibilities":{
        "desc": (<div></div>),
        "details":[{
          "role": "Frontend Development",
          "responsibilities": [(<div></div>),
                  (<div></div>)]
        }]
      },
    "challenges":[{
      "title":"Integration Complexity",
      "challenge": (<div></div>),
      "solution": [(<div></div>)]
    }],
    "achievements":[{
      "title":"Microservice Architecture Implementation",
      "achievement":(<div></div>),
      "outcome":[(<div></div>)]
    }]
  },{
    "title":"Blockchain based Audit Trial and Logging System",
    "isPOC": true,
    "desc":(<div></div>),
    "tags":["Website"],
    "projectDetails":{
      "Client Name":"",
      "Team Size": 6,
      "My Roles": ""
    },
    "projectTechStack":{
        "Software Life Cycle": "",
        "Project Architecture": "",
        "Management Tools": "",
        "Frontend Stack": "",
        "Frontend Unit Testing": "",
        "Backend Stack": "",
        "Backend Unit Testing": "",
        "Telecom Stack": "",
        "End-to-End Testing": "",
        "Protocols Used": "",
        "Database Server": "",
        "Web Server": "",
        "DevOps & CICD Tools": "",
        "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
        "Browsers Supported": ""
    },
    "rolesAndresponsibilities":{
      "desc": (<div></div>),
      "details":[{
        "role": "Frontend Development",
        "responsibilities": [(<div></div>),
                (<div></div>)]
      }]
    },
  "challenges":[{
    "title":"Integration Complexity",
    "challenge": (<div></div>),
    "solution": [(<div></div>)]
  }],
  "achievements":[{
    "title":"Microservice Architecture Implementation",
    "achievement":(<div></div>),
    "outcome":[(<div></div>)]
  }]
}]
 },{
  "timeline":"January 2020 ~ February 2021",
  "workTitle":"Toyata's Car Dealer System",
  "projects":[{
      "title":"Car Dealer System",
      "isProject": true,
      "desc":(<div></div>),
      "tags":["Website"],
      "projectDetails":{
        "Client Name":"",
        "Team Size": 6,
        "My Roles": ""
      },
      "projectTechStack":{
          "Software Life Cycle": "",
          "Project Architecture": "",
          "Management Tools": "",
          "Frontend Stack": "",
          "Frontend Unit Testing": "",
          "Backend Stack": "",
          "Backend Unit Testing": "",
          "Telecom Stack": "",
          "End-to-End Testing": "",
          "Protocols Used": "",
          "Database Server": "",
          "Web Server": "",
          "DevOps & CICD Tools": "",
          "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
          "Browsers Supported": ""
      },
      "rolesAndresponsibilities":{
        "desc": (<div></div>),
        "details":[{
          "role": "Frontend Development",
          "responsibilities": [(<div></div>),
                  (<div></div>)]
        }]
      },
    "challenges":[{
      "title":"Integration Complexity",
      "challenge": (<div></div>),
      "solution": [(<div></div>)]
    }],
    "achievements":[{
      "title":"Microservice Architecture Implementation",
      "achievement":(<div></div>),
      "outcome":[(<div></div>)]
    }]
  }]
},{
  "timeline":"February 2021 ~ June 2021",
  "workTitle":"Walmart Retailer Corp.",
  "projects":[{
      "title":"Payment Gateway",
      "isProject": true,
      "desc":(<div></div>),
      "tags":["Website"],
      "projectDetails":{
        "Client Name":"",
        "Team Size": 6,
        "My Roles": ""
      },
      "projectTechStack":{
          "Software Life Cycle": "",
          "Project Architecture": "",
          "Management Tools": "",
          "Frontend Stack": "",
          "Frontend Unit Testing": "",
          "Backend Stack": "",
          "Backend Unit Testing": "",
          "Telecom Stack": "",
          "End-to-End Testing": "",
          "Protocols Used": "",
          "Database Server": "",
          "Web Server": "",
          "DevOps & CICD Tools": "",
          "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
          "Browsers Supported": ""
      },
      "rolesAndresponsibilities":{
        "desc": (<div></div>),
        "details":[{
          "role": "Frontend Development",
          "responsibilities": [(<div></div>),
                  (<div></div>)]
        }]
      },
    "challenges":[{
      "title":"Integration Complexity",
      "challenge": (<div></div>),
      "solution": [(<div></div>)]
    }],
    "achievements":[{
      "title":"Microservice Architecture Implementation",
      "achievement":(<div></div>),
      "outcome":[(<div></div>)]
    }]
  }]
}]
},{
  "companyName":"Quadratics Software Systems",
  "workDuration":"11 months",
  "timelines":[{
    "timeline":"June 2021 ~ April 2022",
    "workTitle":"All State Insurance",
    "projects":[{
        "title":"Canonical Modeling Tool (CMT)",
        "isProject": true,
        "desc":(<div></div>),
        "tags":["Website"],
        "projectDetails":{
          "Client Name":"",
          "Team Size": 6,
          "My Roles": ""
        },
        "projectTechStack":{
            "Software Life Cycle": "",
            "Project Architecture": "",
            "Management Tools": "",
            "Frontend Stack": "",
            "Frontend Unit Testing": "",
            "Backend Stack": "",
            "Backend Unit Testing": "",
            "Telecom Stack": "",
            "End-to-End Testing": "",
            "Protocols Used": "",
            "Database Server": "",
            "Web Server": "",
            "DevOps & CICD Tools": "",
            "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
            "Browsers Supported": ""
        },
        "rolesAndresponsibilities":{
          "desc": (<div></div>),
          "details":[{
            "role": "Frontend Development",
            "responsibilities": [(<div></div>),
                    (<div></div>)]
          }]
        },
      "challenges":[{
        "title":"Integration Complexity",
        "challenge": (<div></div>),
        "solution": [(<div></div>)]
      }],
      "achievements":[{
        "title":"Microservice Architecture Implementation",
        "achievement":(<div></div>),
        "outcome":[(<div></div>)]
      }]
    }]
  }]
},{
  "companyName":"Tescra Software Systems",
  "workDuration":"1 year 5 months",
  "timelines":[{
    "timeline":"May 2022 ~ Sep 2023",
    "workTitle":"ZS AI & Analytics CRM",
    "projects":[{
        "title":"Personalize.AI Solution",
        "isProject": true,
        "desc":(<div></div>),
        "tags":["Website"],
        "projectDetails":{
          "Client Name":"",
          "Team Size": 6,
          "My Roles": ""
        },
        "projectTechStack":{
            "Software Life Cycle": "",
            "Project Architecture": "",
            "Management Tools": "",
            "Frontend Stack": "",
            "Frontend Unit Testing": "",
            "Backend Stack": "",
            "Backend Unit Testing": "",
            "Telecom Stack": "",
            "End-to-End Testing": "",
            "Protocols Used": "",
            "Database Server": "",
            "Web Server": "",
            "DevOps & CICD Tools": "",
            "Integrated Development Environment (IDE)": (<div>Eclipse IDE</div>),
            "Browsers Supported": ""
        },
        "rolesAndresponsibilities":{
          "desc": (<div></div>),
          "details":[{
            "role": "Frontend Development",
            "responsibilities": [(<div></div>),
                    (<div></div>)]
          }]
        },
      "challenges":[{
        "title":"Integration Complexity",
        "challenge": (<div></div>),
        "solution": [(<div></div>)]
      }],
      "achievements":[{
        "title":"Microservice Architecture Implementation",
        "achievement":(<div></div>),
        "outcome":[(<div></div>)]
      }]
    }]
  }]
}];