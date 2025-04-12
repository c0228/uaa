import React from "react";

const TechnicalAnatomy = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>Technical Anatomy of www.example.com</b></h2></div>
    <div className="mtop15p">Let’s break it down:</div>
    <div>
        <ul>
            <li className="mtop5p"><code><b>www.</b></code> - <b>Subdomain</b> (optional)</li>
            <li className="mtop5p"><code><b>example</b></code> - <b>Second-Level Domain</b> (SLD)</li>
            <li className="mtop5p"><code><b>.com</b></code> - <b>Top-Level Domain</b> (TLD)</li>
        </ul>
    </div>
    <div className="mtop15p">DNS resolves this domain through a hierarchy:</div>
    <div>
        <ol>
            <li className="mtop5p"><b>Root Server -</b> Finds the TLD server for <code><b>.com</b></code></li>
            <li className="mtop5p"><b>TLD Server -</b> Finds authoritative server for <code><b>example.com</b></code></li>
            <li className="mtop5p"><b>Authoritative DNS -</b> Provides IP address for the domain</li>
            <li className="mtop5p"><b>Browser -</b> Loads the website using the IP</li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Modern Innovations and Upgrades in Domain Management</b></h2></div>
    <div className="mtop15p">With the growing complexity of the internet, domain systems have evolved:</div>
    <div className="padleft5p">
        <div style={{ padding:'15px', border:'1px dashed #ccc' }}>
            <div className="mtop15p"><h4><b>New Top-Level Domains (nTLDs)</b></h4></div>
            <div className="mtop15p">Beyond <code><b>.com</b></code>, hundreds of new TLDs now exist like <code><b>.tech</b></code>, 
                <code><b>.store</b></code>, <code><b>.ai</b></code>, <code><b>.xyz</b></code>, etc.</div>
        </div>
        <div style={{ padding:'15px', border:'1px dashed #ccc' }}>
            <div className="mtop5p"><h4><b>DNS Security Enhancements</b></h4></div>
            <div>
                <ul>
                    <li className="mtop5p"><b>DNSSEC:</b> Prevents DNS spoofing and man-in-the-middle attacks.</li>
                    <li className="mtop5p"><b>HTTP/3 and QUIC:</b> Improve site loading over domains with better protocol support.</li>
                </ul>
            </div>
        </div>
        <div style={{ padding:'15px', border:'1px dashed #ccc' }}>
            <div className="mtop5p"><h4><b>AI-Powered DNS & Auto-Healing</b></h4></div>
            <div className="mtop5p">Cloud providers like AWS, Google Cloud, and Cloudflare are building smart DNS routing that:</div>
            <div>
                <ul>
                    <li className="mtop5p">Monitors outages</li>
                    <li className="mtop5p">Auto-adjusts routes</li>
                    <li className="mtop5p">Improves latency with geo-DNS</li>
                </ul>
            </div>
        </div>
        <div style={{ padding:'15px', border:'1px dashed #ccc' }}>
            <div className="mtop5p"><h4><b>Blockchain-Based Domains</b></h4></div>
            <div className="mtop5p">Emerging systems like <b>ENS (.eth)</b> and <b>Unstoppable Domains (.crypto)</b> are building 
            decentralized domain ecosystems that don’t rely on ICANN, introducing censorship-resistant web addresses.</div>
        </div>
    </div>
 </div>);
};

export default TechnicalAnatomy;