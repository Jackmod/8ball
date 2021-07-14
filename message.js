
module.exports = (Discord, client, message) => {
    const prefix = 'M!';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find( a => a.aliases && a.aliases.includes(cmd));
    
    command.execute(message, args, cmd, client, Discord);

}
