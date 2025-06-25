import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Architecture design principles are fundamental guidelines that govern the way software systems are designed and 
        constructed. These principles provide a framework for making decisions about the structure, behavior, and interaction of 
        various components within a system. Agile methodology, on the other hand, is a project management approach that emphasizes 
        flexibility, collaboration, and iterative development. While it may seem that agile and architecture design principles are 
        at odds with each other, they can actually complement each other quite well when implemented thoughtfully.</i></div>
        <div className="mtop15p"><h2 className="blog-head"><b>Architecture Design Principles and Alignment of Agile Methodology</b></h2></div>
        <div className="mtop15p">
        Architecture design principles shape key decisions regarding system structure, scalability, and performance. When aligned with 
        Agile methodology, these principles foster an environment of flexibility, collaboration, and iterative improvement throughout 
        the software development lifecycle. By integrating architecture design principles with Agile practices, teams can effectively 
        manage complexity, respond to change, and deliver high-quality software that aligns with business objectives.
        </div>
        <div className="mtop15p">
            <SimpleTable header={["S. No.","Architecture Design Principles","Agile Methodology Alignment"]} 
                columns={[
                    ["1.","Modularity","Incremental Delivery"],
                    ["2.","Abstraction","Emergent Design"],
                    ["3.","Scalability","Responsive Planning"],
                    ["4.","Flexibility","Adaptive Planning"],
                    ["5.","Security","Incremental Risk Management"],
                    ["6.","Performance","Continuous Improvement"],
                    ["7.","Maintainability","Sustainable Pace"],
                    ["8.","Simplicity","Simplicity"],
                    ["9.","Resilience","Resilience"],
                    ["10.","Reusuability","Reusuability"]
                ]} />
        </div>
 </div>);
};

export default Introduction;