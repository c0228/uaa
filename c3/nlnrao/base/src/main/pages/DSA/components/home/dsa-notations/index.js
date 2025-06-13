import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const DSANotations = () =>{
    const DataElement = ({ url, children }) =>{
        return (<a href={process.env.PROJECT_MAIN_URL+url} className="href-simple">
            <div><b>{children}</b></div>
        </a>);
    };
    const data = [{
        "title":"Asymptotic Notations (Time & Space Complexity)",
        "desc":(<div>It is used to describe the performance of an algorithm in terms of input size n.</div>),
        "list":[(<DataElement url="tech/dsa/dsa-notation/big-o-notation">Big-O Notation (O)</DataElement>),
            (<DataElement url="tech/dsa/dsa-notation/omega-notation">Omega Notation (&Omega;)</DataElement>),
            (<DataElement url="tech/dsa/dsa-notation/theta-notation">Theta Notation (&Theta;)</DataElement>),
            (<DataElement url="tech/dsa/dsa-notation/little-o-notation">Little-o Notation (o)</DataElement>),
            (<DataElement url="tech/dsa/dsa-notation/little-omega-notation">Little-omega Notation (&omega;)</DataElement>)]
    },{
        "title":"Recurrence Relation Notations",
        "desc":(<div>Used to express recursive algorithms:</div>),
        "list":[(<DataElement url="tech/dsa/dsa-notation/master-theorem-notation">Master Theorem Notation</DataElement>)]
    },{
        "title":"Graph Notations",
        "desc":(<div>Used in graph algorithms</div>),
        "list":[(<DataElement url="tech/dsa/dsa-notation/adjacency-matrix">Adjacency Matrix (A)</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/adjacency-list">Adjacency List</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/degree-deg-v">Degree (deg(v))</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/graph-representation">Graph Representations: G=(V,E)</DataElement>)]
    },{
        "title":"Arrays & LinkedList Notations",
        "list":[(<DataElement url="tech/dsa/dsa-notation/indexing-a-of-i">Indexing A[i]</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/pointer-notation">Pointer Notation</DataElement>)]
    },{
        "title":"Tree Notations",
        "list":[(<DataElement url="tech/dsa/dsa-notation/binary-tree">Binary Tree</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/height-of-a-tree">Height of a Tree (h)</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/pre-order-in-order-post-order">Preorder, Inorder, Postorder</DataElement>)
        ]
    },{
        "title":"Mathematical Notations",
        "desc":(<div>Used in algorithm analysis</div>),
        "list":[(<DataElement url="tech/dsa/dsa-notation/summation">Summation (&sum;)</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/factorial">Factorial (n!)</DataElement>),
                (<DataElement url="tech/dsa/dsa-notation/logarithm">Logarithm (log n)</DataElement>)
        ]
    }];
    return (<div>
        <div className="list-header">DSA Notations</div>
        {data?.map((d,i)=>{
            return (<div key={i} style={{ paddingTop:'15px' }}>
                <div><b>{i+1}. {d?.title}</b></div>
                <div style={{ paddingLeft:'15px', paddingTop:'5px', lineHeight:'26px' }}>
                 {d?.desc}
                </div>
                <OrderList data={d?.list} />
              </div>);
        })}
    </div>);
  };

export default DSANotations;