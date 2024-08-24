import { telegramBot } from "./api/telegram-bot.js";
import {notifyStakingStats} from "./bot/notifyStakingStats.js"

process.on("unhandledRejection", (reason) => {
	const errorMessage =
		reason instanceof Error ? reason.stack || reason.message : reason;
	console.error(`Unhandled Rejection at Promise. Error: ${errorMessage}`);
	process.exit(1);
});

/**
 * Starts the Telegram bot and schedules the notifyStakingStats function to run once a minute.
 */
(async function startTelegramBot() {
  console.log("Telegram Bot Started...");

  // Function to execute notifyStakingStats with error handling
  async function executeNotifyStakingStats() {
    try {
      await notifyStakingStats();
    } catch (error) {
      console.error("Error executing notifyStakingStats:", error);
    }
  }

  setInterval(executeNotifyStakingStats, 60000);
})();
