module.exports = {
    name: 'help',
    description: "Affiche l'aide",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('795275833186189312')){
            const cannotEmbed = new Discord.MessageEmbed()
            .setDescription("Vous n'avez pas les permissions requises.")
            const helpEmbed = new Discord.MessageEmbed()
            .setColor('#1F136B')
            .setTitle('Help')
            .setAuthor('Kama')
            .setDescription("J'ai quatre commandes : help, ping, server et prefix")
            .addFields(
                {name: 'ping', value: 'Pong !'},
                {name: 'server', value: 'Invite du serveur'},
                {name: 'prefix', value: '_'},
                {name: 'help', value: 'Affiche ce menu'},

            )
            .setFooter("Dev by Kama")
            .setTimestamp();

            message.channel.send(helpEmbed);
        } else {
            message.channel.send(cannotEmbed)
        }
        
    }
}