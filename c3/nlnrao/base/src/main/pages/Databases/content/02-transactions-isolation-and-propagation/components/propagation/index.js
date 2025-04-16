import React from "react";
import { Card, Highlight } from "e-ui-react";

const BANK_TRANSACTIONAL_SERVICE= `public class BankService {

    @Transactional(propagation = Propagation.REQUIRED)
    public void transferMoney() {
        debitAccount(); // part of main transaction
        logTransaction(); // can be REQUIRES_NEW or NESTED
        creditAccount(); // part of main transaction
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void logTransaction() {
        // logs the transaction in a separate commit
    }
}
`;

const Propagation = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div align="center" className="mtop15p"><h2 className="blog-head"><b>2. Propagation in Transactions</b></h2></div>
    <div className="mtop15p">While isolation defines how a transaction behaves in <b>concurrency</b>, <b>propagation</b> defines 
    how transactions behave in <b>nested contexts</b>, especially in enterprise frameworks like <b>Spring</b> or <b>JPA</b>.</div>
    <div className="mtop15p">Propagation decides how <b>child transactions</b> interact with <b>parent transactions</b>.</div>
    <div className="mtop15p"><h4><b>Types of Propagation Behaviors (Spring / JPA context)</b></h4></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b>REQUIRED (Default)</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Join the existing transaction or create a new one if none exists.</li>
                        <li className="mtop5p">Simple and most common.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>REQUIRES_NEW</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Always start a new transaction.</li>
                        <li className="mtop5p">Suspends the current transaction if it exists.</li>
                    </ul>
                </div>
                <div><b>Example:</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Parent transaction updates a record.</li>
                        <li className="mtop5p">Child transaction (REQUIRES_NEW) inserts a log.</li>
                        <li className="mtop5p">If parent rolls back, the log still exists.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>NESTED</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Executes in a nested transaction within the existing one.</li>
                        <li className="mtop5p">If nested fails, only its changes roll back; parent can continue.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>MANDATORY</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Must run within an existing transaction.</li>
                        <li className="mtop5p">Throws an exception if none exists.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>NEVER</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Must not run in a transaction.</li>
                        <li className="mtop5p">Throws an exception if a transaction exists.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>SUPPORTS</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Uses current transaction if it exists; else, runs non-transactionally.</li>
                    </ul>
                </div>
            </li>
            <li className="mtop15p">
                <div><b>NOT_SUPPORTED</b></div>
                <div>
                    <ul>
                        <li className="mtop5p">Always runs without a transaction.</li>
                        <li className="mtop5p">Suspends the current transaction if one exists.</li>
                    </ul>
                </div>
            </li>
        </ol>
    </div>
    <div><b>Example:</b></div>
    <div className="mtop15p">
        <Highlight content={BANK_TRANSACTIONAL_SERVICE} lang="java" />
    </div>
    <div>
        <ul>
            <li className="mtop5p">If <code><b>transferMoney()</b></code> fails, the <code><b>logTransaction()</b></code> still 
            commits because it uses a new transaction.</li>
            <li className="mtop5p">If you want rollback together, use <code><b>NESTED</b></code>.</li>
        </ul>
    </div>
    <div className="mtop15p">
        <Card padding={10}>
            <div align="center" className="mtop15p"><h2 className="blog-head"><b>Short Summary</b></h2></div>
            <ul>
                <li className="mtop5p"><b>Isolation levels</b> are directly supported by <b>databases</b>.</li>
                <li className="mtop5p"><b>Propagation behaviors</b> are defined by <b>frameworks</b> (e.g., Spring, Hibernate).</li>
                <li className="mtop5p">
                    <div>Not all databases support <b>all isolation levels</b>. For example:</div>
                    <div>
                        <ul>
                            <li className="mtop5p">PostgreSQL doesn’t support Read Uncommitted.</li>
                            <li className="mtop5p">Oracle supports only two isolation levels.</li>
                        </ul>
                    </div>
                </li>
                <li className="mtop5p"><b>Propagation</b> allows <b>transaction nesting</b>, <b>suspension</b>, and <b>reusing transactions</b>, 
                depending on business logic.</li>
            </ul>
        </Card>
    </div>
 </div>);
};

export default Propagation;