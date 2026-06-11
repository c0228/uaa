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
export const callAPI = (details, onSuccess, onError) => {
    const options = {
        method: (details?.method || 'GET').toUpperCase(),
        headers: details?.headers || {},
    };
    // Attach body only for methods that support it
    if (details?.body && !['GET', 'HEAD'].includes(details?.method)) {
        options.body = JSON.stringify(details.body);
    }
    fetch(details?.url, options).then((response) => {
            // Check whether the HTTP response is successful
             if (!response.ok) {
                const error = new Error(
                    `API Request Failed: ${response.status} ${response.statusText}`
                );

                error.status = response.status;

                throw error;
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

            let errorObj = {
                type: 'UNKNOWN_ERROR',
                message: error.message
            };

            // Network/CORS/Server unreachable
            if (error instanceof TypeError) {

                errorObj = {
                    type: 'NETWORK_OR_CORS_ERROR',
                    title: 'Connection Failed',
                    message: 'Unable to connect to the API server.',
                    possibleReasons: [
                        'API server is not running',
                        'CORS is not configured correctly',
                        'Invalid API URL',
                        'Network connectivity issue'
                    ]
                };

            }
             // HTTP errors  (404, 500, 401, etc.)
            if (error.status) {
                errorObj = {
                    type: 'HTTP_ERROR',
                    status: error.status,
                    message: error.message
                };
            }
            console.error('API Error:', errorObj);
            if (typeof onError === 'function') {
                onError(errorObj);
            }

        });
};