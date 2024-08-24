import TelegramBot from "node-telegram-bot-api";

if (!process.env.TELEGRAM_TOKEN)
	throw new Error("Missing TELEGRAM_TOKEN env variable!");
if (!process.env.TELEGRAM_CHAT_ID)
	throw new Error("Missing TELEGRAM_CHAT_ID env variable!");

export const telegramBot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
	polling: true
});

export function notifyTelegram(msg) {
	telegramBot.sendMessage(
			process.env.TELEGRAM_CHAT_ID,
			msg
		);
}
