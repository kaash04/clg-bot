# College Notifications Discord Bot

## Description
This Node.js application is a Discord bot that fetches the latest notifications from my college website and sends them to a Discord channel. The bot takes user queries, fetches data from the college website using Axios, and scrapes the notification section with Cheerio.

## Features
- Fetches latest notifications from the college website
- Provides links to any attachments present with the notifications
- Utilizes the Discord API for bot interactions
- Real-time server-side data fetching and web scraping

## Technologies Used
- Node.js
- Discord.js
- Axios
- Cheerio

## Direct Usage
- Add hosted bot to your server for using directly  
( https://discord.com/oauth2/authorize?client_id=1256467649660059680&permissions=84992&integration_type=0&scope=bot )

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/kaash04/clg-bot.git
    cd clg-bot
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file and add your Discord bot token, bot prefix:
    ```env
    DISCORD_TOKEN=your_discord_bot_token
    PREFIX=your_bot_prefix
    ```

4. Run the bot:
    ```sh
    node index.js
    ```

## Usage

- Invite the bot to your Discord server.
- Type your query in the Discord channel where the bot is present.
- The bot will respond with the latest notifications and links to any attachments.

## Example
```sh
User: !get 'n' (n represents the number of latest notiifications)
Bot:
    New Exam Schedule - [Link to attachment]
    Holiday Announcement - [Link to attachment]
    
User: !latest
Bot:
    Latest Notification - [Link to attachment]
```