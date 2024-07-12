import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nExample:\n${usedPrefix + command} Jakarta`
    m.reply(wait)
    let res = await fetch(API('https://api.openweathermap.org', '/data/2.5/weather', {
        q: text,
        units: 'metric',
        appid: '060a6bcfa19809c2cd4d97a212b19273'
    }))
    if (!res.ok) throw 'location not found'
    let json = await res.json()
    if (json.cod != 200) throw json
   let teks = `乂 *C U A C A*
   
Lokasi: ${json.name}
Negara: ${json.sys.country}
Cuaca: ${json.weather[0].description}
Suhu saat ini: ${json.main.temp} °C
Suhu tertinggi: ${json.main.temp_max} °C
Suhu terendah: ${json.main.temp_min} °C
Kelembapan: ${json.main.humidity} %
Angin: ${json.wind.speed} km/jam
    `
    conn.sendMessage(m.chat, {text: teks, contextInfo:
					{
						"externalAdReply": {
							"title": namebot,
							"body": command + ' ' + text,
							"showAdAttribution": true,
							"previewType": "PHOTO",
							"sourceUrl": '',
							"thumbnailUrl": weather,

						}
					}
					})
}

handler.help = ['cuaca']
handler.tags = ['internet']
handler.command = /^(cuaca|weather)$/i
handler.limit = true
export default handler
