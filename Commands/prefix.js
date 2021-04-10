module.exports = {
    name: 'prefix',
    description: "Affiche le préfixe du bot",
    execute(message, args, Discord){
        if(message.member.roles.cache.has('795275833186189312')){
            message.channel.send("Mon préfixe est `_`.")


        } else {
            message.channel.send("Vous n'avez pas les permissions requises.")
        }
        
    }
}