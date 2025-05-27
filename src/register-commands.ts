import { REST, Routes } from "discord.js";
import * as dotenv from "dotenv";
import commands from "./data/commands";
dotenv.config({ path: ".env.local" });

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN as string
);

(async () => {
  try {
    console.log("Registering commands.");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID as string,
        process.env.SERVER_ID as string
      ),
      { body: commands }
    );

    console.log("Commands registered.");
  } catch (e) {
    console.log(`Error: ${e}`);
  }
})();
