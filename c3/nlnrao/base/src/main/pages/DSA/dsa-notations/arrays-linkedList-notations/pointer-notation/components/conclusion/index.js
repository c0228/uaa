import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
        <ul>
            <li><b>Pointer Notation</b> is the concept of accessing and manipulating memory using addresses.</li>
            <li>While <b>C/C++</b> use explicit pointers (<code><b>*</b></code>, <code><b>&</b></code>), high-level languages 
            like <b>Python</b>, <b>Java</b>, and <b>JavaScript</b> use references that behave similarly.</li>
            <li>
                <div>Understanding pointers helps in:</div>
                <div>
                    <ul>
                        <li><b>Debugging reference issues</b></li>
                        <li><b>Optimizing memory usage</b></li>
                        <li><b>Writing efficient algorithms</b></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <Card padding={15} backgroundColor="#eee">
            <div><b>Note:</b></div>
            <div>Even if a language hides pointers, the <b>concept of referencing</b> is always present under the 
            hood. Mastering pointer notation prepares you for both low-level and high-level programming challenges.</div>
        </Card>
    </div>
 </div>);
};

export default Conclusion;