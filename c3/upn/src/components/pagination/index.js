import React, { useState, useEffect } from "react";
import { Row, Col } from "e-ui-react";

const Pagination = ({ totalCount, pageSize, pageIndex }) =>{
 const totalPages = Math.ceil(totalCount / pageSize); // TotalPages in Pagination 
 const currentPage = pageIndex; // Pagination Current Page
 const paginationMaxVisibility = (totalPages>=5)?5: (totalPages); // DisplayPages List in Pagination
 const startItem = ((pageIndex - 1) * pageSize) + 1; // Start Item in a Page
 const endItem = Math.min(pageIndex * pageSize, totalCount); // End Item in Same Page
 const getPagesList = () => { // 1, 100
    const pages=[];
    console.log("totalCount: ", totalCount, "pageSize: ", pageSize, 
        "totalCount / pageSize: ", (totalCount / pageSize), Math.ceil(totalCount / pageSize), 
        "totalPages [getPagesList]: ", totalPages);
    if(totalPages<10){
        for (let index = 1; index <=totalPages; index++) {
            pages.push(index);
        } 
    } else {
        
    }
    return pages;
   /* const offset = Math.floor(paginationMaxVisibility / 2);
    const startNumber = (currentPage <= (offset+1)) ? 1: (currentPage - offset);
    const startPages = [];
    const gap = ["..."];
    const endPages = [];
    console.log("totalPages: ", totalPages);
    for (let index = 0; index <= paginationMaxVisibility; index++) {
        const front = startNumber + index; // 1 2 3 4 5
        const back = totalPages - (paginationMaxVisibility - index); // 96 97 98 99 100
        startPages.push(front);
        endPages.push(back);
    }
    return [...startPages, ...gap, ...endPages]; */
};
 return (<Row>
    <Col md={6}>
     <div style={{ marginTop:'28px', color:'#6c757d' }}>
        <b>Showing {startItem} to {endItem} of {totalCount} articles</b>
     </div>
    </Col>
    <Col md={6}>
        <div className="mtop15p pull-right">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item disabled"><a class="page-link fs12" href="#"><b>Previous</b></a></li>
                {getPagesList()?.map((p,i)=>{
                    return (<li key={i} class={(currentPage===p)?"page-item active":"page-item"}
                        onClick={()=>setCurrentPage(p)}>
                        <span class="page-link fs12" href="#"><b>{p}</b></span>
                    </li>);
                })}                                           
                <li class="page-item"><a class="page-link fs12" href="#"><b>Next</b></a></li>
            </ul>
        </nav>
    </div>
    </Col>
 </Row>);
};

export default Pagination;