import Discord, { DiscordAPIError, Message, Role } from "discord.js";
const client = new Discord.Client();

client.on('message', async (msg: Message) => {
    if(includesContent(msg.content, ['!ping'])){
        msg.reply('pong');
    }
});

function includesContent(message: string, matches: string[]): boolean {
  let isMessage = false;
  matches.forEach((item: string) => {
    if (message.toLocaleLowerCase().includes(item.toLowerCase())) {
      isMessage = true;
      console.log(item);
    }
  });
  return isMessage;
}

client.login(process.env.DISCORD_TOKEN!);