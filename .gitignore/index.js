const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Je suis prêt !");
    client.user.setGame("acceuillir les nouveaux membres et leur dire au revoir s'ils partent");
});

client.on('guildMemberRemove', member => {

    member.guild.channels.find("name", "goodbye").send(`Quel dommage que ${member} nous ait quittés, nous espérons qu'il/elle reviendra un jour...`)

});

client.on('guildMemberAdd', member => {
    
    var role = member.guild.roles.find('name', 'Membre')
    member.addRole(role)
    
    member.guild.channels.find("name", "bienvenue").send(`BIENVENUE ${member} !!!!!
Bien joué, tu as obtenu le rôle de Membre et tu peux maintenant explorer ce serveur. N'hésite pas à aller choisir ton sexe dans le salon #fille-ou-garçon pour profiter des salons réservés aux filles et ceux réservés aux garçons.
Amuse-toi bien sur le serveur pur de la folie !!!!`)

});
