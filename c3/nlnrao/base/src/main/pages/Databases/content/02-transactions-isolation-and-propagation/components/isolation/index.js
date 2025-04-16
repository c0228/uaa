import React from "react";
import { Card, Highlight } from "e-ui-react";

const SPRING_WITH_MYSQL = `@Transactional(isolation = Isolation.REPEATABLE_READ, propagation = Propagation.REQUIRES_NEW)
public void saveOrder() {
    // Logic here is in a new transaction and repeatable read isolation
}`;

const Isolation = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Isolation Levels Used by Popular Databases</b></h2></div>
    <div className="table-responsive">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor:'#eee' }}>
                <td><b>Database</b></td>
                <td><b>Supported Isolation Levels</b></td>
                <td><b>Default Isolation Level   </b></td>
                <td><b>Special Notes</b></td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td><b>MySQL (InnoDB)</b></td>
                <td>Read Uncommitted, Read Committed, Repeatable Read, Serializable</td>
                <td><b>Repeatable Read</b></td>
                <td>Phantom reads possible unless Serializable is used</td>
            </tr>
            <tr>
                <td><b>PostgreSQL</b></td>
                <td>Read Committed, Repeatable Read, Serializable</td>
                <td><b>Read Committed</b></td>
                <td>Doesn’t support Read Uncommitted</td>
            </tr>
            <tr>
                <td><b>Oracle</b></td>
                <td>Read Committed, Serializable</td>
                <td><b>Read Committed</b></td>
                <td>Implements Serializable using Serializable Snapshot Isolation</td>
            </tr>
            <tr>
                <td><b>SQL Server</b></td>
                <td>Read Uncommitted, Read Committed, Repeatable Read, Serializable, Snapshot</td>
                <td><b>Read Committed</b></td>
                <td>Uses locks and/or versioning</td>
            </tr>
            <tr>
                <td><b>SQLite</b></td>
                <td>Serializable (via <code><b>BEGIN TRANSACTION</b></code>)</td>
                <td><b>Serializable</b></td>
                <td>No strict isolation enforcement</td>
            </tr>
            <tr>
                <td><b>MariaDB</b></td>
                <td>Same as MySQL (depends on storage engine like InnoDB or MyRocks)</td>
                <td><b>Repeatable Read</b></td>
                <td>Based on InnoDB for default</td>
            </tr>
          </tbody>
        </table>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Propagation Strategies in Popular Platforms</b></h2></div>
    <div className="mtop15p">
        <Card padding={15}>
            <div><b>Note:</b> Propagation is not a direct database concept; it’s implemented in <b>transaction managers</b> 
            provided by frameworks like:</div>
            <div>
                <ul>
                    <li className="mtop5p"><b>Spring Framework (Java)</b></li>
                    <li className="mtop5p"><b>JPA/Hibernate</b></li>
                    <li className="mtop5p"><b>.NET Entity Framework</b></li>
                </ul>
            </div>
            <div className="mtop15p">Here’s a look at how propagation is generally supported:</div>
        </Card>
    </div>

    <div className="table-responsive mtop15p">
        <table className="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Propagation Type</b></td>
                    <td><b>Description</b></td>
                    <td><b>Supported In</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>REQUIRED</b></td>
                    <td>Use existing transaction or create new one</td>
                    <td>Spring, JPA, .NET</td>
                </tr>
                <tr>
                    <td><b>REQUIRES_NEW</b></td>
                    <td>Always start a new transaction (suspend current one if any)</td>
                    <td>Spring, JPA, .NET</td>
                </tr>
                <tr>
                    <td><b>NESTED</b></td>
                    <td>Start a nested transaction with savepoints</td>
                    <td>Spring, JDBC</td>
                </tr>
                <tr>
                    <td><b>MANDATORY</b></td>
                    <td>Must run within an existing transaction</td>
                    <td>Spring, JPA</td>
                </tr>
                <tr>
                    <td><b>NEVER</b></td>
                    <td>Must not run within a transaction</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td><b>NOT_SUPPORTED</b></td>
                    <td>Suspends current transaction and runs non-transactionally</td>
                    <td>Spring</td>
                </tr>
                <tr>
                    <td><b>SUPPORTS</b></td>
                    <td>Joins current transaction if exists; otherwise, runs non-transactionally</td>
                    <td>Spring</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className="mtop15p"><h4><b>Example: Spring with MySQL</b></h4></div>
    <div className="mtop15p padLeft5p">In a <b>Spring Boot app using MySQL</b>, you can annotate service methods like this:</div>
    <div>
        <Highlight content={SPRING_WITH_MYSQL} lang="java" />
    </div>
    <div className="mtop15p padLeft5p">This allows developers to <b>fine-tune transaction boundaries and consistency levels</b> 
    even though MySQL handles the low-level isolation.</div>
 </div>);
};

export default Isolation;