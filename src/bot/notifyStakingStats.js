import { telegramBot, notifyTelegram } from "../api/telegram-bot.js";
import { fetchStakingStats } from "./fetchStakingStats.js";

export async function notifyStakingStats() {
	try {
		const { active_tvl } = await fetchStakingStats();
		console.log('CURRENT TVL: ', active_tvl);
		const formattedTVL = active_tvl / 100000000;
		if (formattedTVL < 1000) {
			notifyTelegram(`Babylon Space Available. Current TVL: ${formattedTVL}`)
		}
	} catch (error) {
		console.log(error);

		return notifyTelegram(`An error occurred. Please try again later`)
	}
}
