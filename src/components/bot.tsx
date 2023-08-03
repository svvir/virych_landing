

const TelegramBot = require('node-telegram-bot-api');

// Ваш токен бота
const botToken = '6439603556:AAH68MwpJ_bxvydO73vFy74Z0E2InjTEQ8c';

// Створення бота
const bot = new TelegramBot(botToken, { polling: true });

// Обробка команди /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вітаю! Це бот. Напишіть щось, і я відповім.');
});

/// Отримайте ID вашого чату, куди ви хочете отримувати повідомлення
const yourChatId = '422934038';

// Збереження ID чату
let userChatId = null;

// Обробка всіх повідомлень
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Пересилання текстового повідомлення вам на ваш акаунт
  if (chatId !== yourChatId && text) {
    bot.sendMessage(yourChatId, `Користувач написав: ${text}`);
  }
});

  
