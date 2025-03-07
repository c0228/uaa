import React from "react";
import OrderList from "@Components/order-list/index.js";

const DSANotations = () =>{
    const DataElement = ({ url, children }) =>{
        return (<a href={url} className="href-simple">
            <div><b>{children}</b></div>
        </a>);
    };
    const data = [{
        "title":"Asymptotic Notations (Time & Space Complexity)",
        "desc":(<div>It is used to describe the performance of an algorithm in terms of input size n.</div>),
        "list":[(<DataElement url="">Big-O Notation (O)</DataElement>),
            (<DataElement url="">Omega Notation (&Omega;)</DataElement>),
            (<DataElement url="">Theta Notation (&Theta;)</DataElement>),
            (<DataElement url="">Little-o Notation (o)</DataElement>),
            (<DataElement url="">Little-omega Notation (&omega;)</DataElement>)]
    },{
        "title":"Recurrence Relation Notations",
        "desc":(<div>Used to express recursive algorithms:</div>),
        "list":[(<DataElement url="">Master Theorem Notation</DataElement>)]
    },{
        "title":"Graph Notations",
        "desc":(<div>Used in graph algorithms</div>),
        "list":[(<DataElement url="">Adjacency Matrix (A)</DataElement>),
                (<DataElement url="">Adjacency List</DataElement>),
                (<DataElement url="">Degree (deg(v))</DataElement>),
                (<DataElement url="">Graph Representations: G=(V,E)</DataElement>)]
    },{
        "title":"Arrays & LinkedList Notations",
        "list":[(<DataElement url="">Indexing A[i]</DataElement>),
                (<DataElement url="">Pointer Notation</DataElement>)]
    },{
        "title":"Tree Notations",
        "list":[(<DataElement url="">Binary Tree</DataElement>),
                (<DataElement url="">Height of a Tree (h)</DataElement>),
                (<DataElement url="">Preorder, Inorder, Postorder</DataElement>)
        ]
    },{
        "title":"Mathematical Notations",
        "desc":(<div>Used in algorithm analysis</div>),
        "list":[(<DataElement url="">Summation (&sum;)</DataElement>),
                (<DataElement url="">Factorial (n!)</DataElement>),
                (<DataElement url="">Logarithm (log n)</DataElement>)
        ]
    }];
    return (<div>
        <div className="list-header">DSA Notations</div>
        {data?.map((d,i)=>{
            return (<div style={{ paddingTop:'15px' }}>
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