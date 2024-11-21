# Telegram-Bot
 
Weather Telegram Bot
A simple Telegram bot that provides weather updates using the OpenWeatherMap API.

Features
Retrieves weather information for any city entered by the user.
Built using Node.js, Express, and the Telegram Bot API.
Interactive and user-friendly

Setup and Installation
Clone the Repository:
git clone <your-repository-url>
cd <your-repository-folder>

Install Dependencies: Run the following command to install the required npm packages:
npm install
Add API Keys:

Create a .env file in the project directory.
Add the following environment variables:
env

TELEGRAM_TOKEN=<Your Telegram Bot Token>

WEATHER_API_KEY=<Your OpenWeatherMap API Key>

Run the Server: Start the server using:
node index.js

Set Telegram Webhook:
Get the public URL of your server (e.g., Replit).

Set the webhook:
https://api.telegram.org/bot<Your Telegram Token>/setWebhook?url=<Your Public URL>

Technologies Used

Node.js: Backend runtime environment.
Express: Web framework for Node.js.
Telegram Bot API: For bot communication.
Axios: HTTP client for API requests.
OpenWeatherMap API: Fetches weather data.

How to Use
Open Telegram and search for your bot by username.
Start the bot and enter any city name to get the current weather.

Project Structure
├── index.js         # Main server file
├── package.json     # Dependencies and scripts
├── .env             # Environment variables (ignored in GitHub)
To Do
Add API key management for better security.
Implement user management (e.g., blocking users).
Enhance bot responses for better user interaction.
Contributing
Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Telegram Bot API
OpenWeatherMap
