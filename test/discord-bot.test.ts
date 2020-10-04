import { DiscordBot } from "../src/discord-bot";

test("test addition of numbers", async () => {
    const finalVaulue = 4;
    const bot = new DiscordBot();
    var result = bot.addNumber(2,2);
    expect(result).toBe(finalVaulue);
});
