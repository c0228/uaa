import React from "react";
import { Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const NONCE_EXAMPLE_JS = `<script nonce="abc123">
  console.log("This script is allowed.");
</script>`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Examples & Related Topics</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Basic CSP Example</b></h4></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: default-src 'self';`} lang="python" />
            </div>
            <div>
               <ul>
                  <li className="mtop5p"><code><b>'self'</b></code> means only allow resources from the current domain.</li>
                  <li className="mtop5p">Everything else is blocked by default.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Allowing Multiple Sources</b></h4></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: script-src 'self' https://cdn.example.com;`} lang="python" />
            </div>
            <div>This allows JavaScript only from:</div>
            <div>
               <ul>
                  <li className="mtop5p">The current domain (<code><b>'self'</b></code>)</li>
                  <li className="mtop5p"><code><b>https://cdn.example.com</b></code></li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Blocking Inline Scripts</b></h4></div>
            <div className="mtop5p">Inline scripts (like <code><b>&lt;script&gt;alert("Hi")&lt;/script&gt;</b></code>) are 
            dangerous. By default, CSP <b>blocks them</b> unless you explicitly 
            allow <code><b>'unsafe-inline'</b></code> (which is <b>not recommended</b>).</div>
            <div className="mtop5p"><b>Example (less secure):</b></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: script-src 'self' 'unsafe-inline';`} lang="javascript" />
            </div>
            <div className="mtop5p"><u>Better approach</u>: use <b>nonces</b> or <b>hashes</b>.</div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Using Nonce for Specific Scripts</b></h4></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: script-src 'self' 'nonce-abc123';`} lang="javascript" />
            </div>
            <div><b>HTML:</b></div>
            <div className="mtop5p">
               <Highlight content={NONCE_EXAMPLE_JS} lang="javascript" />
            </div>
            <div className="mtop5p">Only scripts with matching nonce run.</div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Using Hashes</b></h4></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: script-src 'self' 'sha256-xxyyzz...';`} lang="javascript" />
            </div>
            <div className="mtop5p">Hashes allow only scripts with that exact content.</div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Different Directives in CSP</b></h4></div>
            <div className="mtop5p">Some useful CSP directives:</div>
            <div className="mtop5p">
               <SimpleTable header={["Directive", "Purpose"]} 
                  columns={[
                        [(<div><code><b>default-src</b></code></div>), "Default fallback for all resources"],
                        [(<div><code><b>script-src</b></code></div>), "Allowed JavaScript sources"],
                        [(<div><code><b>style-src</b></code></div>), "Allowed CSS sources"],
                        [(<div><code><b>img-src</b></code></div>), "Allowed image sources"],
                        [(<div><code><b>font-src</b></code></div>), "Allowed font sources"],
                        [(<div><code><b>frame-src</b></code></div>), "Allowed iframes"],
                        [(<div><code><b>connect-src</b></code></div>), "Allowed AJAX/WebSocket endpoints"],
                        [(<div><code><b>media-src</b></code></div>), "Allowed audio/video sources"],
                        [(<div><code><b>object-src</b></code></div>), "Allowed Flash/plug-ins (should be none)"],
                     ]} />
            </div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>CSP in Report-Only Mode</b></h4></div>
            <div>You can test CSP without breaking your site:</div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report-endpoint`} lang="javascript" />
            </div>
            <div>
               <ul>
                  <li className="mtop5p">The browser only <b>logs violations,</b> doesn’t block them.</li>
                  <li className="mtop5p">Useful for testing before full enforcement.</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>CSP with <code>&lt;meta&gt;</code> Tag</b></h4></div>
            <div>You can also define CSP in HTML (less secure than HTTP headers):</div>
            <div className="mtop5p">
               <Highlight content={`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">`} lang="python" />
            </div>
         </li>
         <li className="mtop5p">
            <div><h4 className="blog-head"><b>Example – Preventing XSS</b></h4></div>
            <div><b>Without CSP:</b></div>
            <div className="mtop5p">
               <Highlight content={`<input type="text" value="<script>alert('Hacked!')</script>">`} lang="javascript" />
            </div>
            <div>The script could run in the browser.</div>
            <div><b>With CSP:</b></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: script-src 'self'`} lang="javascript" />
            </div>
            <div className="mtop5p">
               The injected script is blocked — no alert appears.
            </div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Example;