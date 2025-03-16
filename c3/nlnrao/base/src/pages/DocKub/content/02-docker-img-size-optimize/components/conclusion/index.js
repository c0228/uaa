import React from "react";

const Conclusion = () =>{
 return (<div className="lh28p fs16p mtop15p mbot15p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
    <div className="mbot15p">Optimizing Docker images goes beyond multi-stage builds. Techniques like squashing layers, using distroless images, 
        leveraging BuildKit, and minimizing dependencies can significantly improve efficiency. By incorporating these practices 
        into CI/CD pipelines, teams can build smaller, faster, and more secure containers.</div>
 </div>);
};

export default Conclusion;