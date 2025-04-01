import React from "react";
import { Card }from "e-ui-react";

const DesignPrinciple = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div>Architecture design principles encompass a broad range of guidelines and best practices that inform the design and 
    construction of software systems. The principles that are commonly considered:</div>
    <div class="mtop15p">
        <ol>
            <li>
                <div><b>Modularity</b></div>
                <div>This principle advocates breaking down a system into smaller, manageable modules or components. Each module 
                should have well-defined boundaries and responsibilities, making it easier to develop, test, and maintain. 
                Modularity promotes reusability and flexibility within the system.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Incremental Delivery</b></div>
                    <div>Agile methodology emphasizes incremental delivery of working software in short iterations or sprints. 
                    This aligns well with the modularity principle, as each iteration focuses on delivering a set of features 
                    or user stories as independent modules. By breaking down the system into manageable increments, Agile teams 
                    can apply modularity principles to design and develop components that can be independently developed, 
                    tested, and integrated.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Abstraction</b></div>
                <div>Abstraction involves hiding implementation details behind well-defined interfaces. By abstracting away 
                complexity, developers can focus on high-level concepts and functionality without getting bogged down in 
                the specifics of how things work internally. Abstraction promotes simplicity and reduces dependencies 
                within the system.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Emergent Design</b></div>
                    <div>Agile encourages emergent design, where architecture evolves incrementally based on feedback and 
                    learning from each iteration. Abstraction principles support this by allowing teams to focus on 
                    high-level concepts and interfaces without getting bogged down in implementation details. As the 
                    system evolves, abstraction facilitates refactoring and restructuring to accommodate changing 
                    requirements while preserving overall architecture integrity.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Scalability</b></div>
                <div>Scalability refers to the ability of a system to handle increasing loads and users without sacrificing 
                performance. Scalable architectures can adapt to growing demands by adding resources such as servers or 
                scaling horizontally across multiple nodes. Scalability is essential for ensuring that a system can grow 
                with the needs of the business.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                <div><b>Responsive Planning</b></div>
                <div>Agile methodologies promote responsiveness to changing priorities and requirements. Scalability 
                    principles align with this by enabling architectures to scale incrementally in response to evolving 
                    needs. Agile teams can plan and prioritize features based on scalability considerations, ensuring that 
                    the architecture can grow with the business and handle increasing loads or user volumes.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Flexibility</b></div>
                <div>Flexibility entails designing systems that can evolve and adapt over time. Flexible architectures 
                accommodate changes in requirements, technologies, and business priorities without requiring extensive 
                rework or redesign. Flexibility is crucial for staying competitive in dynamic and fast-paced 
                environments.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Adaptive Planning</b></div>
                    <div>Agile embraces change and encourages flexibility in responding to new information and shifting 
                    priorities. Flexible architectures support this by accommodating changes in requirements, technologies, 
                    and market conditions without requiring extensive rework. Agile teams can leverage flexibility principles 
                    to make informed decisions about architectural trade-offs and adjustments as they iterate and learn 
                    throughout the development process.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Security</b></div>
                <div>Security is paramount in architecture design, as it involves protecting sensitive data and resources 
                from unauthorized access and malicious attacks. Secure architectures incorporate best practices such as 
                encryption, authentication, authorization, and auditing to mitigate risks and ensure the integrity of 
                the system.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Incremental Risk Management</b></div>
                    <div>Agile methodologies promote early and continuous delivery of valuable software, including security 
                        features and controls. Security principles advocate for incorporating security considerations throughout 
                        the development lifecycle, from design to deployment. Agile teams can address security concerns 
                        incrementally, prioritizing high-risk areas and incorporating security features iteratively to mitigate 
                        risks and vulnerabilities.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Performance</b></div>
                <div>Performance focuses on optimizing the speed and efficiency of a system. Performance-driven architectures 
                prioritize factors such as response times, throughput, and resource utilization to deliver a responsive 
                and scalable user experience. Performance considerations influence decisions related to system design, 
                infrastructure, and algorithms.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Continuous Improvement</b></div>
                    <div>Agile methodologies emphasize continuous improvement through regular reflection and adaptation. 
                        Performance principles support this by optimizing system performance iteratively based on feedback 
                        and metrics. Agile teams can monitor performance indicators and identify opportunities for optimization, 
                        refining architecture and implementation to enhance responsiveness, scalability, and resource utilization 
                        over time.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Maintainability</b></div>
                <div>Maintainability refers to the ease with which a system can be modified, enhanced, and debugged over its 
                lifecycle. Maintainable architectures are well-documented, modular, and adherent to coding standards, 
                making it easier for developers to understand and maintain the codebase. Maintainability reduces the cost 
                and effort associated with ongoing maintenance and support.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Sustainable Pace</b></div>
                    <div>Agile promotes sustainable development practices that prioritize long-term productivity and team 
                        well-being. Maintainability principles align with this by emphasizing clean code, modular design, and 
                        documentation to support ongoing maintenance and evolution. Agile teams can apply maintainability 
                        principles to ensure that architectures remain flexible, understandable, and adaptable to future changes 
                        without causing undue technical debt or cognitive overhead.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Simplicity</b></div>
                <div>Simplicity advocates for keeping architectures as simple and straightforward as possible without sacrificing 
                functionality or performance. Simple architectures are easier to understand, implement, and reason about, 
                leading to fewer bugs, lower complexity, and faster development cycles. Simplicity is achieved by avoiding 
                unnecessary complexity, redundancies, and over-engineering.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Simplicity</b></div>
                    <div>Agile prioritizes delivering valuable features efficiently, avoiding unnecessary complexity. Teams focus 
                        on essential tasks and straightforward solutions, ensuring software remains easy to understand, use, and 
                        maintain. Agile frameworks like Scrum and Kanban provide tools for breaking down complex requirements into 
                        manageable increments. Architectural decisions favor simplicity, keeping systems modular and scalable for 
                        easier adaptation to changing needs.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Resilience</b></div>
                <div>Resilience involves designing systems that can gracefully handle failures and disruptions without compromising 
                    overall functionality or user experience. Resilient architectures incorporate techniques such as fault tolerance, 
                    redundancy, and graceful degradation to ensure continuity of service in the face of adverse conditions.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Resilience</b></div>
                    <div>Agile promotes resilience through iterative development, continuous feedback, and adaptability. Teams 
                    quickly detect and address issues, ensuring software can handle failures gracefully, ensuring continuity 
                    of service. Agile practices like continuous integration and regular retrospectives enhance teams' ability 
                    to respond to challenges. Architectural decisions prioritize techniques like redundancy and fault tolerance 
                    to minimize downtime and maintain system stability.</div>
                </Card>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>Reusability</b></div>
                <div>Reusability promotes the design of components and modules that can be easily reused across different parts of 
                the system or in other projects. Reusable architectures reduce duplication of effort, improve consistency, and 
                accelerate development cycles by leveraging existing assets and patterns.</div>
                <div className="mtop15p">
                <Card padding={15} backgroundColor="#eee">
                    <div><b>Reusability</b></div>
                    <div>Agile fosters reusability through modular design and collaboration. Teams identify and extract reusable 
                    components, accelerating development and enabling flexible, extensible systems. Agile methodologies encourage 
                    knowledge sharing and collaboration, creating a culture of reusability across the organization. Architectural 
                    decisions prioritize modularity and documentation to facilitate the reuse of components across projects and 
                    teams.</div>
                </Card>
                </div>
            </li>
        </ol>
    </div>
 </div>);
};

export default DesignPrinciple;