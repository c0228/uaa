import React from "react";
import { Card, Highlight } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
		<div><h4 className="blog-head"><b>Pre-Introduction: How HTTP Status Codes Came into Existence</b></h4></div>
        <div className="mtop5p">When the <b>World Wide Web</b> was invented by <b>Tim Berners-Lee</b> in the early 1990s, the primary goal 
        was simple:</div>
        <div className="mtop5p"><i>Allow computers to share documents over a network.</i></div>
        <div className="mtop5p">Early versions of HTTP were minimal and human-friendly. A client (browser) would request a resource, 
            and the server would respond with either the resource or a simple error message.</div>
        <div className="mtop5p">As the web grew—from static pages to dynamic applications — servers 
            needed a <b>standardized way to communicate the result of a request:</b></div>
        <div>
            <ul>
                <li className="mtop5p">Was it successful?</li>
                <li className="mtop5p">Was the resource missing?</li>
                <li className="mtop5p">Did the client do something wrong?</li>
                <li className="mtop5p">Did the server fail internally?</li>
            </ul>
        </div>
        <div className="mtop5p">This requirement led to the introduction of <b>HTTP Status Codes</b> — numeric codes that 
        precisely describe the outcome of an HTTP request. These codes were standardized through HTTP specifications (like HTTP/1.1) 
        so that <b>all browsers, servers, and APIs could speak the same language.</b></div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Are HTTP Status Codes?</b></h2></div>
    <div className="mtop5p"><b>HTTP Status Codes</b> are <b>three-digit numbers</b> returned by a server in response to a 
    client’s HTTP request. They tell the client <b>what happened</b> when it tried to access a resource.</div>
    <div className="mtop15p"><h4 className="blog-head"><b>Basic Structure</b></h4></div>
    <div className="mtop5p"><Highlight content={`HTTP/1.1 200 OK`} lang="javascript" /></div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>HTTP/1.1</b></code> : HTTP version</li>
            <li className="mtop5p"><code><b>200</b></code> : Status code</li>
            <li className="mtop5p"><code><b>OK</b></code> : Human-readable message</li>
        </ul>
    </div>
    <div className="mtop15p"><h4 className="blog-head"><b>Why They Matter?</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Help browsers decide what to display</li>
            <li className="mtop5p">Help developers debug issues</li>
            <li className="mtop5p">Essential for REST APIs and microservices</li>
            <li className="mtop5p">Critical for SEO, caching, and performance</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Categories of HTTP Status Codes</b></h2></div>
    <div className="mtop5p">HTTP status codes are grouped by their <b>first digit,</b> which indicates the class of response.</div>
    <div>
        <ul>
            <li className="mtop5p">
                <div><b>Informational (100–199)</b></div>
                <div className="mtop5p">Indicate that the request was received and processing is continuing.</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>100 Continue –</b> Client can proceed with request body</li>
                    </ul>
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Success (200–299)</b></div>
                <div className="mtop5p">Indicate that the request was successfully received and processed.</div>
                <div className="mtop5p">Common ones:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>200 OK –</b> Request successful</li>
                        <li className="mtop5p"><b>201 Created –</b> Resource successfully created</li>
                        <li className="mtop5p"><b>204 No Content –</b> Success, but no response body</li>
                    </ul>
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Redirection (300–399)</b></div>
                <div className="mtop5p">Indicate that the client must take additional action.</div>
                <div className="mtop5p">Common ones:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>301 Moved Permanently –</b> Resource moved permanently</li>
                        <li className="mtop5p"><b>302 Found –</b> Temporary redirect</li>
                        <li className="mtop5p"><b>304 Not Modified –</b> Cached version can be used</li>
                    </ul>
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Client Errors (400–499)</b></div>
                <div className="mtop5p">Indicate an error caused by the client.</div>
                <div className="mtop5p">Common ones:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>400 Bad Request –</b> Invalid request syntax</li>
                        <li className="mtop5p"><b>401 Unauthorized –</b> Authentication required</li>
                        <li className="mtop5p"><b>403 Forbidden –</b> Access denied</li>
                        <li className="mtop5p"><b>404 Not Found –</b> Resource not found</li>
                    </ul>
                </div>
            </li>
            <li className="mtop5p">
                <div><b>Server Errors (500–599)</b></div>
                <div className="mtop5p">Indicate an error on the server side.</div>
                <div className="mtop5p">Common ones:</div>
                <div>
                    <ul>
                        <li className="mtop5p"><b>500 Internal Server Error –</b> Generic server failure</li>
                        <li className="mtop5p"><b>502 Bad Gateway –</b> Invalid response from upstream server</li>
                        <li className="mtop5p"><b>503 Service Unavailable –</b> Server temporarily down</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
 </div>);
};

export default Introduction;