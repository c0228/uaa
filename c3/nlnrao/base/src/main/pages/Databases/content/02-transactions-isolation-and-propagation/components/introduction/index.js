import React from "react";
import { Card, Icon } from "e-ui-react";

const Introduction = () =>{
 const IconStatus = ({ status }) =>{
    return (<div><Icon type="FontAwesome" name={status?'fa-check-circle':'fa-times-circle'} 
    style={{ marginRight:'5px', color: status?'green':'red' }} /> 
    {status?(<b>Yes</b>):(<b>No</b>)}</div>);
 };
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div><i>In database systems, <b>transactions</b> are sequences of operations performed as a single logical unit of work. 
    Transactions ensure <b>data integrity</b> and <b>consistency</b>, especially in multi-user and concurrent environments. Two 
    important concepts that govern transaction behavior are <b>Isolation</b> and <b>Propagation</b>.<br/>
    This blog explores these concepts in detail with practical examples.</i></div>

    <div className="mtop15p">
    <Card padding={10}>
        <div align="center" className="mtop15p"><h2 className="blog-head"><b>What is a Transaction?</b></h2></div>
        <div className="mtop15p">A <b>transaction</b> in a database system is a group of one or more operations that are executed as 
        a single unit. These operations must satisfy the <b>ACID</b> properties:</div>
        <div>
            <ul>
                <li className="mtop5p"><b>Atomicity –</b> All operations are completed, or none are.</li>
                <li className="mtop5p"><b>Consistency –</b> The database remains in a valid state before and after the transaction.</li>
                <li className="mtop5p"><b>Isolation –</b> Transactions do not interfere with each other.</li>
                <li className="mtop5p"><b>Durability –</b> Changes made by committed transactions persist even after system failure.</li>
            </ul>
        </div>
    </Card>
    </div>

    <div align="center" className="mtop15p"><h2 className="blog-head"><b>1. Isolation in Transactions</b></h2></div>
    <div className="mtop15p"><b>Isolation</b> is the property that ensures <b>concurrent transactions</b> do not affect each other's \
    execution. It determines how and when changes made by one transaction become visible to others.<br/>
    Imagine two users transferring money at the same time. Without proper isolation, it could lead to <b>dirty reads</b>, 
    <b>non-repeatable reads</b> or <b>phantom reads</b>.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>Types of Isolation Levels</b></h2></div>
    <div className="mtop15p">
        <ol>
            <li className="mtop15p">
                <div><h4><b>Read Uncommitted</b></h4></div>
                <div>
                    <ul>
                        <li className="mtop5p">A transaction may read data that is not yet committed.</li>
                        <li className="mtop5p">Can lead to <b>dirty reads</b>.</li>
                    </ul>
                </div>
                <div><b>Example:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Transaction A updates a balance but doesn't commit.</li>
                        <li className="mtop5p">Transaction B reads this uncommitted value.</li>
                        <li className="mtop5p">If A rolls back, B has read invalid data.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Read Committed</b></h4></div>
                <div>
                    <ul>
                        <li className="mtop5p">A transaction only reads committed data.</li>
                        <li className="mtop5p">Prevents dirty reads but allows <b>non-repeatable reads</b>.</li>
                    </ul>
                </div>
                <div><b>Example:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Transaction A reads a row.</li>
                        <li className="mtop5p">Transaction B updates and commits that row.</li>
                        <li className="mtop5p">A reads again and gets different data.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Repeatable Read</b></h4></div>
                <div>
                    <ul>
                        <li className="mtop5p">Ensures that if a transaction reads data twice, it will be the same.</li>
                        <li className="mtop5p">Prevents dirty and non-repeatable reads but allows <b>phantom reads</b>.</li>
                    </ul>
                </div>
                <div><b>Example:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Transaction A reads all rows with balance &gt; 1000.</li>
                        <li className="mtop5p">Transaction B inserts a new row with balance 2000.</li>
                        <li className="mtop5p">A re-runs the query and sees an extra row (phantom read).</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><h4><b>Serializable</b></h4></div>
                <div>
                    <ul>
                        <li className="mtop5p">The highest isolation level.</li>
                        <li className="mtop5p">Ensures complete isolation. Transactions appear to run serially.</li>
                        <li className="mtop5p">Prevents all anomalies but reduces concurrency.</li>
                    </ul>
                </div>
                <div><b>Example:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">All concurrent transactions are executed one after another, avoiding interference.</li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
    <div className="mtop15p"><h2 className="blog-head"><b>Summary Table</b></h2></div>
    <div className="mtop15p">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr align="center" style={{ backgroundColor:'#eee' }}>
                        <td><b>Isolation Level</b></td>
                        <td><b>Dirty Read</b></td>
                        <td><b>Non-Repeatable Read</b></td>
                        <td><b>Phantom Read</b></td>		
                    </tr>
                </thead>
                <tbody>
                    <tr align="center">
                        <td><b>Read Uncommitted</b></td>
                        <td><IconStatus status={true} /></td>
                        <td><IconStatus status={true} /></td>
                        <td><IconStatus status={true} /></td>
                    </tr>
                    <tr align="center">
                        <td><b>Read Committed</b></td>
                        <td><IconStatus status={false} /></td>
                        <td><IconStatus status={true} /></td>
                        <td><IconStatus status={true} /></td>
                    </tr>
                    <tr align="center">
                        <td><b>Repeatable Read</b></td>
                        <td><IconStatus status={false} /></td>
                        <td><IconStatus status={false} /></td>
                        <td><IconStatus status={true} /></td>
                    </tr>
                    <tr align="center">
                        <td><b>Serializable</b></td>
                        <td><IconStatus status={false} /></td>
                        <td><IconStatus status={false} /></td>
                        <td><IconStatus status={false} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
 </div>);
};

export default Introduction;