import React from "react";
import { BlogIndexHeader } from "@Components/blog-index-header/index.js";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i></i></div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Introduction</b></h2></div>
    <div className="mtop15p">Before knowing the features introduced into Java in the name of versions, we need to 
        understand how Java follows a structured process for introducing and stabilizing new features, 
        using different stages:
        <div className="mtop10p">
            <ul>
                <li><b>Incubating JEPs (JDK Enhancement Proposals)</b></li>
                <li><b>Incubator Features</b></li>
                <li><b>Preview Features</b></li>
                <li><b>Experimental</b></li>
                <li><b>Finalized</b></li>
                <li><b>Deprecated Features</b></li>
                <li><b>Removed Features</b></li>
                <li><b>Obsolete Features</b></li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="1" title="Incubating JEPs (JDK Enhancement Proposals)" /><hr/> 
        <div className="mtop15p padLeft15p">
            <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>These are Java Enhancement Proposals (JEPs) that suggest new features 
                        before they become <b>incubator</b>, <b>preview</b> or <b>finalized features</b>.</li>
                    <li>They help <b>gather community feedback</b> before official implementation.</li>
                </ul>
            </div>
            <div><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>Not part of official releases yet.</li>
                    <li>Helps plan future Java updates.</li>
                </ul>
            </div>
            <div><b>Example:</b></div>
            <div>
                <ul>
                    <li><b>JEP 430 – String Templates</b> (Planned for Java 22, Incubated in Java 21)</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="2" title="Incubator Features" /><hr/> 
        <div className="mtop15p padLeft15p">
            <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>Incubator features are new APIs or tools introduced for <b>experimental use</b>.</li>
                    <li>They are <b>not yet part of the official Java SE specification</b>.</li>
                    <li>They allow developers to <b>test and provide feedback</b> before a feature is considered 
                    for standardization.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>Introduced under the <code><b>jdk.incubator</b></code> package.</li>
                    <li>May change significantly or even be removed in future versions.</li>
                    <li>Developers need to explicitly enable them using JVM options.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Example:</b></div>
            <div>
                <ul>
                    <li>Vector API (Java 16 - Incubator, Java 23 - Still in Incubator)</li>
                    <li>Foreign Function & Memory API (Introduced in Java 17 as Incubator, Finalized in Java 22)</li>
                </ul>
            </div>
        </div>
    </div>
    <div className="mtop15p">
        <BlogIndexHeader type="h4" index="3" title="Preview Features" /><hr/> 
        <div className="mtop15p padLeft15p">
            <div><b>Definition:</b></div>
        </div>
    </div>
 </div>);
};

export default Introduction;