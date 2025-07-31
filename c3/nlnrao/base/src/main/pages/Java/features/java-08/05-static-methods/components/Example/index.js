import React from "react";
import { Highlight } from "e-ui-react";

const SIMPLESTATIC_EXAMPLE_JAVA = `interface MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

public class StaticMethodDemo {
    public static void main(String[] args) {
        int result = MathUtils.add(5, 10); // Calling static method
        System.out.println("Addition Result: " + result);
    }
}`;

const SIMPLESTATIC_OUTPUT_JAVA = `Addition Result: 15`;

const INTUTILITY_EXAMPLE_JAVA = `interface StringValidator {
    static boolean isNullOrEmpty(String str) {
        return str == null || str.isEmpty();
    }
}

public class ValidatorTest {
    public static void main(String[] args) {
        System.out.println(StringValidator.isNullOrEmpty(null));    // true
        System.out.println(StringValidator.isNullOrEmpty(""));      // true
        System.out.println(StringValidator.isNullOrEmpty("Java"));  // false
    }
}`;

const Example = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Examples of Static Methods in Interfaces</b></h2></div>
    <div color="mtop15p"><h5 className="blog-head"><b>Example #1: Simple Static Method</b></h5></div>
    <div className="mtop5p"><Highlight content={SIMPLESTATIC_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop5p"><b>Output:</b></div>
    <div className="mtop5p"><Highlight content={SIMPLESTATIC_OUTPUT_JAVA} lang="java" /></div>

    <div className="mtop5p"><b>Explanation:</b></div>
    <div>
      <ul>
         <li className="mtop5p"><code><b>add()</b></code> is a static method inside <code><b>MathUtils</b></code> interface.</li>
         <li className="mtop5p">We accessed it using the <b>interface name</b>, not an object.</li>
      </ul>
    </div>

    <div color="mtop15p"><h5 className="blog-head"><b>Example #2: Interface Utility with Validation</b></h5></div>
    <div className="mtop5p"><Highlight content={INTUTILITY_EXAMPLE_JAVA} lang="java" /></div>
    <div className="mtop15p"><b>Why Useful?</b></div>
    <div>
      <ul>
         <li className="mtop5p">Utility methods related to <b>string validation</b> are 
         now <b>encapsulated within the interface</b> itself.</li>
         <li className="mtop5p">Reduces the need for extra helper classes.</li>
      </ul>
    </div>
 </div>);
};

export default Example;