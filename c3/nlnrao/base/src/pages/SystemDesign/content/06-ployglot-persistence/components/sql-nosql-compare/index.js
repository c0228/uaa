import React from "react";
import OrderList from "@Components/order-list/index.js";

const SQLNoSQLCompare = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>SQL, NoSQL, and NewSQL: A Comparative Analysis</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>SQL (Relational Databases)</b></h4></div>
                <div className="mtop15p"><b>Use Case:</b></div>
                <div className="mtop15p"><b>Impact on Distributed Systems:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>When to Use SQL:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>NoSQL (Non-Relational Databases)</b></h4></div>
                <div className="mtop15p"><b>Use Case:</b></div>
                <div className="mtop15p"><b>Impact on Distributed Systems:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>Types of NoSQL Databases:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>When to Use SQL:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>NewSQL (Next-Generation Relational Databases)</b></h4></div>
                <div className="mtop15p"><b>Use Case:</b></div>
                <div className="mtop15p"><b>Impact on Distributed Systems:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>Popular NewSQL Databases:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>When to Use SQL:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
                <div className="mtop15p"><b>Challenges:</b></div>
                <OrderList data={[(<div></div>),
                        (<div></div>),
                        (<div></div>)]} />
            </li>
        </ol>
    </div>
 </div>);
};

export default SQLNoSQLCompare;