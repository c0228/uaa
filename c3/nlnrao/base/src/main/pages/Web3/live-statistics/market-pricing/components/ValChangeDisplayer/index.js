import React from "react";

const formatValue = (number) => {
  if (isNaN(number)) return { text: "Invalid Value", color: "black" };

  const absValue = Math.abs(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const sign = number > 0 ? '+' : number < 0 ? '-' : '';
  const color = number > 0 ? 'green' : number < 0 ? 'red' : 'black';

  return { text: `${sign}${absValue}`, color };
};

const ValChangeDisplayer = ({ val, valPercent }) => {
  const formattedVal = formatValue(parseFloat(val));
  const formattedValPercent = formatValue(parseFloat(valPercent));

  return (
    <b>
      <span style={{ color: formattedVal.color }}>$. {formattedVal.text}</span>
      <span style={{ color: formattedValPercent.color, paddingLeft:'5px' }}>({formattedValPercent.text}%)</span>
    </b>
  );
};

export default ValChangeDisplayer;
