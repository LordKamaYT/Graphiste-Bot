module.exports = {
    name: 'ping',
    description: "Commande pour connaître le ping du bot.",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('795275833186189312')){
            message.channel.send("Pong !")


        } else {
            message.channel.send("Vous n'avez pas les permissions requises.")
        }
        
    }
}