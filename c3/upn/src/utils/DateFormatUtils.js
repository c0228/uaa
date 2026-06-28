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

export function getTimeDifference(dateString) { // Parse "DD-MM-YYYY HH:mm:ss"
  const [datePart, timePart] = dateString?.split(" ");
  const [day, month, year] = datePart.split("-").map(Number);
  const [hour, minute, second] = timePart.split(":").map(Number);
  const inputDate = new Date(year, month - 1, day, hour, minute, second);
  const now = new Date();
  let diff = now - inputDate;
  const isPast = diff >= 0;

  diff = Math.abs(diff);

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const suffix = isPast ? "ago" : "remaining";

  if(seconds < 60) {
    return isPast ? "Just now" : `${seconds} sec${seconds !== 1 ? "s" : ""} remaining`;
  }

  if(minutes < 60) {
    return `${minutes} min${minutes !== 1 ? "s" : ""} ${suffix}`;
  }

  if(hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ${suffix}`;
  }

  if(days < 30) {
    return `${days} day${days !== 1 ? "s" : ""} ${suffix}`;
  }

  if(months < 12) {
    return `${months} month${months !== 1 ? "s" : ""} ${suffix}`;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${suffix}`;
}