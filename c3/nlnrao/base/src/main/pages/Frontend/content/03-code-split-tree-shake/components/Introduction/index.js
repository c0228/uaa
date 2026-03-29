import React from "react";
import { Card, Icon, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

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

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
	<div className="mtop15p">
		<Card padding={15} backgroundColor="#eee">
            <div><h4 className="blog-head"><b>Pre-Introduction: Why These Concepts Were Introduced</b></h4></div>
            <div>In the early days of JavaScript, web applications were small. Developers wrote a few scripts, loaded them 
                with <code><b>&lt;script&gt;</b></code> tags, and everything worked fine. But as applications grew—especially 
                with the rise of <b>Single Page Applications (SPAs)</b> — JavaScript bundles became <b>huge</b>.</div>
            <div>Frameworks like React, Angular, and Vue encouraged modular development, but at runtime all those modules 
                were bundled into one large file. This led to:</div>
            <div>
                <ul>
                    <li className="mtop5p">Slow initial page loads</li>
                    <li className="mtop5p">Poor performance on low-end devices</li>
                    <li className="mtop5p">Unnecessary code being sent to users</li>
                    <li className="mtop5p">Increased memory usage</li>
                </ul>
            </div>
            <div>To solve these problems, modern bundlers and runtimes 
                introduced <b>Code Splitting</b> and <b>Tree Shaking</b> — two powerful optimization techniques that changed 
                how JavaScript applications are built and delivered.</div>
		</Card>
	</div>
    <div className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div>
        <div className="list-group">
            <div className="list-group-item">
                <div><h4 className="blog-head"><b>What is Code Splitting?</b></h4></div>
                <div><b>Code Splitting</b> is the practice of breaking a large JavaScript bundle into <b>smaller chunks</b> that 
                are loaded <b>on demand</b>, instead of loading everything upfront.</div>
                <div><b>Idea:</b> <i>Load only what the user needs, when the user needs it.</i></div>
            </div>
            <div className="list-group-item">
                <div><h4 className="blog-head"><b>What is Tree Shaking?</b></h4></div>
                <div><b>Tree Shaking</b> is a technique that removes <b>unused code (dead code)</b> from the final bundle.</div>
                <div><b>Idea:</b> If a piece of code is never imported or used, it should not be shipped.</div>
            </div>
        </div>
    </div>
    <div className="mtop5p">Both techniques aim to <b>reduce bundle size, improve performance, and optimize resource usage</b>.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Core Difference at a Glance</b></h2></div>
    <div>
        <SimpleTable header={["Concept", "Purpose", "When it works?"]} 
                columns={[
                    ["Code Splitting", "Load code dynamically", "Runtime"],
                    ["Tree Shaking", "Remove unused exports", "Build time"]
				]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Example Scenario</b></h2></div>
    <div>
        <div>Imagine a NodeJS application with the following features:</div>
        <div>
            <ol>
                <li className="mtop5p">User authentication</li>
                <li className="mtop5p">Admin dashboard</li>
                <li className="mtop5p">Reports generation</li>
            </ol>
        </div>
        <div>Most users <b>never access the admin dashboard,</b> yet the code is still bundled and shipped.</div>
        <div>This is where <b>Code Splitting</b> and <b>Tree Shaking</b> help.</div>

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
        </div>
    </div>
 </div>);
};

export default Introduction;