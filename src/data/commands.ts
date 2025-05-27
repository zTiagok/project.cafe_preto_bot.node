import { ApplicationCommandOptionType } from "discord.js";

enum CommandsEnum {
  Sum = 0,
}

type OptionsType = {
  name: string;
  description: string;
  type: ApplicationCommandOptionType;
  required: boolean;
};

type CommandType = {
  index: CommandsEnum;
  name: string;
  description: string;
  options?: OptionsType[];
};

const commands: CommandType[] = [
  {
    index: CommandsEnum.Sum,
    name: "sum",
    description: "Replies with the sum of two numbers",
    options: [
      {
        name: "first-number",
        description: "The first number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: "second-number",
        description: "The second number",
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  },
];

export { CommandsEnum };
export default commands;
