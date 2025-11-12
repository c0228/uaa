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
           "tags":["Website", "Telecom & Networking Infrastructure"],
           "projectDetails":{
             "Client Name":"Cisco Systems, Inc.",
             "Team Size": 8,
             "My Roles & Timelines": {
               "Dev Role": "Web Application Developer",
               "Dev Support": (<span className="badge resume-work-badge fs11">June 2012 - Mar 2014</span>),
               "Prod Role": "L2/L3 Support Engineer",
               "Prod Support": (<span className="badge resume-work-badge fs11">Nov 2013 - Aug 2014</span>)
              }
           }, 
           "projectTechStack":{
              "1. Project Execution Workflow":{
                "Software Life Cycle": "Agile Methodology (Scrum Framework)",
                "Project Architecture": "Microservice Architecture",
                "Integrated Development Environment (IDE)":"Eclipse IDE (for Java and JSP development), Dreamweaver (for UI prototyping), SQL Developer (for database queries)",
               
              },
              "2. Frontend Web UI Development":{
                "Web Interface": "HTML5, CSS3, JavaScript, and JSP",
                "UI Libraries": "jQuery, AJAX, Angular JS and Bootstrap 3",
                "Server-Socket Programming": "Real-time WebSocket updates for IVR status and call monitoring",
                "UI Rendering": "Dynamic JSP pages integrated with VXML deployment logs and call status visualizations",
                "Protocols Used": "HTTP/HTTPS, Web-sockets Communication",
                "Performance Optimization": "Minified assets, AJAX caching, lazy loading for heavy UI components",
                "Browsers Supported":"Google Chrome, Mozilla Firefox, Internet Explorer 8+, Safari (for compatibility testing)",
              },
              "3. Frontend Web UI Testing":{
                  "Unit Testing":"JUnit, Jasmine Framework and Karma Test Runner",
                  "Integration Testing":"Selenium WebDriver, QTP",
                  "Functional Testing":"Selenium, Manual test scripts",
                  "Regression Testing":"Jenkins CI pipeline, Selenium regression suites",
                  "Cross-Browser Testing":"BrowserStack, Chrome, Firefox, IE, Safari",
                  "Performance Testing":"JMeter (Frontend Load), PageSpeed Insights",
                  "End-to-End Testing":"Selenium Grid, Browser Automation Frameworks",
              },
              "4. Backend Development":{
                "Languages & Frameworks": "Java (J2EE), Spring Framework (v.3), Spring MVC, Hibernate ORM, Servlets, JSP, JSTL",
                "Data Exchange Libraries": "Apache CXF, JSON Parsers, JAXB (XML Binding)",
                "Data & Configuration Formats": (<div><span className="text-grey2"><b>JSON</b></span> (REST API 
                  communication), <span className="text-grey2"><b>WSDL</b></span> (communication with Cisco IVR/VXML 
                  services), <span className="text-grey2"><b>XML</b></span> (VXML & configuration files)</div>),
                "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-First Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-First Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),
                "Web Servers": "GlassFish Web Server",
                "Input Validation": "OWASP guidelines, XSS prevention, CSRF tokens",
                "API Security": "API Rate Limiting, API keys, Request signing"
              },
              "5. Backend Testing":{
                  "Unit Testing":(<div>JUnit Testing Framework and Mockito Framework (for service and DAO layer validation)</div>),
                  "Integration Testing":(<div>SOAP UI (for WSDL-based SOAP APIs), REST Assured (for RESTful API testing)</div>),
                  "Functional Testing":(<div>Manual and automated testing of VXML deployment and IVR workflow modules</div>),
                  "Regression Testing":(<div>Jenkins CI pipeline with nightly build validation and automated test suites</div>),
                  "Load & Stress Testing":(<div>Apache JMeter (for concurrent user and simulation load testing)</div>),
                  "Database Testing":(<div>DBUnit, SQL scripts (for CRUD operation validation and rollback verification)</div>),
                  "Continuous Testing":(<div>Jenkins (integrated with SVN commits for automated test execution and reporting)</div>)
              },
              "6. Telecom Technologies":{
                  "Core Components": (<div><span className="text-grey2"><b>Cisco Call Studio</b></span>, <span className="text-grey2"><b>Cisco Unified CVP</b></span> (Customer Voice 
                    Portal), <span className="text-grey2"><b>Cisco VXML Gateway</b></span>, <span className="text-grey2"><b>Cisco Call Manager 
                      (CUCM)</b></span>, <span className="text-grey2"><b>Cisco Unified Intelligent Contact Management Enterprise (ICME)</b></span>, 
                      and <span className="text-grey2"><b>Cisco UCCX</b></span> (Contact Center Express)</div>),
                  "Protocols": "SIP, RTP, H.323, MGCP, HTTP/HTTPS, TCP/IP, WebSocket protocols and WebRTC Technologies",
                  "Gateways & Hardware": "Cisco 2800 / 3800 Voice Gateways, AS5400 Series, VG224 Analog Gateways",
                  "Routing & Switching": (<div><span className="text-grey2"><b>Cisco Catalyst Switches</b></span> (2960, 3750), <span className="text-grey2"><b>Cisco Routers</b></span> (2800, 3800 Series)</div>),
                  "Call Flow Tools": "Cisco CVP Call Studio, Unified ICM Script Editor, JTAPI, CTI Route Points",
                  "Load Balancing & Proxy":"OpenSIPS / Kamailio, Asterisk Integration for SIP Routing",
                  "Testing & Simulation": "SIPp, Wireshark, X-Lite Softphone, Packet Capture Analysis"
              },
              "7. Database & Middleware":{
                "Databases":"Oracle 10g, MySQL 5.6, PostgreSQL (Reporting)",
                "ORM & Queries":"Hibernate HQL, Stored Procedures, PL/SQL Optimization",
                "Middleware / Messaging":"Apache ActiveMQ, JMS Messaging Queue",
                "Caching & Sessions":"Ehcache, Memcached",
                "File Handling & Storage":" Apache Commons IO, FTP Integration",
                "Database Security": "Column-level encryption, SQL injection prevention",
                "Backup & Recovery": "Automated VXML Application Backups, Database Snapshot & Recovery Procedures, Disaster Recovery Planning for IVR Services, Middleware Configuration Versioning"
              },
              "8. Infrastructure & Tools":{
                  "OS & Servers": "Red Hat Enterprise Linux 6, Windows Server 2008 R2",
                  "Monitoring & Logging": "Nagios, Cacti, Log4j, Syslog Analyzer",
                  "Version Control": "SVN (Code Version-Control), TortoiseSVN",
                  "Security & Access": "HTTPS, SSL Certificates, Role-Based Access Control (RBAC)",
                  "Configuration Management": (<div><span className="text-grey2"><b>Apache Maven</b></span> (build management), <span className="text-grey2"><b>Apache Ant</b></span> (for legacy modules)</div>),
                  "Project Tracking Tools": (<div><span className="text-grey2"><b>Jira</b></span> (Agile board management, sprint tracking)</div>),
                  "Documentation & Reporting":(<div><span className="text-grey2"><b>Atlassian Confluence</b></span> (technical 
                  documentation), <span className="text-grey2"><b>MS Visio</b></span> (architecture diagrams), <span className="text-grey2"><b>Excel Reports</b></span> (QA reports and metrics) </div>),
                  "Continuous Integration":(<div><span className="text-grey2"><b>Jenkins</b></span> (automated build, test, and deployment pipelines)</div>),
                  "Code Quality & Coverage": "FindBugs, SonarQube and Jacoco Code Coverage Tool",
                  "Backup & Rollback": "Scheduled SVN backups and Jenkins artifact archiving for version rollback"
              },
              "9. Security Management":{
                  "Authentication": "LDAP-based user authentication integrated with Cisco user directory",
                  "Authorization": "Role-based access control (RBAC) at both API and UI levels",
                  "Password policies": "Minimum 12 characters, rotation every 90 days, complexity enforced via regex validation",
                  "Data Encryption": (<div><span className="text-grey2"><b>AES-256 encryption</b></span> for sensitive data in transit and at rest</div>),
                  "Sensitive Data Handling": "PII masking, audit logs for all admin actions",
                  "Vulnerability Management": "Periodic Nessus scans and OWASP Top 10 compliance reviews",
                  "Security Auditing": (<div>Regular internal audits 
                    using <span className="text-grey2"><b>Fortify</b></span> and <span className="text-grey2"><b>SonarQube</b></span> static 
                    scans</div>)
              },
              "10. Production Support":{
                  "Support Model": (<div><span className="text-grey2"><b>L2/L3</b></span> Support with 24/7 on-call rotation for critical incidents</div>),
                  "Management Tools": (<div><span className="text-grey2"><b>ServiceNow</b></span> (Service Management and Incident 
                      Tracking), <span className="text-grey2"><b>Jira Service Desk</b></span> (Dev Support Tickets and Bug Tracking)</div>),
                  "Monitoring Tools": (<div>Nagios, Cacti, and Custom IVR Health Dashboards</div>),
                  "Log Analysis": (<div>Splunk, Log4j, and Syslog Analyzer for real-time issue diagnosis</div>),
                  "On-call Support": "Weekly rotation with 15-minute response time SLA for P1 incidents",
                  "Release Management": "Weekly Production Deployment with automated rollback capabilities",
                  "Post-Release Validation": (<div>Production <span className="text-grey2"><b>Smoke Testing</b></span> and health checks</div>),
                  "Resolution Metrics": (<div><span className="text-grey2"><b>P1:</b></span> 99% resolved within 
                    1 hour,<br/> <span className="text-grey2"><b>P2:</b></span> 95% within 4 hours,<br/> <span className="text-grey2"><b>P3:</b></span> 90% 
                    within 8 business hours</div>),
                  "SLA Compliance": "99.5% uptime maintained through proactive monitoring",
                  "MTTR": (<div>Reduced <span className="text-grey2"><b>Mean Time to Resolution (MTTR)</b></span> by 30% through improved logging and alerting</div>)
              }
           },
           "rolesAndresponsibilities":[(<div>Developed and maintained the <span className="text-grey2"><b>Frontend Web Portal</b></span> using JSP, AJAX, and Bootstrap with WebSocket-based call simulation updates.</div>),
                  (<div>Designed <span className="text-grey2"><b>REST and SOAP backend APIs</b></span> for IVR deployment, integration with Cisco Unified CCX, and call-flow execution.</div>),
                  (<div>Configured <span className="text-grey2"><b>VXML Server and Phone Number Mapping</b></span> to link uploaded IVR scripts for remote simulation.</div>),
                  (<div>Implemented <span className="text-grey2"><b>database schemas, stored procedures, and audit logs</b></span> in Oracle 12c / MySQL.</div>),
                  (<div>Performed <span className="text-grey2"><b>cross-browser and functional testing</b></span> using Selenium and QTP.</div>),
                  (<div>Created <span className="text-grey2"><b>Jenkins pipelines</b></span> for automated build, test, and deployment cycles.</div>),
                  (<div>Collaborated with the <span className="text-grey2"><b>Telecom Integration Team</b></span> to handle signaling, gateway routing, and Cisco CUCM connectivity.</div>),
                  (<div>Monitored production health using <span className="text-grey2"><b>Nagios, Log4j, and Syslog Analyzer.</b></span></div>),
                  (<div>Documented technical workflows, deployment steps, and user manuals on Confluence.</div>)
              ],
            "challenges":[{
              "title":"1. Slow IVR Testing and Feedback Cycle",
              "challenge": (<div>Manual IVR test cases required long execution times and human intervention, delaying deployment validation.</div>),
              "solution": (<div>Developed automated test scripts and web dashboards that simulated IVR call flows, reducing testing time by 40% and enabling continuous validation.</div>)
            },{
              "title":"2. Concurrent Call Handling and System Load",
              "challenge": (<div>Multiple simultaneous IVR simulations caused thread blocking and increased memory usage.</div>),
              "solution": (<div>Introduced thread pooling and Ehcache caching mechanism to handle multi-session concurrency efficiently, improving performance and stability.</div>)
            },{
              "title":"3. Complex SIP and VXML Integration",
              "challenge": (<div>Integrating SIP signaling between the Demo Portal, VXML server, and Cisco telephony gateways was unstable during early builds.</div>),
              "solution": (<div>Configured OpenSIPS as a SIP proxy for routing and synchronization between PBX, VXML Server, and simulation modules, ensuring smooth call flow management.</div>)
            },{
              "title":"4. Real-Time Status Synchronization",
              "challenge": (<div>Portal users could not view IVR simulation status instantly during concurrent executions.</div>),
              "solution": (<div>Implemented Server-Socket / WebSocket communication for live event streaming and status updates directly in the browser UI.</div>)
            },{
              "title":"5. Regression Testing During Frequent Deployments",
              "challenge": (<div>Manual regression testing after each release cycle caused inconsistencies and increased QA effort.</div>),
              "solution": (<div>Integrated Jenkins CI/CD pipelines for automated regression testing and nightly builds to ensure stable deployments.</div>)
            },{
              "title":"6. Cross-Browser and Cross-Platform Compatibility",
              "challenge": (<div>UI inconsistencies appeared across browsers and operating systems due to varying DOM behaviors.</div>),
              "solution": (<div>Used BrowserStack for automated cross-browser testing and performed QA verification on Chrome, Firefox, IE, and Safari.</div>)
            },{
              "title":"7. Monitoring and Fault Traceability",
              "challenge": (<div>Troubleshooting IVR simulation failures was time-consuming due to lack of unified monitoring.</div>),
              "solution": (<div>Deployed Nagios and Log4j for centralized monitoring, alerting, and detailed log tracing for faster root-cause analysis.</div>)
            }],
            "achievements":[(<div>Delivered a <span className="text-grey2"><b>fully functional remote IVR deployment portal</b></span> integrated with Cisco Call Manager and VXML servers.</div>),
              (<div>Reduced IVR test cycle duration from days to <span className="text-grey2"><b>less than 6 hours per release</b></span> through automation.</div>),
              (<div>Achieved <span className="text-grey2"><b>40 % improvement</b></span> in system performance and <span className="text-grey2"><b>25 % reduction</b></span> in resource consumption via caching optimization.</div>),
              (<div>Enabled <span className="text-grey2"><b>multi-session concurrent testing</b></span> with thread-safe socket architecture.</div>),
              (<div>Improved team collaboration and traceability by adopting <span className="text-grey2"><b>Agile + CI/CD</b></span> practices.</div>),
              (<div>Provided <span className="text-grey2"><b>live system dashboards</b></span> to business and QA teams for real-time visibility of call simulations.</div>)]
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
         "tags":["Website","Desktop App", "Telecom & Networking Infrastructure"],
         "projectDetails":{
             "Client Name":"Cisco Systems, Inc.",
             "Team Size": 5,
             "My Roles & Timelines": {
               "My Role" : "Unified Communications Full-Stack Developer (Web, Desktop and Infrastructure)",
               "Timeline": (<span className="badge resume-work-badge fs11">Apr 2014 - Aug 2014</span>),
              }
           },
           "projectTechStack":{
              "1. Project Execution Workflow":{
                "Software Life Cycle": "Agile Methodology (Scrum Framework)",
                "Project Architecture": "Service-Oriented Architecture (SOA)",
                "Integrated Development Environment (IDE)": (<div><span className="text-grey2"><b>NetBeans IDE</b></span> (JavaFX 
                Development), <span className="text-grey2"><b>Eclipse</b></span> (for Backend Development)</div>),
              },
              "2. Frontend Web UI Development": {
                "Web Interface": "HTML5, CSS3, JavaScript, jQuery, Bootstrap",
                "UI Components": "Interactive tree-based IVR flow visualizer, real-time simulation control panel, and live call status dashboard",
                "UI Libraries": "jQuery UI, D3.js for dynamic IVR flow visualization and topology rendering",
                "Server-Socket Programming": "WebSocket-based real-time updates for simulation progress and IVR node traversal",
                "Protocols Used": "HTTP/HTTPS for application data, WebSockets for live simulation events and status streaming",
                "Performance Optimization": "Lazy loading of complex IVR flow diagrams, AJAX caching for frequently accessed voice prompt metadata, optimized D3.js rendering for large flow graphs",
                "Browsers Supported": "Google Chrome, Mozilla Firefox, and Internet Explorer 9+ (aligned with enterprise browser standards)"
              },
              "3. Frontend Desktop UI Development":{
                "Desktop GUI Frameworks": "JavaFX, Java Swing, AWT for enterprise desktop applications",
                "UI Components and Libraries": "JavaFX FXML, ControlsFX, JFoenix, JFreeChart for data visualization, Scene Builder for UI design",
                "Application Architecture": "Model-View-Controller (MVC) and Model-View-ViewModel (MVVM) patterns, Event-driven architecture",
                "Performance Optimization": "SwingWorker for background threading, JavaFX Task/Service, lazy loading of UI components, memory management for heavy data sets",
                "Deployment & Packaging": "Executable JAR files, Java Web Start, platform-specific installers using Launch4j, jpackage for native bundles",
                "Operating Systems Supported": "Windows, Linux, macOS (cross-platform deployment)"
              },
              "4. Frontend Web UI Testing": {
                  "Unit Testing": "QUnit for JavaScript module testing, validation of IVR flow visualization components and simulation controllers",
                  "Integration Testing": "JSP and JavaScript integration verification, AJAX call testing with backend IVR simulation services",
                  "Functional Testing": "End-to-end IVR simulation workflows, tree-based flow visualizer functionality, real-time dashboard updates",
                  "Regression Testing": "Selenium test suites for IVR path traversal features, ensuring existing functionality after enhancements",
                  "Cross-Browser Testing": "Manual and automated testing across Chrome, Firefox, and IE9+ for consistent IVR simulation experience",
                  "Performance Testing": "YSlow and manual profiling for IVR diagram rendering optimization, WebSocket connection efficiency",
                  "End-to-End Testing": "Complete user journey testing from IVR flow setup to simulation execution and results analysis"
              },
              "5. Frontend Desktop UI Testing": {
                  "Desktop GUI Testing Frameworks": "JUnit 5 for test orchestration, TestFX for JavaFX UI testing,  Jemmy for Swing component testing, Mockito for mocking dependencies",
                  "Testing Libraries": "AssertJ for fluent assertions, Mockito for mocking backend IVR services, Hamcrest for matchers",
                  "Integration Testing": "End-to-end testing of UI workflows, database integration tests, service layer verification",
                  "UI Testing & Automation": "Interactive IVR flow visualizer validation, simulation control panel functionality testing, dashboard widget verification, Automated GUI testing with Jemmy, Marathon for Java Swing, AssertJ for fluent assertions",
                  "Performance Validation & Testing": "Memory leak detection during long-running simulations, UI responsiveness testing under heavy IVR flow loads, thread safety verification",
                  "Cross-Platform Testing": "UI consistency checks across Windows, Linux, macOS, display scaling validation",
                  "User Acceptance Testing": "Usability testing, focus group sessions, user journey validation"
              },
              "6. Backend Development": {
                "Protocols Used": (<div><span className="text-grey2"><b>HTTP/HTTPS</b></span> (for application 
                  communication), <span className="text-grey2"><b>SIP and RTSP protocol</b></span> (stubs for telephony interaction 
                  simulation), <span className="text-grey2"><b>XML/VXML</b></span> parsing for IVR call script execution</div>),
                "Languages & Frameworks": "Java SE 8, Java EE, Servlets, JSP",
                "Core Modules": "IVR simulation engine, call session manager, VXML interpreter, SIP message handler, telephony gateway controller",
                "Concurrency": "Multi-threaded call session handling, synchronized resource management for concurrent IVR simulations, thread pooling for SIP message processing",
                "API Design": "RESTful web services for simulation control, SOAP APIs for VXML server integration, custom telephony control APIs",
                "API Security": "HTTP Basic Authentication, session-based access control, input sanitization for telephony parameters",
                "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-Last Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-Last Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>), 
                "Data Exchange Libraries": "JAXB for XML parsing, Gson for JSON processing, custom SIP message parsers",
                "Data & Configuration Formats": "XML for VXML documents, JSON for simulation configurations, properties files for Asterisk/FreeSWITCH settings, CSV for test data",
                "Web Servers": (<div><span className="text-grey2"><b>Apache Tomcat</b></span>, integrated Jetty for development environment (for backend service deployment)</div>),
                "Input Validation": "Servlet filters for request sanitization, custom validators for SIP headers, DTMF input validation, XML schema validation for VXML files"
              },
              "7. Backend Testing": {
                "Unit Testing": "JUnit 4, TestNG for core Java components, Mockito (for service and DAO layer validation and for mocking telephony dependencies",
                "Integration Testing": "REST Assured for API-level contract testing, End-to-end IVR simulation workflows, SIP server integration tests, VXML parser validation",
                "API Testing": "REST Assured for RESTful service validation, SOAP UI for telephony API testing, custom test clients for SIP interfaces",
                "Performance Testing": "JMeter for load testing concurrent IVR sessions, custom benchmarks for call setup times, memory profiling under high call volumes",
                "Concurrency Testing": "Multi-threaded simulation stress tests, race condition detection in call session management, thread safety verification",
                "Data Validation Testing": "XML schema validation for VXML documents, configuration file integrity checks, test data generation for various IVR scenarios",
                "Telecom Protocol Testing": "SIP message flow validation, DTMF tone processing tests, RTP stream quality verification",
                "Security Testing": "Input sanitization tests for SIP headers, authentication bypass testing, injection attack prevention validation",
                "Load Testing": (<div><span className="text-grey2"><b>Apache JMeter</b></span> (for concurrent simulation and stress testing)</div>),
                "Database Testing": (<div><span className="text-grey2"><b>DBUnit</b></span> (for CRUD operation validation and rollback verification)</div>),
                "Continuous Testing": (<div><span className="text-grey2"><b>Jenkins</b></span> integrated test pipelines for regression and nightly builds</div>),
              },
              "8. Telecom Technologies":{
                "Call Simulation Engine": "Asterisk PBX for SIP signaling, call routing, DTMF tone processing, and VXML server integration",
                "IVR Application Hosting": "VXML Server (CCBU) hosting customer VXML applications with virtual number mapping for test triggering",
                "Media & Session Management": "FreeSWITCH as media gateway for concurrent call sessions, RTP audio streams, and codec conversions",
                "SIP Signaling Infrastructure": "OpenSIPS/Kamailio as SIP proxy for managing message routing between simulator, PBX, and VXML components",
                "Network Protocols": "SIP (Session Initiation Protocol), RTP/RTCP (Real-time Transport Protocol), HTTP/HTTPS, WebSocket, VXML",
                "Gateways & Switching": "Asterisk as VoIP gateway, FreeSWITCH as media gateway, Software-based SIP routers for virtual call routing",
                "Network Infrastructure": "Virtualized network environment with software routers, SIP-aware firewalls, and simulated WAN conditions",
                "Testing & Validation Tools": "Zoiper, X-Lite softphones for manual call flow validation, DTMF testing, and audio prompt verification",
                "Media Processing": "Asterisk media plugins for pre-recorded voice prompts, audio input detection, and simulated voice streaming",
                "Voice Codecs Supported": "G.711, G.729, and Opus codec formats for testing compression, latency, and voice quality under varied conditions",
                "Real-time Visualization": "JavaFX call flow visualizer integrated with telecom stack for live SIP state mapping and IVR routing logic"  
              },
              "9. Databases & Middleware":{
                "Database Servers": (<div><span className="text-grey2"><b>MySQL 5.6 Database</b></span> (for backend persistence  of simulation results, IVR flow configurations, and user session data), 
                    <span className="text-grey2"><b>SQLite Database</b></span> (for local and lightweight desktop mode simulations)</div>),
                "File Handling and Storage": "Microsoft IIS Server for file storage, FTP/SFTP for secure file transfer of VXML scripts, voice prompts, and configuration backups",
                "Data Security": "Database encryption at rest, secure FTP credentials management, role-based data access controls for sensitive configuration files",
                "Data Caching": "Ehcache for in-memory caching of frequently accessed VXML scripts and telephony configuration parameters",
                "Message Queuing": "In-memory message queues for asynchronous processing of SIP events and real-time simulation updates",
                "Connection Pooling": "Apache DBCP for database connection management, C3P0 for optimized JDBC resource utilization",
                "ORM & Data Access": "JDBC for direct database operations, custom DAO patterns for simulation data persistence",
                "Session Management": "Tomcat session replication for web application scalability, custom session handling for desktop application state persistence",
                "Integration Middleware": "Custom Java middleware for Asterisk AMI (Asterisk Manager Interface), FreeSWITCH ESL (Event Socket Library) integration",
                "Data Replication": "Database replication for test environment synchronization, configuration backup strategies",
                "Performance Optimization": "Database indexing for simulation query performance, query optimization for large call detail record analysis",
                "Backup & Recovery": "Automated database backups, IIS file system snapshots, disaster recovery procedures for simulation data"
              },
              "10. Infrastructure & Tools": {
                "Logging and Monitoring":"Log4j and JMX for runtime performance tracking",
                "Version Control": "SVN (Apache Subversion) for source code management",
                "Build Tools": "Apache Ant (for legacy code reusablitity), Apache Maven 3 (for dependency management and build automation)",
                "Integrated Development Environment": "Eclipse IDE with Java EE and Web Tools Platform",
                "Continuous Integration": "Jenkins for automated builds, test execution and deployment pipelines",
                "Issue Tracking": "JIRA for defect tracking and project management",
                "Testing Frameworks": "JUnit 4, TestNG, JMeter for performance testing",
                "Database": "MySQL 5.6 for simulation results and configuration storage",
                "Telephony Servers": "Asterisk 11, FreeSWITCH 1.4, OpenSIPS 1.10",
                "Operating Systems": "Windows 7/8 for development, CentOS 6 for server deployment",
                "Web Servers": "Apache Tomcat 7 for application deployment",
                "Network Tools": "Wireshark for SIP packet analysis, SIPp for protocol testing",
                "Documentation": "Confluence for project documentation and knowledge sharing",
                "Audit & Logging": "Comprehensive audit trails for simulation runs, secure logging of SIP transactions, access log monitoring for security events"
              },
              "11. Security Management": {
                "Authentication": "Multi-layer authentication including HTTP Basic Auth for web services, session-based login for web UI, and certificate-based authentication for SIP trunk connections",
                "Authorization": "Role-based access control (RBAC) with different privilege levels for developers, QA engineers, and administrators accessing IVR simulations",
                "Password Policies": "Enforced password complexity, regular rotation policies, and secure credential storage using hashing algorithms for web and desktop application access",
                "Network Security": "SIP over TLS for secure signaling, RTP encryption for voice media, firewall configuration for telephony ports (5060, 5061)",
                "Data Protection": "Encrypted configuration files for Asterisk/FreeSWITCH credentials, secure storage of simulation test data",
                "Data Encryption": "TLS/SSL for web application traffic, SRTP for secure voice media streams, encrypted configuration files for sensitive telephony parameters",
                "Sensitive Data Handling": "Secure storage of SIP credentials, encrypted call detail records, masked DTMF input in logs, and isolated test data containing simulated PII",
                "Vulnerability Management": "Regular security scans for web applications, SIP protocol fuzz testing, dependency vulnerability checks on Java libraries and telecom components",
                "Security Auditing": "Comprehensive audit trails for simulation access, SIP call flow monitoring, and user activity logging across web and desktop interfaces",
                "Network Security": "Firewall configuration for SIP ports (5060/5061), RTP media port ranges, and web application ports; VLAN segregation for telecom infrastructure",
                "Application Hardening": "Input validation for SIP headers, VXML script sanitization, and secure session management across web and desktop clients"
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
              "title":"1. Testing Efficiency in IVR Workflows",
              "challenge": (<div>Manual IVR testing through softphones was slow and inconsistent across scenarios.</div>),
              "solution": (<div>Built automated simulation scripts and dashboards that reduced manual testing time by 40%.</div>)
            },{
              "title":"2. Performance in Multi-Session Simulations",
              "challenge": (<div>Running multiple concurrent call sessions caused high CPU load and thread blocking.</div>),
              "solution": (<div>Implemented thread pooling and Ehcache caching to optimize multi-session execution and resource reuse.</div>)
            },{
              "title":"3. SIP Signaling Integration Across Components",
              "challenge": (<div>SIP messages between Asterisk, FreeSWITCH, and VXML Server were occasionally misrouted.</div>),
              "solution": (<div>Configured OpenSIPS as a central SIP proxy layer for reliable signaling and message routing.</div>)
            },{
              "title":"4. Cross-Platform and Cross-Browser Stability",
              "challenge": (<div>UI performance and layout varied across Chrome, Firefox, and Internet Explorer on different OS environments.</div>),
              "solution": (<div>Performed cross-browser and cross-platform testing using BrowserStack and automated QA test suites.</div>)
            },{
              "title":"5. Regression Management in Continuous Delivery",
              "challenge": (<div>Frequent frontend and backend updates led to repeated manual regression efforts.</div>),
              "solution": (<div>Integrated Jenkins-based automated pipelines to trigger continuous and nightly regression testing.</div>)
            }],
           "achievements":[(<div>Successfully simulated <span className="text-grey2"><b>end-to-end IVR call flows</b></span> without telephony hardware dependency.</div>),
                  (<div>Achieved <span className="text-grey2"><b>~40% reduction</b></span> in IVR test cycle time through automation and reusable scripts.</div>),
                  (<div>Enabled <span className="text-grey2"><b>concurrent multi-session testing</b></span> supporting over 100 virtual call sessions.</div>),
                  (<div>Improved <span className="text-grey2"><b>testing coverage and reliability</b></span> with automated regression and load tests.</div>),
                  (<div>Delivered a <span className="text-grey2"><b>cost-effective IVR testing platform</b></span>, reducing infrastructure needs significantly.</div>),
                  (<div>Contributed to a scalable, reusable simulation framework later adopted in other Cisco CCBU projects.</div>)]
       }]
    },{
      "timeline":"September 2014 ~ February 2015",
      "workTitle":"Roger's IVR Solutions",
      "projects":[{
          "title":"Roger's IVR Solutions",
          "isProject": true,
          "desc":(<div>Designed and implemented a multi-tier, service-oriented architecture featuring engineered a high-availability IVR platform on a fully 
            Cisco-based infrastructure, utilizing Cisco AS5xxx gateways for PSTN/SIP termination, Cisco ISR routers with CUBE for signaling, and Catalyst switches 
            for VLAN segmentation. This robust telecom backbone was integrated with a Java/Spring backend, which managed call control logic and exposed RESTful APIs. 
            A real-time AngularJS web dashboard consumed these APIs for system monitoring, which provided advanced diagnostic tools, creating a unified 
            full-stack solution for managing enterprise-scale communications.</div>),
          "tags":["Website", "Telecom & Networking Infrastructure"],
          "projectDetails":{
            "Client Name":"Rogers Communications, Inc.",
            "Team Size": 6,
            "My Roles & Timelines": {
               "Dev Role": "Full-Stack VoIP Engineer (Web and Infrastructure)",
               "Dev Support": (<span className="badge resume-work-badge fs11">Sep 2014 - Feb 2015</span>),
               "Prod Role": "L2/L3 Support Engineer",
               "Prod Support": (<span className="badge resume-work-badge fs11">Sep 2014 - Feb 2015</span>)
            }
          },
          "projectTechStack":{
            "Other Stacks":{
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