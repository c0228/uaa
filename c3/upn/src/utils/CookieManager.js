/**
 * Cookie Utility Functions
 * ------------------------
 * Provides Create, Read, Update, Delete (CRUD) operations
 * for browser cookies.
 */

/**
 * Creates or updates a cookie.
 *
 * @param {string} name - Cookie name.
 * @param {string} value - Cookie value.
 * @param {number} days - Expiration period in days (default: 30).
 */
export const setCookie = (name, value, days = 30) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
};

/**
 * Retrieves a cookie value by its name.
 *
 * @param {string} name - Cookie name.
 * @returns {string|null} Cookie value if found, otherwise null.
 */
export const getCookie = (name) => {
  const cookieName = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.indexOf(cookieName) === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length));
    }
  }

  return null;
};

/**
 * Deletes a specific cookie.
 *
 * @param {string} name - Cookie name.
 */
export const deleteCookie = (name) => {
  document.cookie = `${encodeURIComponent(
    name
  )}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

/**
 * Retrieves all cookies as a key-value object.
 *
 * @returns {Object} Object containing all cookies.
 */
export const getAllCookies = () => {
  return document.cookie
    .split(";")
    .filter(Boolean)
    .reduce((cookies, cookie) => {
      const [name, ...value] = cookie.trim().split("=");

      cookies[decodeURIComponent(name)] = decodeURIComponent(
        value.join("=")
      );

      return cookies;
    }, {});
};

/**
 * Deletes all cookies available to the current path/domain.
 */
export const clearAllCookies = () => {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();

    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  });
};

/**
 * Stores a JavaScript object as a JSON cookie.
 *
 * @param {string} name - Cookie name.
 * @param {Object} data - Data to store.
 * @param {number} days - Expiration period in days.
 */
export const setCookieJSON = (name, data, days = 30) => {
  setCookie(name, JSON.stringify(data), days);
};

/**
 * Retrieves and parses a JSON cookie.
 *
 * @param {string} name - Cookie name.
 * @returns {Object|null} Parsed object or null if not found.
 */
export const getCookieJSON = (name) => {
  const value = getCookie(name);

  try {
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Failed to parse cookie "${name}"`, error);
    return null;
  }
};