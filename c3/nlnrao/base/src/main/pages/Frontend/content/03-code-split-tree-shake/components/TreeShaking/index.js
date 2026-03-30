import React from "react";
import { Card, Icon, Highlight } from "e-ui-react";

const UTILMOD_EXAMPLE_NODEJS = `// utils.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}`;

const TREESHAKE_EXAMPLE_NODEJS = `import { add } from './utils.js';

console.log(add(2, 3));`;

const MARKSIDE_EXAMPLE_NODEJS = `{
  "sideEffects": false
}`;

const TreeShaking = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h3 className="blog-head"><b>Tree Shaking in NodeJS</b></h3></div>
    <div className="padLeft15p">

        <div><h4 className="blog-head"><b>Key Requirement for Tree Shaking</b></h4></div>
        <div className="mtop15p">Tree shaking works <b>only with ES Modules:</b></div>
        <div>
            <ul>
                <li className="mtop5p">
                    <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
                    <code><b>import / export</b></code>
                </li>
                <li className="mtop5p">
                    <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
                    <code><b>require() / module.exports</b></code>
                </li>
            </ul>
        </div>

        <div className="mtop15p"><h4 className="blog-head"><b>Example: Utility Module</b></h4></div>
        <div className="mtop15p">
            <Highlight content={UTILMOD_EXAMPLE_NODEJS} lang="javascript" />
        </div>
        <div className="mtop15p"><h5 className="blog-head"><b>Using Only One Function</b></h5></div>
        <div className="mtop5p">
            <Highlight content={TREESHAKE_EXAMPLE_NODEJS} lang="javascript" />
        </div>
        <div className="mtop5p">
            If properly configured, <b>subtract</b> and <b>multiply</b> are removed from the final bundle.
        </div>

        <div className="mtop15p"><h5 className="blog-head"><b>Tree Shaking with a Bundler (Conceptual)</b></h5></div>
        <div>Bundlers like Rollup, Webpack, and ESBuild analyze:</div>
        <div>
            <ul>
                <li className="mtop5p">Static imports</li>
                <li className="mtop5p">Export usage</li>
                <li className="mtop5p">Side effects</li>
            </ul>
        </div>
        <div>Unused exports are <b>eliminated during build time.</b></div>

        <div className="mtop15p"><h5 className="blog-head"><b>Marking Side Effects (Important)</b></h5></div>
        <div className="mtop5p">
            <Highlight content={MARKSIDE_EXAMPLE_NODEJS} lang="javascript" />
        </div>
        <div className="mtop5p">
            <div>This tells the bundler:</div>
            <div className="mtop5p"><i>“This module has no side effects. It is safe to remove unused code.”</i></div>
        </div>

        <div className="mtop15p"><h4 className="blog-head"><b>Code Splitting + Tree Shaking Together</b></h4></div>
        <div className="mtop5p">
            <div>These techniques work best together:</div>
            <ul>
                <li className="mtop5p"><b>Tree Shaking</b> removes unused code <i>within a module</i></li>
                <li className="mtop5p"><b>Code Splitting</b> loads modules only when required</li>
            </ul>
        </div>

        <div className="mtop15p"><h5 className="blog-head"><b>Example Flow:</b></h5></div>
        <div className="mtop5p">
            <ol>
                <li className="mtop5p">User starts the app → minimal bundle loads</li>
                <li className="mtop5p">User clicks “Admin” → admin chunk loads</li>
                <li className="mtop5p">Unused admin utilities → removed via tree shaking</li>
            </ol>
        </div>
        <div className="mtop15p"><h5 className="blog-head"><b>Result:</b></h5></div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Faster Startup
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Smaller Memory Footprint
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-check" style={{ color:'green', marginRight:'5px' }} />
            Better Scalability
        </div>

        <div className="mtop15p"><h4 className="blog-head"><b>Common Mistakes to Avoid</b></h4></div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Using CommonJS everywhere
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Dynamic imports with unpredictable paths
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Modules with side effects
        </div>
        <div className="mtop5p">
            <Icon type="FontAwesome" name="fa-times" style={{ color:'red', marginRight:'5px' }} />
            Bundling everything into one entry file
        </div>

    </div>
 </div>);
};

export default TreeShaking;