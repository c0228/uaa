import React from "react";
import { ResumeSubHeader } from '@Components/profile-card/components/resume/components/resume-header/index.js';

const data = [{
 "title":"Professional Summary",
 "details":[{
    "header":(<div>As a <span className="text-grey2"><b>Software Engineer</b></span> -</div>),
    "list":[(<div>I excelled in relevant coursework, hands-on projects and showcasing adaptability.</div>),
        (<div>I actively collaborated in team projects & remained committed to continuous learning and professional development.</div>),
        (<div>Demonstrated a strong commitment to quality coding practices & collaborative problem-solving throughout the process.</div>)
    ]
 },{
    "header":(<div>As a <span className="text-grey2"><b>Senior Software Engineer</b></span> -</div>),
    "list":[(<div>Successfully contributed to high-impact projects, demonstrating expertise in the technologies
			 of <span className="text-grey3"><b>Full Stack Development</b></span> and consistently delivering solutions that met or exceeded project goals.</div>),
        (<div>Collaborated with cross-functional teams to achieve optimal results.</div>)]
 },{
    "header":(<div>As a <span className="text-grey2"><b>Technical Lead</b></span> -</div>),
    "list":[(<div>Led and mentored development teams through the entire project lifecycle, from conception to delivery.</div>),
        (<div>Demonstrated strong leadership and communication skills, ensuring the successful implementation of 
				the Projects and POC's and maintaining a focus on quality and efficiency.</div>)]
 }]
},{
   "title":"Career Highlights", 
   "details":[{
    "header":(<div><span className="text-grey2"><b>Worked as an Individual Contributor on Projects and POCs:</b></span></div>),
    "list":[(<div>Acted as a key individual contributor, taking ownership of various projects and proof-of-concepts.</div>),
        (<div>Utilized technical expertise and problem-solving skills to deliver innovative solutions, contributing significantly to the technological advancement and success of the organization.</div>)
        ]
    },{
        "header":(<div><span className="text-grey2"><b>Worked as a Full Stack Developer:</b></span></div>),
        "list":[(<div>Proficient in designing and developing responsive, high-performing web applications using a variety of languages and frameworks.</div>),
            (<div>Demonstrated capability in working with SQL and NoSQL databases, ensuring seamless data integration and management.</div>),
            (<div>Adept at applying best coding practices, writing clean, maintainable code, and performing thorough debugging and testing to deliver robust software solutions.</div>)
            ]
    }]
},{
    "title":"Technical Highlights",
    "details":[{
        "header":(<div><span className="text-grey2"><b>Worked on MEAN and MERN Stack Technologies:</b></span></div>),
        "list":[(<div>Expertise in developing dynamic web applications using both MEAN (MongoDB, Express.js, AngularJS, Node.js) 
            and MERN (MongoDB, Express.js, React, Node.js) stacks for over 6 years.</div>),
            (<div>Skilled in leveraging these technologies to build scalable, efficient, and sophisticated single-page applications (SPAs).</div>),
            (<div>Demonstrated ability to lead and mentor teams in adopting these stacks, ensuring best practices are followed in 
                API design, database schemas, and server-side logic.</div>),
            (<div>Proven track record of improving application performance, enhancing user experience, and integrating modern web features.</div>)
        ]
    },{
       "header":(<div><span className="text-grey2"><b>Experienced on Blockchain Development:</b></span></div>),
       "list":[(<div>Over 4 years of dedicated experience in Blockchain Development, specializing in creating decentralized applications (DApps), 
        smart contracts, and consensus algorithms.</div>),
        (<div>Proficient with Ethereum, Solidity, and other blockchain technologies, emphasizing security and scalability.</div>),
        (<div>Experienced in integrating blockchain solutions with traditional web technologies to innovate and enhance 
            applications' security and efficiency.</div>),
        (<div>Demonstrated success in deploying smart contracts, optimizing gas costs, and contributing to blockchain networks' 
            growth and stability.</div>)]
    },{
        "header":(<div><span className="text-grey2"><b>Experienced in Reactive Programming and worked with Reactive Streams:</b></span></div>),
        "list":[(<div>Worked over <span className="text-grey2">9+ years</span> with Reactive Programming and Reactive Streams 
        Specification on 8 Projects in 4 industries over different technologies -
        <div><span className="text-grey2"><b>Java Platform:</b></span> Reactor Streams Framework (introduced in Java 9) and Project 
        Reactor Library</div>
        <div><span className="text-grey2"><b>Angular Platform:</b></span> RxJS Library</div>
        </div>)]
    }]
}];

const ListedSummary = () =>{
 return (<div>
    {data?.map((dat,i1)=>{
     return (<div key={i1}>
        <ResumeSubHeader title={dat?.title} />
        {dat?.["details"]?.map((da,i2)=>{
            return (<ul key={i2}>
                <li>{da?.["header"]}</li>
                <ul>
                    {da?.["list"]?.map((d,i3)=>{
                        return (<li key={i3}>{d}</li>);
                    })}
                </ul>
            </ul>);
        })}
     </div>);
    })}
 </div>);
};

export default ListedSummary;