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

/**
 * Calculates the percentage of the preparation period remaining
 * based on the given exam date.
 *
 * Assumes a fixed preparation window of 365 days.
 * - 100% = 365 or more days remaining
 * - 0% = Exam date has passed
 *
 * @param {string|Date} examDate - Exam date as a Date object or a date string
 * that can be parsed by the JavaScript Date constructor.
 *
 * @returns {number} Remaining preparation percentage (0-100), rounded
 * to the nearest whole number.
 *
 * @example
 * DaysToGo("2027-08-01");
 * // Returns: 100 (approximately, if 365+ days remain)
 *
 * @example
 * DaysToGo("2026-12-01");
 * // Returns: 45 (example value depending on today's date)
 *
 * @example
 * DaysToGo("2025-01-01");
 * // Returns: 0 (exam date already passed)
 */
export const DaysToGo = (examDate) => {
  // Total preparation period in days
  const totalDays = 365;

  // Get today's date and the target exam date
  const currentDate = new Date();
  const targetDate = new Date(examDate);

  // Calculate the difference in milliseconds
  const diffTime = targetDate - currentDate;

  // Convert milliseconds into remaining days
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Convert remaining days into a percentage
  // Clamp the result between 0 and 100
  const progress = Math.max(
    0,
    Math.min(100, (daysLeft / totalDays) * 100)
  );

  // Return the rounded percentage
  return Math.round(progress);
};

/**
 * Calculates the time difference between the current date/time
 * and a given date string in "DD-MM-YYYY HH:mm:ss" format.
 *
 * If the date is in the past, it returns a human-readable string
 * ending with "ago". If the date is in the future, it returns
 * the remaining time ending with "remaining".
 *
 * Supported output units:
 * - Just now / Seconds
 * - Minutes
 * - Hours
 * - Days
 * - Months (approx. 30 days)
 * - Years (approx. 365 days)
 *
 * @param {string} dateString - Date and time in "DD-MM-YYYY HH:mm:ss" format.
 *
 * @returns {string} Human-readable time difference.
 *
 * @example
 * getTimeDifference("01-08-2026 10:30:00");
 * // Returns: "2 days ago"
 *
 * @example
 * getTimeDifference("05-08-2026 15:00:00");
 * // Returns: "3 days remaining"
 *
 * @example
 * getTimeDifference("03-08-2026 11:59:50");
 * // Returns: "Just now"
 */
export function getTimeDifference(dateString) {
  // Split the input into date and time parts
  const [datePart, timePart] = dateString?.split(" ");

  // Extract day, month, and year
  const [day, month, year] = datePart.split("-").map(Number);

  // Extract hour, minute, and second
  const [hour, minute, second] = timePart.split(":").map(Number);

  // Create a Date object using the extracted values
  const inputDate = new Date(year, month - 1, day, hour, minute, second);

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  let diff = now - inputDate;

  // Determine whether the input date is in the past
  const isPast = diff >= 0;

  // Use the absolute difference for calculations
  diff = Math.abs(diff);

  // Convert the difference into various time units
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // Select the appropriate suffix
  const suffix = isPast ? "ago" : "remaining";

  // Less than one minute
  if (seconds < 60) {
    return isPast
      ? "Just now"
      : `${seconds} sec${seconds !== 1 ? "s" : ""} remaining`;
  }

  // Less than one hour
  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? "s" : ""} ${suffix}`;
  }

  // Less than one day
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ${suffix}`;
  }

  // Less than one month
  if (days < 30) {
    return `${days} day${days !== 1 ? "s" : ""} ${suffix}`;
  }

  // Less than one year
  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""} ${suffix}`;
  }

  // One year or more
  return `${years} year${years !== 1 ? "s" : ""} ${suffix}`;
}

/**
 * Returns the date that is a specified number of years
 * before today's date in "YYYY-MM-DD" format.
 *
 * This is useful for setting minimum/maximum dates in
 * date input fields, age calculations, and eligibility checks.
 *
 * @param {number} years - Number of years to subtract from today's date.
 *
 * @returns {string} Date in "YYYY-MM-DD" format.
 *
 * @example
 * GetYearsBackDate(18);
 * // Returns: "2008-08-02" (if today is 2026-08-02)
 *
 * @example
 * GetYearsBackDate(5);
 * // Returns: "2021-08-02" (if today is 2026-08-02)
 */
export const GetYearsBackDate = (years) => {
  // Get today's date
  const date = new Date();

  // Subtract the specified number of years
  date.setFullYear(date.getFullYear() - years);

  // Return the date in YYYY-MM-DD format
  return date.toISOString().split("T")[0];
};

/**
 * Calculates the calendar difference between two dates in terms of
 * years, months, and days.
 *
 * If the start date is later than the end date, the dates are
 * automatically swapped to ensure a positive difference.
 *
 * @param {string|Date} fromDate - The starting date as a Date object
 * or a date string that can be parsed by the JavaScript Date constructor.
 * @param {string|Date} [toDate=new Date()] - The ending date. Defaults
 * to the current date if not provided.
 *
 * @returns {{years: number, months: number, days: number}}
 * An object containing the difference in years, months, and days.
 *
 * @example
 * GetDateDifference("2000-05-15");
 * // Returns:
 * // {
 * //   years: 26,
 * //   months: 2,
 * //   days: 18
 * // }
 *
 * @example
 * GetDateDifference("2024-01-10", "2026-03-25");
 * // Returns:
 * // {
 * //   years: 2,
 * //   months: 2,
 * //   days: 15
 * // }
 */
export const GetDateDifference = (fromDate, toDate = new Date()) => {
  // Convert the input values into Date objects
  let start = new Date(fromDate);
  let end = new Date(toDate);

  // Ensure the start date is not later than the end date
  if (start > end) {
    [start, end] = [end, start];
  }

  // Calculate the initial difference
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  // Adjust the day difference if it is negative
  if (days < 0) {
    months--;

    // Get the number of days in the previous month
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);

    // Add the days from the previous month
    days += previousMonth.getDate();
  }

  // Adjust the month difference if it is negative
  if (months < 0) {
    years--;
    months += 12;
  }

  // Return the calculated difference
  return {
    years,
    months,
    days,
  };
};