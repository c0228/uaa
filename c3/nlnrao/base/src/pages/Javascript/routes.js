import React from "react";
import { useParams } from 'react-router-dom';
import JSONArrayCrud from "./content/01-json-array-crud/index.js";
import SortJSONArrayAD from "./content/02-sort-json-array-ad/index.js";

const JSRoutes = () =>{
 const { input1, input2 } = useParams();

 const WorkingWithJsons = ()=>{
  return (<div>
   {input2==='dynamically-create-retrieve-update-and-delete-crud-operations-on-json-object-and-json-array' && (<JSONArrayCrud />)}
   {input2==='sorting-an-element-in-json-array-in-ascending-and-descending-order' && (<SortJSONArrayAD />)}
  </div>);
 }
 
 return (<div>
    {input1==='working-with-jsons' && (<WorkingWithJsons />)}
</div>);
};

export default JSRoutes;