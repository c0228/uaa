import React from "react";
import { Highlight } from "e-ui-react";

const PLACE_ORDER_TRANSACTION = `@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
public void placeOrder(Order order) {
    reserveInventory(order); // must be isolated strictly
    chargePayment(order); // requires new transaction
    saveAuditLog(order); // nested
}
`;

const Action = () =>{
    return (<div className="mtop15p mbot25p lh28p fs16p">
        <div className="mtop15p"><h2 className="blog-head"><b>Isolation + Propagation in Action</b></h2></div>
        <div className="mtop15p">Imagine you're building an online shopping system:</div>
        <div>
            <ul>
                <li className="mtop5p">A customer places an order (<code><b>REQUIRED</b></code> propagation).</li>
                <li className="mtop5p">The system checks inventory and processes payment (<code><b>REQUIRES_NEW</b></code>).</li>
                <li className="mtop5p">Logging each step uses a <code><b>NESTED</b></code> transaction.</li>
            </ul>
        </div>
        <div className="mtop15p">
            <Highlight content={PLACE_ORDER_TRANSACTION} lang="java" />
        </div>
        <div className="mtop15p">
            <div>This setup ensures:</div>
            <div>
                <ul>
                    <li className="mtop5p">Inventory is safely reserved (no phantom orders).</li>
                    <li className="mtop5p">Payment logic runs independently (so failures don’t affect inventory).</li>
                    <li className="mtop5p">Logs roll back if their specific block fails.</li>
                </ul>
            </div>
        </div>
    </div>);
};

export default Action;