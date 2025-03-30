import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
      <div className="mbot15p"><i>The evolution of the web is often categorized into three distinct phases: <u>Web 1.0</u>, <u>Web 2.0</u>, 
         and <u>Web 3.0</u>. Each phase represents a significant shift in how the internet is used, the technologies involved, 
         and the user experience.</i></div>

      <div align="center" className="mtop15p"><h2 className="blog-head"><b>Web 1.0: The Static Web (1990s - Early 2000s)</b></h2></div>
      <div className="mbot15p">
        <div className="mtop15p">
            Web 1.0 is the earliest version of the internet, often referred to as the "read-only" web. 
            It was primarily a one-way communication platform where users could only consume information.
        </div>
        <div className="mtop15p"><h4><b>Key Features:</b></h4></div>
        <div>
            <ul>
                <li className="mtop5p"><b>Static Content:</b> Websites were basic and consisted of static HTML pages with 
                text, images, and links.</li>
                <li className="mtop5p"><b>Limited Interactivity:</b> Users could only read or view content; there was no way 
                to interact or contribute.</li>
                <li className="mtop5p"><b>Centralized Control:</b> Content creation and publishing were controlled by a small 
                group of developers or organizations.</li>
                <li className="mtop5p"><b>No User-Generated Content:</b> Websites were not dynamic, and users could not create 
                or share their own content.</li>
            </ul>
        </div>
        <div className="mtop15p"><h5><b>Examples:</b></h5></div>
        <div className="mtop5p">Early websites like <u>Yahoo! Directory</u>, <u>Craigslist</u>, and <u>personal blogs</u>.</div>
      </div>

      <div align="center" className="mtop15p"><h2 className="blog-head"><b>Web 2.0: The Social Web (Mid-2000s - Present)</b></h2></div>
      <div className="mbot15p">
         <div className="mtop15p">Web 2.0 marked the transition to a more interactive and user-centric web. It introduced the concept of 
           the "read-write" web, where users could both consume and create content.</div>
         <div className="mtop15p"><h4><b>Key Features:</b></h4></div>
         <div>
            <ul>
               <li className="mtop5p"><b>Dynamic Content:</b> Websites became more interactive and dynamic, using technologies like 
                         JavaScript, AJAX, and CSS.</li>
               <li className="mtop5p"><b>User-Generated Content:</b> Platforms allowed users to create, share, and collaborate on 
                         content (e.g., blogs, social media, wikis).</li>
               <li className="mtop5p"><b>Social Media:</b> The rise of platforms like Facebook, Twitter, YouTube, and Instagram 
                         enabled social interaction and networking.</li>
               <li className="mtop5p"><b>Cloud Computing:</b> Web 2.0 leveraged cloud-based services for storage, processing, 
                         and hosting.</li>
               <li className="mtop5p"><b>APIs and Interoperability:</b> Developers could build applications that interacted 
                         with other services using APIs.</li>
            </ul>
         </div>
         <div className="mtop15p"><h5><b>Examples:</b></h5></div>
         <div className="mtop5p">Early websites like <u>Google Docs</u>, <u>Wikipedia</u>, <u>Reddit</u>, and <u>Uber</u>.</div>
      </div>

      <div align="center" className="mtop15p"><h2 className="blog-head"><b>Web 3.0: The Decentralized Web (Emerging)</b></h2></div>
      <div className="mbot15p">
         <div className="mtop15p">Web 3.0, often called the "semantic web" or "decentralized web," is the next evolution of the internet. 
         It aims to create a more intelligent, open, and user-controlled web.</div>
         <div className="mtop15p"><h4><b>Key Features:</b></h4></div>
         <div>
            <ul>
               <li className="mtop5p"><b>Decentralization:</b> Web 3.0 relies on blockchain technology and peer-to-peer 
                  networks, reducing reliance on centralized servers and intermediaries.</li>
               <li className="mtop5p"><b>Semantic Web:</b> Data is interconnected and understood by machines, enabling 
                  smarter search results and personalized experiences.</li>
               <li className="mtop5p"><b>Artificial Intelligence (AI):</b> AI and machine learning are integrated to 
                  provide more intelligent and context-aware services.</li>
               <li className="mtop5p"><b>User Ownership:</b> Users have greater control over their data and digital assets, 
                  often through cryptographic keys and wallets.</li>
               <li className="mtop5p"><b>Tokenization and Cryptocurrencies:</b> Digital currencies (e.g., Bitcoin, Ethereum) 
                  and tokenized assets play a central role in Web 3.0 economies.</li>
               <li className="mtop5p"><b>Interoperability:</b> Applications and services are designed to work seamlessly 
                  across platforms and devices.</li>
            </ul>
         </div>
         <div className="mtop15p"><h5><b>Examples:</b></h5></div>
         <div className="mtop15p"><u>Decentralized apps (dApps)</u>, <u>NFTs</u>, <u>DAOs (Decentralized Autonomous Organizations)</u>, 
            and platforms like <u>Ethereum</u>, <u>IPFS</u>, and <u>Brave Browser</u>.</div>
      </div>

 </div>);
};

export default Introduction;