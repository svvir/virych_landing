'use client'
import React from 'react';
import fetch from 'node-fetch'; // Імпорт пакету node-fetch

const Contact = () => {
  const handleTelegramClick = () => {
    const telegramBotToken = '6439603556:AAH68MwpJ_bxvydO73vFy74Z0E2InjTEQ8c';
    const chatId = '422934038';
    const message = 'Хтось хоче зв\'язатися з вами через сайт!';

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Повідомлення успішно відправлено:', data);
      })
      .catch(error => {
        console.error('Виникла помилка під час відправки повідомлення:', error);
      });
  };

  return (
    <a
      href="https://t.me/LandingPageNextJsContactBot"
      target="_blank"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleTelegramClick}
    >
      {"Зв'язатись зі мною через Telegram"}
    </a>
  );
}

export default Contact;
