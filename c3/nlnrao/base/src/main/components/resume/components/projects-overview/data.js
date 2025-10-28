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
              "1. Project Execution Workflow":{
                "Software Life Cycle": "Agile Methodology (Scrum Framework)",
                "Project Architecture": "Multi-tier MVC Architecture",
                "Management Tools": "Jira, Atlassian Confluence, SVN (Code Version-Control)",
                "Integrated Development Environment (IDE)": (<div><span className="text-grey2"><b>NetBeans IDE</b></span> (JavaFX 
                Development), <span className="text-grey2"><b>Eclipse</b></span> (for Backend Development)</div>),
               "Browsers Supported": (<div>Chrome, Firefox, and Internet Explorer 9+</div>)
              },
              "2. Frontend Development": {
                "Web Interface": "HTML5, CSS3, JavaScript, jQuery, Bootstrap",
                "Desktop Variant": "JavaFX-based desktop app (early prototype used Qt WebKit)",
                "UI Components": "Interactive tree-based IVR flow visualizer and live simulation status dashboard",
                "UI Libraries": "jQuery UI, D3.js (for IVR flow visualization)",
                "Frontend Unit Testing": "Jasmine Framework, QUnit Framework, JUnit (for JavaFX UI logic)"
              },
              "3. Frontend Testing": {
                "Unit Testing": (<div><span className="text-grey2"><b>Jasmine Framework</b></span> and <span className="text-grey2"><b>QUnit Framework</b></span> (for 
                  validating individual UI components, DOM events, and JavaScript logic)</div>),
                "Integration Testing":(<div><span className="text-grey2"><b>JUnit</b></span> (for JavaFX) and <span className="text-grey2"><b>Selenium WebDriver</b></span> (for 
                  verifying UI integration with backend APIs)</div>),
                "Functional Testing":"Manual and automated validation of IVR flow visualizations and dynamic state transitions",
                "Regression Testing": (<div>Automated test suites triggered via <span className="text-grey2"><b>Jenkins</b></span> after each frontend deployment</div>),
                "Cross-Browser Testing":(<div>Verified compatibility across Chrome, Firefox, and Internet Explorer 9+ 
                        using <span className="text-grey2"><b>BrowserStack</b></span> and manual QA validation</div>),
                "Performance Testing":(<div><span className="text-grey2"><b>YSlow</b></span> and <span className="text-grey2"><b>Chrome Developer Tools</b></span> for measuring rendering performance and load times</div>),
                "End-to-End Testing": (<div><span className="text-grey2"><b>Selenium</b></span> (for automated UI workflow validation), <span className="text-grey2"><b>Custom IVR scripts</b></span> (to simulate end-to-end call flows, including DTMF input and 
                  VXML response verification)</div>),
              },
              "4. Backend Development": {
                "Languages":"Java (Core, J2EE)",
                "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-Last Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-Last Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),     
                "Frameworks": "Spring MVC, Hibernate ORM",
                "Core Modules": "Custom-built IVR simulation engine using VXML and XML parsers", 
                "API Design": "RESTful endpoints developed using Jersey and Spring REST",
                "Concurrency": "Thread pooling and asynchronous job queues for multi-session simulations",
                "Caching":"Ehcache for simulation replay optimization",
                "Security":"Basic Auth and token validation for secure access",
                "Logging and Monitoring":"Log4j and JMX for runtime performance tracking",
              },
              "5. Backend Testing": {
                "Unit Testing": (<div><span className="text-grey2"><b>JUnit</b></span>, <span className="text-grey2"><b>Mockito</b></span> (for 
                  service and DAO layer validation)</div>),
                "Integration Testing":"REST Assured for API-level contract testing",
                "Load Testing": (<div><span className="text-grey2"><b>Apache JMeter</b></span> (for concurrent simulation and stress testing)</div>),
                "Database Testing": (<div><span className="text-grey2"><b>DBUnit</b></span> (for CRUD operation validation and rollback verification)</div>),
                "Continuous Testing": (<div><span className="text-grey2"><b>Jenkins</b></span> integrated test pipelines for regression and nightly builds</div>),
              },
              "6. Telecom Technologies":{
                "Asterisk PBX (Open Source)": "Served as the primary call simulation engine. It handled SIP signaling, call routing, DTMF tone processing, and integration with the VXML Server to emulate real-world IVR behavior.",
                "VXML Server (CCBU Integration)":"Hosted and executed customer-provided VXML applications. Each application was mapped to a virtual phone number that could be triggered from the simulator UI or test scripts.",
                "FreeSWITCH (Media Gateway)":"Used for handling concurrent call sessions, RTP audio streams, and codec conversions. Supported simulation of multiple IVR sessions simultaneously during stress testing.",
                "OpenSIPS / Kamailio (SIP Proxy)":"Acted as a signaling layer for managing SIP message routing between the simulator, PBX, and VXML server components.",
                "Softphone Clients (Zoiper, X-Lite)": "Utilized during integration testing to manually validate call flows, play DTMF tones, and verify audio prompts during simulation cycles.",
                "Media Server Extensions (Asterisk Media Plugins)": "Enabled playback of pre-recorded voice prompts, detection of audio input responses, and simulated voice streaming between endpoints.",
                "Voice Codec Simulation": "Supported G.711, G.729, and Opus codec formats to test compression, latency, and voice quality under simulated network conditions.",
                "JavaFX Call Flow Visualizer":"Integrated directly into the desktop app, providing a real-time visual map of SIP call states, IVR routing logic, and event triggers based on the telecom stack’s runtime state."
              },
              "7. Other Stacks":{         
               "Protocols Used": (<div><span className="text-grey2"><b>HTTP/HTTPS</b></span> (for application 
                communication), <span className="text-grey2"><b>SIP and RTSP protocol</b></span> (stubs for telephony interaction 
                simulation), <span className="text-grey2"><b>XML/VXML</b></span> parsing for IVR call script execution</div>),
               "Database Servers": (<div><span className="text-grey2"><b>MySQL Database</b></span> (for backend persistence), 
                    <span className="text-grey2"><b>SQLite Database</b></span> (for local and lightweight desktop mode simulations)</div>),
               "Web Servers": (<div><span className="text-grey2"><b>Apache Tomcat</b></span> (for backend service deployment)</div>),
               "DevOps & CICD Tools": (<div><span className="text-grey2"><b>Jenkins</b></span> (for automated build and 
               deployment pipelines), <span className="text-grey2"><b>Ant</b></span> (for legacy code reusablitity) 
               and <span className="text-grey2"><b>Maven</b></span> (for build Management)</div>),
            }, 
           },
           "rolesAndresponsibilities":[(<div>Developed and maintained <span className="text-grey2"><b>web and desktop applications</b></span> (Windows, 
              Linux, Mac) for IVR simulation.</div>),
              (<div>Designed <span className="text-grey2"><b>interactive IVR flow visualizer</b></span> 
                using <span className="text-grey2"><b>D3.js</b></span> and <span className="text-grey2"><b>JavaFX</b></span> for live call 
                flow monitoring.</div>),
              (<div>Implemented <span className="text-grey2"><b>REST and SOAP APIs</b></span> with <span className="text-grey2"><b>Spring MVC</b></span>, <span className="text-grey2"><b>Hibernate</b></span>, and <span className="text-grey2"><b>Jersey</b></span>.</div>),
              (<div>Created <span className="text-grey2"><b>automated test suites</b></span> using <span className="text-grey2"><b>JUnit</b></span>, <span className="text-grey2"><b>Selenium</b></span>, and <span className="text-grey2"><b>Jenkins</b></span> for CI/CD validation.</div>),
              (<div>Integrated with <span className="text-grey2"><b>Asterisk PBX</b></span>, <span className="text-grey2"><b>FreeSWITCH</b></span>, and <span className="text-grey2"><b>VXML Server</b></span> for real-time call simulation.</div>),
              (<div>Managed <span className="text-grey2"><b>MySQL</b></span> and <span className="text-grey2"><b>SQLite databases</b></span> for simulation data storage and analytics.</div>),
              (<div>Collaborated in <span className="text-grey2"><b>Agile (Scrum)</b></span> sprints using <span className="text-grey2"><b>Jira</b></span> and <span className="text-grey2"><b>Confluence</b></span> for planning and documentation.</div>)],
           "challenges":[{
              "title":"Testing Efficiency in IVR Workflows",
              "challenge": (<div>Manual IVR testing through softphones was slow and inconsistent across scenarios.</div>),
              "solution": (<div>Built automated simulation scripts and dashboards that reduced manual testing time by 40%.</div>)
            },{
              "title":"Performance in Multi-Session Simulations",
              "challenge": (<div>Running multiple concurrent call sessions caused high CPU load and thread blocking.</div>),
              "solution": (<div>Implemented thread pooling and Ehcache caching to optimize multi-session execution and resource reuse.</div>)
            },{
              "title":"SIP Signaling Integration Across Components",
              "challenge": (<div>SIP messages between Asterisk, FreeSWITCH, and VXML Server were occasionally misrouted.</div>),
              "solution": (<div>Configured OpenSIPS as a central SIP proxy layer for reliable signaling and message routing.</div>)
            },{
              "title":"Cross-Platform and Cross-Browser Stability",
              "challenge": (<div>UI performance and layout varied across Chrome, Firefox, and Internet Explorer on different OS environments.</div>),
              "solution": (<div>Performed cross-browser and cross-platform testing using BrowserStack and automated QA test suites.</div>)
            },{
              "title":"Regression Management in Continuous Delivery",
              "challenge": (<div>Frequent frontend and backend updates led to repeated manual regression efforts.</div>),
              "solution": (<div>Integrated Jenkins-based automated pipelines to trigger continuous and nightly regression testing.</div>)
            }],
           "achievements":[(<div>Hello</div>)]
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
          }
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
        }
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
      }
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
      }
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
    }
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
  }
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
        }
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
        }
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
      }
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
    }
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
      }
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
      }
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
        }
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
        }
    }]
  }]
}];