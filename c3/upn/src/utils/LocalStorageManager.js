import { CacheSyncprocess } from "@Services/CacheManager.js";

/**
 * Local Storage Utility Functions
 * -------------------------------
 * Provides Create, Read, Update, Delete (CRUD) operations
 * using browser localStorage.
 */

/**
 * Creates or updates a value.
 *
 * @param {string} name - Storage key.
 * @param {string} value - Value to store.
 */
export const setStorage = (name, value) => {
  localStorage.setItem(name, value);
};

/**
 * Retrieves a value by key.
 *
 * @param {string} name - Storage key.
 * @returns {string|null}
 */
export const getStorage = (name) => {
  return localStorage.getItem(name);
};

/**
 * Deletes a specific key.
 *
 * @param {string} name - Storage key.
 */
export const deleteStorage = (name) => {
  localStorage.removeItem(name);
};

/**
 * Retrieves all stored data.
 *
 * @returns {Object}
 */
export const getAllStorage = () => {
  const data = {};

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    data[key] = localStorage.getItem(key);
  }

  return data;
};

/**
 * Clears all local storage.
 */
export const clearAllStorage = () => {
  localStorage.clear();
};

/**
 * Stores a JavaScript object.
 *
 * @param {string} name - Storage key.
 * @param {Object} data - Data to store.
 */
export const setStorageJSON = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

/**
 * Retrieves and parses JSON data.
 *
 * @param {string} name - Storage key.
 * @returns {Object|null}
 */
export const getStorageJSON = (name) => {
  const value = localStorage.getItem(name);

  try {
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Failed to parse storage "${name}"`, error);
    return null;
  }
};