import React from "react";

const RightRoundedHeader = ({ label, isUpperCase }) => {
  const style = {
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    borderLeft: '6px solid #555',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    boxShadow: '1px 1px 1px 1px #eee',
    backgroundColor: '#eee',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '5px',
    paddingBottom: '1px',
    letterSpacing:'1.1px',
    textTransform: isUpperCase === 'Y' ? 'uppercase' : 'none',
  };

  return (
    <div style={style}>
      <span className="blog-head"><b>{label}</b></span>
    </div>
  );
};

export default RightRoundedHeader;
