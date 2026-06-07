/**
 * Converts a date string from YYYY-MM-DD format
 * into a human-readable format (e.g., "10 June 2026").
 *
 * @param {string} dateStr - Date string in YYYY-MM-DD format.
 * @returns {string} Formatted date string in "DD Month YYYY" format.
 *
 * @example
 * formatDate("2026-06-10");
 * // Returns: "10 June 2026"
 */
export const formatDate = (dateStr) => {
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