import React, { useState, useEffect } from 'react';
import { Card } from 'e-ui-react';

const GraphRepresentation = () => {
  const [choosenOrder, setChoosenOrder] = useState();
  const [updatedOrder, setUpdatedOrder] = useState();
  const data = [
    { value: 45, bgColor: 'pink' },
    { value: 10, bgColor: '#97f097' },
    { value: 32, bgColor: 'yellow' },
    { value: 20, bgColor: 'orange' },
    { value: 18, bgColor: '#b5b5ff' },
    { value: 24, bgColor: '#f3b5fe' },
  ];
  useEffect(()=>{
    const val = data?.map((d)=>d.value);
    if(choosenOrder==='ASCENDING_ORDER') {
      for(let i=0;i<val.length;i++){
        for(let j=0;j<val.length;j++){
          
        }
      }
    } else if(choosenOrder==='DESCENDING_ORDER'){

    }
  },[choosenOrder]);
  const Element = ({ value, bgColor }) => {
    return (
      <span
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid #000',
          padding: '15px',
          borderRadius: '50%',
          margin: '10px',
          backgroundColor: bgColor,
        }}
      >
        {value}
      </span>
    );
  };

  return (
    <Card padding={15}>
      <div style={{ width: '100%', height: '80px' }}>
        <select className="form-control" onChange={(event) => setChoosenOrder(event.target.value)}>
          <option value="">Choose Sorting Order</option>
          <option value="ASCENDING_ORDER">Ascending Order</option>
          <option value="DESCENDING_ORDER">Descending Order</option>
        </select>
        <button><b>Reset</b></button>
      </div>
      <div style={{ marginBottom:'15px' }}>
        {data?.map((d, i) => {
          return <Element value={d?.value} bgColor={d?.bgColor} />;
        })}
      </div>
    </Card>
  );
};

export default GraphRepresentation;
