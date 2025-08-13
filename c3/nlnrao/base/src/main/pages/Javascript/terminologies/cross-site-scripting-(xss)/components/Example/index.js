import React from "react";
import { Highlight } from "e-ui-react";

const FORUM_EXAMPLE_JS = `<p>User says: <span id="comment"></span></p>
<script>
  document.getElementById("comment").innerHTML = location.search.split("=")[1];
</script>`;

const ESCAPE_EXAMPLE_OUTPUT = `function escapeHTML(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Real-World Example</b></h2></div>
   <div className="mtop15p">A forum allows users to post comments:</div>
   <div className="mtop5p">
      <Highlight content={FORUM_EXAMPLE_JS} lang="javascript" />
   </div>
   <div className="mtop5p">If someone visits:</div>
   <div className="mtop5p">
      <Highlight content={`https://forum.com?msg=<script>alert('XSS')</script>`} lang="javascript" />
   </div>
   <div className="mtop5p">The script runs in their browser — potentially stealing cookies or logging keystrokes.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>How to Prevent XSS?</b></h4></div>
   <div>
      <ol>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Escape Output</b></h5></div>
            <div className="mtop5p">When displaying user input, <b>escape HTML special characters:</b></div>
            <div className="mtop5p">
               <Highlight content={ESCAPE_EXAMPLE_OUTPUT} lang="javascript" />
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Validate and Sanitize Input</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">Only allow <b>expected formats</b> (e.g., numbers, email addresses).</li>
                  <li className="mtop5p">Remove dangerous HTML tags ( <code><b>&lt;script&gt;</b></code>, <code><b>&lt;iframe&gt;</b></code>, etc.).</li>
               </ul>
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Use Content-Security Policy (CSP)</b></h5></div>
            <div><b>Example CSP header:</b></div>
            <div className="mtop5p">
               <Highlight content={`Content-Security-Policy: script-src 'self' https://trusted-cdn.com`} lang="javascript" />
            </div>
            <div className="mtop5p">This blocks scripts from untrusted sources.</div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Avoid <code><b>innerHTML</b></code> for Untrusted Data</b></h5></div>
            <div>Use <code><b>textContent</b></code> or safe DOM APIs instead:</div>
            <div className="mtop5p">
               <Highlight content={`commentElement.textContent = userComment; // safe`} lang="javascript" />
            </div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Use Framework Security Features</b></h5></div>
            <div className="mtop5p">Modern frameworks like React, Angular, and Vue automatically <b>escape HTML</b> in 
            data binding by default.</div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Example;