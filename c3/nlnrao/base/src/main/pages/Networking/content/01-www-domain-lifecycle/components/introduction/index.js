import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">

    <div><i>When you type <u>www.example.com</u> into your browser, you're accessing a piece of digital real estate 
    that has its own origin story, governing bodies, technical configurations, and lifecycle. But how does such a domain name 
    come into existence? How is it maintained? What happens when it’s no longer in use? In this blog, we’ll trace the entire 
    journey of a domain name like <u>www.example.com</u>, right from its conceptual birth to its potential digital 
    death—while exploring its <b>history</b>, <b>lifecycle</b>, <b>management</b>, and <b>recent technological upgrades</b>.</i></div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>The Origin: The Idea of Domain Names</b></h2></div>
    <div className="mtop15p">Before domain names, the internet relied on <b>IP addresses</b> — a string of numbers like 
        <code><b>192.168.0.1</b></code> — to identify websites. As the internet expanded in the early 1980s, it became clear 
        that humans needed something more memorable.</div>
    <div className="mtop15p"><h4><b>The Birth of Domain Names</b></h4></div>
    <div className="mtop15p padLeft5p">In <b>1983</b>, the <b>Domain Name System (DNS)</b> was introduced by <b>Paul Mockapetris</b> to solve 
    the problem of memorizing IP addresses. This system allowed the use of readable names like <code><b>example.com</b></code> instead 
    of numeric IPs.<br/>
    By <code><b>1985</b></code>, the first domain names were registered (like <code><b>symbolics.com</b></code>). This began the era 
    of web addressing that made the modern internet accessible.
    </div>
 </div>);
};

export default Introduction;