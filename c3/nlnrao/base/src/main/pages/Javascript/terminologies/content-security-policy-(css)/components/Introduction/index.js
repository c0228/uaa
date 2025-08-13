import React from "react";
import { Card, Highlight } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Content-Security Policy (CSP)</b></h4></div>
         <div className="mtop15p">
            Before the <b>Content-Security Policy (CSP)</b> was introduced, websites were vulnerable to many serious 
            attacks — most notably <b>Cross-Site Scripting (XSS).</b>
         </div>
         <div className="mtop15p">Here’s what was happening:</div>
         <div>
            <ul>
               <li className="mtop5p">Hackers could <b>inject malicious scripts</b> into web pages by exploiting user input 
                  fields, comments, or query parameters.</li>
               <li className="mtop5p">These scripts could <b>steal cookies, session tokens, or personal data</b> without 
                  the user knowing.</li>
               <li className="mtop5p">If a site loaded <b>JavaScript, images, or styles from untrusted sources,</b> attackers 
                  could replace them with harmful files.</li>
               <li className="mtop5p">Browsers had <b>no built-in mechanism</b> to restrict what resources could be loaded, 
                  meaning <b>any malicious file from anywhere could run.</b></li>
            </ul>
         </div>
         <div className="mtop5p">This made it <b>too easy</b> for attacks to succeed.</div>
         <div className="mtop5p">To fix this, browsers introduced <b>CSP</b>, a security layer that tells the <b>browser exactly 
         which sources are allowed</b> for scripts, images, styles, and other resources.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction – What is Content-Security Policy (CSP)?</b></h2></div>
   <div className="mtop15p">The <b>Content-Security Policy (CSP)</b> is a <b>browser feature</b> that acts 
   like a <b>security whitelist</b> for your website.</div>
   <div className="mtop5p">It:</div>
   <div>
      <ul>
         <li className="mtop5p">Lets you <b>specify trusted content sources</b> for scripts, styles, images, iframes, etc.</li>
         <li className="mtop5p">Blocks any content from sources <b>not listed</b> in the policy.</li>
         <li className="mtop5p">Helps prevent <b>XSS, data injection, and clickjacking attacks.</b></li>
      </ul>
   </div>
   <div className="mtop5p">You define CSP using either:</div>
   <div>
      <ol>
         <li className="mtop5p"><b>HTTP response headers</b> (most common)</li>
         <li className="mtop5p"><b>HTML <code>&lt;meta&gt;</code> tags</b></li>
      </ol>
   </div>
   <div className="mtop5p">Example in HTTP header:</div>
   <div className="mtop5p">
      <Highlight content={`Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.com`} lang="python" />
   </div>
   <div className="mtop5p">This means:</div>
   <div>
      <ul>
         <li className="mtop5p"><b>Default:</b> Load content only from the same domain (<code><b>'self'</b></code>)</li>
         <li className="mtop5p"><b>Scripts:</b> Load only from the same domain or from <code><b>https://trusted.com</b></code></li>
      </ul>
   </div>
 </div>);
};

export default Introduction;