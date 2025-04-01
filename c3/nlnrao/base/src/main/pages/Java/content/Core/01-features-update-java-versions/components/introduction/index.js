import React from "react";
import { Highlight, Accordian } from "e-ui-react";
import { BlogIndexHeader } from "@MainComponents/blog-index-header/index.js";

const Introduction = () =>{
 const IncubatingJEP = () =>{
    return (<div>
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
    </div>);
 };

 const IncubatorFeatures = () =>{
    return(<div>
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
    </div>);
 };

 const PreviewFeatures = () =>{
    return (<div>
        <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>Preview features are <b>fully implemented and part of the Java SE specification</b>, but <b>not yet permanent</b>.</li>
                    <li>They are included in a <b>standard Java release for testing and feedback</b>.</li>
                    <li>Developers need to explicitly <b>enable preview features</b> at compile and run time.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>Included in official Java versions but not permanently standardized.</li>
                    <li>Enabled using <code><b>--enable-preview</b></code> flag.</li>
                    <li>May be refined, changed, or dropped in future versions.</li>
                    <li> Typically undergo <b>one or two preview cycles</b> before becoming finalized.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Example:</b></div>
            <div>
                <ul>
                    <li>Records (Introduced as a Preview in Java 14, Finalized in Java 16)</li>
                    <li>Pattern Matching for switch (Preview in Java 17, Finalized in Java 21)</li>
                    <li>Structured Concurrency (Java 19 - First Preview, Java 23 - Third Preview)</li>
                </ul>
            </div>
            <div className="mtop15p"><b>How to Use a Preview Feature?</b></div>
            <div className="padLeft5p"><b>Compile with:</b></div>
            <Highlight content={`javac --enable-preview --release 21 MyClass.java`} lang="java" />
            <div className="padLeft5p"><b>Run with:</b></div>
            <Highlight content={`java --enable-preview MyClass`} lang="java" />
    </div>);
 };

 const ExperimentalFeatures = () =>{
    return (<div>
        <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>Experimental features are <b>internal JVM features</b> introduced for testing, mainly for performance improvements.</li>
                    <li>Unlike <b>Incubator and Preview</b>, these features are <b>not part of the Java SE standard API</b>.</li>
                    <li>They <b>must be explicitly enabled</b> with JVM options.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>Used for JVM optimizations and garbage collection algorithms.</li>
                    <li>Require <code><b>-XX:+UnlockExperimentalVMOptions</b></code> to enable.</li>
                    <li>Often targeted at power users, like tuning performance-sensitive applications.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Example:</b></div>
            <div>
                <ul>
                    <li>Shenandoah GC (Experimental in Java 12, Stabilized in Java 15)</li>
                    <li>ZGC (Experimental in Java 11, Stabilized in Java 15)</li>
                </ul>
            </div>
            <div className="mtop15p"><b>How to Enable Experimental Features?</b></div>
            <div className="padLeft5p">
                <Highlight content={`java -XX:+UnlockExperimentalVMOptions -XX:+UseShenandoahGC MyApp`} lang="java" />
            </div>
    </div>);
 };

 const FinalizedFeatures = () =>{
    return (<div>
        <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>These are <b>fully developed, stable, and permanent</b> features of Java SE.</li>
                    <li>They <b>no longer require special flags</b> to use.</li>
                    <li>Once finalized, they <b>remain backward-compatible</b> across future Java versions.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>Officially part of the Java language or JVM.</li>
                    <li>Fully documented in the Java SE API.</li>
                    <li>Used without any special command-line flags.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Example:</b></div>
            <div>
                <ul>
                    <li>Lambda Expressions (Java 8 - Finalized)</li>
                    <li>Modules (Java 9 - Finalized)</li>
                    <li>Records (Java 16 - Finalized after two preview cycles)</li>
                </ul>
            </div>
    </div>);
 };

 const DeprecatedFeatures = () =>{
    return (<div>
        <div><b>Definition:</b></div>
        <div>
            <ul>
                <li>These are features that are still available but discouraged for use.</li>
                <li>They will likely be removed in a future Java version.</li>
            </ul>
        </div>
        <div className="mtop15p"><b>Key Characteristics:</b></div>
        <div>
            <ul>
                <li>Marked with the <code><b>@Deprecated</b></code> annotation.</li>
                <li>Still functional but might cause warnings in newer versions.</li>
                <li>Some deprecated features remain for many releases before removal.</li>
            </ul>
        </div>
        <div className="mtop15p"><b>Example:</b></div>
        <div>
            <ul>
                <li><code><b>Thread.stop()</b></code> (Deprecated in Java 1.2, Removed in Java 11)</li>
                <li>The <code><b>java.security.acl</b></code> package (Deprecated in Java 9, Removed in Java 11)</li>
            </ul>
        </div>
    </div>);
 };

 const RemovedFeatures = () =>{
    return (<div>
        <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>These are <b>features that were deprecated and then completely removed</b> from Java.</li>
                    <li>Using these features in newer versions results in <b>compilation or runtime errors</b>.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>No longer available in Java.</li>
                    <li>Code using these features must be updated before migrating to a newer version.</li>
                </ul>
            </div>
            <div className="mtop15p"><b>Example:</b></div>
            <div>
                <ul>
                    <li>Java Applets (Deprecated in Java 9, Removed in Java 17)</li>
                    <li>The <code><b>javac -source 1.5</b></code> option (Removed in Java 9)</li>
                </ul>
            </div>
    </div>);
 };

 const ObsoleteFeatures = () =>{
    return (<div>
        <div><b>Definition:</b></div>
            <div>
                <ul>
                    <li>These features are <b>no longer supported or maintained</b>, but they are <b>not fully removed yet</b>.</li>
                    <li>Often marked for removal in an upcoming version.</li>
                </ul>
            </div>
            <div><b>Key Characteristics:</b></div>
            <div>
                <ul>
                    <li>Still exists but is considered outdated.</li>
                    <li>Likely to be removed soon.</li>
                </ul>
            </div>
            <div><b>Example:</b></div>
            <div>
                <ul>
                    <li>The <code><b>SecurityManager</b></code> (Deprecated in Java 17, Marked for removal in future versions)</li>
                </ul>
            </div>
    </div>);
 };

 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>Java is a high-level, object-oriented programming language, has evolved through multiple versions, remains a backbone for enterprise applications, 
        Android development, cloud computing, and big data solutions. Java's strong ecosystem, security, and scalability make it one of the most important 
        programming languages today.</i></div>
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>Introduction to Versioning Structured Process</b></h2></div>
    <div className="mtop15p">Before knowing the features introduced into Java in the name of versions, we need to 
        understand how Java follows a structured process for introducing and stabilizing new features, 
        using different stages:
        <div className="mtop10p">
            <ul>
                <li><b>Incubating JEPs (JDK Enhancement Proposals)</b></li>
                <li><b>Incubator Features</b></li>
                <li><b>Preview Features</b></li>
                <li><b>Experimental Features</b></li>
                <li><b>Finalized Features</b></li>
                <li><b>Deprecated Features</b></li>
                <li><b>Removed Features</b></li>
                <li><b>Obsolete Features</b></li>
            </ul>
        </div>
    </div>
    <div className="mtop15p">
        <div className="mtop15p">
            <Accordian id="features-accordian" data={[{
                    id:"feature-01", 
                    title: (<div><b>1. Incubating JEPs (JDK Enhancement Proposals)</b></div>),
                    component:(<IncubatingJEP />)
                },{
                    id:"feature-02", 
                    title: (<div><b>2. Incubator Features</b></div>),
                    component:(<IncubatorFeatures />)
                },{
                    id:"feature-03", 
                    title: (<div><b>3. Preview Features</b></div>),
                    component:(<PreviewFeatures />)
                },{
                    id:"feature-04", 
                    title: (<div><b>4. Experimental Features</b></div>),
                    component:(<ExperimentalFeatures />)
                },{
                    id:"feature-05", 
                    title: (<div><b>5. Finalized Features</b></div>),
                    component:(<FinalizedFeatures />)
                },{
                    id:"feature-06", 
                    title: (<div><b>6. Deprecated Features</b></div>),
                    component:(<DeprecatedFeatures />)
                },{
                    id:"feature-07", 
                    title: (<div><b>7. Removed Features</b></div>),
                    component:(<RemovedFeatures />)
                },{
                    id:"feature-08", 
                    title: (<div><b>8. Obsolete Features</b></div>),
                    component:(<ObsoleteFeatures />)
                }]} />
        </div>
    </div>
 </div>);
};

export default Introduction;