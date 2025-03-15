import React from "react";

const Introduction = () =>{
 return (<div className="lh28p fs16p mtop15p">
    <div><i>Domain-driven Design (DDD) in Agile Architecture ensures software reflects real-world business domains, enhancing 
    alignment between technical and business domains. By defining bounded contexts, DDD delineates clear boundaries within which 
    models, terms, and rules apply, fostering clarity and reducing ambiguity. This segmentation enables teams to focus on specific 
    business functionalities independently, promoting agility and scalability. Microservices architecture, often employed in Agile 
    contexts, leverages DDD's bounded contexts to design small, focused services aligned with business capabilities. Thus, DDD 
    serves as a guiding principle for structuring software systems in Agile environments, promoting flexibility, maintainability, 
    and business alignment.</i></div>
    <div className="list-group">
        <div className="list-group-item mtop15p" style={{ backgroundColor:'#f7f7f7' }}>
            <div className="mtop15p">
                <div align="center"><h4><b>What is Domain-driven Design (DDD)?</b></h4></div>
                <div className="mtop15p mbot15p">
                <u><i>Domain-driven Design (DDD)</i></u> is a way of building software that focuses on understanding and solving real-world problems. 
                Imagine you're building an app for a bookstore. Instead of just thinking about coding, DDD encourages you to deeply 
                understand how bookstores work, like how they manage inventory or process orders. This approach helps you speak the same 
                language as the bookstore staff, making communication easier. DDD also helps you break down the complex bookstore system 
                into smaller, manageable parts called "domains," each with its own set of rules and concepts. By doing this, you can create 
                software that mirrors the real world, making it easier to build, maintain, and change as needed.
                </div>
            </div>
        </div>
        <div className="list-group-item" style={{ backgroundColor:'#f7f7f7' }}>
            <div className="mtop15p">
                <div align="center"><h4><b>What is Bounded Context?</b></h4></div>
            </div>
            <div className="mtop15p mbot15p">
                <u><i>Bounded Context</i></u> in Domain-driven Design (DDD) is a specific area within a software system where a 
                particular model or set of concepts applies consistently. Think of it as a boundary or border around a certain aspect of 
                your system, defining where certain terms, rules, and behaviors are valid and meaningful. <br/><br/>
                For example, in a large e-commerce platform, you might have different bounded contexts for managing inventory, processing 
                orders, and handling customer accounts. Within each bounded context, you have a clear understanding of the language, rules, 
                and concepts relevant to that specific domain. This helps prevent confusion and inconsistency across different parts of the 
                system and allows teams to work more independently and effectively.
            </div>
        </div>
    </div>
 </div>);
};

export default Introduction;