import Discord from "discord.js";
import dotenv from "dotenv";
import { getData } from "./index.js";
dotenv.config();

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

export async function bot() {
  client.once("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
  });

  client.on("messageCreate", async (message) => {
    if (message.content.startsWith(prefix + "get ")) {
      let n = parseInt(message.content.slice((prefix + "get ").length).trim());
      await getData(message.channel, n);
    }
    if (message.content == prefix + "latest") {
      await getData(message.channel, 1);
    }
  });

  client.login(token);
}

export async function sendMessage(content, channel) {
  try {
    if (channel && channel.isTextBased()) {
      await channel.send(content);
    } else {
      console.error("Channel not found or not text-based");
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }
}
