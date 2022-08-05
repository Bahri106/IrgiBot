let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana,Gopay,Ovo,Pulsa 
│ •  [6285732195087]
╰────
Donasi akan di gunakan untuk beli apikey dan jasa Run
Berapapun donasi sangat berguna buat bot

Chat owner jika ingin donasi 
wa.me/6285707645429
`.trim()) // no call!!! 
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
