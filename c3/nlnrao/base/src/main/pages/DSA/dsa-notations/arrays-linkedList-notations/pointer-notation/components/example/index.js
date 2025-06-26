import React from "react";
import { Icon, Tab, Highlight } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const POINTER_REF_JAVA = `class Box {
    int value;
    Box(int value) {
        this.value = value;
    }
}

public class PointerExample {
    public static void update(Box b) {
        b.value = 99;
    }

    public static void main(String[] args) {
        Box box = new Box(10);
        update(box);
        System.out.println("Box value: " + box.value); // Output: 99
    }
}`;

const POINTER_REF_JS = `function update(obj) {
    obj.value = 99;
}

let box = { value: 10 };
update(box);
console.log("box.value:", box.value); // Output: 99`;

const POINTER_REF_PYTHON = `def update(value):
    value[0] = 99  # Modifies the original list

A = [10]
update(A)
print("A[0]:", A[0])  # Output: 99`;

const POINTER_REF_C = `#include <stdio.h>
int main() {
    int x = 10;
    int* p = &x;   // p stores address of x
    *p = 99;       // changes value of x through pointer
    printf("%d\\n", x); // Output: 99
}`;

const Example = () =>{
    const DisplayIcon = ({ status }) =>{
        return (<Icon type="FontAwesome" name={(status=='Y'?'fa-check-circle':'fa-times-circle')} color={(status=='Y'?'green':'red')} />);
    };
    const JavaCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
            <div><h4 className="blog-head"><b>Java – Reference to Objects</b></h4></div>
            <Highlight content={POINTER_REF_JAVA} lang="java" />
            <div className="mtop5p">Java passes <b>object references</b>, so modifying the object 
            through a reference affects the original.</div>
        </div>);
    };

    const JSCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
            <div><h4 className="blog-head"><b>JavaScript – Reference to Objects</b></h4></div>
            <Highlight content={POINTER_REF_JS} lang="javascript" />
            <div className="mtop5p">Objects in JavaScript are passed by <b>reference</b>, not by value.</div>
        </div>);
    };

    const PythonCode = ()=>{
        return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
        <div><h4 className="blog-head"><b>Python – Reference Behavior (Pointer-Like)</b></h4></div>
        <Highlight content={POINTER_REF_PYTHON} lang="python" />
        <div className="mtop5p">Here, the list <code><b>A</b></code> is passed <b>by reference</b>, so changes inside 
        the function reflect outside.</div>
        </div>);
    };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>How Do High-Level Languages Handle Pointers?</b></h2></div>
    <div className="mtop15p">
        <SimpleTable header={["Language","Pointer Support","Alternative Concept"]} 
        columns={[
            ["C / C++",(<div><DisplayIcon status="Y" /> Yes</div>),"Native pointer syntax"],
            ["Python", (<div><DisplayIcon /> No</div>), "Everything is a reference"],
            ["Java", (<div><DisplayIcon /> No</div>), "Objects are passed by reference"],
            ["JavaScript", (<div><DisplayIcon /> No</div>), "Objects are reference types"]
          ]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Code Examples</b></h2></div>
    <div className="mtop15p">Let’s explore how pointer-like behavior appears 
    in <b>Python</b>, <b>Java</b>, and <b>JavaScript</b>.</div>
    <div className="mtop15p">
        <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Real Pointer Notation: Comparison with C</b></h2></div>
    <div className="mtop15p">To clearly contrast, here's how <b>real pointer notation</b> looks in <b>C</b>:</div>
    <div className="mtop5p">
        <Highlight content={POINTER_REF_C} lang="c" />
    </div>

 </div>);
};

export default Example;