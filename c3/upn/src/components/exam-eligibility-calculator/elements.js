import React from "react";
import { useParams } from "react-router-dom";
import { TextBox, DateTimePicker, Select, Switch, Range } from "e-ui-react";

const Element = ({ params }) =>{
 const { lang } = useParams();
 const label = `${lang}Label`;
 const placeholder = `${lang}Placeholder`;
 return (<>
 {params?.elementType==='textBox' && (<TextBox name={params?.id} label={label} placeholder={placeholder} />)}
 {params?.elementType==='datePicker' && (<DateTimePicker type={params?.elementType} label={label} 
    id={params?.id} name={params?.id} value={params?.value} maxValue={params?.maxValue} 
    minValue={params?.minValue} validation={params?.validation} />)}
 {params?.elementType==='select' && (<Select name={params?.id} label={label} placeholder={placeholder}
    value={params?.value} options={params?.options} fontSize="12" validation={params?.validation} />)}
 {params?.elementType==='radio' && (<Switch type={params?.elementType} id={params?.id} name={params?.id}  layout={params?.layout}
    label={label} value={params?.value} options={params?.options} validation={params?.validation} />)}
 {params?.elementType==='range' && (<Range name={params?.id} label={label} value={params?.value} validation={params?.validation} />)}
 </>);
};

export default Element;