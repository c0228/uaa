import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const CommonSchemas = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Common Schema Evolution Strategies</b></h2></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><h4><b>Backward-Compatible Changes</b></h4></div>
                <div>Backward-compatible changes allow new versions of data structures to work with older versions 
                    of services. These changes do not break existing consumers of the data. Examples include:</div>
                <OrderList data={[(<div>Adding new optional fields</div>),
                    (<div>Providing default values for new fields</div>),
                    (<div>Expanding enums without removing existing values</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Forward-Compatible Changes</b></h4></div>
                <div>Forward-compatible changes ensure that older data versions can still be interpreted by newer 
                    services. Strategies include:</div>
                <OrderList data={[(<div>Ignoring unknown fields</div>),
                    (<div>Maintaining data transformations for deprecated fields</div>)]} />
            </li>
            <li className="mtop15p">
                <div><h4><b>Breaking Changes and Migration Strategies</b></h4></div>
                <div>Some schema changes are inherently breaking, such as removing fields or modifying data types. 
                    To handle these:</div>
                <OrderList data={[(<div>Use <b>versioned APIs</b> (e.g., <code><b>/v1/users</b></code> and <code><b>/v2/users</b></code>)</div>),
                    (<div>Introduce <b>feature flags</b> for gradual rollout</div>),
                    (<div>Implement <b>database migrations</b> with rollback mechanisms</div>)]} />
            </li>
        </ol>
    </div>
 </div>);
};

export default CommonSchemas;