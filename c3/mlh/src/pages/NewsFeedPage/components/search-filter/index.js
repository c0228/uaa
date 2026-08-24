import React from "react";
import { Card } from "e-ui-react";
import './index.css';

const SearchFilter = () =>{
 return (<>
 <Card padding={15}>
      <div class="filter-head">
        <h3>Filters</h3>
        <a href="#" class="clear-link">Clear All</a>
      </div>

      <div class="mb-2">
        <div class="field-label">Search News</div>
        <div class="search-wrap">
          <input class="filter-input" type="text" placeholder="Search news..." />
          <i class="fa fa-search"></i>
        </div>
      </div>

      <div class="mb-2">
        <div class="field-label">Location Search</div>
        <div class="select-box" style={{ minWidth:'0', width:'100%;' }}>
          <i class="fa fa-calendar-o"></i>
          <span class="value">May 1, 2024 - May 31, 2024</span>
          <i class="fa fa-angle-down"></i>
        </div>
      </div>
    
     
    </Card>

 </>);
};

export default SearchFilter;