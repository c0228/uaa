import React from "react";
import { Highlight } from "e-ui-react";

const CREATE_BUFFER = `// Create a buffer from a string
const buf = Buffer.from('Hello, world!', 'utf-8');

// Accessing buffer content
console.log(buf.toString('utf-8')); // Output: Hello, world!

// Writing to a buffer
buf.write(' Node.js!', 7, 'utf-8');
console.log(buf.toString('utf-8')); // Output: Hello, Node.js!

// Creating a buffer of specific size
const emptyBuffer = Buffer.alloc(10); // Buffer of size 10 filled with zeros
console.log(emptyBuffer); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

// Creating a buffer without initializing it
const uninitializedBuffer = Buffer.allocUnsafe(10);
console.log(uninitializedBuffer); // Output: <Buffer 80 f3 5f 0b 00 00 00 00 00 00> (content is random)
`;

const Buffers = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>Buffer Class</b></h2></div>
    <div className="mtop15p">The <u><i>Buffer</i></u> class is globally available in Node.js. It's a subclass of JavaScript's 
        <u><i>Uint8Array</i></u>, which means it provides a way to work with raw binary data. This class is designed to efficiently 
        handle memory allocation and manipulation of binary data.
    </div>
    <div className="mtop35p"><h4><b>Creating Buffers</b></h4></div>
    <div className="mtop15p">
        There are a few ways to create buffers in Node.js:
        <ul>
            <li className="mtop15p">
                <b>Buffer.from():</b> This method creates a new buffer containing the specified data. You can pass in strings, 
                arrays, or array-like objects to initialize the buffer.
            </li>
            <li className="mtop15p">
                <b>Buffer.alloc():</b> This method allocates a new buffer of the specified size and fills it with zeros. It's 
                commonly used when you know the size of the buffer you need in advance.
            </li>
            <li className="mtop15p">
                <b>Buffer.allocUnsafe():</b> This method allocates a new buffer of the specified size without 
                initializing its contents. It's faster than <b>Buffer.alloc()</b> but may contain sensitive data from its memory.
            </li>
        </ul>
    </div>
    <div className="mtop35p"><h4><b>Working with Buffers</b></h4></div>
    <div className="mtop15p">
        Once you have a buffer, you can perform various operations on it:
        <ul>
            <li className="mtop15p"><b>Reading and Writing:</b> Buffers behave like arrays, so you can read from and write to 
            specific positions in the buffer using array-like indexing and assignment.</li>
            <li className="mtop15p"><b>Manipulating Content:</b> You can manipulate the contents of a buffer directly, such as 
            copying data, slicing, or filling with specific values.</li>
            <li className="mtop15p"><b>Converting to Strings:</b> Buffers can represent binary data in different encodings like 
            UTF-8, ASCII, Base64, etc. You can convert a buffer to a string using the Buffer.toString() method, specifying the 
            desired encoding.</li>
        </ul>
    </div>
    <div className="mtop35p"><h4><b>Buffer Encoding</b></h4></div>
    <div className="mtop15p">
    Buffers can represent binary data in different encodings. When creating or converting buffers, you can specify the encoding to 
    use. Some common encodings include UTF-8, ASCII, Base64, and hexadecimal.
    </div>
    <div className="mtop35p"><h4 className="blog-head"><b>Buffer Performance</b></h4></div>
    <div className="mtop15p">
    Buffers are designed for efficient handling of binary data. They are particularly useful in scenarios like reading from or 
    writing to streams, working with file systems, or interacting with binary protocols where performance and memory efficiency 
     are critical.  
    </div>
    <div className="mtop35p"><h4><b>Example Usage:</b></h4></div>
    <div className="mtop15p">Here's a more detailed example illustrating the creation and manipulation of buffers:</div>
    <Highlight content={CREATE_BUFFER} lang="javascript" />
 </div>);
};

export default Buffers;
