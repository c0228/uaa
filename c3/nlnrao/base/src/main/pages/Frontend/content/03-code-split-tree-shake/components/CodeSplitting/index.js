import React from "react";
import { Card, Icon, Highlight } from "e-ui-react";

const WoCS_EXAMPLE_NODEJS = `const auth = require('./auth');
const admin = require('./admin');
const reports = require('./reports');

auth.login();`;

const WCS_EXAMPLE_NODEJS = `async function login() {
  const auth = await import('./auth.js');
  auth.login();
}

async function loadAdmin() {
  const admin = await import('./admin.js');
  admin.openDashboard();
}`;

const CodeSplitting = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h3 className="blog-head"><b>Code Splitting in NodeJS</b></h3></div>
        <div className="padLeft15p">
            <Card padding={15} backgroundColor="#eee">
                <div><h4 className="blog-head"><b>When Does Code Splitting Make Sense in NodeJS?</b></h4></div>
                <div>
                    <div>Although commonly used in frontend apps, <b>NodeJS also benefits</b> from code splitting when:</div>
                    <ul>
                        <li className="mtop5p">You have large feature-based modules</li>
                        <li className="mtop5p">You want faster startup times</li>
                        <li className="mtop5p">Certain features are rarely used</li>
                        <li className="mtop5p">You are building serverless or microservices</li>
                    </ul>
                </div>
            </Card>

            <div className="mtop15p"><h4 className="blog-head"><b>Example: Dynamic Import (Code Splitting)</b></h4></div>
            <div className="mtop15p">
                <h5 className="blog-head">
                    <b><Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} /> Without Code Splitting</b>
                </h5>
            </div>
            <div><Highlight content={WoCS_EXAMPLE_NODEJS} lang="javascript" /></div>
            <div className="mtop5p">All modules load at startup—even if <code><b>admin</b></code> and <code><b>reports</b></code> are never used.</div>
        
            <div className="mtop15p">
                <h5 className="blog-head">
                    <b><Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} /> With Code Splitting (Dynamic Import)</b>
                </h5>
            </div>
            <div><Highlight content={WCS_EXAMPLE_NODEJS} lang="javascript" /></div>
            <div>
                <div><Icon type="FontAwesome" name="fa-check-circle" style={{ marginRight:'5px' }} /> Admin code loads only when needed</div>
                <div><Icon type="FontAwesome" name="fa-check-circle" style={{ marginRight:'5px' }} /> Reduced startup time</div>
                <div><Icon type="FontAwesome" name="fa-check-circle" style={{ marginRight:'5px' }} /> Better memory usage</div>
            </div>

            <div className="mtop15p"><h4 className="blog-head"><b>Real-World Use Case in NodeJS</b></h4></div>
            <div>
                <ul>
                    <li className="mtop5p">Feature-based APIs</li>
                    <li className="mtop5p">Optional plugins</li>
                    <li className="mtop5p">CLI tools (lazy-loaded commands)</li>
                    <li className="mtop5p">Serverless handlers</li>
                </ul>
            </div>
        </div>
 </div>);
};

export default CodeSplitting;