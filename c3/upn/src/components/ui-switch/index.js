import React from "react";

const Switch = ({ name, options, value, label, type, layout, onChange }) =>{
  const renderSwitches = () => {
    return (<div style={{
     color:(FormErrorMessage?.length > 0 && selectedSwitchValue?.length > 0)?'red':'', fontWeight: 'bold' }}>
    {switchValue?.map((v, i) => (
     <div key={i} className="form-check form-switch" style={{ float: layout === 'horizontal' ? 'left' : 'none' }}>
      <input className="form-check-input" type={type} name={name} value={v?.value} id={name + '-' + v?.id}
       checked={v?.checked} disabled={v?.disabled} onChange={(event) => handleClick(event, v?.id)}
       style={{ cursor: 'pointer' }} />
      <label className="form-check-label" style={{ display: 'flex', paddingRight: '15px', cursor: 'pointer' }}
       htmlFor={name + '-' + v?.id}>{v?.label}</label>
     </div>
    ))}
   </div>
  );
 };
 return (<>
    {label && (<label className={validateOnSubmit ?(isErrorMessageExist > 0? 'form-label form-label-validation-invalid'
        : 'form-label form-label-validation-valid'):'form-label'} style={{ lineHeight:'22px' }}>
     <b>{label} :</b>
    </label>)}
   {renderSwitches()}
 </>);
};

export default Switch;