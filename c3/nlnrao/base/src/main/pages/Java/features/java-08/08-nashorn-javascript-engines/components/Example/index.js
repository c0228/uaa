import React from "react";
import { Highlight } from "e-ui-react";

const EVALUATING_EXAMPLE_JAVA = `import javax.script.*;

public class NashornExample1 {
    public static void main(String[] args) throws Exception {
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("nashorn");

        // Execute simple JS code
        engine.eval("print('Hello from Nashorn!');");

        // Evaluate JS expressions
        Object result = engine.eval("10 + 20");
        System.out.println("Result: " + result);
    }
}`;

const EVALUATING_OUTPUT_JAVA = `Hello from Nashorn!
Result: 30`;

const JAVAMETHODS_EXAMPLE_JAVA = `import javax.script.*;

public class NashornExample2 {
    public static void main(String[] args) throws Exception {
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");

        // Expose Java object to JavaScript
        engine.put("message", "Java and JavaScript Integration");

        // JS code accessing Java variable
        engine.eval("print(message);");

        // Using Java classes in JS
        engine.eval("var Date = Java.type('java.util.Date');"
                   + "var today = new Date();"
                   + "print('Today is: ' + today);");
    }
}`;

const JAVAMETHODS_OUTPUT_JAVA = `Java and JavaScript Integration
Today is: Tue Jul 29 21:30:15 IST 2025`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Using Nashorn JavaScript Engine</b></h2></div>
    <div className="mtop15p">Let’s go through some practical examples.</div>

    <div className="mtop5p"><h5 className="blog-head"><b>1. Evaluating JavaScript in Java</b></h5></div>
    <div className="mtop5p"><Highlight content={EVALUATING_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={EVALUATING_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>2. Calling Java Methods from JavaScript</b></h5></div>
    <div className="mtop5p"><Highlight content={JAVAMETHODS_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={JAVAMETHODS_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop5p"><h5 className="blog-head"><b>3. Using the JJS Command-Line Tool</b></h5></div>
    <div className="mtop5p">If you have Java 8 installed, you can run a JavaScript file like this:</div>
    <div className="mtop5p"><Highlight content={`jjs myscript.js`} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>myscript.js:</b></div>
    <div className="mtop5p"><Highlight content={`print("Hello from JJS!");`} lang="java" /></div>
    <div className="mtop5p padLeft5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={`Hello from JJS!`} lang="python" /></div>
 </div>);
};

export default Example;