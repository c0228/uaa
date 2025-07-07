
export const formatCurrencyNumber = (number) =>{
 const num = parseFloat(number);
 if(isNaN(num)) { return "Invalid Number"; }
 return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatAbbreviatedNumber = (number) =>{
 if (number === null || number === undefined || isNaN(number)) return '$0';
 const absNum = Math.abs(Number(number));
 if (absNum >= 1.0e+9) {
    return `${(absNum / 1.0e+9).toFixed(1)} B`;
 } else if (absNum >= 1.0e+6) {
    return `${(absNum / 1.0e+6).toFixed(1)} M`;
 } else if (absNum >= 1.0e+3) {
    return `${(absNum / 1.0e+3).toFixed(1)} K`;
 } else {
    return `${absNum.toFixed(2)}`;
 }
};

export const formatSignedNumber = (number) => {
  if (isNaN(number)) return { text: "Invalid Value", color: "black" };

  const absValue = Math.abs(number).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const sign = number > 0 ? '+' : number < 0 ? '-' : '';
  const color = number > 0 ? 'green' : number < 0 ? 'red' : 'black';

  return { text: `${sign}${absValue}`, color };
};