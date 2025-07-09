import React from "react";

const Conclusion = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mtop15p">
      Heap Sort may not be the fastest in practice compared to Quick Sort but offers unmatched reliability. Its deterministic 
      time complexity and space efficiency make it a solid choice for systems where worst-case performance is critical. Though 
      not stable, its performance predictability and in-place operation keep it relevant in many computing domains.
    </div>
    <div className="mtop15p mbot15p">
      If we're building a sorting engine that must always perform efficiently — even on the worst inputs — Heap Sort is a 
      powerful contender.
    </div>
 </div>);
};

export default Conclusion;