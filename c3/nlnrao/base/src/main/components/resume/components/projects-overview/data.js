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
                  "System Availability": "99.5% uptime maintained through proactive monitoring",
                  "Efficiency Improvement": (<div>Reduced <span className="text-grey2"><b>Mean Time to Resolution (MTTR)</b></span> by 30% through improved logging and alerting</div>)
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
            "1. Project Execution Workflow":{
              "Software Life Cycle": "Agile Methodology (Kanban Framework)",
              "Project Architecture": "Designed multi-tier architecture with Cisco infrastructure, Spring Framework as backend, and AngularJS as frontend",
              "Integrated Development Environment (IDE)": (<div><span className="text-grey2"><b>Eclipse IDE</b></span> (for Java EE 
                  Development), <span className="text-grey2"><b>WebStorm</b></span> (for AngularJS - frontend development), 
                  <span className="text-grey2"><b>Cisco Call Studio</b></span> (for developing and testing VXML Based IVR applications)</div>)
            },
            "2. Frontend Web UI Development":{
              "Web Framework": "AngularJS for single-page application development",
              "UI Technologies": "HTML5, CSS3, JavaScript, Bootstrap for responsive design",
              "UI Libraries": "AngularJS Material, D3.js for data visualization, jQuery for DOM manipulation",
              "UI Components": "Real-time call monitoring dashboard, IVR flow management console, performance analytics charts",
              "Data Visualization": "Interactive charts for call metrics, real-time status indicators, historical reporting views",
              "Server-Socket Programming": "WebSocket connections for real-time call status updates, Socket.IO for bi-directional communication",
              "Protocols Used": "HTTP/HTTPS for API communication, WebSocket (WS/WSS) for real-time data, RESTful APIs for data exchange",
              "Performance Optimization": "AngularJS digest cycle optimization, lazy loading of modules, asset minification, HTTP caching headers, WebSocket connection pooling",
              "Browsers Supported": "Chrome, Firefox, Safari, Internet Explorer 11+"
            },
            "3. Frontend Web UI Testing":{
              "Unit Testing": "Jasmine and Karma for AngularJS component testing, JavaScript unit tests",
              "Integration Testing": "Protractor for AngularJS integration, SoapUI for API testing, custom WebSocket test clients",
              "End-to-End Testing": "Selenium WebDriver with Java bindings, Protractor for Angular-specific workflows, Jenkins for test automation",
              "Functional Testing": "Manual testing with test scripts, QTP (QuickTest Professional) for regression testing, TestComplete for UI automation",
              "Cross-Browser Testing": "BrowserStack for multi-browser testing, IE11 Developer Tools, Chrome DevTools for compatibility validation",
              "Performance Testing": "JMeter for load testing, YSlow for performance audits, Google PageSpeed Insights for optimization",
              "UI/UX Testing": "Manual accessibility testing, WAVE toolbar for accessibility, responsive design testing with viewport emulators"
            },
            "4. Backend Development":{
              "Languages & Frameworks": "Java 8, Spring Framework 4.x (Spring MVC, Spring Boot, Spring Security, Spring Data)",
              "Core Modules": "IVR call routing engine, SIP session manager, real-time analytics processor, report generation service, dashboard data provider",
              "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-First Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-First Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),
              "API Design": "RESTful web services for dashboard integration, SOAP APIs for Cisco UC system integration, WebSocket endpoints for real-time updates",
              "API Security": "Spring Security with OAuth2, JWT token authentication, role-based authorization, API rate limiting, CORS configuration",
              "Input Validation": "Spring Validation framework, custom validators for SIP parameters, SQL injection prevention, XSS filtering on user inputs",
              "Concurrency": "Multi-threaded call processing, connection pooling for database operations, asynchronous event handling for SIP messages",
              "Data Exchange Libraries": "Jackson for JSON processing, JAXB for XML parsing, Gson for data serialization",
              "Data & Configuration Formats": "JSON for API payloads, XML for Cisco device configurations, YAML for application properties, CSV for report exports",
              "Web Servers": "Apache Tomcat 8, embedded Jetty for development environment",
              "Protocols Implemented": "SIP for call signaling, RTP for media streams, HTTP/HTTPS for web services, WebSocket for real-time communication",
              "Performance Optimization": "Database connection pooling, query optimization, caching with Ehcache, thread pooling for concurrent call processing"
            },
            "5. Backend Testing":{
               "Unit Testing": "JUnit 4, Mockito for service layer mocking, PowerMock for static method testing",
              "Integration Testing": "Spring TestContext Framework, embedded database testing, REST API integration tests with RestAssured",
              "Functional Testing": "End-to-end business logic validation, IVR call flow functionality, SIP message processing accuracy",
              "Regression Testing": "Automated test suites with Jenkins, Selenium for API regression, backward compatibility testing",
              "API Testing": "SoapUI for SOAP web services, Postman for REST API validation, custom test clients for WebSocket endpoints",
              "Load & Stress Testing": "JMeter for 1000+ concurrent call simulations, Gatling for high-load scenarios, memory leak detection under stress",
              "Performance Testing": "JMeter for load testing IVR call processing, database performance benchmarking under high concurrent sessions",
              "Continuous Testing": "Jenkins pipeline integration, automated test execution on commit, quality gates in CI/CD pipeline",
              "Security Testing": "OWASP ZAP for vulnerability scanning, custom security tests for SIP message validation, SQL injection prevention testing",
              "Concurrency Testing": "Multi-threaded test scenarios for call session management, race condition detection in SIP handling",
              "Database Testing": "DBUnit for test data management, H2 in-memory database for isolated testing, query performance optimization",
              "Telecom Protocol Testing": "SIPp for SIP protocol stress testing, custom RTP stream validation, DTMF processing accuracy tests",
              "End-to-End Testing": "Complete call flow testing from Web UI to Cisco infrastructure integration"
            },
            "6. Telecom Technologies":{
              "Gateways": "Cisco AS5300 Series Voice Gateways, Cisco 2900 Series Integrated Services Routers with VIC cards",
              "Routers": "Cisco 3900 Series ISR with CUBE functionality, Cisco 2900 Series for branch connectivity",
              "Switches": "Catalyst 3560 Series for access layer, Catalyst 4500 Series for distribution layer, Nexus 3000 for data center",
              "Call Processing": "Cisco Unified Communications Manager (CUCM) 10.5, Cisco Unity Connection for voicemail services",
              "IVR Platform": "Cisco Unified Contact Center Express (UCCX) with Finesse desktop integration",
              "Network Protocols": "SIP (Session Initiation Protocol), RTP/RTCP, SCCP for legacy endpoints, H.323 for video integration",
              "Quality of Service": "DSCP marking for voice traffic, LLQ (Low Latency Queuing), traffic shaping for WAN links",
              "Network Management": "Cisco Prime Infrastructure 3.0, SolarWinds for performance monitoring, syslog servers for logging",
              "Configuration & Management": "Cisco Unified CM Administration, Cisco Prime Collaboration, Cisco Configuration Professional",
              "Development & Testing": "Cisco Call Studio for IVR development, Eclipse with Cisco plugins, Wireshark for packet analysis",
              "Monitoring & Analytics": "Cisco Unified Intelligence Center (CUIC), SolarWinds NPM, Splunk for log analysis",
              "Diagnostic Tools": "Cisco RTMT (Real-Time Monitoring Tool), PuTTY for CLI access, SIPp for protocol testing",
              "Other Setups": "Cisco IP Phone 7900 series for testing, analog gateways for PSTN fallback, VMware ESXi for virtualized UC applications"
            },
            "7. Databases & Middlewares":{
              "Database Management": "Oracle Database 11g for call detail records, configuration data, and user management",
              "Data Caching": "Redis for session storage and frequently accessed IVR configurations, Ehcache for application-level caching",
              "Message Brokers": "Apache ActiveMQ for asynchronous message processing, JMS for event-driven communication",
              "Connection Pooling": "Oracle UCP (Universal Connection Pool), HikariCP for database connection management",
              "ORM & Data Access": "Hibernate 4.x, Spring Data JPA, JDBC for direct database operations",
              "Session Management": "Spring Session with Redis, distributed session handling for high availability",
              "Integration Middleware": "Apache Camel for enterprise integration patterns, Spring Integration for event routing",
              "API Gateway": "Custom API gateway with Spring Cloud for request routing and rate limiting",
              "File Handling & Storage": "SFTP for configuration file transfers, local file system for logs, automated backup systems",
              "Backup & Recovery": "Oracle RMAN for database backups, automated nightly backups, disaster recovery procedures with warm standby",
              "Data Security": "Oracle Transparent Data Encryption, database auditing, secure credential storage with HashiCorp Vault",
              "Performance Optimization": "Database partitioning for CDR tables, query optimization, index management, connection pooling tuning"
            },
            "8. Infrastructure & Tools":{
              "Version Control": "Git with Bitbucket for source code management, GitFlow branching strategy",
              "CI/CD Pipeline": "Jenkins for automated builds and deployment, Maven for dependency management",
              "Containerization": "Docker for application containerization, Docker Compose for local development",
              "Orchestration": "Kubernetes for container orchestration, Helm for package management",
              "Monitoring & Logging": "Prometheus for metrics collection, Grafana for dashboard visualization, ELK Stack for log management",
              "Configuration Management": "Ansible for infrastructure automation, Terraform for infrastructure as code",
              "OS & Servers": "Red Hat Enterprise Linux 7, Windows Server 2012 R2, Apache Tomcat 8, Nginx for load balancing",
              "Security & Access": "LDAP/Active Directory integration, SSL/TLS certificate management, firewall configuration, VPN access control",
              "Code Quality & Coverage": "SonarQube for static code analysis, JaCoCo for code coverage, Checkstyle for code standards",
              "Backup & Rollback": "Automated nightly backups, Git tag-based rollback strategy, database snapshot recovery procedures",
              "Collaboration Tools": "JIRA for project tracking, Confluence for documentation, Slack for team communication",
              "Testing Tools": "Selenium for automated testing, JMeter for performance testing, SoapUI for API testing",
              "Security Tools": "SonarQube for code quality, OWASP ZAP for security testing, HashiCorp Vault for secrets management"
            },
            "9. Security Management":{
              "Authentication": "Multi-factor authentication (MFA), LDAP/Active Directory integration, Single Sign-On (SSO) with SAML 2.0",
              "Authorization": "Role-Based Access Control (RBAC), fine-grained permissions for IVR management, privilege escalation controls",
              "Password Policies": "Enforced complexity requirements, regular password rotation, account lockout policies after failed attempts",
              "Data Encryption": "TLS 1.2 for data in transit, AES-256 encryption for data at rest, database column-level encryption",
              "Sensitive Data Handling": "PCI DSS compliance for call recordings, PII masking in logs, secure data disposal procedures",
              "Vulnerability Management": "Regular security patches, vulnerability scanning with Nessus, penetration testing exercises",
              "Security Auditing": "SIEM integration for real-time monitoring, comprehensive audit trails, SOX compliance reporting",
              "Network Security": "Firewall rules for SIP ports, network segmentation, DDoS protection, intrusion detection systems",
              "API Security": "OAuth 2.0 for API authorization, rate limiting, API key management, request validation",
              "Application Security": "Input sanitization, SQL injection prevention, XSS protection, CSRF tokens"
            },
            "10. Production Support":{
              "Support Model": "L1/L2/L3 support model, ITIL-based incident management process",
              "Management Tools": "ServiceNow for incident tracking, JIRA Service Desk for ticket management, PagerDuty for on-call escalation",
              "Log Analysis": "Splunk for real-time log analysis, ELK Stack for log aggregation, Grafana for log visualization and alerting",
              "On-Call Support": "24/7 on-call rotation via PagerDuty, escalation policies, mobile alerting for critical incidents",
              "Monitoring & Alerting": "Real-time system health monitoring, proactive alerting for performance degradation, automated failure detection",
              "Performance Optimization": "Continuous performance tuning, capacity planning and scaling, bottleneck identification and resolution",
              "Change Management": "Structured change control process, emergency change procedures, rollback strategy implementation",
              "Release Management": "Bamboo for release automation, Ansible for deployment, Git for version-controlled release packages",
              "Disaster Recovery": "DR site management, RTO/RPO adherence, regular disaster recovery drills and testing",
              "Post-Release Validation": "Synthetic transaction monitoring with Catchpoint, automated health checks, performance benchmarking with Dynatrace",
              "Documentation & Knowledge": "Comprehensive runbooks, operational procedures, knowledge base maintenance, root cause analysis documentation",
              "Metrics & Reporting": "SLA compliance reporting, system availability metrics, performance trend analysis, customer satisfaction tracking",
              "Incident Resolution": (<div>
                <span className="text-grey2"><b>Critical (P1)</b></span> &lt;= 1 hour (99%)<br/>
                <span className="text-grey2"><b>Major (P2)</b></span> &lt;= 4 hours (95%)<br/> 
                <span className="text-grey2"><b>Minor (P3)</b></span> &lt;= 8 business hours (90%)
              </div>),
              "System Availability": "Maintained 99.5% system uptime SLA through proactive monitoring and automated Cisco UC infrastructure failover",
              "Efficiency Improvement": "Achieved 30% reduction in MTTR (Mean Time to Resolution) through implementation of Splunk real-time analytics and automated diagnostic toolkits"
            }
          },
          "rolesAndresponsibilities":[
            (<div>Architected and developed a high-availability IVR platform on a full Cisco technology stack, including gateways, routers (CUBE), and switches, 
              ensuring 99.5% uptime.</div>),
            (<div>Designed and engineered the backend services using Java/Spring Framework, creating robust RESTful APIs for the web dashboard and SOAP APIs 
              for Cisco UC system integration.</div>),
            (<div>Developed a responsive, single-page AngularJS web dashboard for real-time call monitoring, IVR flow management, and performance analytics, 
              consumed by internal operators.</div>),
            (<div>Implemented comprehensive security measures including Spring Security, OAuth2, and input validation to protect sensitive call data and 
              system configurations.</div>),
            (<div>Built and maintained the CI/CD pipeline using Jenkins and Maven to automate testing and deployment, ensuring rapid and reliable releases.</div>),
            (<div>Provided 24/7 L2/L3 production support, managing incidents within strict SLAs (P1: ≤1 hour) and reducing MTTR by 30% through enhanced 
              monitoring and logging.</div>)],
          "challenges":[{
              "title":"1. Legacy System Integration",
              "challenge": (<div>Integrating the new IVR platform with Rogers' existing legacy telephony and billing systems.</div>),
              "solution": (<div>Developed custom SOAP APIs and middleware using Apache Camel to act as a bridge, ensuring seamless data flow 
                without disrupting old systems.</div>)
            },{
              "title":"2. Ensuring Carrier-Grade Uptime",
              "challenge": (<div>Achieving and maintaining 99.5% uptime for a critical customer-facing IVR system.</div>),
              "solution": (<div>Implemented a high-availability Cisco infrastructure with redundant gateways/routers and automated failover mechanisms.</div>)
            },{
              "title":"3. Real-Time Data Latency",
              "challenge": (<div>The web dashboard suffered from latency, showing outdated call status and metrics.</div>),
              "solution": (<div>Implemented WebSocket connections for instant data push and used Redis for in-memory caching, enabling true real-time monitoring.</div>)
            },{
              "title":"4. Complex Incident Troubleshooting",
              "challenge": (<div>Diagnosing issues across the multi-tier architecture (Web, App, Telecom) was slow, increasing MTTR.</div>),
              "solution": (<div>Centralized logs using Splunk and created automated diagnostic scripts, reducing Mean Time to Resolution by 30%.</div>)
            },{
              "title":"5. Scaling for Peak Call Loads",
              "challenge": (<div>The system performance degraded during peak traffic, risking call drops during major promotions.</div>),
              "solution": (<div>Conducted load testing with JMeter, optimized thread pooling in the Java backend, and introduced QoS policies on network switches.</div>)
            }],
          "achievements":[(<div><span className="text-grey2"><b>Architected and delivered a high-availability IVR platform</b></span> on a full Cisco stack, 
                successfully handling 500+ concurrent calls and maintaining <span className="text-grey2"><b>99.5% uptime</b></span> for enterprise-scale 
                communications.</div>),
              (<div><span className="text-grey2"><b>Reduced Mean Time to Resolution (MTTR) by 30%</b></span> by implementing centralized Splunk logging 
                and automated diagnostic toolkits, significantly improving operational efficiency for the support team.</div>),
              (<div><span className="text-grey2"><b>Engineered a real-time AngularJS monitoring dashboard</b></span> that provided live call insights and 
                IVR analytics, enabling proactive system management and reducing issue identification time.</div>),
              (<div><span className="text-grey2"><b>Achieved strict SLA compliance</b></span> with 
                a <span className="text-grey2"><b>99% on-time resolution rate for P1 critical incidents,</b></span> ensuring minimal business impact 
                from system outages.</div>),
              (<div><span className="text-grey2"><b>Enhanced system scalability and performance</b></span> by optimizing backend Java/Spring services 
                and database configurations, successfully managing a 50% increase in call volume during peak traffic events.</div>),
              (<div><span className="text-grey2"><b>Strengthened platform security</b></span> by integrating OAuth2 and Spring Security, successfully 
                preventing vulnerabilities and ensuring secure access to the management dashboard.</div>),
              (<div><span className="text-grey2"><b>Streamlined deployment processes</b></span> by establishing a robust CI/CD pipeline with Jenkins, 
                reducing deployment windows by 40% and improving release reliability.</div>)
          ]

      }]
   },
   {
    "timeline":"February 2015 ~ December 2016",
    "workTitle":"Greyhound Bus Transportation",
    "projects":[{
        "title":"Fleet Management and Booking System",
        "isProject": true,
        "desc":(<div>The Fleet Management and Booking System is a large-scale, distributed platform engineered to modernize Greyhound's core operations, 
          featuring a cloud-based backend with microservices for booking, dispatch, and real-time vehicle tracking. This central system powered a responsive 
          AngularJS web portal for customer reservations and admin management, while native Android and iOS applications provided mobile users with ticket booking, 
          live bus tracking, and push notifications. The architecture integrated geolocation APIs for ETA predictions, a payment gateway for transactions, and a 
          dedicated telematics module that consumed GPS data from buses, creating a seamless, real-time operational loop between customers, dispatchers, and the 
          entire fleet.</div>),
        "tags":["Website", "Android / IOS Mobile App"],
        "projectDetails":{
          "Client Name":"Greyhound Lines, Inc.",
          "Team Size": 6,
          "My Roles & Timelines": {
               "Dev Role": "Digital Mobility Solutions Engineer",
               "Dev Support": (<span className="badge resume-work-badge fs11">Feb 2015 - Jun 2016</span>),
               "Prod Role": "L2/L3 Support Engineer",
               "Prod Support": (<span className="badge resume-work-badge fs11">Jun 2016 - Dec 2016</span>)
          }
        },
        "projectTechStack":{
          "1. Project Execution Workflow":{
            "Software Life Cycle": "Agile Methodology (Scrum Framework)",
            "Project Architecture": "Microservices-based Architecture",
            "Integrated Development Environment (IDE)": (<div><span className="text-grey2"><b>WebStorm</b></span> (for AngularJS development), 
              <span className="text-grey2"><b>Spring Tool Suite [STS]</b></span> (for Java / Spring Framework 
              development), <span className="text-grey2"><b>Visual Studio Code, Xcode (v.7/8) and Android Studio</b></span> (for Cross-Platform Mobile Development)</div>)
          },
          "2. Frontend Web UI Development":{
            "Web Framework": "AngularJS for single-page application (SPA) development with MVC architecture",
            "UI Technologies": "HTML5, CSS3, JavaScript (ES6), Bootstrap for responsive design",
            "UI Libraries": "Angular Material for UI components, Chart.js for analytics dashboards, Moment.js for date/time handling",
            "UI Components": "Interactive booking wizard, real-time seat selection map, fleet tracking dashboard, admin management console",
            "Server-Socket Programming": "WebSocket connections for live bus tracking updates, Socket.IO for real-time notification system",
            "UI Rendering": "Client-side rendering with AngularJS directives, server-side pagination for booking history, template caching for performance",
            "Protocols Used": "HTTP/HTTPS for API communication, WebSocket (WS/WSS) for real-time tracking, RESTful APIs for data exchange",
            "Performance Optimization": "Lazy loading of booking modules, image compression for bus photos, AngularJS digest cycle optimization, CDN for static assets",
            "Browser Compatibility": "Chrome, Firefox, Safari, Edge, Internet Explorer 11+",
            "Third-party Integrations": "Google Maps JavaScript API for route visualization, Stripe.js for payment processing, Google Analytics for user behavior tracking"
          },
          "3. Frontend Web UI Testing":{
            "Unit Testing": "Jasmine and Karma for AngularJS component testing, JavaScript unit tests for services and controllers",
            "Integration Testing": "Protractor for end-to-end testing of booking workflows, API integration validation with backend services",
            "Regression Testing": "Protractor for automated test suites, cross-browser regression validation, backward compatibility checks after feature updates",
            "End-to-End Testing": "Protractor for complete user journey testing from route selection to payment processing and ticket confirmation",
            "Functional Testing": "Protractor for Seat selection functionality, booking form validation, payment gateway integration, real-time tracking features",
            "Cross-Browser Testing": "BrowserStack for multi-browser compatibility testing (Chrome, Firefox, Safari, Edge, IE11+)",
            "Performance Testing": "Lighthouse for performance audits, WebPageTest for load time optimization, memory leak detection",
            "UI/UX Testing": "Responsive design testing across devices, accessibility compliance (WCAG 2.0), user interaction validation",
            "Mobile-Web Testing": "Chrome DevTools device simulation, real device testing for mobile browser compatibility",
            "Security Testing": "XSS vulnerability testing, input sanitization validation, secure payment form testing"
          },
          "4. Mobile App Development":{
            "Cross-Platform Framework": "Ionic Framework with AngularJS for hybrid mobile app development",
            "Frontend Technologies": "HTML5, CSS3, JavaScript (ES5), Ionic CSS components and AngularJS directives",
            "Native Bridges": "Cordova plugins for camera, geolocation, local storage APIs, device API access, custom plugins for specific hardware features",
            "Platforms Supported": "Android 4.1+ (Jelly Bean) and iOS 7+",
            "Core Features": "Bus schedule viewing, basic ticket booking, route information, contact details, real-time tracking, digital boarding passes, push notifications, offline booking support",
            "Device Integration": "GPS for location services, camera for profile pictures, local storage for offline data and user preferences",
            "Third-party Integrations": "Google Maps SDK for navigation, PayPal Mobile SDK and Stripe for payments, Firebase Cloud Messaging for push notifications",
            "Development Tools": "Intel XDK for prototyping, Chrome DevTools for mobile debugging",
            "Performance Optimization": "Lazy loading of routes, image compression, image sprites for icons, efficient data caching, minimal DOM manipulation, minimal AngularJS watchers, hardware acceleration CSS",
            "App Distribution": "Google Play Store for Android, Apple App Store for iOS deployment",
          },
          "5. Mobile App Testing":{
            "Unit Testing": "Jasmine for AngularJS service testing, Karma for test execution in the Ionic framework",
            "Integration Testing": "Protractor for end-to-end workflow testing, validation of Cordova plugin integrations",
            "Functional Testing": "Automated Protractor testing of core features: booking flow, payment processing, GPS tracking, and push notifications",
            "Regression Testing": "Automated Protractor test suites for critical user journeys after each app update",
            "Cross-Platform Testing": "Device testing on iOS 8+ and Android 4.4+, validation of consistent UI/UX across platforms",
            "Performance Testing": "Memory usage profiling, app launch time measurement, battery consumption analysis",
            "Device Compatibility": "Testing on multiple device types (phones/tablets) and screen resolutions",
            "Network Condition Testing": "App behavior validation under various network speeds (2G, 3G, 4G, WiFi) and offline scenarios",
            "Usability Testing": "User experience validation, navigation flow testing, accessibility compliance checks",
            "Store Compliance Testing": "Pre-submission validation for Google Play and Apple App Store guidelines",
            "Testing Approach": "Manual testing on physical devices (iOS 7/8, Android 4.1-4.4), Ripple emulator for preliminary testing"
          },
          "6. Backend Development":{
            "Languages & Frameworks": "Java 8, Spring Framework 4.x (Spring Boot, Spring MVC, Spring Data JPA, Spring Security)",
            "Core Modules": "Booking engine, payment processing service, route management, fleet tracking system, user management",
            "API Design": "RESTful web services for web and mobile clients, SOAP APIs for legacy system integration",
            "API Contract Approach": (<div>
                  <div><span className="badge resume-project-badge fs11">Contract-First Approach</span></div> 
                  <div className="mtop5p"><span className="text-grey2"><b>WSDL</b></span> (for SOAP services),</div>
                  <div className="mtop5p"><span className="badge resume-project-badge fs11">Contract-First Approach</span></div>
                  <div className="mtop5p"><span className="text-grey2"><b>OpenAPI/Swagger</b></span> (for REST APIs)</div>
                </div>),
            "Concurrency": "Multi-threaded booking request handling, synchronized seat allocation, connection pooling for database operations",
            "Data Exchange Libraries": "Jackson for JSON processing, JAXB for XML parsing, Gson for legacy data formats",
            "Data & Configuration Formats": "JSON for API payloads, YAML for application configuration, XML for third-party integrations",
            "Web Servers": "Apache Tomcat 8, embedded Jetty for development and testing",
            "Input Validation": "Spring Validation framework, custom validators for business rules, SQL injection prevention",
            "API Security": "OAuth 2.0 with JWT tokens, role-based access control, API rate limiting, CORS configuration",
            "Performance Optimization": "Database connection pooling with HikariCP, query optimization, Ehcache for frequently accessed data",
            "Protocols Implemented": "HTTP/HTTPS for web services, WebSocket for real-time tracking updates"
          },
          "7. Backend Testing":{
            "Unit Testing": "JUnit 4, Mockito for service layer mocking, PowerMock for static method testing",
            "Integration Testing": "Spring TestContext Framework, embedded H2 database testing, REST API integration with RestAssured",
            "Functional Testing": "End-to-end business logic validation for booking system, payment processing, and route management",
            "Regression Testing": "Automated test suites with Jenkins, database migration testing, backward compatibility validation",
            "API Testing": "Postman for REST API validation, SoapUI for SOAP web services, custom test clients for WebSocket endpoints",
            "Load & Stress Testing": "JMeter for simulating high concurrent bookings, Gatling for stress testing payment gateway",
            "Performance Testing": "Database query optimization testing, JProfiler for memory leak detection, response time benchmarking",
            "Continuous Testing": "Jenkins pipeline integration, automated test execution on Git commits, quality gates in deployment pipeline",
            "Security Testing": "OWASP ZAP for vulnerability scanning, SQL injection testing, authentication/authorization validation",
            "Concurrency Testing": "Multi-threaded booking scenario testing, race condition detection in seat allocation",
            "Database Testing": "DBUnit for test data management, Flyway for database migration testing, transaction rollback testing",
            "End-to-End Testing": "Selenium for complete system testing from mobile app booking to backend processing and confirmation"
          },
          "8. Database & Middleware": {
            "Database Management": "PostgreSQL 9.4 for transactional data, MongoDB for real-time tracking logs",
            "Data Caching": "Redis for session storage and frequently accessed route information, Ehcache for application-level caching",
            "Middleware / Messaging": "Apache ActiveMQ for asynchronous message processing, JMS for booking confirmation and notification queues",
            "Message Brokers": "RabbitMQ for inter-service communication between booking and tracking modules",
            "Connection Pooling": "HikariCP for database connection management, C3P0 for legacy connection handling",
            "ORM & Data Access": "Hibernate 4.x JPA implementation, Spring Data JPA, native SQL for complex reporting queries",
            "Session Management": "Spring Session with Redis for distributed session handling, JWT for stateless authentication",
            "Integration Middleware": "Apache Camel for ETL processes, Spring Integration for real-time data routing",
            "API Gateway": "NGINX as reverse proxy and load balancer, custom routing for microservices",
            "File Handling & Storage": "AWS S3 for document storage, SFTP for partner data exchanges, local file system for temporary processing",
            "Backup & Recovery": "PostgreSQL continuous archiving, AWS S3 snapshots, point-in-time recovery procedures",
            "Data Security": "Database column-level encryption, SSL/TLS for data in transit, secure credential management with HashiCorp Vault",
            "Performance Optimization": "Database indexing strategy, query performance tuning, connection pool optimization, read replicas for reporting"
          },
          "9. Infrastructure & Tools": {
            "Version Control": "Git with GitLab for source code management, feature branch workflow",
            "CI/CD Pipeline": "Jenkins for automated builds and deployment, Maven for dependency management, Ansible for configuration management",
            "Containerization": "Docker for application containerization, Docker Compose for local development environments",
            "Orchestration": "Kubernetes for container orchestration, Helm for package management",
            "Monitoring & Logging": "Prometheus for metrics collection, Grafana for dashboard visualization, ELK Stack (Elasticsearch, Logstash, Kibana) for log management",
            "Cloud Platforms": "AWS (EC2, S3, RDS, ELB) for production infrastructure, Docker Swarm for staging environment",
            "Configuration Management": "Ansible for server provisioning, Terraform for infrastructure as code",
            "OS & Servers": "Ubuntu 16.04 LTS, CentOS 7, Apache Tomcat 8, Nginx for load balancing and reverse proxy",
            "Security & Access": "LDAP integration, SSL/TLS certificate management, AWS IAM for access control, VPN for secure connectivity",
            "Code Quality & Coverage": "SonarQube for static code analysis, JaCoCo for code coverage, Checkstyle for code standards enforcement",
            "Backup & Rollback": "Automated AWS EBS snapshots, database backup strategies, blue-green deployment for zero-downtime rollbacks",
            "Collaboration Tools": "JIRA for project tracking, Confluence for documentation, Slack for team communication",
            "Testing Tools": "Selenium for automated testing, JMeter for performance testing, Postman for API testing",
            "Security Tools": "OWASP ZAP for security testing, Nessus for vulnerability scanning, HashiCorp Vault for secrets management"
          },
          "10. Security Management": {
            "Authentication": "OAuth 2.0 with JWT tokens, Spring Security for authentication framework, multi-factor authentication for admin access",
            "Authorization": "Role-Based Access Control (RBAC) with fine-grained permissions, method-level security with Spring Security annotations",
            "Password Policies": "BCrypt password hashing, enforced password complexity, account lockout after failed attempts, regular password expiration",
            "Data Encryption": "TLS 1.2 for data in transit, AES-256 encryption for sensitive data at rest, database column-level encryption for PII",
            "Sensitive Data Handling": "PCI DSS compliance for payment data, PII masking in logs, secure data disposal procedures, tokenization for payment information",
            "Vulnerability Management": "Regular security patches, OWASP Dependency Check for vulnerability scanning, penetration testing, security code reviews",
            "Security Auditing": "Splunk for security event monitoring, comprehensive audit trails for all transactions, regulatory compliance reporting",
            "Network Security": "AWS Security Groups for network segmentation, WAF for web application protection, DDoS mitigation, VPN for secure admin access",
            "API Security": "API rate limiting, Request validation, CORS configuration, API key management for third-party integrations",
            "Application Security": "Input sanitization, SQL injection prevention, XSS protection, CSRF tokens, secure session management"
          },
          "11. Production Support": {
            "Support Model": "Follow-the-sun L1/L2/L3 support model, ITIL-based incident management framework",
            "Management Tools": "ServiceNow for incident and problem management, JIRA Service Desk for ticket tracking, PagerDuty for on-call escalation",
            "Log Analysis": "Splunk for real-time log analysis and correlation, ELK Stack for log aggregation and visualization, CloudWatch for AWS monitoring",
            "On-Call Support": "24/7 on-call rotation with PagerDuty, mobile alerts for critical incidents, escalation policies for P1/P2 issues",
            "Release Management": "Jenkins for automated deployment pipelines, Ansible for configuration management, Git for version-controlled releases",
            "Post-Release Validation": "Automated health checks with Nagios, synthetic transaction monitoring, performance benchmarking with New Relic",
            "Resolution Metrics": (<div>
              <span className="text-grey2"><b>P1 Incidents</b></span> &lt;= 1 hour (99% Resolved - System outages and critical booking failures)<br/>
              <span className="text-grey2"><b>P2 Incidents</b></span> &lt;= 4 hours (95% Resolved - Major functionality issues)<br/>
              <span className="text-grey2"><b>P3 Incidents</b></span> &lt;= 8 hours (90% Resolved - Minor issues and enhancements)
            </div>),
            "System Availability": "99.5% application uptime maintained through proactive monitoring and automated failover mechanisms",
            "Efficiency Improvement": "Reduced MTTR (Mean Time to Resolution) by 35% through implementation of automated diagnostics and improved monitoring alerts"
          }
        },
        "rolesAndresponsibilities":[(<div>Designed and developed the complete <span className="text-grey2"><b>Fleet Management and Booking System,</b></span> including 
          the <span className="text-grey2"><b>AngularJS web portal</b></span> and <span className="text-grey2"><b>Ionic-based mobile apps</b></span> for Android 
          and iOS.</div>),
          (<div>Built <span className="text-grey2"><b>scalable backend services and RESTful APIs</b></span> using Java and Spring Framework to handle bookings, 
            payments, and real-time bus tracking.</div>),
          (<div>Implemented <span className="text-grey2"><b>real-time features</b></span> including live vehicle tracking using WebSockets and Google Maps integration.</div>),
          (<div>Integrated <span className="text-grey2"><b>third-party services</b></span> like payment gateways (Stripe/PayPal) and push notification systems for booking confirmations and alerts.</div>),
          (<div>Ensured <span className="text-grey2"><b>application security</b></span> by implementing OAuth 2.0, input validation, and secure data handling practices.</div>),
          (<div>Wrote and executed <span className="text-grey2"><b>comprehensive test suites</b></span> (Unit, Integration, E2E) using Jasmine, Karma, and Protractor to ensure software quality.</div>),
          (<div>Managed the <span className="text-grey2"><b>CI/CD pipeline</b></span> with Jenkins for automated builds, testing, and deployments.</div>),
          (<div>Provided <span className="text-grey2"><b>L3 production support,</b></span> monitored system health, and resolved incidents within defined SLAs, 
            maintaining <span className="text-grey2"><b>99.5% uptime.</b></span></div>)],
        "challenges":[{
              "title":"1. Real-Time Location Tracking",
              "challenge": (<div>Showing accurate, live bus locations on a map for thousands of vehicles with low latency.</div>),
              "solution": (<div>Used WebSockets for instant GPS data push and optimized backend services for high-frequency updates.</div>)
            },{
              "title":"2. Scalable Booking System",
              "challenge": (<div>Preventing double-booking and handling seat reservation spikes during peak travel seasons.</div>),
              "solution": (<div>Implemented a robust concurrency control mechanism in the backend and used caching (Redis) for seat inventory.</div>)
            },{
              "title":"3. Cross-Platform Mobile Development",
              "challenge": (<div>Building a single app that worked seamlessly and natively on both iOS and Android.</div>),
              "solution": (<div>Used the Ionic Framework to develop a hybrid app, writing code once and deploying to both platforms.</div>)
            },{
              "title":"4. Legacy System Integration",
              "challenge": (<div>Connecting the new web/mobile system with Greyhound's existing backend and database.</div>),
              "solution": (<div>Built a set of secure RESTful and SOAP APIs to act as a bridge, enabling data exchange without disrupting old systems.</div>)
            },{
              "title":"5. Maintaining High Availability",
              "challenge": (<div>Ensuring the booking platform was always available, especially during high traffic.</div>),
              "solution": (<div>Designed a fault-tolerant infrastructure on AWS with load balancers and automated failover, achieving 99.5% uptime.</div>)
            }],
        "achievements":[(<div>Successfully architected and delivered a <span className="text-grey2"><b>scalable Fleet Management & Booking System</b></span> used for national operations.</div>),
                      (<div>Achieved <span className="text-grey2"><b>99.5% application uptime</b></span> by implementing a robust, fault-tolerant infrastructure on AWS.</div>),
                      (<div>Reduced <span className="text-grey2"><b>Mean Time to Resolution (MTTR) by 35%</b></span> through enhanced monitoring and automated diagnostics.</div>),
                      (<div>Launched a <span className="text-grey2"><b>cross-platform mobile app (iOS & Android)</b></span> using the Ionic framework, expanding customer access.</div>),
                      (<div>Successfully handled <span className="text-grey2"><b>peak booking traffic</b></span> and concurrent users without system downtime during holiday seasons.</div>),
                      (<div>Streamlined the development lifecycle by establishing a <span className="text-grey2"><b>CI/CD pipeline</b></span> with Jenkins, cutting deployment time by 40%.</div>),
                      (<div>Enhanced system security and achieved <span className="text-grey2"><b>PCI DSS compliance</b></span> for the payment processing module.</div>)
        ]
    },{
      "title":"Live GPS Tracking and Geofencing System",
      "isPOC": true,
      "desc":(<div>This Proof of Concept (POC) was initiated to address a critical limitation in the Fleet Management and Booking System—the lack of proactive, intelligent 
        location-based alerts. The POC engineered a real-time Geofencing and GPS tracking engine that created virtual geographical boundaries (geofences) around key 
        locations like bus depots, scheduled stops, and maintenance zones. It continuously monitored vehicle positions using live GPS data and triggered instant automated 
        notifications for operational deviations, such as a bus arriving at a depot, departing from a scheduled route, or entering a restricted area, thereby enabling 
        proactive management and significantly enhancing operational visibility and response time.</div>),
      "tags":["Website", "Android / IOS Mobile App"],
      "projectDetails":{
        "Client Name":"Greyhound Lines, Inc.",
        "Team Size": 4,
        "My Roles & Timelines": {
          "My Role" : "R&D Solutions Engineer - Real-Time Location Based Services",
          "Timeline": (<span className="badge resume-work-badge fs11">Jun 2016 - Dec 2016</span>),
        }
      },
      "projectTechStack":{
          "":{

          },
          "":{

          },
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
      "rolesAndresponsibilities":[],
      "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
      "achievements":[]
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
      "rolesAndresponsibilities":[],
      "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
      "achievements":[]
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
    "rolesAndresponsibilities":[],
    "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
    "achievements":[]
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
  "rolesAndresponsibilities":[],
  "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
  "achievements":[]
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
        "rolesAndresponsibilities":[],
        "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
        "achievements":[]
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
        "rolesAndresponsibilities":[],
        "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
        "achievements":[]
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
      "rolesAndresponsibilities":[],
      "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
      "achievements":[]
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
    "rolesAndresponsibilities":[],
    "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
    "achievements":[]
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
      "rolesAndresponsibilities":[],
      "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
      "achievements":[]
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
      "rolesAndresponsibilities":[],
      "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
      "achievements":[]
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
        "rolesAndresponsibilities":[],
        "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
        "achievements":[]
    }]
  }]
},{
  "companyName":"Tescra Software Systems",
  "workDuration":"1 year 5 months",
  "timelines":[{
    "timeline":"May 2022 ~ Till Now",
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
        "rolesAndresponsibilities":[],
        "challenges":[{
              "title":"1. ",
              "challenge": (<div></div>),
              "solution": (<div></div>)
            }],
        "achievements":[]
    }]
  }]
}];