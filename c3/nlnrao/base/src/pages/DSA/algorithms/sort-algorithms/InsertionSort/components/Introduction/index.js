import React from "react";
import { Row, Col, Card } from "e-ui-react";
import OrderList from "@Components/order-list/index.js";

const Introduction = () =>{
 return (<div className="lh28p fs16p">
    <div className="mtop15p"><i>Insertion Sort is another simple sorting algorithm that sorts values in Ascending or 
        Descending order, but its technique differs from Selection Sort and Bubble Sort. Instead of finding the smallest 
        (or largest) element and swapping, Insertion Sort builds a sorted sequence by picking elements one by one and 
        placing them in their correct position.</i></div>
    <div className="mtop15p"><h2 className="blog-head"><b>What is Insertion Sort?</b></h2></div>
    <div className="mtop15p">
    Insertion Sort is a comparison-based sorting algorithm that works by building a sorted array one element at a time 
    by comparing and inserting elements into their correct position.
    </div>
    <div className="mtop15p"><h4><b>How It Works (Step-by-Step):</b></h4></div>
    <div className="mtop15p">
        <OrderList data={[(<div className="mtop15p">
            <div><b>Start with the First Element</b></div>
            <div>Consider the first element as already sorted.</div>
        </div>),
        (<div className="mtop15p">
            <div><b>Pick the Next Element</b></div>
            <div>Compare it with the elements in the sorted portion and find its correct position.</div>
        </div>),
        (<div className="mtop15p">
            <div><b>Shift Elements if Necessary</b></div>
            <div>Shift all larger elements one position to the right to make space for the new element.</div>
        </div>),
        (<div className="mtop15p">
            <div><b>Insert the Element</b></div>
            <div>Place the picked element in its correct position within the sorted part.</div>
        </div>),
        (<div className="mtop15p">
            <div><b>Repeat for Remaining Elements</b></div>
            <div>Continue this process until all elements are sorted.</div>
        </div>)]} />
    </div>

    <div className="mtop15p"><b>Example:</b></div>
    <div className="mtop15p">
        <Row>
            <Col md={6}>
                <Card padding={15} style={{ minHeight:'60vh' }}>
                    <div align="center"><b>Ascending Order</b></div>
                    <div className="mtop15p">
                        <b>Unsorted Array:</b><br/> <code><b>[64, 25, 12, 22, 11]</b></code>
                        <OrderList data={[(<div><b>Pass 1:</b> Compare 25 with 64, insert 25 before 64 - <code><b>[25, 64, 12, 22, 11]</b></code></div>),
                            (<div><b>Pass 2:</b> Compare 12 with 64 and 25, insert 12 before them - <code><b>[12, 25, 64, 22, 11]</b></code></div>),
                            (<div><b>Pass 3:</b> Compare 22 with 64 and 25, insert 22 before 25 - <code><b>[12, 22, 25, 64, 11]</b></code></div>),
                            (<div><b>Pass 4:</b> Compare 11 with 64, 25, 22, and 12, insert 11 at the start - <code><b>[11, 12, 22, 25, 64]</b></code></div>),
                            (<div><b>Pass 5:</b> Already Sorted</div>)]} />
                    </div>
                </Card>
            </Col>
            <Col md={6}>
                <Card padding={15} style={{ minHeight:'60vh' }}>
                    <div align="center"><b>Descending Order</b></div>
                    <div className="mtop15p">
                        <b>Unsorted Array:</b><br/> <code><b>[64, 25, 12, 22, 11]</b></code>
                        <OrderList data={[(<div><b>Pass 1:</b> Compare 25 with 64 (no change) - <code><b>[64, 25, 12, 22, 11]</b></code></div>),
                            (<div><b>Pass 2:</b> Compare 12 with 25 and 64 (no change)  - <code><b>[64, 25, 12, 22, 11]</b></code></div>),
                            (<div><b>Pass 3:</b> Compare 22 with 12 and 25, insert 22 after 25 - <code><b>[64, 25, 22, 12, 11]</b></code></div>),
                            (<div><b>Pass 4:</b> Compare 11 with 12, 22, 25, and 64 (no change) - <code><b>[64, 25, 22, 12, 11]</b></code></div>),
                            (<div><b>Pass 5:</b> Already Sorted</div>)]} />
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
 </div>);
};

export default Introduction;