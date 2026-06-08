/**
 * Execute multiple API requests in parallel.
 *
 * @param {Array} requests
 * @returns {Promise<Object>}
 *
 * Example:
 * parallelApiCalls([
 *   { key: 'categories', url: '/api/categories', options: { method: 'GET' } },
 *   { key: 'dca', url: '/api/dca', options: { method: 'POST', body: JSON.stringify({ page: 1 }) } }
 * ]);
 */
export const ParallelApiCalls = async (requests = []) => {
  const responses = await Promise.all(
    requests.map(async ({ key, url, options = {} }) => {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${key} API failed`);
      }

      return {
        key,
        data: await response.json()
      };
    })
  );

  return responses.reduce((result, item) => {
    if (result.status === "fulfilled") {
      obj[result.value.key] = result.value.data;
    }
    return obj;
  }, {});
};