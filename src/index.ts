import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";
import commands, { CommandsEnum } from "./data/commands";

dotenv.config({ path: ".env.local" });

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}.`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  commands.forEach((command) => {
    switch (command.index) {
      case CommandsEnum.Sum:
        const num1 = interaction.options.get("first-number")?.value as number;
        const num2 = interaction.options.get("second-number")?.value as number;

        interaction.reply(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
        break;
    }
  });
});

client.login(process.env.DISCORD_TOKEN);
