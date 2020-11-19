require("dotenv").config();
const { Client, MessageEmbed } = require("discord.js");

const client = new Client();

client.on("ready", () => {
	console.log("Bot logado com sucesso e pronto para uso! (:");
	client.user.setPresence({
		activity: {
			name: "1, 2, 3. Testando. 1, 2, 3.",
			type: "WATCHING",
			url: "https://hypehost.com.br",
		},
	});
});

client.on("message", async(message) => {
    if (message.content.substr(0, 1) != process.env.bot_prefix) return;
    
    let command = message.content.substr(1, message.content.length).toLowerCase();

    if(command == "ping") {
        const msgCreatedTimestamp = Date.now();
        let msg = await message.channel.send("Measuring the Latency...")

        const embed = new MessageEmbed();
        embed.setTitle("🏓 Pong!")
        embed.setDescription(`The latency is **${msg.createdTimestamp - msgCreatedTimestamp}**ms`)
        embed.setColor("#2776fb")
        embed.setFooter("Hypehost Test Bot.", "https://i.imgur.com/IMk9drt.gif")
        embed.setTimestamp();
        msg.edit({embed})
    }
});

client.login(process.env.token);
