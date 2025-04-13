import React from "react";
import { Highlight } from "e-ui-react";

const JS_FUNCTION_DECLARATION = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
`;

const JS_FUNCTION_EXPRESSION = `const greet = function(name) {
  return \`Hello, \${name}!\`;
};

console.log(greet('Bob')); // Output: Hello, Bob!`;

const JS_ARROW_FUNCTION = `const greet = (name) => \`Hello, \${name}!\`;

console.log(greet('Charlie')); // Output: Hello, Charlie!`;

const JS_FUNCTION_CONSTRUCTOR = `const greet = new Function('name', 'return \`Hello, \${name}!\`;');

console.log(greet('Diana')); // Output: Hello, Diana!`;

const JS_GENERATOR_FUNCTION = `function* greetGenerator() {
  yield 'Hello';
  yield 'Hi';
  yield 'Hey';
}

const greeter = greetGenerator();
console.log(greeter.next().value); // Output: Hello
console.log(greeter.next().value); // Output: Hi
console.log(greeter.next().value); // Output: Hey`;

const JS_METHOD_DEFINITION = `const greeter = {
  greet(name) {
    return \`Hello, \${name}!\`;
  }
};

console.log(greeter.greet('Eve')); // Output: Hello, Eve!`;

const Introduction = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div><i>​JavaScript offers multiple ways to define functions, each with its own syntax and use cases. Understanding 
        these different methods is crucial for writing efficient and maintainable code. Here are six common ways to define 
        functions in JavaScript, along with examples:</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Function Declaration</b></h2></div>
    <div className="mtop15p padLeft5p">A function declaration defines a named function using the <code><b>function</b></code> keyword. 
    These functions are hoisted, meaning they can be called before they are defined in the code.</div>
    <Highlight content={JS_FUNCTION_DECLARATION} lang="javascript" />
    <div className="mtop15p padLeft5p">Function declarations are useful for defining functions that need to be available throughout 
    your code.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Function Expression</b></h2></div>
    <div className="mtop15p padLeft5p">A function expression involves assigning a function to a variable. These can be named or 
        anonymous functions. Unlike function declarations, function expressions are not hoisted.</div>
    <Highlight content={JS_FUNCTION_EXPRESSION} lang="javascript" />
    <div className="mtop15p padLeft5p">Function expressions are often used for functions that are passed as arguments to other 
        functions or assigned as object properties.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>3. Arrow Function</b></h2></div>
    <div className="mtop15p padLeft5p">Introduced in ES6, arrow functions provide a concise syntax for writing functions. They 
        do not have their own <code><b>this</b></code> binding and are not suitable for all situations, such as defining object 
        methods.</div>
    <Highlight content={JS_ARROW_FUNCTION} lang="javascript" />
    <div className="mtop15p padLeft5p">Arrow functions are ideal for short, simple functions and are commonly used in functional 
        programming patterns.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>4. Function Constructor</b></h2></div>
    <div className="mtop15p padLeft5p">The <code><b>Function</b></code> constructor creates a new function object from a string 
    of code. This method is rarely used due to security and performance concerns.</div>
    <Highlight content={JS_FUNCTION_CONSTRUCTOR} lang="javascript" />
    <div className="mtop15p padLeft5p">Using the <code><b>Function</b></code> constructor is generally discouraged, as it can lead 
    to code that is difficult to debug and maintain.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>5. Generator Function</b></h2></div>
    <div className="mtop15p padLeft5p">Generator functions, denoted by an asterisk (<code><b>*</b></code>), can pause and resume execution 
    using the <code><b>yield</b></code> keyword. They are useful for working with sequences of data.</div>
    <Highlight content={JS_GENERATOR_FUNCTION} lang="javascript" />
    <div className="mtop15p padLeft5p">Generators are powerful tools for handling asynchronous operations and implementing iterators.</div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>6. Method Definition in Object Literals</b></h2></div>
    <div className="mtop15p padLeft5p">In ES6, you can define methods within object literals using a shorthand syntax.</div>
    <Highlight content={JS_METHOD_DEFINITION} lang="javascript" />

    <div className="mtop15p padLeft5p">This syntax is concise and improves readability when defining object methods.<br/>
    Each of these function definition methods serves different purposes and has its own advantages. Understanding when and how to use 
    them will enhance your JavaScript programming skills.</div>
 </div>);
};

export default Introduction;