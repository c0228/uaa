import React from "react";
import { Card } from "e-ui-react";

const WebBrowserWorks = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><h2 className="blog-head"><b>How Web Browsers works before V8 JS Engine?</b></h2></div>
    <div className="mtop15p">Before the <u><b>V8 JavaScript Engine</b></u> was introduced by Google in 2008, web browsers used 
    various other JavaScript engines, each with its own implementation and optimizations. Some of the early JavaScript engines 
    include:
    <ul>
        <li className="mtop15p"><b>SpiderMonkey:</b> Developed by Netscape Communications Corporation for their Netscape Navigator 
        browser, SpiderMonkey was the first JavaScript engine, released in 1996. It was written in C and was one of the first 
        implementations of JavaScript.</li>
        <li className="mtop15p"><b>Webkit Javascript Engine:</b> Developed by Apple for their Safari browser, Webkit Javascript 
        Engine (also called as Javascript Core) was introduced in 2001. Later, in 2003, it is specialized and optimized version of 
        JavascriptCore was renamed as Nitro which specifically designed for high performance Javascript Execution in 
        Safari on Apple's Platform. Later, it became the basis for the JavaScript engine used in the Chromium project.</li>
        <li className="mtop15p"><b>Chakra:</b> Developed by Microsoft for their Internet Explorer browser, Chakra was introduced in 
        2008. It was initially written in C++, and later versions were rewritten in C++ for better performance.</li>
        <li className="mtop15p"><b>Carakan:</b> Developed by Opera Software for their Opera browser, Carakan was introduced in 2009. 
        It was written in C++ and featured various optimizations to improve JavaScript performance.</li>
    </ul>
    These JavaScript engines, along with others developed by different browser vendors, played a crucial role in enabling dynamic 
    and interactive web experiences. They interpreted and executed JavaScript code to enable functionality such as form validation, 
    dynamic content updates, and client-side interactions. While each engine had its own unique features and optimizations, they all 
    aimed to provide fast and efficient JavaScript execution within the context of a web browser.
    </div>
    <div className="mtop15p">
        <Card padding={15} backgroundColor="#eee">
        The <u><b>V8 JavaScript Engine</b></u> was introduced into the market in 2008 alongside the initial release of Google Chrome. 
        The introduction of the V8 engine was one of the key innovations of Chrome, aimed at providing a fast and efficient browsing 
        experience by improving JavaScript performance.
        </Card>
    </div>
 </div>);
};

export default WebBrowserWorks;