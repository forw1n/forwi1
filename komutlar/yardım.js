const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  let p = '!'
  let arg = args.slice(0).join(' ');

  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`${p}yardım eğlence\` = Eğlence Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım müzik\` = Müzik Komutlarını Listeler.`)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence Komutları')
  .setDescription(`:white_small_square: \`${p}slot\` = Slot Oyunu Oynatır. \n:white_small_square: \`${p}avatar\` = Avatarınızı Gösterir.`)
  message.channel.send(embed)
  }
  if (arg === 'müzik' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Müzik komutları:')
      .setDescription(`:white_small_square: \`${p}oynat\` = Bot İstediğiniz Müziği Açar. \n:white_small_square: \`${p}durdur\` = Bot Müziği Durdurur. \n:white_small_square: \`${p}devam\` = Bot Müziği Devam Ettirir. \n:white_small_square: \`${p}ses\` = Müziğin Ses Seviyesini Ayarlar.`)
      return message.channel.send(embed);
}
   if (arg === 'moderasyon' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon komutları:')
      .setDescription(`:white_small_square: \`${p}otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`${p}sayaç\` = Sunucu için sayaç ayarlar.`)
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
