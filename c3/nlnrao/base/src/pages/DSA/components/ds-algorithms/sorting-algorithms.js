import React from "react";
import { Card } from "e-ui-react";
import './algorithms.css';

const SortingAlgorithm = () =>{
 return (<div>
    <Card>
        <div align="center" className="mtop15p"><h4><b>Sorting Algorithms</b></h4></div>
        <div className="pad15p" style={{ lineHeight:'26px' }}>
    
          <div>Sorting algorithms arrange elements in a particular order, usually 
          ascending or descending.</div>
    
          <div className="dsa-algo-container">
            <div className="dsa-algo-item">
                <b>Bubble Sort –</b> 
            </div>
            <div className="dsa-algo-item">
                Repeatedly swaps adjacent elements if they are in the wrong order.
            </div>
          </div>
          <div className="mtop15p">
            
          </div>
    
          <div className="mtop5p">
            <b>Selection Sort –</b> Finds the minimum element and places it at the correct position.
          </div>
    
          <div className="mtop5p">
            <b>Insertion Sort –</b> Picks an element and places it in its correct position among sorted elements.
          </div>
    
          <div className="mtop5p">
            <b>Merge Sort –</b> Uses a divide-and-conquer approach to merge sorted subarrays.
          </div>
    
          <div className="mtop5p">
            <b>Quick Sort –</b> Selects a pivot and partitions the array around it.
          </div>
    
          <div className="mtop5p">
            <b>Heap Sort –</b> Uses a binary heap structure to sort elements efficiently.
          </div>
    
          <div className="mtop5p">
            <b>Counting Sort –</b> Works efficiently for integers within a known range.
          </div>
    
          <div className="mtop5p">
            <b>Radix Sort –</b> Sorts numbers digit by digit using counting sort as a subroutine.
          </div>
    
        </div>
      </Card>
 </div>);
};

export default SortingAlgorithm;