import React from "react";
import { Card } from "e-ui-react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>Collaborative apps like <b>Google Docs</b>, <b>Notion</b>, or <b>Microsoft Word Online</b> allow 
   multiple users to <b>edit the same document at the same time</b>. But here’s the big question:</i></div>
   <div>
      <Card padding={15} backgroundColor="#eee">
         How do you manage <b>concurrent edits</b> to the same content without data loss or conflict?
      </Card>
   </div>
   <div className="mtop5p">If two users insert or delete characters at the same time, a naive implementation could cause 
      chaos. That’s where <b>Operational Transformation (OT)</b> comes in — the secret behind real-time collaborative editing.</div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Operational Transformation</b></h2></div>
   <div className="mtop15p"><b>Operational Transformation (OT)</b> is an algorithmic technique for 
   supporting <b>concurrent editing of shared documents</b>. It allows multiple users to <b>simultaneously modify content</b> and 
   ensures that <b>all changes are eventually consistent, no matter the order of arrival</b>.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Core Concepts</b></h4></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Operations:</b> Actions performed on a document 
         like <code><b>insert(pos, char)</b></code> or <code><b>delete(pos)</b></code>.</li>
         <li className="mtop5p"><b>Transformation:</b> When an operation arrives late or concurrently, it's transformed based on 
         operations that were already applied.</li>
         <li className="mtop5p"><b>Convergence:</b> All users see the <b>same final state</b> even if they edited in different orders.</li>
         <li className="mtop5p"><b>Inclusion Transformation (IT):</b> Adjusts an operation with respect to previously executed ones.</li>
      </ol>
   </div>
 </div>);
};

export default Introduction;