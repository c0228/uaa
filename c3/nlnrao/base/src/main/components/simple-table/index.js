import React from "react";

const SimpleTable = ({ header, columns }) =>{
 return (<div className="table-responsive">
    <table className="table">
        <thead>
            <tr style={{ backgroundColor:'#eee' }}>
                {header?.map((h,i)=>{
                    return (<td key={i}><b>{h}</b></td>);
                })}
            </tr>
        </thead>
        <tbody>
            {columns?.map((c,i1)=>{
                return (<tr key={i1}>
                    {c?.map((s,i2)=>{
                        return (<td>{s}</td>)
                    })}
                </tr>);
            })}
        </tbody>
    </table>
 </div>);
};

export default SimpleTable;