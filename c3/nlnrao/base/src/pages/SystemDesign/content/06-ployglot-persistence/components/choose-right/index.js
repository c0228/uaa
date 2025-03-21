import React from "react";
import OrderList from "@Components/order-list/index.js";

const ChooseRight = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Choosing the Right Database for a Distributed System</b></h2></div>
    <div><h4><b>Factors to Consider:</b></h4></div>
    <div>
        <ol>
            <li className="mtop15p">
                <div><b></b></div>
                <OrderList data={[(<div></div>),
                    (<div></div>)]} />
            </li>
            <li className="mtop15p">
                <div><b></b></div>
                <OrderList data={[(<div></div>),
                    (<div></div>)]} />
            </li>
            <li className="mtop15p">
                <div><b></b></div>
                <OrderList data={[(<div></div>),
                    (<div></div>)]} />
            </li>
            <li className="mtop15p">
                <div><b></b></div>
                <OrderList data={[(<div></div>),
                    (<div></div>)]} />
            </li>
            <li className="mtop15p">
                <div><b></b></div>
                <OrderList data={[(<div></div>),
                    (<div></div>)]} />
            </li>
        </ol>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>The Role of Polyglot Persistence in Modern Architectures</b></h2></div>
    <div className="mtop15p"><h4><b>Examples of Polyglot Persistence Implementations:</b></h4></div>
    <OrderList data={[(<div></div>),
        (<div></div>),
        (<div></div>)]} />
    <div className="mtop15p"><h4><b>Advantages of Polyglot Persistence:</b></h4></div>
    <OrderList data={[(<div></div>),
        (<div></div>),
        (<div></div>)]} />
    <div className="mtop15p"><h4><b>Challenges in Polyglot Persistence:</b></h4></div>
    <OrderList data={[(<div></div>),
        (<div></div>),
        (<div></div>)]} />
 </div>);
};

export default ChooseRight;