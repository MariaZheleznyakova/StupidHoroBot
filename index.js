// Подключаем библиотеку для создания бота
require('dotenv').config();
const TelegramApi = require('node-telegram-bot-api');
const translate = require('translate-google');
// Создаём переменную для токина
// Создаём объект бота
const { token } = process.env;
const bot = new TelegramApi(token, { polling: true });
const aztroJs = require('aztro-js');
require('dotenv').config();

// const property = 'color';
// const day = 'today';

bot.setMyCommands(
  [
    { command: '/start', description: 'Начало' },
    { command: '/info', description: 'Информация о проекте' },
    // { command: '/lol', description: 'lol btn' },
    { command: '/aries', description: 'Гороскоп для Овна' },
    { command: '/taurus', description: 'Гороскоп для Тельца' },
    { command: '/gemini', description: 'Гороскоп для Близнецов' },
    { command: '/cancer', description: 'Гороскоп для Рака' },
    { command: '/leo', description: 'Гороскоп для Льва' },
    { command: '/virgo', description: 'Гороскоп для Девы' },
    { command: '/libra', description: 'Гороскоп для Весов' },
    { command: '/scorpious', description: 'Гороскоп для Скорпиона' },
    { command: '/sagittarius', description: 'Гороскоп для Стрельца' },
    { command: '/capricornus', description: 'Гороскоп для Козерога' },
    { command: '/aquarius', description: 'Гороскоп для Водолея' },
    { command: '/pisces', description: 'Гороскоп для Рыб' },

  ],
);

bot.on('message', async (msg) => {
  const { text } = msg;
  const chatId = msg.chat.id;

  if (text === '/start') {
    await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/f9d/8a4/f9d8a439-4d26-42e3-830d-6b6ba804c505/20.webp');
    await bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Как хорошо, что ты здесь❤️
Это чат-бот с твоим персональным гороскопом на сегодня💫`);
    await bot.sendMessage(chatId, `Если хочешь узнать о программе подробнее - нажми ${'/info'}`);
    await bot.sendMessage(chatId, `Или сразу переходи к гороскопу, выбрав свой знак зодиака:

${'/aries'}♈️, ${'/taurus'}♉️, ${'/gemini'}♊️, ${'/cancer'}♋️, ${'/leo'}♌️, ${'/virgo'}♍️, ${'/libra'}♎️, ${'/scorpious'}♏️, ${'/sagittarius'}♐️, ${'/capricornus'}♑️, ${'/aquarius'}♒️, ${'/pisces'}♓️`);
  }

  // if (text === '/lol') {
  //   await bot.KeyboardButton(chatId, 'весело');
  // }
  if (text === '/info') {
    await bot.sendMessage(chatId, `В совей работе я использую сразу несколько API:

1. Aztro - помогает мне получать самый точный гороскоп ${'https://aztro.readthedocs.io/en/latest/'}
2. Translate-google переводит данные с языка оригинала ${'https://www.npmjs.com/package/translate-google'}

Поэтому, при трактовке, иногда стоит проявить фантазию😉`);
  }
  if (text === '/aries') {
    const sign = 'aries';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/1.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/taurus') {
    const sign = 'taurus';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/2.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/gemini') {
    const sign = 'gemini';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/3.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/cancer') {
    const sign = 'cancer';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/4.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/leo') {
    const sign = 'leo';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/5.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/virgo') {
    const sign = 'virgo';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/6.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/libra') {
    const sign = 'libra';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/7.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/scorpious') {
    const sign = 'scorpio';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/8.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/sagittarius') {
    const sign = 'sagittarius';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/9.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/capricornus') {
    const sign = 'capricorn';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/10.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/aquarius') {
    const sign = 'aquarius';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/11.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
  if (text === '/pisces') {
    const sign = 'pisces';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/12.webp');
      translate(result, { to: 'ru' }).then(async (response) => {
        const trResult = response;
        await bot.sendMessage(chatId, `⭐${trResult}`);
      });
      translate(rere, { to: 'ru' }).then(async (response) => {
        const trRere = response;
        await bot.sendMessage(chatId, `🌈Цвет дня:${trRere}`);
      });
      translate(timere, { to: 'ru' }).then(async (response) => {
        const trTimere = response;
        await bot.sendMessage(chatId, `🍀Час удачи:${trTimere}`);
      });
    });
  }
});
