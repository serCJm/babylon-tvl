import got from "got";

/**
 * Fetches staking statistics from the Babylon Labs API.
 *
 * @async
 * @function fetchStakingStats
 * @returns {Promise<Object>} The JSON response from the API.
 * @throws {Error} Throws an error if the request fails or the response is not in JSON format.
 */
export async function fetchStakingStats() {
	const url = "https://staking-api.babylonlabs.io/v1/stats";

	try {
		const response = await got(url, { responseType: "json" }).json();
		return response.data;
	} catch (error) {
		if (error.response) {
			throw new Error(
				`Request failed with status code ${error.response.statusCode}: ${error.response.body}`
			);
		} else {
			throw new Error(`An error occurred: ${error.message}`);
		}
	}
}
