import React from "react";
import { Card, Icon, Highlight } from "e-ui-react";

const MONOLITH_EXAMPLE_FE = `Single UI App
 ├── Home
 ├── Product Listing
 ├── Cart
 ├── Payments
 └── User Profile`;

const MICROFE_EXAMPLE_FE = `Shell Application
 ├── Home App (Team A – React)
 ├── Product App (Team B – Angular)
 ├── Cart App (Team C – Vue)
 └── Payment App (Team D – Svelte)`;

const HOSTAPP_EXAMPLE_JS = `new ModuleFederationPlugin({
  remotes: {
    cartApp: "cartApp@http://localhost:3001/remoteEntry.js",
  },
});`;

const REMOTE_EXAMPLE_JS = `const Cart = React.lazy(() => import("cartApp/Cart"));`;

const Examples = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Scenario: E-Commerce Application</b></h2></div>
    <div className="mtop5p">Consider an e-commerce website:</div>
    <div className="mtop5p"><h4 className="blog-head"><b>Monolithic Frontend:</b></h4></div>
    <div className="mtop5p"><Highlight content={MONOLITH_EXAMPLE_FE} lang="html" /></div>
    <div className="mtop5p"><h4 className="blog-head"><b>Micro Frontend Approach:</b></h4></div>
    <div className="mtop5p"><Highlight content={MICROFE_EXAMPLE_FE} lang="html" /></div>
    <div className="mtop5p">Each team:</div>
    <div>
        <ul>
            <li className="mtop5p">Works independently</li>
            <li className="mtop5p">Releases features without blocking others</li>
            <li className="mtop5p">Chooses the best technology for their module</li>
        </ul>
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Implementation: How Micro Frontend Works</b></h4></div>
    <div className="mtop5p">There are multiple ways to implement Micro Frontends. Below are the most common and practical approaches.</div>
    <div className="padLeft15p">
        <div className="mtop5p"><h5 className="blog-head"><b>1. Build-Time Integration</b></h5></div>
        <div className="mtop5p">All micro frontends are combined during build time.</div>
        <div className="mtop5p"><h5 className="blog-head"><b>How it works:</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p">Each team publishes a package (<code><b>npm</b></code>)</li>
                <li className="mtop5p">The container app imports them</li>
            </ul>
        </div>
        <div className="mtop5p"><h5 className="blog-head"><b>Pros:</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p">Simple setup</li>
                <li className="mtop5p">Good performance</li>
            </ul>
        </div>
        <div className="mtop5p"><h5 className="blog-head"><b>Cons:</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p">Requires redeployment for every change</li>
                <li className="mtop5p">Not truly independent</li>
            </ul>
        </div>
    </div>
    <div className="padLeft15p">
        <div className="mtop5p"><h5 className="blog-head"><b>2. Run-Time Integration (Most Popular)</b></h5></div>
        <div className="mtop5p">Micro frontends are loaded dynamically at runtime.</div>
        <div className="mtop5p"><b>Using Module Federation (Webpack 5)</b></div>
        <div className="mtop5p"><b>Host App Configuration</b></div>
        <div className="mtop5p">
            <Highlight content={HOSTAPP_EXAMPLE_JS} lang="javascript" />
        </div>
        <div className="mtop5p"><b>Using Remote Module</b></div>
        <div className="mtop5p">
            <Highlight content={REMOTE_EXAMPLE_JS} lang="javascript" />
        </div>
        <div className="mtop5p"><h5 className="blog-head"><b>Pros</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p">Independent deployments</li>
                <li className="mtop5p">True micro frontend behavior</li>
            </ul>
        </div>
        <div className="mtop5p"><h5 className="blog-head"><b>Cons</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p">Slight runtime complexity</li>
            </ul>
        </div>
    </div>
    <div className="padLeft15p">
        <div className="mtop5p"><h5 className="blog-head"><b>3. Server-Side Composition</b></h5></div>
        <div className="mtop5p">Fragments of HTML are composed on the server</div>
        <div className="mtop5p"><h5 className="blog-head"><b>Example:</b></h5></div>
        <div>
            <ul>
                <li className="mtop5p">Backend renders different UI fragments</li>
                <li className="mtop5p">Gateway combines them into one page</li>
            </ul>
        </div>
        <div className="mtop5p"><b>Used:</b> Large enterprise systems</div>
    </div>
    <div className="padLeft15p">
        <div className="mtop5p"><h5 className="blog-head"><b>4. Using Frameworks Like Single-SPA</b></h5></div>
        <div>Single-spa allows multiple frameworks to coexist.</div>
        <div><b>Example:</b></div>
        <div>
            <ul>
                <li className="mtop5p">React app + Angular app on the same page</li>
                <li className="mtop5p">Unified routing and lifecycle management</li>
            </ul>
        </div>
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Communication Between Micro Frontends</b></h4></div>
    <div className="mtop5p">Since micro frontends are isolated, communication must be controlled.</div>
    <div className="mtop5p"><h5 className="blog-head"><b>Recommended Patterns</b></h5></div>
    <div>
        <ul>
            <li className="mtop5p">Custom browser events</li>
            <li className="mtop5p">Shared state via URL</li>
            <li className="mtop5p">Shared libraries (with caution)</li>
            <li className="mtop5p">Backend-driven state</li>
        </ul>
    </div>
    <div>
        <Icon type="FontAwesome" name="fa-times" color="red" style={{ marginRight:'5px' }} />
        Avoid tight coupling or direct imports between micro apps.
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Benefits of Micro Frontend:</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Independent development & deployment</li>
            <li className="mtop5p">Scales well with large teams</li>
            <li className="mtop5p">Technology flexibility</li>
            <li className="mtop5p">Faster time-to-market</li>
            <li className="mtop5p">Better ownership and accountability</li>
        </ul>
    </div>
    <div className="mtop5p"><h4 className="blog-head"><b>Challenges & Considerations:</b></h4></div>
    <div>
        <ul>
            <li className="mtop5p">Increased architectural complexity</li>
            <li className="mtop5p">Performance overhead if not optimized</li>
            <li className="mtop5p">Consistent UI/UX requires design systems</li>
            <li className="mtop5p">Requires strong DevOps and CI/CD practices</li>
        </ul>
    </div>
 </div>);
};

export default Examples;