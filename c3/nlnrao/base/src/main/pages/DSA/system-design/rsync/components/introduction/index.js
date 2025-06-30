import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>In distributed systems, efficient data synchronization is essential — especially when syncing 
   large files across machines with minimal bandwidth usage. Copying whole files again and again is not scalable, particularly 
   when only small parts of the files have changed.</i></div>
   <div className="mtop15p"><i>This is where the <b>Rsync algorithm</b> becomes a powerful tool — helping systems synchronize files 
   and directories efficiently by transferring only the differences.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to Rsync Algorithm</b></h2></div>
   <div className="mtop15p">The <b>Rsync algorithm</b>, developed by Andrew Tridgell and Paul Mackerras in the mid-90s, 
   is a <u><i>differential synchronization algorithm</i></u>. Its primary goal is to reduce the amount of data transmitted over a 
   network by sending only the modified parts of a file instead of the entire file.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Core Principles:</b></h4></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Divide and Compare:</b> The destination splits its file into blocks and sends checksums to 
         the source.</li>
         <li className="mtop5p">
            <div><b>Weak & Strong Checksums:</b></div>
            <ul>
               <li><b>Weak checksum</b> (rolling hash): Fast to compute; helps identify possible matches.</li>
               <li><b>Strong checksum</b> (e.g., MD5): Verifies the match for accuracy.</li>
            </ul>
         </li>
         <li><b>Delta Transfer:</b> Only changed blocks (called "deltas") are sent from the source to the destination.</li>
      </ol>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>System Design Use Cases:</b></h4></div>
   <div>
      <ul>
         <li className="mtop5p">File synchronization (Dropbox, OneDrive)</li>
         <li className="mtop5p">Backup systems (e.g., <code><b>rsync</b></code> command-line tool)</li>
         <li className="mtop5p">Patch distribution (sending only changed parts)</li>
         <li className="mtop5p">CDN edge server cache refresh</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>How Rsync Works?</b></h2></div>
   <div>
      <ol>
         <li className="mtop5p"><b>Divide File into Blocks:</b> The destination file is broken into fixed-size blocks.</li>
         <li className="mtop5p">
            <div><b>Generate Checksums:</b></div>
            <ul>
               <li>The destination computes and sends weak (rolling) and strong (MD5) checksums for each block.</li>
            </ul>
         </li>
         <li className="mtop5p">
            <div><b>Compare at Source:</b></div>
            <ul>
               <li>The source slides a rolling checksum over its file.</li>
               <li>On match, verifies with a strong checksum.</li>
            </ul>
         </li>
         <li className="mtop5p">
            <div><b>Send Deltas:</b></div>
            <ul>
               <li>Only the unmatched data chunks are sent over the network.</li>
            </ul>
         </li>
         <li className="mtop5p">
            <div><b>Reconstruct File:</b></div>
            <ul>
               <li>The destination reassembles the file using existing blocks and new deltas.</li>
            </ul>
         </li>
      </ol>
   </div>
 </div>);
};

export default Introduction;