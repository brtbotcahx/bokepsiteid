import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // pembersih sampah sessions 
 clearTmp: false, // pembersih sampah tmp
 addReply: true, // buat with thumbnail di pesan
 idgc: '6282279394792-1586152355@g.us' // id gc buat join only
 }

global.info = {
 nomerbot : '6285714779871',
 pairingNumber : '6285714779871',
 figlet: 'tegar imut', // buat tampilan konsole start
 nomorwa : '6285881668165',
 nameown : 'tegar imuth',
 nomerown : '6285881668165',
 packname : 'By Ig : peddle.pop_',
 author : '© ig : peddle.pop_',
 namebot : '𝘔𝘐𝘕𝘍𝘖 𝘉𝘖𝘛𝘊𝘏',
 wm : '𝘉𝘠 𝘛𝘌𝘎𝘈𝘙',
 stickpack : '𝘉𝘠 𝘛𝘌𝘎4𝘙',
 stickauth : '© 𝘐𝘎 : 𝘱𝘦𝘥𝘥𝘭𝘦.𝘱𝘰𝘱_',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 didyou : 'https://telegra.ph/file/fdc1a8b08fe63520f4339.jpg',
 rulesBot : 'https://telegra.ph/file/afcfa712bd09f4fcf027a.jpg',
 thumbnail : 'https://telegra.ph/file/acf5ac140d24afa4e5e13.jpg',
 thumb : 'https://telegra.ph/file/89f925eaab0ab2d0f001a.jpg',
 logo : 'https://telegra.ph/file/07428fea2fd4dccaab65f.jpg',
 unReg : 'https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg',
 registrasi : 'https://telegra.ph/file/0169f000c9ddc7c3315ff.jpg',
 confess : 'https://telegra.ph/file/03cabea082a122abfa5be.jpg',
 access : 'https://telegra.ph/file/5c35d4a180b9074a9f11b.jpg',
 tqto : 'https://telegra.ph/file/221aba241e6ededad0fd5.jpg',
 spotify : 'https://telegra.ph/file/d888041549c7444f1212b.jpg',
 weather : 'https://telegra.ph/file/5b35ba4babe5e31595516.jpg',
 gempaUrl : 'https://telegra.ph/file/03e70dd45a9dc628d84c9.jpg',
 akses : 'https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg',
 wel : 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4',
 good : 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Sosmed
global.url = {
 sig: 'https://instagram.com/peddle.pop_',
 sgh:  'https://github.com/penyepongaerox',
 sgc: 'https://whatsapp.com/channel/0029VaZ0TVEHQbRwjvl0Gr22'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/wangxinryu',
 ptrakterr: '-',
 pdana: '089670422713'
}
// Info Wait
global.msg = {
 wait: '⏱️ *Mohon bersabar*\n\> Sedang menjalankan perintah dari *User*!',
 eror: '🤖 *Information Bot*\n\> Mohon maaf atas ketidaknyamanan dalam menggunakan *Nightmare Bot* . Ada kesalahan dalam sistem saat menjalankan perintah.'
}
 
// api_id web suntik
global.apiId = {
 smm: '4524',
 lapak: '300672'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw klo abis ganti sendiri 
 uptime: '-',
 xyro: '-',
 lol: 'GataDios',
 smm: '-',
 lapak: '-',
 prodia: '-',
 bing: '1-HLkal9xPklSXn8H_NYBhugb9UnCJKJEzQp4Rk_PxP4xxBCqtm_Os-93cXF8mtFeqde_ZGjnx2C1MM4PCS0gH8mzdX5tJ5aoaDC4G0VruZATWvvOQlHs2UBDNID5PR4MtskWzX69idiBidGDqVwfNBNZYgqb3cgqkLbyEeZnWHxxrhO3es3O8YOI5wd8Y0a31_OiLKTAzwS1ba-wvcBP9khAHrUkuQpzXuoybpwfwpQ'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.tioxy.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})