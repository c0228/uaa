import React from "react";
import { Highlight, Icon } from "e-ui-react";

const Option = ({ status }) => (<Icon type="FontAwesome" name="fa-times" color={status?"green":"red"} style={{ marginLeft:'5px' }} />);

const SCENARIO_EXAMPLE_API = `GET /users/42 HTTP/1.1
Host: api.example.com`;

const SUCCESS_EXAMPLE_API = `HTTP/1.1 200 OK
{
  "id": 42,
  "name": "Ravi"
}`;

const USERNOTFOUND_EXAMPLE_API = `HTTP/1.1 404 Not Found
{
  "error": "User not found"
}`;

const UNAUTHORIZED_EXAMPLE_API = `HTTP/1.1 401 Unauthorized
{
  "message": "Token required"
}`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example: HTTP Status Codes in Action</b></h2></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Scenario: Browser Request</b></h4></div>
    <div className="mtop5p"><Highlight content={SCENARIO_EXAMPLE_API} lang="javascript" /></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Possible Responses</b></h4></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Success:</b></h5></div>
    <div className="mtop5p"><Highlight content={SUCCESS_EXAMPLE_API} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>User Not Found:</b></h5></div>
    <div className="mtop5p"><Highlight content={USERNOTFOUND_EXAMPLE_API} lang="javascript" /></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Unauthorized Access:</b></h5></div>
    <div className="mtop5p"><Highlight content={UNAUTHORIZED_EXAMPLE_API} lang="javascript" /></div>
    <div className="mtop5p">Each response clearly tells the client <b>what went wrong or right</b> without ambiguity.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Implementation Example (Backend API)</b></h2></div>
    <div className="mtop15p"><h4 className="blog-head"><b>Example Using REST API Logic</b></h4></div>
    <div className="mtop15p"><h5 className="blog-head"><b>Create User:</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Request: <code><b>POST /users</b></code></li>
            <li className="mtop5p">Success: <code><b>201 Created</b></code></li>
            <li className="mtop5p">Validation Error: <code><b>400 Bad Request</b></code></li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Get User:</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Found: <code><b>200 OK</b></code></li>
            <li className="mtop5p">Not Found: <code><b>404 Not Found</b></code></li>
        </ul>
    </div>
    <div className="mtop15p"><h5 className="blog-head"><b>Delete User:</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Success: <code><b>204 No Content</b></code></li>
            <li className="mtop5p">Forbidden: <code><b>403 Forbidden</b></code></li>
        </ul>
    </div>

    <div className="mtop15p"><h4 className="blog-head"><b>Why Correct Status Codes Matter?</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Frontend shows correct UI messages</li>
            <li className="mtop5p">API consumers handle logic properly</li>
            <li className="mtop5p">Load balancers and caches behave correctly</li>
            <li className="mtop5p">Monitoring tools detect failures easily</li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Common Mistakes Developers Make</b></h2></div>
    <div>
        <ul>
            <li className="mtop5p">
                <Option status={false} /> Returning <code><b>200 OK</b></code> for errors
            </li>
            <li className="mtop5p">
                <Option status={false} /> Using <code><b>500</b></code> for client-side issues
            </li>
            <li className="mtop5p">
                <Option status={false} /> Ignoring semantic meaning of status codes
            </li>
            <li className="mtop5p">
                <Option status={false} /> Mixing business logic errors with HTTP errors
            </li>
            <li className="mtop5p">
                <Option status={true} /> Correct usage improves <b>clarity, maintainability, and professionalism</b>
            </li>
        </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>HTTP Status Codes and SEO:</b></h2></div>
    <div className="mtop5p">Search engines rely heavily on status codes:</div>
    <div>
        <ul>
            <li className="mtop5p"><b>200 :</b> Page is indexable</li>
            <li className="mtop5p"><b>301 :</b> SEO value transferred</li>
            <li className="mtop5p"><b>404 :</b> Page removed from index</li>
            <li className="mtop5p"><b>503 :</b> Temporary downtime (safe for maintenance)</li>
        </ul>
    </div>
    <div>Improper codes can <b>hurt search rankings.</b></div>
 </div>);
};

export default Examples;