import React from "react";
import { Highlight, Icon } from "e-ui-react";

const CSP_EXAMPLE_JS = `import express from "express";

const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; object-src 'none';"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Secure App</h1>");
});

app.listen(3000);`;

const CSPHELMET_EXAMPLE_JS = `import helmet from "helmet";
import express from "express";

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdn.example.com"],
      objectSrc: ["'none'"],
      imgSrc: ["'self'", "data:"],
    },
  })
);

app.listen(3000);`;

const CSPMETA_EXAMPLE_JS = `<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self'"
/>`;

const CSPVIOLATE_EXAMPLE_HTML = `Content-Security-Policy:
  default-src 'self';
  report-uri /csp-report`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop5p"><h4 className="blog-head"><b>CSP Implementation Examples</b></h4></div>
	<div className="mtop5p"><h5 className="blog-head"><b>1. CSP in a NodeJS (Express) Application</b></h5></div>
    <div className="mtop5p">
        <Highlight content={CSP_EXAMPLE_JS} lang="javascript" />
    </div>
    <div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Browser enforces policy
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Malicious scripts blocked automatically
        </div>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>2. CSP Using Helmet (Recommended)</b></h5></div>
    <div className="mtop5p">
        <Highlight content={CSPHELMET_EXAMPLE_JS} lang="javascript" />
    </div>
    <div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Cleaner
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Safer defaults
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Easier to maintain
        </div>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>3. CSP via Meta Tag (Limited Use)</b></h5></div>
    <div className="mtop5p">
        <Highlight content={CSPMETA_EXAMPLE_JS} lang="javascript" />
    </div>
    <div><b>Limitations:</b></div>
    <div>
        <ul>
            <li className="mtop5p">Cannot protect against all injection vectors</li>
            <li className="mtop5p">HTTP headers are more secure</li>
        </ul>
    </div>

    <div className="mtop5p"><h4 className="blog-head"><b>Inline Scripts & CSP (Common Pitfall)</b></h4></div>
    <div className="mtop5p">CSP <b>blocks inline scripts by default.</b></div>
    <div className="mtop5p">
        <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
        <Highlight content={`<button onclick="alert('Hi')">Click</button>`} lang="javascript" />
    </div>
    <div><b>Safer Alternatives</b></div>
    <div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            External JS files
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Event listeners in JavaScript
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Nonces or hashes (advanced usage)
        </div>
    </div>

    <div className="mtop5p"><h4 className="blog-head"><b>CSP Violation Reporting</b></h4></div>
    <div className="mtop5p">You can instruct browsers to report violations:</div>
    <div className="mtop5p">
        <Highlight content={CSPVIOLATE_EXAMPLE_HTML} lang="html" />
    </div>
    <div>
        <div>This helps you:</div>
        <ul>
            <li className="mtop5p">Detect attacks</li>
            <li className="mtop5p">Identify misconfigured resources</li>
            <li className="mtop5p">Improve security without breaking the app</li>
        </ul>
    </div>

    <div className="mtop5p"><h4 className="blog-head"><b>CSP in Modern Web Apps (React / Angular / Vue)</b></h4></div>
    <div className="mtop5p"><h5 className="blog-head"><b>Challenges:</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Inline styles</li>
            <li className="mtop5p">Dynamic scripts</li>
            <li className="mtop5p">Third-party libraries</li>
        </ul>
    </div>
    <div className="mtop5p"><h5 className="blog-head"><b>Solutions:</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Avoid <code><b>eval</b></code></li>
            <li className="mtop5p">Avoid inline scripts</li>
            <li className="mtop5p">Use strict CSP with exceptions</li>
            <li className="mtop5p">Gradually tighten policy using <code><b>Content-Security-Policy-Report-Only</b></code></li>
        </ul>
    </div>

    <div className="mtop5p"><h4 className="blog-head"><b>Common Mistakes to Avoid</b></h4></div>
    <div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Using <code><b>unsafe-inline</b></code> unnecessarily
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Allowing <code><b>*</b></code> in <code><b>script-src</b></code>
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Ignoring CSP violation reports
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Copy-pasting CSP without understanding it
        </div>
    </div>
 </div>);
};

export default Examples;