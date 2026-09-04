const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("BOT_TOKEN is not set");
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "မင်္ဂလာပါ 👋\n\nBot မှ ကြိုဆိုပါတယ်။"
  );
});

console.log("Bot is running...");
