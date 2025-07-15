import React from "react";

const SimpleTable = ({ header, columns }) =>{
 return (<div className="table-responsive" style={{ overflowX: 'auto' }}>
    <table className="table" style={{ minWidth: '600px', marginBottom:'0px' }}>
        <thead>
            <tr className="blog-head" style={{ backgroundColor:'#eee' }}>
                {header?.map((h,i)=>{
                    return (<th key={i}><b>{h}</b></th>);
                })}
            </tr>
        </thead>
        <tbody>
            {columns?.map((c,i1)=>{
                return (<tr key={i1}>
                    {c?.map((s,i2)=>{
                        return (<td key={i2}>{s}</td>)
                    })}
                </tr>);
            })}
        </tbody>
    </table>
 </div>);
};

export default SimpleTable;