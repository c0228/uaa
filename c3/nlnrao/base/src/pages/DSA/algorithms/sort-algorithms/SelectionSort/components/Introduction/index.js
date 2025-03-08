import React from "react";
import { Row, Col, Card } from "e-ui-react";
import OrderList from '@Components/order-list/index.js';

const Introduction = () =>{
 return (<div className="fs16p lh28p">
    <div className="mtop15p">
      <i>Selection Sort is also used to sort values in Ascending or Descending order, but the technique differs 
         from Bubble Sort. Instead of repeatedly swapping adjacent elements, Selection Sort works by repeatedly 
         finding the smallest (or largest) element in the unsorted part of the array and swapping it with the 
         first unsorted position until the entire array is sorted.</i>
    </div>
    <div align="center"><h2 className="blog-head mtop15p"><b>What is Selection Sort?</b></h2></div>
    <div className="mtop15p">
    Selection Sort is a simple comparison-based sorting algorithm that repeatedly selects the 
    smallest (or largest) element from an unsorted portion of the array and places it in its 
    correct position.
    </div>
    <div><h4 className="mtop15p"><b>How It Works (Step-by-Step):</b></h4></div>
    <div>
      <OrderList data={[(<div className="mtop15p">
         <div><b>Find the Minimum (or Maximum)</b></div>
         <div>In each pass, find the smallest (or largest) element in the unsorted part of the array.</div>
      </div>),
      (<div className="mtop15p">
         <div><b>Swap with the Correct Position</b></div>
         <div>Swap this minimum (or maximum) element with the first element of the unsorted part.</div>
      </div>),
      (<div className="mtop15p">
         <div><b>Repeat the Process</b></div>
         <div>Move to the next position and repeat the process for the remaining unsorted part of the array.</div>
      </div>)]} />
    </div>
    <div><h5 className="mtop15p"><b>Example:</b></h5></div>
    <div className="mtop15p">
      <Row>
         <Col md={6}>
            <Card padding={15} style={{ minHeight:'72vh' }}>
            <div align="center"><h5><b>Ascending Order</b></h5></div>
            <div><b>Unsorted Array:</b></div>
            <div><code><b>[64, 25, 12, 22, 11]</b></code></div>
            <div>
               <OrderList data={[(<div><b>Pass 1:</b> Find min (11) - Swap with first element -<br/> <code><b>[11, 25, 12, 22, 64]</b></code></div>),
                  (<div><b>Pass 2:</b> Find min (12) - Swap with second element -<br/> <code><b>[11, 12, 25, 22, 64]</b></code></div>),
                  (<div><b>Pass 3:</b> Find min (22) - Swap with third element -<br/> <code><b>[11, 12, 22, 25, 64]</b></code></div>),
                  (<div><b>Pass 4:</b> Find min (25) - Swap with fourth element -<br/> <code><b>[11, 12, 22, 25, 64]</b></code></div>),
                  (<div><b>Pass 5:</b> Already sorted</div>)]} />
            </div>
            </Card>
         </Col>
         <Col md={6}>
            <Card padding={15} style={{ minHeight:'72vh' }}>
            <div align="center"><h5><b>Descending Order</b></h5></div>
            <div><b>Unsorted Array:</b></div>
            <div><code><b>[64, 25, 12, 22, 11]</b></code></div>
            <div>
               <OrderList data={[(<div><b>Pass 1:</b> Find max (64) - Swap with first element -<br/> <code><b>[64, 25, 12, 22, 11]</b></code><br/> (No change as 64 is already in place)</div>),
                     (<div><b>Pass 2:</b> Find max (25) - Swap with second element -<br/> <code><b>[64, 25, 12, 22, 11]</b></code><br/> (No change as 25 is already in place)</div>),
                     (<div><b>Pass 3:</b> Find max (22) - Swap with third element - <code><b>[64, 25, 22, 12, 11]</b></code></div>),
                     (<div><b>Pass 4:</b> Find max (12) - Swap with fourth element - <code><b>[64, 25, 22, 12, 11]</b></code><br/> (No change)</div>),
                     (<div><b>Pass 5:</b> Already sorted</div>)]} />
            </div>
            </Card>
         </Col>
      </Row>
         
    </div>
 </div>);
};

export default Introduction;