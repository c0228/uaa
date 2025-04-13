import React from "react";
import { Highlight } from "e-ui-react";

const PYTHON_DYNAMIC_TYPING = `x = 5      # x is int
x = "hi"   # now x is str
`;

const JAVA_STATIC_TYPING = `int x = 5;
x = "hi"; // Error`;

const JS_STATIC_TYPING = `let x = 5;
x = "hi"; // Allowed
`;

const PYTHON_TYPE_CASTING = `x = "123"
y = int(x)  # Converts string to int

z = 3.5
w = str(z)  # Converts float to string
`;

const RIGHT_NAME_CONVENTIONS = `first_name = "John"
MAX_LIMIT = 1000`;

const WRONG_NAME_CONVENTIONS = `1name = "wrong"
user-name = "wrong"`;

const DynamicStaticTyping = () =>{
 return (<div className="mtp15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Dynamic Typing vs Static Typing</b></h2></div>
    <div className="mtop15p padLeft5p"><h4><b>Python (Dynamically Typed)</b></h4></div>
    <Highlight content={PYTHON_DYNAMIC_TYPING} lang="python" />
    <div>
        <ul>
            <li className="mtop5p">You don’t need to define the data type.</li>
            <li className="mtop5p">You can reassign variables to different types.</li>
        </ul>
    </div>
    <div className="mtop15p padLeft5p"><h4><b>Java (Statically Typed)</b></h4></div>
    <Highlight content={JAVA_STATIC_TYPING} lang="python" />
    <div>
        <ul>
            <li className="mtop5p">You must declare the data type.</li>
            <li className="mtop5p">You can't change the type once assigned.</li>
        </ul>
    </div>
    <div className="mtop15p padLeft5p"><h4><b>JavaScript (Also Dynamically Typed)</b></h4></div>
    <Highlight content={JS_STATIC_TYPING} lang="python" />
    <div className="mtop15p">
    But JavaScript has its own quirks like <code><b>undefined</b></code> vs <code><b>null</b></code>, coercion 
    pitfalls (<code><b>"5" + 1 == "51"</b></code>), and hoisting. Python avoids most of those issues with clean, 
    predictable behavior.
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>5. Type Casting in Python</b></h2></div>
    <div className="mtop15p">Python allows you to convert one data type into another using type constructors:</div>
    <Highlight content={PYTHON_TYPE_CASTING} lang="python" />
    <div className="mtop15p">This is useful when you're dealing with user input, file reading, or API data.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>6. Naming Conventions for Variables</b></h2></div>
    <div className="mtop15p">Python has some naming rules:</div>
    <div>
        <ul>
            <li className="mtop5p">Names can include letters, numbers, and underscores</li>
            <li className="mtop5p">Must not start with a number</li>
            <li className="mtop5p">Are <b>case-sensitive</b></li>
        </ul>
    </div>
    <div className="mtop15p"><h4><b>Good Examples:</b></h4></div>
    <Highlight content={RIGHT_NAME_CONVENTIONS} lang="python" />
    <div className="mtop15p"><h4><b>Bad Examples:</b></h4></div>
    <Highlight content={WRONG_NAME_CONVENTIONS} lang="python" />
    <div className="mtop15p">Python style guide (PEP8) suggests using <code><b>snake_case</b></code> for variables and 
    lowercase for functions.</div>
 </div>);
};

export default DynamicStaticTyping;