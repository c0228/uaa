import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const ChooseRight = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Choosing the Right Database for a Distributed System</b></h2></div>
    <div><h4><b>Factors to Consider:</b></h4></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>Consistency vs. Availability:</b></div>
                <OrderList data={[(<div>If strict consistency is required, go with SQL or NewSQL.</div>),
                    (<div>If high availability and partition tolerance are needed, NoSQL is better.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Scalability Needs:</b></div>
                <OrderList data={[(<div>Vertical scaling works well with SQL.</div>),
                    (<div>Horizontal scaling is easier with NoSQL and NewSQL.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Data Model Complexity:</b></div>
                <OrderList data={[(<div>If relationships are complex, SQL or Graph databases (NoSQL) are ideal.</div>),
                    (<div>If flexible schema is required, document or columnar stores (NoSQL) work well.</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Read vs. Write Optimization:</b></div>
                <OrderList data={[(<div>SQL is good for transactional consistency with frequent reads.</div>),
                    (<div>NoSQL is efficient for write-heavy applications (e.g., logging, analytics).</div>)]} />
            </li>
            <li className="mtop15p">
                <div><b>Operational Complexity & Cost:</b></div>
                <OrderList data={[(<div>SQL is easier to manage but harder to scale.</div>),
                    (<div>NoSQL/NewSQL require distributed architecture expertise.</div>)]} />
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>The Role of Polyglot Persistence in Modern Architectures</b></h2></div>
    <div className="mtop15p"><h4><b>Examples of Polyglot Persistence Implementations:</b></h4></div>
    <OrderList data={[(<div><b>E-commerce (Amazon, eBay):</b> SQL for orders, NoSQL for product catalog, NewSQL for 
        high availability.</div>),
        (<div><b>Social Networks (Facebook, Twitter):</b> NoSQL for user posts, SQL for financial transactions, GraphDB for 
        friend recommendations.</div>),
        (<div><b>Streaming Platforms (Netflix, YouTube):</b> NoSQL for metadata storage, SQL for billing, NewSQL for 
        distributed consistency.</div>)]} />
    <div className="mtop15p"><h4><b>Advantages of Polyglot Persistence:</b></h4></div>
    <OrderList data={[(<div>Optimized performance by leveraging the best database for each workload.</div>),
        (<div>Improved scalability without sacrificing consistency where needed.</div>),
        (<div>Flexible data models to accommodate evolving application requirements.</div>)]} />
    <div className="mtop15p"><h4><b>Challenges in Polyglot Persistence:</b></h4></div>
    <OrderList data={[(<div><b>Data Synchronization:</b> Ensuring consistency across multiple databases.</div>),
        (<div><b>Operational Overhead:</b> Managing multiple database technologies increases complexity.</div>),
        (<div><b>Querying Across Databases:</b> Requires additional layers like GraphQL or custom middleware.</div>)]} />
 </div>);
};

export default ChooseRight;