import { CacheSyncprocess } from "@Services/CacheManager.js";
/**
 * ApiManager.js
 * -------------
 * Common utility for making API calls across the application.
 *
 * Features:
 * - Centralized API request handling
 * - Success callback support
 * - Error callback support
 * - Reusable across all pages/components
 *
 * Usage:
 *
 * callAPI(
 *   API_URL,
 *   (response) => {
 *      console.log(response);
 *   },
 *   (error) => {
 *      console.error(error);
 *   }
 * );
 */

/**
 * Performs a GET API request and returns the response
 * through callback functions.
 *
 * @param {string} url - API endpoint URL.
 * @param {Function} onSuccess - Callback executed when API call succeeds.
 * @param {Function} onError - Callback executed when API call fails.
 */
export const callAPI = (url, onSuccess, onError) => {

    fetch(url)
        .then((response) => {

            // Check whether the HTTP response is successful
            if (!response.ok) {
                throw new Error(
                    `API Request Failed: ${response.status} ${response.statusText}`
                );
            }

            // Convert response to JSON
            return response.json();

        })
        .then((apiResponse) => {
             // Synchronize Cache API with Cache Version
            const apiCacheVersion = apiResponse?.cacheVersion;
            CacheSyncprocess(apiCacheVersion, (cacheData, error) => {
                if(error) {
                    console.error(error);
                    return;
                }
                // Execute success callback with API response
                if (typeof onSuccess === "function") {
                    onSuccess(cacheData, apiResponse);
                }
            });
        })
        .catch((error) => {

            console.error("API Error:", error);

            // Execute error callback
            if (typeof onError === "function") {
                onError(error);
            }

        });

};