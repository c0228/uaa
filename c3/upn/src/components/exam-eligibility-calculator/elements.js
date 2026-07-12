import React from "react";
import { useParams } from "react-router-dom";
import { TextBox, DateTimePicker, Select, Switch, Range } from "e-ui-react";

const Element = ({ params }) =>{
 const { lang } = useParams();
 const label = `${lang}Label`;
 const placeholder = `${lang}Placeholder`;
 const options = `${lang}Options`;
 const value = params?.defaultValue;
 const getGridClass = (grid = {}) => {
    return Object.entries(grid)
        .map(([size, value]) => `col-${size}-${value}`)
        .join(" ");
 };
 return (<div className={getGridClass(params?.grid)+' mtop15p'}>
 {params?.elementType==='textBox' && (<TextBox name={params?.id} label={params?.[label]} placeholder={params?.[placeholder]} value={value} />)}
 {params?.elementType==='datePicker' && (<DateTimePicker type={params?.elementType} label={params?.[label]} 
    id={params?.id} name={params?.id} value={value} maxValue={params?.maxValue} 
    minValue={params?.minValue} validation={params?.validation} />)}
 {params?.elementType==='select' && (<Select name={params?.id} label={params?.[label]} placeholder={params?.[placeholder]}
    value={value} options={params?.[options]} fontSize="12" validation={params?.validation} />)}
 {params?.elementType==='radio' && (<Switch type={params?.elementType} id={params?.id} name={params?.id}  layout={params?.layout}
    label={params?.[label]} value={value} options={params?.[options]} validation={params?.validation} />)}
 {params?.elementType==='range' && (<Range name={params?.id} label={params?.[label]} value={value} validation={params?.validation} />)}
 </div>);
};

export default Element;