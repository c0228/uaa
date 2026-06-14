/**
 * Converts a date string from YYYY-MM-DD format
 * into a human-readable format (e.g., "10 June 2026").
 *
 * @param {string} dateStr - Date string in YYYY-MM-DD format.
 * @returns {string} Formatted date string in "DD Month YYYY" format.
 *
 * @example
 * FormatDate("2026-06-10");
 * // Returns: "10 June 2026"
 */
export const FormatDate = (dateStr) => {
  // Extract year, month, and day from the input string
  const [year, month, day] = dateStr.split("-");

  // Create a Date object using local timezone
  const date = new Date(year, month - 1, day);

  // Format the date as "10 June 2026"
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const DaysToGo = (examDate) =>{
    const totalDays = 365; // preparation window
    const currentDate = new Date();
    const targetDate = new Date(examDate);
    const diffTime = targetDate - currentDate;
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const progress = Math.max(0, Math.min(100, (daysLeft / totalDays) * 100));
    return Math.round(progress);
};