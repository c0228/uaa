import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const V8Node = ({ meta }) =>{
 return (<div>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <div className="mtop15p blog-desc">
            Node.js is a JavaScript runtime built on the V8 JavaScript engine, which powers Google Chrome. V8 compiles JavaScript into 
            machine code, enabling rapid execution. Node.js extends this functionality to the server-side, allowing developers to run 
            JavaScript outside of the browser, facilitating scalable and efficient backend development. Node.js leverages V8's performance 
            capabilities to handle concurrent connections, I/O operations, and event-driven architecture, making it ideal for building 
            fast and scalable network applications. Together, Node.js and V8 enable developers to write server-side applications in 
            JavaScript, utilizing a single language across the entire tech stack.
            </div>
            <div className="mtop15p blog-desc">
            <div className="mbot15p">
            <div><h5 className="mtop15p"><b>The Relationship between Node JS and V8 JS Engine</b></h5></div>
            <div className="mtop15p blog-desc">
                The <u><b>V8 JavaScript Engine</b></u> is the open-source JS engine developed by Google for the Chrome 
                browser. <u><b>Node.js</b></u> is a JavaScript runtime built on the V8 engine. Essentially, Node.js 
                allows you to run JavaScript code outside of a web browser, utilizing the V8 engine to execute JavaScript code on 
                the server side. So, Node.js relies on the V8 engine for its JavaScript execution capabilities.
            </div>
            </div>
            </div>
            <div className="mtop35p blog-desc">
                <div align="center"><h4 className="blog-head"><b>How Web Browsers works before V8 JS Engine?</b></h4></div>
            </div>
            <div className="mtop15p blog-desc">
            Before the <u><b>V8 JavaScript Engine</b></u> was introduced by Google in 2008, web browsers used various other 
            JavaScript engines, each with its own implementation and optimizations. Some of the early JavaScript engines include:
            <ul>
                <li className="mtop15p"><b>SpiderMonkey:</b> Developed by Netscape Communications Corporation for their Netscape Navigator browser, 
                SpiderMonkey was the first JavaScript engine, released in 1996. It was written in C and was one of the first 
                implementations of JavaScript.</li>
                <li className="mtop15p"><b>Webkit Javascript Engine:</b> Developed by Apple for their Safari browser, Webkit Javascript Engine (also 
                called as Javascript Core) was introduced in 2001. Later, in 2003, it is specialized and optimized version of 
                JavascriptCore was renamed as Nitro which specifically designed for high performance Javascript Execution in 
                Safari on Apple's Platform. Later, it became the basis for the JavaScript engine used in the Chromium project.</li>
                <li className="mtop15p"><b>Chakra:</b> Developed by Microsoft for their Internet Explorer browser, Chakra was introduced in 2008. 
                It was initially written in C++, and later versions were rewritten in C++ for better performance.</li>
                <li className="mtop15p"><b>Carakan:</b> Developed by Opera Software for their Opera browser, Carakan was introduced in 2009. It was 
                written in C++ and featured various optimizations to improve JavaScript performance.</li>
            </ul>
            These JavaScript engines, along with others developed by different browser vendors, played a crucial role in enabling dynamic 
            and interactive web experiences. They interpreted and executed JavaScript code to enable functionality such as form validation, 
            dynamic content updates, and client-side interactions. While each engine had its own unique features and optimizations, they all 
            aimed to provide fast and efficient JavaScript execution within the context of a web browser.
            </div>
            <div className="mtop15p cardBox blog-desc">
            The <u><b>V8 JavaScript Engine</b></u> was introduced into the market in 2008 alongside the initial release of Google Chrome. 
            The introduction of the V8 engine was one of the key innovations of Chrome, aimed at providing a fast and efficient browsing 
            experience by improving JavaScript performance.
            </div>
            <div className="mtop35p blog-desc">
                <div align="center"><h4 className="blog-head"><b>How Node JS works with V8 JS Engine?</b></h4></div>
            </div>
            <div className="mtop15p mbot35p blog-desc">
              <ol>
                <li>
                    <div><b>Initialization</b></div>
                    <ul>
                        <li>When Node.js starts, it initializes the V8 engine. This involves setting up the JavaScript runtime environment, 
                            which includes creating the global object, setting up the global scope, and allocating memory for V8's internal 
                            data structures.</li>
                        <li>V8's initialization process also includes configuring various runtime settings, such as memory limits, stack size, 
                            and garbage collection parameters.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Loading JavaScript Files</b></div>
                    <ul>
                        <li>Once initialized, Node.js loads the initial JavaScript file specified by the user. This is typically the entry 
                            point of the application, such as index.js or app.js.</li>
                        <li>The loaded JavaScript file is then passed to the V8 engine for execution.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Parsing and Compilation</b></div>
                    <ul>
                        <li>As the JavaScript code is read, V8 parses it to create an Abstract Syntax Tree (AST). The AST represents the 
                            structure of the code, enabling V8 to understand its semantics.</li>
                        <li>After parsing, V8 compiles the AST into machine code using its optimizing compiler. This compilation process 
                            optimizes the code for execution, potentially improving its performance.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Execution</b></div>
                    <ul>
                        <li>Once compiled, the machine code is executed by the V8 engine. This is where the actual execution of the JavaScript 
                            code takes place, and the tasks defined in the code are performed.</li>
                        <li>V8 handles function calls, variable assignments, control flow statements, and other JavaScript language features 
                            during execution.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Event Loop</b></div>
                    <ul>
                        <li>Node.js utilizes V8's event loop to manage asynchronous operations. The event loop is a fundamental part of 
                            Node.js's non-blocking I/O model, which allows it to efficiently handle concurrent operations.</li>
                        <li>Asynchronous operations such as file I/O, network requests, and timers are initiated by Node.js and are 
                            managed by the event loop. When these operations complete, their corresponding callbacks are queued in 
                            the event loop to be executed.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Garbage Collection</b></div>
                    <ul>
                        <li>V8 automatically manages memory allocation and deallocation through garbage collection. Garbage collection 
                            is the process of reclaiming memory that is no longer in use by identifying and freeing up unused memory.</li>
                        <li>V8's garbage collector periodically scans the heap, where objects allocated by JavaScript code are stored, 
                            and identifies objects that are no longer reachable (i.e., not referenced by any part of the program). These 
                            unreachable objects are then removed from memory.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Native Bindings</b></div>
                    <ul>
                        <li>Node.js allows developers to use native C/C++ bindings through its addon system. These bindings enable 
                            integration with existing C/C++ libraries or provide access to system-level functionality.</li>
                        <li>Node.js addons interface with V8's C++ API to interact with JavaScript code. This allows developers to 
                            leverage the performance and capabilities of native code within their Node.js applications.</li>
                    </ul>
                </li>
                <li className="mtop15p">
                    <div><b>Error Handling</b></div>
                    <ul>
                        <li>V8 provides mechanisms for handling exceptions and errors in JavaScript code. When an error occurs 
                            during execution, V8 generates an exception object that can be caught and handled by JavaScript code 
                            using constructs like the try...catch statement.</li>
                        <li>Node.js also provides its own error handling mechanisms, such as the process.on('uncaughtException') 
                            event, which allows developers to capture and handle uncaught exceptions at the application level.</li>
                    </ul>
                </li>
              </ol>
              <div className="mbot35p">
              These steps collectively describe how Node.js interacts with the V8 engine to execute JavaScript code and provide a 
              runtime environment for building server-side applications. Each step plays a crucial role in ensuring the proper 
              functioning and performance of Node.js applications.
              </div>
            </div>
        </Col>
    </Row>
    </ContainerFluid>
 </div>);
};

export default V8Node;