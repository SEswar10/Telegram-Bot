const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const express = require('express');

const app = express();

// Telegram Bot Token (replace with your actual token)
const token = "7674518959:AAEVBN5S-W0Ljtp9iV_WEdIYRKChhnnHQrE";

// Initialize the Telegram bot
const bot = new TelegramBot(token);

// Set up the webhook endpoint
app.use(express.json());
app.post(`/telegram-webhook`, (req, res) => {
  bot.processUpdate(req.body); // Pass updates to the bot
  res.sendStatus(200);
});

// Set the webhook URL
const WEBHOOK_URL = `https://telegram-bot-9tnm.onrender.com/telegram-webhook`;

bot.setWebHook(WEBHOOK_URL);

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('Hello World! The bot is running!');
});

// Listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Bot logic for handling messages
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userInput = msg.text;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=20939651d295b24006f3d23ec4471739`
    );
    const data = response.data;
    const weather = data.weather[0].description;
    const temperature = data.main.temp - 273.15;
    const city = data.name;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const windSpeed = data.wind.speed;
    const message = `The weather in ${city} is ${weather} with a temperature of ${temperature.toFixed(2)}°C. The humidity is ${humidity}%, the pressure is ${pressure}hPa, and the wind speed is ${windSpeed}m/s.`;

    bot.sendMessage(chatId, message);
  } catch (error) {
    bot.sendMessage(chatId, "City doesn't exist.");
  }
});
