export const getTodayDate = () =>{
 const today = new Date();
 const yyyy = today.getFullYear();
 const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
 const dd = String(today.getDate()).padStart(2, '0');
 return `${yyyy}-${mm}-${dd}`;
};

export const getPastDateString = (yearsAgo) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - yearsAgo);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};
