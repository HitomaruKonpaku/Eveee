const { Command } = require('discord.js-commando')

module.exports = class AvaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ava',
            group: 'util',
            memberName: 'ava',
            description: 'Gets avatar of mentioned user.',
            examples: [],
            argsType: 'single',
            args: [{
                key: 'user',
                prompt: '',
                type: 'user',
            }],
            wait: 10,
        })
    }

    async run(msg, args) {
        msg.channel.send(args.user.avatarURL)
    }
}