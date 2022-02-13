

try {

//#baileys
const {
     WAConnection,
   MessageType,
   Presence,  
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   ChatModification,
} = require('@adiwajshing/baileys');
///

const imgbb = require('imgbb-uploader');
const { upload } = require("./docs/lib/ytdl");
const axios = require('axios').default;
const speed = require('performance-now');
const { isFiltered, addFilter } = require('./docs/lib/antispam')
const { isFiltered2, addFilter2 } = require('./docs/lib/antispam2');
const { spinOn, spinLoad } = require ('./docs/functions/spinner.js');
const binary = require("./docs/apis/binary")
const updates = require("./docs/json/updates.json")
const googleImage = require('g-i-s')
const { webp2gifFile } = require("./docs/apis/gif.js")
const yts = require('./docs/apis/yt-search')
const akaneko = require('./docs/apis/akaneko'); //hentai
const generator =  require('./docs/apis/nickname generator'); //gerar nicks
const { Anime } = require('./docs/apis/sanime');
const randomanime = require('./docs/apis/randonime')
const translate = require('@vitalets/google-translate-api');
const { y2mateA, y2mateV } = require('./docs/apis/y2mate.js')
const Loli = require('./docs/apis/lolis.life');
const loli = new Loli();
const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
const { color, bgcolor } = require('./docs/lib/color'); const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./docs/lib/functions'); const { fetchJson, fetchText } = require('./docs/lib/fetcher'); const { recognize } = require('./docs/lib/ocr'); const fs = require('fs'); const moment = require('moment-timezone'); const { exec } = require('child_process'); const fetch = require('node-fetch'); const ffmpeg = require('fluent-ffmpeg'); const { removeBackgroundFromImageFile } = require('remove.bg'); const welkom = JSON.parse(fs.readFileSync('./docs/json/welkom.json')); 
const mute = JSON.parse(fs.readFileSync('./docs/json/mute.json')); 
const {convertSticker} = require("./docs/lib/swm.js") 
const blocked = [];
const base64 = require('./docs/apis/base64')
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }

// #texto #txt
const { menuhentai, allmenu, menufigu, menuadms, menudono, menuutils, galeria } = require('./edit/txt/menus.js');
const { help } = require('./edit/txt/help.js');
say = require('./edit/txt/say.js')

//#json
const vacilo = JSON.parse(fs.readFileSync('./docs/json/vacilo.json'))
const acordarDono = JSON.parse(fs.readFileSync('./docs/json/acordarDono.json'))
const multiprefix = JSON.parse(fs.readFileSync('./docs/json/multiprefix.json'))
const nsfw = JSON.parse(fs.readFileSync('./docs/json/nsfw.json'));
const antilink = JSON.parse(fs.readFileSync('./docs/json/antilink.json'));
const antipv = JSON.parse(fs.readFileSync('./docs/json/antipv.json'));
const blockcmd = JSON.parse(fs.readFileSync('./docs/json/blockcmd.json'));
const blocoDeNotas = JSON.parse(fs.readFileSync('./docs/json/blocoDeNotas.json'));
const antipalavrão = JSON.parse(fs.readFileSync('./docs/json/antipalavrão.json'));
const antifake = JSON.parse(fs.readFileSync('./docs/json/antifake.json'));
const whitelist = JSON.parse(fs.readFileSync('./docs/json/whitelist.json'));
const globalmute = JSON.parse(fs.readFileSync('./docs/json/globalmute.json'));
const blacklist = JSON.parse(fs.readFileSync('./docs/json/blacklist.json'));
const antidoc = JSON.parse(fs.readFileSync('./docs/json/antidoc.json'));


function isSpecialCaracter(str) { 
// detectar caracteres especiais
  for (let i = 0, n = str.length; i < n; i++) {
  if (str.charCodeAt(i) > 255) {
  return true;
 }
 }
 return false;
};

const timeHours = moment.tz('America/Sao_Paulo').format('HH:mm');
hours = timeHours;

const date = moment.tz('America/Sao_Paulo').format('DD/MM/AA')

// 00:00

// #settings.json
var { dono, dono2, numeroBot, grupoDono, nomeBot, nomeDonoY, botDisplay } = JSON.parse(fs.readFileSync('./edit/settings.json'))

if ((dono2 === 'undefined')) dono2 = '55999999999';


//

const nomeDono = nomeDonoY.toLowerCase();

// #qrcode
async function starts() {
	const xyrus = new WAConnection();
	const client = xyrus;
	xyrus.logger.level = 'warn';
	console.log(banner.string);
	xyrus.on('qr', () => {
	
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escaneie o QR Code'));
	})

	fs.existsSync('./docs/qrcode.json') && xyrus.loadAuthInfo('./docs/qrcode.json');
	xyrus.on('connecting', () => {
	spinLoad();
	})
	xyrus.on('open', () => {		
	xyrus.sendMessage("558897321488@s.whatsapp.net", "Olá, estou online!", MessageType.text);
	spinOn();
		try {
		var iii = xyrus.user.jid
		var kkk = Math.floor(Math.random() * (12 - 2) + 2);

	 xyrus.setStatus(`Apenas uma inteligência artificial. Online desde às ${hours}`)
	 // atualizar a bio
	 
	 // atualizar foto de perfil
	 //var kki = fs.readFileSync(`./edit/media/image/perfil/${kkk}.jpg`)
	/* async () => {
	 await sleep(300000);
	 xyrus.updateProfilePicture(iii, kki);
	 console.log('\nfoto de perfil atualizada\n');
	 }*/
	 } catch(e) {
	 console.log(e)
	 }
	})
		try {
		

		
             } catch(e) {
             console.log(e)
             }
	await xyrus.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./docs/qrcode.json', JSON.stringify(xyrus.base64EncodedAuthInfo(), null, '\t'));
        
	xyrus.on('chat-update', async (mek) => {
	
		try {
            if (!mek.hasNewMessage) return;
            mek = mek.messages.all()[0];
			if (!mek.message) return;
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return;
			//if (mek.key.fromMe) return;
			 multi = false;
 nopref = false;

			
			global.blocked;
			const content = JSON.stringify(mek.message);
			const from = mek.key.remoteJid;
			const type = Object.keys(mek.message)[0];	
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;
			const time = moment.tz('America/Sao_Paulo').format('DDD/MMMM HH:mm:ss');
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const botNumber = xyrus.user.jid;
const isGroup = from.endsWith('@g.us')
var sender = isGroup ? mek.participant : mek.key.remoteJid;

//#is
const isVacilo = isGroup ? vacilo.includes(from) : true
const Antidoc = isGroup ? antidoc.includes(from) : false;
const isMultiPrefix = isGroup ? multiprefix.includes(from) : false
const isAntiPv = antipv.includes('online');
const isWelkom = isGroup ? welkom.includes(from) : false;		
const isMute = isGroup ? mute.includes(from) : false;
const isNsfw = isGroup ? nsfw.includes(from) : false;	
const isAntiLink = isGroup ? antilink.includes(from) : false;
const isAntiPalavrão = isGroup ? antipalavrão.includes(from) : false;
const isAntiFake = isGroup ? antifake.includes(from) : false;
const isWhiteList = whitelist.includes(sender);
const isGlobalMute = globalmute.includes('ativado');
const isBlackList = blacklist.includes(sender);
const blocked = JSON.parse(fs.readFileSync('./docs/json/blocked.json'));
const isBlocked = blocked.includes(sender)
const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			};
			
///

// #prefix #multiprefix
var prefix = JSON.parse(fs.readFileSync('./edit/prefix.json'));

if (isMultiPrefix) {		
    var prefix = /^[°•π,÷×¶∆*£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷,*×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
    }
      
const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
 const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''			
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''			
const budY = budy.toLowerCase();
const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	const args = body.trim().split(/ +/).slice(1);
	
	//#args
var cArgs = args.join("");
var argsMenorQue = (teks) => cArgs.length < teks;
var argsMaiorQue = (teks) => cArgs.length > teks;
var argsJoin = (teks) => args.join(teks);
var budyIncludes = (teks) => budy.includes(teks);
var budYIncludes = (teks) => budY.includes(teks);
var q = args.join(" ")
        const c = args.join(' ')

var argsSplit = args.join("").split('|');
			
var isNumero = (cArgs.includes('1') || (cArgs.includes('2') || (cArgs.includes('3') ||(cArgs.includes('4') || (cArgs.includes('5') || (cArgs.includes('6') || (cArgs.includes('7') || (cArgs.includes('8') || (cArgs.includes('9') || (cArgs.includes('0')))))))))));
////
			
			const isCmd = body.startsWith(prefix);
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();			
		
// se não for comando e for pra mim, retornar
if (!isCmd) if (mek.key.fromMe) return;		
		
		var getBio = await xyrus.getStatus(`${sender.split('@')[0]}`, MessageType.text)


//#group
var pushname = xyrus.contacts[sender] != undefined ? xyrus.contacts[sender].vname || xyrus.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await xyrus.groupMetadata(from) : '';
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupName = isGroup ? groupMetadata.subject : '';
			const groupId = isGroup ? groupMetadata.jid : '';
			const groupMembers = isGroup ? groupMetadata.participants : '';
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
			const isGroupAdmins = groupAdmins.includes(sender) || false;			
const isOwner = sender.includes(dono) ? sender.includes(dono):sender.includes(dono2);

if (isBlocked) return; // banir bloqueados
if (isBotGroupAdmins) if (isBlackList) await xyrus.groupRemove(from, [sender]); // blacklist ban
/// fim group


var mathSelo = Math.floor(Math.random() * (8 - 2) + 2);
// selo contato
const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)
        }}};
			
			const reply = (teks) => {
				xyrus.sendMessage(from, teks, text, {quoted:selocont})
			};
		const replySelo = (teks, cArgs) => {
				xyrus.sendMessage(from, teks, text, {quoted: cArgs})
			};
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? xyrus.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : xyrus.sendMessage(from, teks.trim(), extendedText, {quoted: selocont, contextInfo: {"mentionedJid": memberr}})
			};

			colors = ['red','white','black','blue','yellow','green'];
			
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
const isVideo = type === 'videoMessage';
const isImage = type === 'imageMessage';
const isAudio = type === 'audioMessage';
const isSticker = type === 'stickerMessage';

//#sticker			



			let authorname = xyrus.contacts[from] != undefined ? xyrus.contacts[from].vname || xyrus.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = `${nomeBot}`; if (!author) author = 'xyzada';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./docs/src/stickers/${name}.exif`)) return `./docs/src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				};
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./docs/src/stickers/${name}.exif`, buffer, (err) => {	
					return `./docs/src/stickers/${name}.exif`	
				})	

			}
			
		const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
	

// #selos  #verificados

var mathMenu = Math.floor(Math.random() * (8 - 1) + 1);

const seloOn = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "https://chat.whatsapp.com/JiXC3HsAgZs2Ry8mcq75iG","groupName": `${nomeBot}`, "caption": `Serviço ativado`, 'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/1.jpg`)}}}

const seloOff = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "https://chat.whatsapp.com/JiXC3HsAgZs2Ry8mcq75iG","groupName": `${nomeBot}`, "caption": `Serviço desativado`, 'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/0.jpg`)}}}

const selotempoonline = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "application/octet-stream", "title": `「 Tempo de atividade: 」\n${runtime(process.uptime())}\n\n`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)}}}


// selo view
const seloview = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "viewOnceMessage": {  "jpegThumbnail": fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)} } }


// selo status
const selostt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${hours} ${pushname}!`, 'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)}}}
selostatus = selostt
selostat = selostt

// selp foto
const selofoto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Aqui está!", 'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)}}}
seloimage = selofoto
seloimg = selofoto;

//selo catálogo
const selocat ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `0`,status: 200, thumbnail: fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`), surface: 200, message: `⊳ Usuario ${pushname}`, orderTitle: '©Albedo', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};
        
//selo grupo
const selogp = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "VERIFICADO","groupName": "©Albedo", "caption": `${hours} ${pushname}`, 'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)}}};

//selo vídeo
const selovid = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: {
"videoMessage": {
"title": `Usuario: ${pushname}`,
"h": `Usuario: ${pushname}`,
'duration': '99999',
'caption': `Usuario: ${pushname}`,
'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`),
}
}
};
// selo documento
const selodoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Usuario: ${pushname}`,
jpegThumbnail: fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)
}
}
};
// selo áudio
const seloaud = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "556181496039-1613049930@g.us" } : {})
},
message: {
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999",
"ptt": "true"
}
}
};
// selo loja
const seloloja = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)
},
"title": `Usuario: ${pushname}`,
"description": "ngab",
"currencyCode": "IDR",
"priceAmount1000": "50.000",
"retailerId": "Self Bot",
"productImageCount": 0
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
};
// selo localização
const seloloc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `Usuario: ${pushname}`,
jpegThumbnail: fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)
}
}
};
// selo gif
const selogif = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: {
"videoMessage": {
"title": `Usuario: ${pushname}`,
"h": `Usuario: ${pushname}`,
'duration': '99',
'gifPlayback': 'true',
'caption': `Usuario: ${pushname}`,
'jpegThumbnail': fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`)
}
}
};

////// fim dos verificados

// #functions //#home

//#antipv
if (isAntiPv && !isOwner && !isGroup) {
reply(` 🚫 PARADO (A) AÍ 🚫\n‼️PV BLOQUEADO‼️ `)
setTimeout( () => {
xyrus.blockUser(sender, 'add')
 }, 5000)
}
///

if (isGlobalMute) if (!isOwner) return;

const insiraAlgo = `use assim: ${prefix + command} exemplo`;

async function menu() {
if (!isOwner) if (isFiltered(sender)) return reply(`*SISTEMA DE ANTI-SPAM!*\n _aguarde alguns segundos..._`);
await addFilter(sender);

try {
try {
if (isOwner){
	mi = `estou enviando o menu!`
await reply(mi);
 } else if (!isOwner) {
 await reply(`o menu está sendo enviado, aguarde.`);
 }} catch(e) {
 return reply (`erro x-x)`)
 }

await sleep(1000);

       txtt =` `

               buttons = [{buttonId:`menu lista`, 
               buttonText:{displayText: '⌸ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚄𝚂'},type:1},
               {buttonId:`statusgp`,buttonText:{displayText:'⚿ 𝚂𝚃𝙰𝚃𝚄𝚂 𝙶𝚁𝚄𝙿𝙾' },type:1},
                {buttonId:`outros`,buttonText:{displayText:'⍝ 𝙼𝙰𝙸𝚂 𝙾𝙿𝙲̧𝙾̃𝙴𝚂' },type:1}
               ]

mathHelp(29, 1);

               imageMsg = (await xyrus.prepareMessageMedia(fs.readFileSync(`./edit/media/image/menu/${valorMath}.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./edit/media/image/momonga.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${readmore}
┏━━━━❲ *XYz-BOTz* ❳━━━━━
┃ OLÁ ${pushname}!! Ɛ>
┃ Eu te dou as boas vindas ao menu.
┗━━━━━━━━━━━━━━━━━━━━━━━
${allmenu}`,
                 footerText: `*_XYz_*
`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await xyrus.prepareMessageFromContent(from,{buttonsMessage},{quoted: selocont})
               xyrus.relayWAMessage(prep)
             } catch(e) {
             console.log(e)
             }
             };
//// fim do menu 

async function extraPlay(cArgs) {
try {
if (args.length < 1) return reply('O que você deseja procurar?')
teks = cArgs
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `「  *Youtube Play*  」

🎶 *Título*: ${res.all[0].title}

✅ *ID:* ${res.all[0].videoId}

📅 *Carregado em:* ${res.all[0].ago}

📢 *Visualizações:* ${res.all[0].views}

🕓 *Duração:* ${res.all[0].timestamp}

📀 *Canal:* ${res.all[0].author.name}

✅ *Link do canal:* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `❒「  *${botname}*  」
├ *Título :* ${res.all[0].title}
├ *ID de vídeo :* ${res.all[0].videoId}
├ *Carregado em :* ${res.all[0].ago}
├ *Visualizações :* ${res.all[0].views}
├ *Duração :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de download ...._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
} catch(e) {
console.log(e);
reply(`A solicitação faiou :/`)
}
}

function traduzir (texto) {
translate(texto, {to: 'pt'}).then(res => {
  var tradução = res.text
  console.log(tradução)
  return tradução
}).catch(err => {
  console.error(err);
});
}



if (!isOwner) {
//#blockcmd
for (var kkk = 0; kkk < blockcmd.length; kkk++){
if (budY.includes(prefix + blockcmd[kkk])) return reply (`📍 Comando bloqueado pelo dono do bot`);
if (budY.includes(prefix + ' ' + blockcmd[kkk])) return reply (`📍 Comando bloqueado pelo dono do bot`);
if (budY.includes(prefix + '  ' + blockcmd[kkk])) return reply (`📍 Comando bloqueado pelo dono do bot`);
}};

if (!isOwner) if (budy.length >= 250){
//#antitrava bot
return console.log(color('\n\n\n\n\nMENSAGEM DE TEXTO MUITO LONGA!!!! \n\nsuperior a 250 caracteres\n\n\n\n\n', 'red'))
}

fss = require ('fs').promises;
// mostrar os arquivos de um diretório
async function listarArquivos(diretorio, arquivos){

if(!arquivos) arquivos = [];
await reply(`*Lista de arquivos:*`)
await sleep(2500);
let listaDeArquivos = await fss.readdir(diretorio);
console.log(listaDeArquivos);

for (var i = 0; i < listaDeArquivos.length; i++) {
xyrus.sendMessage(from, `${listaDeArquivos[i]}`, text)
}

}


// #math
function mathHelp (valor1, valor2) {
valorMath = Math.floor(Math.random() * (valor1 - valor2) + valor2);
mathResult = valorMath;
resultMath = valorMath
 }

const goAudio = './edit/media/audio/';
const goSticker = './edit/media/sticker/';
const goImage = './edit/media/image/';
const goVideo = './edit/media/video/';
const hx = require('hxz-api');

// enviar mídia (foto, vídeo, áudio, etc)
function sendMedia (id, arquivo, tipo, options = {}){
if (tipo === 'audio') {
const sendAudio = new Promise((resolve, reject) => {
try {
async function funcSendAudio () {
await xyrus.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.audio,     
    options
)}
resolve(funcSendAudio())
} catch(e) {
reject(e)
};
});
sendAudio
.then(() => console.log('sendAudio: finish'))
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})
};
///
if (tipo === 'sticker' || tipo === 'figurinha') {
const sendSticker = new Promise((resolve, reject) => {
try {
async function funcSendSticker () {
await xyrus.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.sticker, 
    options
)}
resolve(funcSendSticker())
} catch(e) {
reject(e)
};
});
sendSticker
.then(() => console.log('sendSticker: finish'))
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})
};
///
if (tipo === 'imagem' || tipo === 'image') {
const sendImage = new Promise((resolve, reject) => {
try {
async function funcSendImage () {
await xyrus.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.image,
    options
)}
resolve(funcSendImage())
} catch(e) {
reject(e)
};
});
sendImage
.then(() => console.log('sendImage: finish'))
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})
};
///
if (tipo === 'vídeo' || tipo === 'video') {
const sendVideo = new Promise((resolve, reject) => {
try {
async function funcSendVideo () {
await xyrus.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    MessageType.video,
    options
)}
resolve(funcSendVideo())
} catch(e) {
reject(e)
};
});
sendVideo
.then(() => console.log('sendVideo: finish'))
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})
};
///
if (tipo === 'document' || tipo === 'documento') {
const sendDoc = new Promise((resolve, reject) => {
try {
async function funcSendDoc () {
await xyrus.sendMessage(
    id, 
    { url: `${arquivo}` }, 
    'documentMessage',
    options
)}
resolve(funcSendDoc())
} catch(e) {
reject(e)
};
});
sendDoc
.then(() => console.log('sendDoc: finish'))
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})
};
///
};

if (!isGroupAdmins) if (isMute) if (!isOwner){
if (isSticker) if (isGroupAdmins) if (!isOwner) return
if (!isCmd) return
if (isCmd) return console.log(`${groupName} está mutado`)
}

gravando = Presence.recording;
escrevendo = Presence.composing;
digitando = Presence.composing;
online = Presence.available;
pausar = Presence.paused;






	//call auto block // anticall
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

xyrus.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('bloqueando o '+ callerId)
return xyrus.blockUser(callerId, 'add')
})


const sendMess = (hehe, teks) => {
				xyrus.sendMessage(hehe, teks, text)
			}

//# contador de msgs
const countMessage = JSON.parse(fs.readFileSync('./docs/src/countmsg.json'))
const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./docs/src/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./docs/src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./docs/src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}			


const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
xyrus.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xyrus.sendMessage(from, hasil, type, options).catch(e => {
xyrus.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
})
})
})
})
}

//#lista
const listmsg = (from, title, desc, list) => { 
try {
            let po = xyrus.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return xyrus.relayWAMessage(po, {waitForAck: true})} catch(e) {
            console.log(e)
            }
        }

// #antispam
if (isGroup) if (isCmd) {
if (isFiltered2(sender)) return reply(`*sistema de Anti_Spam!*`)
addFilter2(sender)
}

if (isCmd) await xyrus.chatRead(from) // lê as msgs

//#fileSha
isSticker ? fileSha256 = mek.message.stickerMessage.fileSha256.toString('base64'): "";
isSticker ? mediaKey = mek.message.stickerMessage.mediaKey.toString('base64'):"";


const reply2 = (teks) => {
// selo YouTube
img2 = fs.readFileSync('./edit/media/image/apoio.jpeg');
            xyrus.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',

"forwardingScore": 1000000000,

isForwarded: true,

"externalAdReply": {

                "title": `✨ siga-me no instagram! ✨`,

                "body": "clique aqui",

                "previewType": "PHOTO",

                "thumbnailUrl": "",

                "thumbnail": img2,

                "sourceUrl": `https://instagram/exys7`

},mentionedJid:[sender]}, quoted: selotempoonline })

        };
        
// #espere
/*if (isCmd) if (!budy.includes(prefix + 'menu')) {
await reply (`${say.wait}`);
await sleep(1500);
}*/




// #console
if (isImage) tipoMsg = ' 🖼️ Imagem ';
if (isVideo) tipoMsg = ' 🎦 Vídeo ';
if (isSticker) tipoMsg = ' 💟 Sticker ';
if (isAudio) tipoMsg = ' 🎶 Áudio ';

if (mek.key.fromMe) pushname = "BOT 🤖"
if (mek.key.fromMe) sender = xyrus.user.jid.split("@")[0]

isImage ? imageCaption = (mek.message.imageMessage.caption): imageCaption = "";
isVideo ? videoCaption = (mek.message.videoMessage.caption): videoCaption = "";

if (!isVideo && !isSticker && !isAudio && !budy) if (isImage && imageCaption) tipoMsg = `🖼 Imagem"\n "${mek.message.imageMessage.caption}`;

if (!isImage && !isSticker && !isAudio && !budy) if (isVideo && videoCaption) tipoMsg = `🎦 Vídeo"\n "${mek.message.videoMessage.caption}`;

if (!isVideo && !isImage && !isSticker && !isAudio && !imageCaption && !videoCaption) tipoMsg = ` ${budy} `;

if (!isCmd) if (isGroup) console.log(color('\n[ CONVERSA EM GRUPO ]','blue'), (color(`\nnome do grupo: ${groupName}\nhorário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'cyan')), (color(`"${tipoMsg}"`, 'yellow')));

if (isCmd) if (isGroup) console.log(color('\n[ COMANDO EM GRUPO ]','darkgreen'), (color(`\nnome do grupo: ${groupName}\nhorário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'orange')), (color(`"${cmd}"`, 'yellow')));

if (!isCmd) if (!isGroup) console.log(color('\n[ CONVERSA NO PV ]','red'), (color(`horário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'red')), (color(`"${tipoMsg}"`, 'orange')));

if (isCmd) if (!isGroup) console.log(color('\n[ COMANDO NO PV ]','red'), (color(`horário: ${timeHours}\nde: ${pushname} / ${sender.split("@")[0]}\nconteúdo:`, 'red')), (color(`"${cmd}"`, 'orange')));

if (isSticker && !isImage && !isVideo && !isAudio && !budy) {
await sleep(500)
console.log(`fileSha256: ${fileSha256}\nmediaKey: ${mediaKey}`);
}
//// fim do console


// #botões
const sendButMessage = (id, quoo, text1, desc1, but = [], options = {}) => {
try {
if (!quoo) quoo = mek
try {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
xyrus.sendMessage(id, buttonMessage, MessageType.buttonsMessage, { quoted: quoo, options})
} catch(e) {
return reply (`📌 *Algo deu errado*`)
}} catch(e) {
console.log(e)
}
};
//#button image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
try {
kma = gam1
mhan = await xyrus.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xyrus.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} catch(e) {
console.log(e)
}
};



/*####################*/

//#interação
//#budY

if (budY.includes("foda")) {
if (isFiltered2(sender)) return
await addFilter2(sender);
if (budY.includes("se")) return
await sendMedia(from, goAudio + `foda.mp3`, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true
 });
 }

if (budY.includes("bot sua gostosa") || (budY.includes("bot sua linda") || (budY.includes("zero sua gostosa") || (budY.includes("zero sua linda") || (budY.includes("melhor bot zero") || (budY.includes("zero melhor bot") || (budY.includes("zero é foda") || (budY.includes("você é foda zero"))))))))){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(6, 1);
 await sendMedia(from, goSticker + 'sexy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
await sendMedia(from, goAudio + `beijo.mp3`, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true
 });

 }

if (budY.includes("la la") || (budY.includes("lá lá") || (budY.includes("lalala") || (budY.includes("lálá") || (budY.includes("canta bot") || (budY.includes("canta" + nomeBot))))))){
if (isFiltered2(sender)) return
await addFilter2(sender);

await sendMedia(from, goAudio + 'lalala.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} 

if (budY.includes("interessante")){
if (isFiltered2(sender)) return
await addFilter2(sender);

await sendMedia(from, goAudio + 'interessante.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} 

if (budY.includes("risada ma")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(7, 1);
await sendMedia(from, goSticker + 'bad' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'kkkk.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
} 

if (budY.includes("boa tarde")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(14, 1);
await sendMedia(from, goSticker + 'b' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'boa tarde.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("bom dia")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(14, 1);
await sendMedia(from, goSticker + 'b' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'bom dia.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("boa noite")){
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(14, 1);
await sendMedia(from, goSticker + 'b' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});

await sleep(1500);
await sendMedia(from, goAudio + 'boa noite.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("mas bah")){
if (isFiltered2(sender)) return
await addFilter2(sender);

mathHelp(3, 1);
await sendMedia(from, goSticker + 'g' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 
await sleep(1500);
await sendMedia(from, goAudio + 'bah.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 
}

if (budY.includes("bang bang")){
if (isFiltered2(sender)) return
await addFilter2(sender);

await sendMedia(from, goAudio + 'bang bang.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("amo bot") || (budY.includes("bot te amo") || (budY.includes('te amo zero') || (budy.includes("eu te amo bot"))))) {
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(12, 1);
await sendMedia(from, goSticker + 'love' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(3000);
await sendMedia(from, goAudio + 'love.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 }

if (budY.includes("auau") || (budY.includes("au au"))) {
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(8, 1);
await sendMedia(from, goSticker + 'dog' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(3000);
await sendMedia(from, goAudio + 'au au.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("miau") || (budY.includes("meow"))) {
if (isFiltered2(sender)) return
await addFilter2(sender);
mathHelp(9, 1);
await sendMedia(from, goSticker + 'neko' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
await sendMedia(from, goAudio + 'miau.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budY.includes("glub")){
if (isFiltered2(sender)) return
await addFilter2(sender);
await sendMedia(from, goAudio + 'glub.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}

if (budy.includes("bot ta on?") || (budy.includes("bot on?") )){
reply (`sim!`)
}

if (budy.includes("hola") || (budy.includes("hola!") || (budy.includes("hola.") || (budy.includes("hola?"))) )){
reply (`olá!`)
}

if (budy.includes("😳")) {
	reply (`😏`)
	}

if (budy.includes("bdia")){
await sendMedia(from, 'https://telegra.ph/file/ed37738ba80989d15e06d.jpg', 'image', {
quoted: mek,
caption: 'AOBAAAA', 
})
};

if (budY.includes("canta")){ //by pinguim
const menus = ["google","pozeday","canto"]
pingu = menus[Math.floor(Math.random() * menus.length)]
menu = fs.readFileSync('./assets/'+pingu+'.mp3')
xyrus.sendMessage(from, menu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
};

if (budY.includes('Cringe') || (budy.includes('cringe'))) {
if(!mek.key.fromMe){
result = fs.readFileSync(`./assets/cringe.webp`)
xyrus.sendMessage(from, result, sticker, { quoted: mek })
}};

if (budY.includes("dono do bot") || budY.includes("bot dono")) {
	reply('se deseja falar com o meu criador digite ${prefix}dono')
await sendMedia(from, goSticker + 'olaa.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
};
/*############# fim da interação*/

	const sendDono = (teks) => {
            xyrus.sendMessage(from, teks, text,  {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
                "title": `Fale comigo clicando aqui.`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg",
        "thumbnail":  fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`),
                "sourceUrl": `https://api.whatsapp.com/send?phone=558897321488&text=Olá%20xy, tudo bom? `
},mentionedJid:[sender]}, quoted : selocont})
        }
			

function listaMenus () {
 listMsg = {

 buttonText: 'selecione seu menu',

 footerText: `Lista De Menus Separados Por Categorias\n${readmore}`,

 description: `${readmore}`,

 sections: [

                     {
                      "title": `LISTA DE MENUS:`,

 rows: [

                          {

                              "title": "Menu Admins",
                              "rowId": `${prefix}` + "menuadmins"

                           },

                           {

                              "title": "Menu Stickers",
                              "rowId": `${prefix}` + "menufigu"

                           },

                           {

                              "title": "Menu Utils",
                              "rowId": `${prefix}` + "menuutils"

                           },
                           {

                              "title": "Menu Nsfw",
                              "rowId": `${prefix}` + "menunsfw"

                           },
                                                      {

                              "title": "Menu Dono",
                              "rowId": `${prefix}` + "menudono"

                           },
                           {

                              "title": "Galeria",
                              "rowId": `${prefix}` + "galeria"

                           },
                           {

                              "title": "Interagir Com O Bot",
                              "rowId": `${prefix}` + "interagir"

                           },

                        ]

                     }],

 listType: 1

}

const selocat ={"key": { "fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "556181496039-1625944593@g.us" }, "message": {orderMessage: {itemCount: `7`,status: 200, thumbnail: fs.readFileSync(`./edit/media/image/selos/${mathSelo}.jpg`), surface: 200, message: `⊳ Usuario ${pushname}`, orderTitle: '©Albedo', sellerJid: sender}}, contextInfo: {"forwardingScore":999999,"isForwarded":true},sendEphemeral: true};

xyrus.sendMessage(from, listMsg, MessageType.listMessage,  {quoted: selocat})

}
if (selectedButton === 'menu lista'){
listaMenus();
}


/*
//#mek
if (isOwner) {
console.log(mek)
if (budy && !isImage && !isSticker && !isVideo && !isAudio) {
console.log(mek)
reply (`*dados da mensagem:*\n\n_remoteJid:_ ${mek.key.remoteJid}\n_fromMe:_ ${mek.key.fromMe}\n_id:_ ${mek.key.id}\n\n_conversation:_ "${mek.message.conversation}"\n_participant:_ ${mek.participant}\n_ephemeralOutOfSync:_ ${mek.ephemeralOutOfSync}\n_epoch:_ ${mek.epoch}`)
}

if (!budy && !isImage && isSticker && !isVideo && !isAudio) {
console.log(mek)
reply (`*dados da mensagem:*\n\n*remoteJid:* ${mek.key.remoteJid}\n\n*fromMe:* ${mek.key.fromMe}\n\n*id:* ${mek.key.id}\n\n*stickerMessage:*\n\n\n*url:* ${mek.message.stickerMessage.url}\n\n*fileSha256:* ${fileSha256}\n\n*fileEncSha256:* ${mek.message.stickerMessage.fileEncSha256.toString('base64')}\n\n*mediaKey:* ${mek.message.stickerMessage.mediaKey.toString('base64')}\n\n*mimetype:* ${mek.message.stickerMessage.mimetype}\n\n*height:* ${mek.message.stickerMessage.height}\n\n*width:* ${mek.message.stickerMessage.width}\n\n*directPath:* ${mek.message.stickerMessage.directPath}\n\n*isAnimated:* ${mek.message.stickerMessage.isAnimated}`)
}
}
*/



// #galeria //#button //#hentai
async function kimono () {
 
try {
anu = await fetchJson(`https://x-restapi.herokuapp.com/api/random-kemono?apikey=BETA`)
yoiz = await getBuffer(anu.link)
buttons = [{buttonId: `kemono`,buttonText:{displayText: `☘ ️Next`},type:1}]
              imageMsg = (await xyrus.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: null, })).imageMessage
              buttonsMessage = {footerText:`${nomeBot}`, imageMessage: imageMsg,
              contentText:`Nota: Não faça spam`,buttons,headerType:4}
              prep = await xyrus.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              xyrus.relayWAMessage(prep)
              } catch(e) {
              console.log(e)
              }}
              if (selectedButton === 'kemono') {
              if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
              kimono();
              }
                   ///


async function uwu () {
try {
 
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
yoiz = await getBuffer(anu.url)
buttons = [{buttonId: `uwu`,buttonText:{displayText: `☘ ️Next`},type:1}]
              imageMsg = (await xyrus.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: null })).imageMessage
              buttonsMessage = {footerText:`${nomeBot}`, imageMessage: imageMsg,
              contentText:`Nota: Não faça spam`,buttons,headerType:4}
              prep = await xyrus.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              xyrus.relayWAMessage(prep)
              } catch(e) {
              console.log(e)
              }}
              if (selectedButton === 'uwu') {
              if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
              uwu();
              }
///
async function sendNext (ex, ikk) {
 
 try {
sendPorn = await getBuffer(ex);
buttons = [{buttonId: ikk,buttonText:{displayText: `☘ ️Next`},type:1}]
              imageMsg = (await xyrus.prepareMessageMedia(sendPorn, "imageMessage", { thumbnail: null, })).imageMessage
              buttonsMessage = {footerText:`${nomeBot}`, imageMessage: imageMsg,
              contentText:`Nota: Não faça spam`,buttons,headerType:4}
              prep = await xyrus.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              xyrus.relayWAMessage(prep)
              } catch(e) {
              console.log(e)
              }
              }
///
async function blowjob() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.blowjob(), 'blowjob')
} catch(e) {
console.log(e)
}
}
if (selectedButton === 'blowjob') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
blowjob();
} catch(e) {
try {
blowjob();
} catch(e) {
console.log(e)
}
}}
///                   
async function rhentai() {
if (!isNsfw) return reply (`${say.only.nsfw}`);

try {
var nsfw = await randomanime.nsfw()
await sendNext(await nsfw, 'rrkkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'rrkkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
rhentai();
} catch(e) {
try {
rhentai();
} catch(e) {
console.log(e)
}
}}
///
async function eroneko() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.lewdNeko(), 'eronekokkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'eronekokkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
eroneko();
} catch(e) {
try {
eroneko();
} catch(e) {
console.log(e)
}
}}
///
async function ass() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.ass(), 'asskk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'asskk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
ass();
} catch(e) {
try {
ass();
} catch(e) {
console.log(e)
}
}}
///
async function trap() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
res = await fetchJson('https://nekos.life/api/v2/img/trap')
await sendNext(await res.url, 'trapkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'trapkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
trap();
} catch(e) {
try {
trap();
} catch(e) {
console.log(e)
}
}}
///
async function futa() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
res = await fetchJson('https://nekos.life/api/v2/img/futanari');
await sendNext(await res.url, 'futakk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'futakk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
futa();
} catch(e) {
try {
futa();
} catch(e) {
console.log(e)
}
}}
///
async function bdsm() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.bdsm(), 'bdsmkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'bdsmkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
bdsm();
} catch(e) {
try {
bdsm();
} catch(e) {
console.log(e)
}
}}
///
async function cum() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.cum(), 'cumkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'cumkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
cum();
} catch(e) {
try {
cum();
} catch(e) {
console.log(e)
}
}}
///
async function doujin() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.doujin(), 'doujinkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'doujinkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
doujin();
} catch(e) {
try {
doujin();
} catch(e) {
console.log(e)
}
}}
///
async function femdom() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.femdom(), 'femdomkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'femdomkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
femdom();
} catch(e) {
try {
femdom();
} catch(e) {
console.log(e)
}
}}
///
async function ero() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.hentai(), 'erokk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'erokk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
ero();
} catch(e) {
try {
ero();
} catch(e) {
console.log(e)
}
}}
///
async function maid() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.maid(), 'maidkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'maidkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
maid();
} catch(e) {
try {
maid();
} catch(e) {
console.log(e)
}
}}
///
async function orgy() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.orgy(), 'orgykk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'orgykk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
orgy();
} catch(e) {
try {
orgy();
} catch(e) {
console.log(e)
}
}}
//
async function panties() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.panties(), 'pantieskk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'pantieskk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
panties();
} catch(e) {
try {
panties();
} catch(e) {
console.log(e)
}
}}
///
async function cuckold() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.cuckold(), 'cuckoldkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'cuckoldkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
cuckold();
} catch(e) {
try {
cuckold();
} catch(e) {
console.log(e)
}
}}
///
async function netorare() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.netorare(), 'netorarekk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'netorarekk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
netorare();
} catch(e) {
try {
netorare();
} catch(e) {
console.log(e)
}
}}
///
async function feet() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.feet(), 'feetkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'feetkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
feet();
} catch(e) {
try {
feet();
} catch(e) {
console.log(e)
}
}}
///
async function pussy() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.pussy(), 'pussykk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'pussykk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
pussy();
} catch(e) {
try {
pussy();
} catch(e) {
console.log(e)
}
}}
///
async function ugly() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.uglyBastard(), 'uglykk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'uglykk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
ugly();
} catch(e) {
try {
ugly();
} catch(e) {
console.log(e)
}
}}
///
async function fantasy() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.uniform(), 'fantasykk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'fantasykk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
fantasy();
} catch(e) {
try {
fantasy();
} catch(e) {
console.log(e)
}
}}
///
async function gangbang() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.gangbang(), 'gangbangkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'gangbangkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
gangbang();
} catch(e) {
try {
gangbang();
} catch(e) {
console.log(e)
}
}}
///
async function foxgirl() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.foxgirl(), 'foxgirlkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'foxgirlkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
foxgirl();
} catch(e) {
try {
foxgirl();
} catch(e) {
console.log(e)
}
}}
///
async function cumslut() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.cumslut(), 'cumslutkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'cumslutkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
cumslut();
} catch(e) {
try {
cumslut();
} catch(e) {
console.log(e)
}
}}
///
async function glasses() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.glasses(), 'glasseskk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'glasseskk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
glasses();
} catch(e) {
try {
glasses();
} catch(e) {
console.log(e)
}
}}
///
async function thighs() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.thighs(), 'thighskk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'thighskk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
thighs();
} catch(e) {
try {
thighs();
} catch(e) {
console.log(e)
}
}}
///
async function tentacles() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.tentacles(), 'tentacleskk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'tentacleskk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
tentacles();
} catch(e) {
try {
tentacles();
} catch(e) {
console.log(e)
}
}}
///
async function solo() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.masturbation(), 'solokk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'solokk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
solo();
} catch(e) {
try {
solo();
} catch(e) {
console.log(e)
}
}}
///
async function school() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.school(), 'schoolkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'schoolkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
school();
} catch(e) {
try {
school();
} catch(e) {
console.log(e)
}
}}
///
async function eroyuri() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.yuri(), 'eroyurikk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'eroyurikk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
eroyuri();
} catch(e) {
try {
eroyuri();
} catch(e) {
console.log(e)
}
}}
///
async function zettai() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.zettaiRyouiki(), 'zettaikk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'zettaikk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
zettai();
} catch(e) {
try {
zettai();
} catch(e) {
console.log(e)
}
}}
///
async function succubus() {
if (!isNsfw) return reply (`${say.only.nsfw}`);
 
try {
await sendNext(await akaneko.nsfw.succubus(), 'succubuskk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'succubuskk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
succubus();
} catch(e) {
try {
succubus();
} catch(e) {
console.log(e)
}
}}
////

/// FIM DO HENTAI

async function randoanime() {
try {
let anime = await randomanime.anime()
await sendNext(await anime, 'randoanimekk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'randoanimekk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
randoanime();
} catch(e) {
try {
randoanime();
} catch(e) {
console.log(e)
}
}}
///
async function yuri() {
try {
resk = await fetchJson('https://nekos.life/api/v2/img/eroyuri')
await sendNext(resk.url, 'yurikk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'yurikk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
yuri();
} catch(e) {
try {
yuri();
} catch(e) {
console.log(e)
}
}}
///
async function wallpaper() {
try {
await sendNext(await akaneko.nsfw.mobileWallpapers(), 'wallpaperkk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'wallpaperkk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
wallpaper();
} catch(e) {
try {
wallpaper();
} catch(e) {
console.log(e)
}
}}
///
async function neko() {
try {
await sendNext(await akaneko.neko(), 'nekokk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'nekokk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
neko();
} catch(e) {
try {
neko();
} catch(e) {
console.log(e)
}
}}
///

  async function loli() {
try {
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
  let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
await sendNext(await wipi, 'lolikk')
} catch(e) {
console.log(e)
reply('🕵 Erro ao enviar a imagem');
}
}
if (selectedButton === 'lolikk') {
if (isFiltered2(sender)) return reply(`📍 *sistema de Anti_Spam!*`)
addFilter2(sender)
try {
loli();
} catch(e) {
try {
loli();
} catch(e) {
console.log(e)
}
}}
////#fim

if (isCmd) if (dono === 'undefined') return reply ('Antes de continuar insira o seu número na pasta edit/settings.json!!!');

                                      

// #cases
const executCase = new Promise((resolve, reject) => {
try {
async function funcExecutCase () {
		switch(command) {
		
case 'blockwpp':
if (!isOwner) return
cuy = body.slice(10);
try {
reply('bloqueado com sucesso');
xyrus.blockUser(cuy + '@s.whatsapp.net', 'add')
} catch(e) {
reply('Erro ao bloquear')
}
break

case 'unblockwpp':
if (!isOwner) return
cuy = body.slice(12);
try {
reply('desbloqueado com sucesso');
xyrus.blockUser(cuy + '@s.whatsapp.net', 'remove')
} catch(e) {
reply('Erro ao desbloquear')
}
break
	

case 'teste':
if (argsMenorQue(1)) return reply ('args menor que 1');
if (argsMaiorQue(5)) return reply ('args maior que 5');
if (!isNumero) return reply('n é número');
reply ('!');
break


// #tutorias & #exemplos

case 'selos':
await reply(`*selos do bot:*`)

replySelo(' selo online', seloOn);
replySelo(' selo offline', seloOff);
replySelo(' selo tempo online', selotempoonline);
replySelo(' selo view', seloview);
replySelo(' selo status', selostt);		
replySelo(' selo foto', selofoto);
replySelo(' selo catálogo', selocat);		
replySelo(' selo contato', selocont);
replySelo(' selo grupo', selogp);
replySelo(' selo documento', selodoc);
replySelo(' selo vídeo', selovid);
replySelo(' selo áudio', seloaud);
replySelo(' selo loja', seloloja);		
replySelo(' selo localização', seloloc);
replySelo(' selo Gif', selogif);

break

/////

case 'ping':
aki = `🏓 pong`
const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`${aki}\nPing: ${latensyi.toFixed(4)} Segundos`)
break
		
		
case "ver":
      case "inspect":
      function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}
        cargs = args.join(' ');
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!cargs) return reply("insira um link de grupo whatsapp");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("certifique-se de que é um link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await xyrus.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*DOno* : @${owner.split("@")[0]}` : "*Dono* : -"}
*Nome do Grupo* : ${subject}
*Data de Criação* : ${formatDate(creation * 1000)}
*Numero de Membros* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : não há nenhum"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc do gp* : @${descOwner.split("@")[0]}`
    : "*Descricao modificada by* : -"
}\n*Data* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Contatos Salvos*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Sim" : "Nao"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
                    
          xyrus.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        
        break;		


		case 'learn':
		reply (`𝑪𝒓𝒆́𝒅𝒊𝒕𝒐𝒔:\n\n*tioMomonga*\n\n𝑪𝒂𝒏𝒂𝒍 𝑫𝒆𝒍𝒆:\n\nhttps://youtube.com/channel/UCEXnX1CqgbV5xVabZG71aUw\n\n𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐢𝐧𝐬𝐭𝐚𝐥𝐚𝐫 𝐨 𝐛𝐨𝐭:\n\ntermux-setup-storage\n\ncd /sdcard/*PASTA ONDE ESTÁ O SEU BOT*\n\nbash install.sh\n\ndepois disso é só dar\n*node index*\npara iniciar!`)
		break




// #dono

case 'muteglobal': case 'globalmute':
if (!isOwner) return;
if (!isGlobalMute) {
globalmute.push('ativado')
fs.writeFileSync('./docs/json/globalmute.json', JSON.stringify(globalmute))
reply('✓ mute global ativado - apenas dono pode user agora')
}
if (isGlobalMute) {
globalmute.splice('ativado')
fs.writeFileSync('./docs/json/globalmute.json', JSON.stringify(globalmute))
reply('✓ mute global desativado')
}
break

case 'givemesticker':
if (!isOwner) return reply (`${say.only.owner}`);

let listaDeArquivos = await fss.readdir('./edit/media/sticker/pacote/');
console.log(listaDeArquivos);
for (var i = 0; i < listaDeArquivos.length; i++) {
try {
await sleep(1500);
await sendMedia(from, `./edit/media/sticker/pacote/` + `${listaDeArquivos[i]}`, 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,
 })
 } catch(e) {
 console.log(e)
 }};
 break

case 'update': case 'updates':

					teks = `╭─「 *ÚLTIMAS ATUALIZAÇÕES DO BOT* 」\n`
					no = 0
					for (let uptpp of updates) {
						no += 1
						teks += `│「${no.toString()}」 ${uptpp.split('@')[0]}\n`
					}
					teks += `│ Total : ${updates.length}\n╰──────「 *${nomeBot}* 」`
					xyrus.sendMessage(from, teks.trim(), text, {quoted: selocont})
					
break					
case 'addupdate':
if (!isOwner) return reply(`${say.only.owner}`)
					addp0 = `_update adicionado ${time}_\n${body.slice(11)}\n`
					updates.push(`${addp0}`)
					fs.writeFileSync('./docs/json/updates.json', JSON.stringify(updates))
					reply(`✓ novo update`)
break

case 'doc':
if (!isOwner) return reply (`${say.only.owner}`);
var sd = args.join(' ').split('|')
var sa = sd[0];
var sb = sd[1];
var sc = sd[2];

await sendMedia(from, `${sa}`, 'document', {
mimetype: Mimetype + `.${sc}`,
filename: `${sb}.${sc}`,
});
break		
		
	case 'cmdlist':				
if (!isOwner) return reply(`${say.only.owner}`)
					teks = `╭─「 *COMANDOS BLOQUEADOS* 」\n`
					no = 0
					for (let prem of blockcmd) {
						no += 1
						teks += `│「${no.toString()}」 ${prem}\n`
					}
					teks += `│ Total : ${blockcmd.length}\n╰──────「 *${nomeBot}* 」`
					xyrus.sendMessage(from, teks.trim(), extendedText, {quoted: selocont})
					
break							
		
case 'blockcmd':
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length < 1) return reply(`?`);
if (blockcmd.includes(budY.slice(10))) return reply (`já estava bloqueado`);

blockcmd.push(budY.slice(10));
fs.writeFileSync('./docs/json/blockcmd.json', JSON.stringify(blockcmd))
reply(`comando ${budY.slice(10)} foi bloqueado`)
break

case 'unblockcmd': 
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length < 1) return reply(`?`);
blockcmd.splice(cArgs);
fs.writeFileSync('./docs/json/blockcmd.json', JSON.stringify(blockcmd))
reply(`comando ${cArgs} foi desbloqueado`)
break

case 'antidocumento':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./docs/json/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./docs/json/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break
		
case 'antipv':
if (!isOwner) return reply(`${say.only.owner}`);
if (budY.includes('on')){
if (isAntiPv) return reply (`Já estava ativo`);
antipv.push('online')
fs.writeFileSync('./docs/json/antipv.json', JSON.stringify(antipv))
reply(`ativado ✓`);
} else if (budY.includes('off')){
if (!isAntiPv) return reply (`Já estava desativado`);
antipv.splice('online')
fs.writeFileSync('./docs/json/antipv.json', JSON.stringify(antipv))
reply (`desativado X`);
} else {
reply (`${prefix}antipv on/off`)
}
break
		
case 'notas':
if (!isOwner) return

					teks = `╭─「 *ANOTAÇÕES* 」\n`
					no = 0
					for (let uptpp of blocoDeNotas) {
						no += 1
						teks += `│「${no.toString()}」 ${uptpp.split('@')[0]}`
					}
					teks += `│ Total : ${blocoDeNotas.length}\n╰──────「 *${nomeBot}* 」`
					xyrus.sendMessage(from, teks.trim(), text, {quoted: selocont})
					
break					
case 'addupdate':
if (!isOwner) return reply(`${say.only.owner}`)
					addp0 = `_update adicionado ${time}_\n${body.slice(11)}\n`
					updates.push(`${addp0}`)
					fs.writeFileSync('./docs/json/updates.json', JSON.stringify(updates))
					reply(`✓ novo update`)
break
case 'anotar':
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length <1){
return reply (`Anotação inválida`);
}
var anotar = `${time}\n${body.slice(8)}\n\n`;
reply(`✓ *anotação inserida*\n${anotar}`);
blocoDeNotas.push(anotar)
fs.writeFileSync('./docs/json/blocoDeNotas.json', JSON.stringify(blocoDeNotas))
break

		
		case 'ebinary':
		if (!isOwner) return reply (`${say.only.owner}`);
		try {
		var by = binary.encode(body.slice(9))
		reply (`${by}`)
		} catch(e) {
		console.log(e)
		}
				break
				
					case 'dbinary':
					if (!isOwner) return reply (`${say.only.owner}`);
		try {
		var by = binary.decode(body.slice(9))
		reply (`${by}`)
		} catch(e) {
		console.log(e)
		}
				break
				
		
		case 'ebase64':
		if (!isOwner) return reply (`${say.only.owner}`);
		if (args.length < 1) return reply (`...`)
		try {
		var bb = body.slice(9);
		var tt = base64.encode(bb);
		reply (`${tt}`)
		} catch(e) {
		console.log(e)
		}
		break
		
		case 'dbase64':
		if (!isOwner) return reply (`${say.only.owner}`);
		if (args.length < 1) return reply (`...`)
		try {
		var bb = body.slice(9);
		var tt = base64.decode(bb);
		reply (`${tt}`)
		} catch(e) {
		console.log(e)
		}
		break
		
		case 'spy':		
		if (!isOwner) return reply(`${say.only.owner}`)
				if (args.length < 1) return listarArquivos(`.`);
		try {
listarArquivos(`${body.slice(5)}`)
} catch {
console.log('Erro')
}
		break


case 'eval': case 'e':
if (!isOwner) return
eval(cArgs)
break

case 'async': case 'as':
if (!isOwner) return
try {
(async () => {
eval(cArgs)
})
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break

case 'reply':
if (!isOwner) return
try {
eval(reply(`${body.slice(7)}`))
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break

case 'getall':
try {
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length < 1) return reply (`insira algo`)
let inicio = cArgs.substring(0, cArgs.indexOf('|') - 0)
let fim = cArgs.substring(cArgs.lastIndexOf('|') + 1)

let listaDeArquivos = await fss.readdir(fim);
console.log(listaDeArquivos);

if (budY.includes("img") || (budY.includes("foto") || (budy.includes("pic")))){
for (var i = 0; i < listaDeArquivos.length; i++) {
try {
await sleep(1000);
await sendMedia(from, `${fim}` + `${listaDeArquivos[i]}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${listaDeArquivos[i]}`,
 });
} catch(e) {
 console.log(e)
 }
 }};
 if (budY.includes("aud")){
 for (var i = 0; i < listaDeArquivos.length; i++) {
try {
await sleep(1000);
await sendMedia(from, `${fim}` + `${listaDeArquivos[i]}`, 'aud', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true,
 });
 } catch(e) {
 console.log(e)
 }
 }};
} catch(e) {
console.log(e)
}
break

case 'getpic':
if (!isOwner) return reply (`${say.only.owner}`)
try {
if (args.length < 1) return listarArquivos('./edit/media/image/save')
if (budy.includes("/")){
await sendMedia(from, `${body.slice(8)}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${body.slice(8)}`,
 });
 } else if (budy.includes("home")){
 await sendMedia(from, goImage + `${body.slice(13)}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${body.slice(13)}`,
 });
 } else {
 await sendMedia(from, goImage + `/save/${body.slice(8)}`, 'image', {
mimetype: Mimetype.image,
 quoted: mek,
 caption: `${body.slice(8)}`,
 });
 }
 } catch(e) {
 console.log(e)
 }
break

case 'getaud':
if (!isOwner) return reply (`${say.only.owner}`)
if (args.length < 1) return listarArquivos('./edit/media/audio')
try {
 sendMedia(from, goAudio + `${body.slice(8)}.mp3`, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt: true
 });
 } catch(e) {
 console.log(e)
 }
 break
 
 
   case "save":
   if (!isOwner) return reply (`${say.only.owner}`)
mathHelp(99998, 1);

   try {
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await xyrus.downloadMediaMessage(boij);
          fs.writeFileSync(`./edit/media/image/save/${mathResult}.jpg`, delb);
          reply(`Imagem salva ✓\n\nnome: ${mathResult}.jpg`);
        }
        } catch(e) {
        console.log(e)
        }
        break;
        
case "saveh":
   if (!isOwner) return reply (`${say.only.owner}`)
mathHelp(99998, 1);

   try {
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await xyrus.downloadMediaMessage(boij);
          fs.writeFileSync(`./edit/media/image/save/hentai/hentai${mathResult}.jpg`, delb);
          reply(`Imagem salva ✓\n\nnome: hentai${mathResult}.jpg`);
        }
        } catch(e) {
        console.log(e)
        }
        break;

case 'clear': case 'clearchat': case 'limparchat':
if (!isOwner) return reply (`${say.only.owner}`)
try {
await sleep(1000)
                await xyrus.modifyChat(from, ChatModification.delete)
                await sleep(1000)
                reply(`chat limpo`)
                } catch(e) {
                console.log(e)
                }
                
break

case 'avaliar':
listMsg = {

 buttonText: 'ver lista',

 footerText: ` sua avaliação ajuda o criador do bot a ter um feedback`,

 description: `*Avalie o bot*`,

 sections: [

                     {

                      "title": `  `,

 rows: [

                          {

                              "title": "péssimo",
                              "rowId": `${prefix}` + "avpessimo"

                           },

                           {

                              "title": "ruim",
                              "rowId": `${prefix}` + "avruim"

                           },

                           {

                              "title": "bom",
                              "rowId": `${prefix}` + "avbom"

                           },
                           {

                              "title": "muito bom",
                              "rowId": `${prefix}` + "avmuitobom"

                           },
                                                      {

                              "title": "perfeito!",
                              "rowId": `${prefix}` + "avperfeito"

                           },
                           

                        ]

                     }],

 listType: 1

}

xyrus.sendMessage(from, listMsg, MessageType.listMessage,  {contextInfo: { mentionedJid: [sender]}})

break

case 'bug':
if (!isGroup) return reply (`${say.only.group}`)
if (args.length < 1) return reply(`Digite algo depois de "bug"`)
suporte = dono + '@s.whatsapp.net';
textos = `
┏━━━━━━━━━━━━━━━━━━━━━━
┃⛇ *❲ 𝓐𝓫𝓪 𝓭𝓮 𝓻𝓮𝓹𝓸𝓻𝓽𝓮𝓼 𝓭𝓪 𝓧𝔂 ❳*
┃⛇ *𝓭𝓮:* ${pushname} / wa.me//${sender.split("@")[0]}
┃⛇ *𝓝𝓸 𝓰𝓻𝓾𝓹𝓸:* ${groupName}
┃⛇ *𝓐̀𝓼:* ${hours}
┣━━━━━━━━━━━━━━━━━━━━━━
┃⛇ _" ${body.slice(5)} "_
┗━━━━━━━━━━━━━━━━━━━━━━━
`
await xyrus.sendMessage(suporte, textos, text)
await sendMedia(from, goSticker + 'tabom1.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(1200)
await reply (`O seu relatório foi enviado e logo será solucionado, obrigada!`)
break

case 'perfil':
try {
var ppimg = await xyrus.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
buffer = await getBuffer(ppimg)
texttto = `
*🗒️ Nome:* ${pushname}
*📍 Status:* ${getBio.status}
*📱 Número:* wa.me//${sender.split("@")[0]}
*🤠 Nível gado* : *${nivelgador}${nivelgado2r}%*
*💃 Nível puta* : *${putar}${putar2}%*
*🥴 Nível de gostosura* : *${gostosurar}${gostosurar2}%*
*🍼 Valor do programa* : *R$${programa}*
`
await xyrus.sendMessage(from, buffer, image, {caption: texttto, quoted: selofoto})
break

case 'gerarcpf': case 'crearcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
reply(`CPF gerado com sucesso : ${cpf}`)
break

case 'ddd':
if (args.length < 1) return reply(`Use ${prefix + comando} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${body.slice(5)}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
reply(`${dddlist}`)	
break

case 'plaq': //by zanga 
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq2': //by zanga 
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq3': //by zanga
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq4': //by zanga
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq5':
if (args.length < 1) return reply(`${prefix}plaq5 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://umethroo.sirv.com/9152e7a9-7d49-4ef-bac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
plaq = ` *Plaquinha feita.* `
await xyrus.sendMessage(from, buffer, image, {caption: plaq, quoted: selocont, thumbnail: null, sendEphemeral:true, contextInfo : {forwardingScore: 500, isForwarded:true}})
break

case 'plaq6':
if (args.length < 1) return reply(`${prefix}plaq6 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://clutamac.sirv.com/1011b71-bab1-49e3-9db-ee2c0646fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`) //api
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq7':
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita.* `
await xyrus.sendMessage(from, buffer, image, {caption: plaq, quoted: selocont, thumbnail: null, sendEphemeral:true})
break

case 'plaq8':
if (args.length < 1) return reply(`${prefix}plaq8 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=1&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`) //api
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq9':
if (args.length < 1) return reply(`${prefix}plaq9 e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://umethroo.sirv.com/fotobundatop.jpg?text.0.text=${teks}&text.0.position.x=-61%25&text.0.position.y=-%25&text.0.size=1&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700`) //api
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'plaq10':
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
await xyrus.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: selocont, thumbnail: null, caption: ' *Plaquinha feita.* '})
break

case 'rola':
try {
if (!cArgs){
let rolaX = await fetchJson ('http://momonga-api.herokuapp.com/plaq/rola?apikey=momonga');
var rolaY = await getBuffer (rolaX.result);
} else if (cArgs) {
let rolaXk = await fetchJson ('http://momonga-api.herokuapp.com/plaq/rola?apikey=momonga&&text=' + 'A rola do ' + cArgs)
var rolaY = await getBuffer (rolaXk.result);
}
} catch(e) {
console.log(e); reply(e)
}
xyrus.sendMessage(from, rolaY, image)
break

case 'komi':
let kom = await fetchJson ('http://momonga-api.herokuapp.com/plaq/komi?apikey=momonga&&text=' + cArgs)
let komi = await getBuffer (kom.result);
xyrus.sendMessage(from, komi, image, {
quoted: mek,
caption: cArgs + '?',
})
break

case 'plaq12':
if(blk.length < 1) return reply(`*❱❱ Modo certo: ${prefix}plaq12 xyx ❰❰*`)
blk = body.slice(6)
if(blk.length > 10) return reply(`*❱❱ Limite Ultrapassado = limit = 10 letras ❰❰*`)
reply(`*❱❱ Aguarde...Estou Criando. ❰❰*`)
  buffer = await getBuffer(`https://costeste.sirv.com/images%20(1).jpeg?text.0.text=${blk}&text.0.position.x=-58%25&text.0.position.y=-18%25&text.0.size=28&text.0.color=000000&text.0.font.style=italic" width="557" height="550" alt="" />`)
  xyrus.sendMessage(from,buffer,image,{quoted:mek,caption:'uiui'})
  break

case 'morte':
case 'death':
                if (!isGroup) return reply(ind.groupo())
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com o nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
reply(morte)
await sleep(2000);
await sendMedia(from, goSticker + 'sorrizin.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
break

case 'gostosa':
                if (!isGroup) return reply(ind.groupo())
                random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20) {bo = 'Fei pra caralho👹KKKKKKKKKKKKK'} else if (boiola == 21 ) {bo = 'mt feio bixo👹??'} else if (boiola == 23 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 24 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 25 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 26 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 27 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 28 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 29 ) {bo = 'mt feio bixo👹??'} else if (boiola == 30 ) {bo = 'mt feio bixo👹👹'} else if (boiola == 31 ) {bo = 'você é aceitável 🧐'} else if (boiola == 32 ) {bo = 'você é aceitável 🧐'} else if (boiola == 33 ) {bo = 'você é aceitável 🧐'} else if (boiola == 34 ) {bo = 'você é aceitável 🧐'}  else if (boiola == 35 ) {bo = 'você é aceitável 🧐'} else if (boiola == 36 ) {bo = 'você é aceitável 🧐'} else if (boiola == 37 ) {bo = 'você é aceitável 🧐'} else if (boiola == 38 ) {bo = 'você é aceitável 🧐'} else if (boiola == 39 ) {bo = 'você é aceitável 🧐'} else if (boiola == 40 ) {bo = 'você é aceitável 🧐'} else if (boiola == 41 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 42 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 43 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 44 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 45 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 46 ) {bo = 'eu pegava 😳??😳'} else if (boiola == 47 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 48 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 49 ) {bo = 'eu pegava 😳😳😳'} else if (boiola == 50 ) {bo = 'GOSTOSAKKKKKKKKKKKK'} else if (boiola > 51) {bo = 'Passa o zap gostosa 😳'}
teks = `Você é ${random}% Gostosa\n\n${bo}`
reply(`${teks}`)
break

case 'casal':
                if (!isGroup) return reply(ind.groupo())
 jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Meus cálculos dizem que @${akuu.jid.split('@')[0]} e @${diaa.jid.split('@')[0]} possuem grande chance de namorar, apenas aceitem o destino...`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					
					case 'abraço':
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer dar um abraço?')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./edit/media/gif/abraço.mp4');
yhb = `Você acaba de dar um abraço em @${mentioned[0].split('@')[0]} ✨`
xyrus.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break

case 'chute':
                if (!isGroup) return reply(ind.groupo())
if (args.length < 1) return reply('marque a pessoa que você quer agredir')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
wew = fs.readFileSync('./edit/media/gif/chute.mp4');
yhb = `Você Acabou de dar um chute em @${mentioned[0].split('@')[0]} 🤡` 
xyrus.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: yhb})
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (args.length < 1) return reply('marque o alvo que você quer dá o tapa')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ukiko = fs.readFileSync('./edit/media/gif/tapa.mp4')
susp = `Você acaba de dar um tapa na raba de 😏 @${mentioned[0].split('@')[0]} 🔥` 
xyrus.sendMessage(from, ukiko,  MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: susp})
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if (args.length < 1) return reply('Marque alguém que vc quer da um beijo')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
wew = fs.readFileSync('./edit/media/gif/beijo.mp4')
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
xyrus.sendMessage(from, wew, video, {mimetype: 'video/gif', quoted: info, caption: susp})
break

case 'ship':
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('marque alguém')
porc = `${Math.floor(Math.random() * 100)}`
yh1b =  `Vocês possuem uma chance de ${porc}% de namorarem.💘`,
wew = fs.readFileSync(`./edit/media/image/foti/ship.jpg`)
xyrus.sendMessage(from, wew, image, {quoted: mek, caption: yh1b})
break

case 'carinho':
                if (!isGroup) return reply(ind.groupo())

if (args.length < 1) return reply('em quem você quer fazer carinho?')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
} 
cu = `Você acaba de fazer carinho em @${mentioned[0].split('@')[0]} `
wew = fs.readFileSync('./edit/media/gif/carinho.mp4');
xyrus.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', quoted: mek, caption: cu})
break

case 'gostosa2':
                if (!isGroup) return reply(ind.groupo())
                      membro = []
                      const mett1 = groupMembers
                      const msdd1 = groupMembers
                      const siapsasa = mett1[Math.floor(Math.random() * mett1.length)]
                      const siapsasa2 = mett1[Math.floor(Math.random() * mett1.length)]
                      const sipssda1 = pushname[Math.floor(Math.random() * msdd1.length)]
                      cuzin = `*ＤＥＴＥＣＴＯＲ   ＤＥ  ＧＯＳＴＯＳＡＳ👩‍⚕️*\n\n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨*\n\n @${siapsasa.jid.split('@')[0]} @${siapsasa2.jid.split('@')[0]} *PARADA(O)S AÍ🖐*\n\n*VOCÊ ACABA DE RECEBER UMA MULTA POR EXCEDER O LIMITE DE GOSTOSURAKKKKKK*\n\n*VALOR DA MULTA:*\n*FOTO DA RABA NO PV kkkkk*`
                      membro.push(siapsasa.jid)
                      membro.push(siapsasa2.jid)
                      mentions(cuzin, membro, true) 
                       break

case 'piada':
            respuesta = [`Qual é a panela que está sempre triste?\n A panela depressão.`, `O que estará escrito na lápide do Papai Noel? \n Ele não está mais em trenós.`, `O que os estilistas fazem no tempo livre? \n Inventam moda.`, `Qual a cidade brasileira onde não tem táxis? \n Uberlândia.`, `Qual é o peixe que caiu do 10º andar? \n O aaaaaaatuuuuuuum.`, `Por que o jacaré tirou o filho da escola? \n Porque ele réptil de ano.`, `O que um tijolo falou para o outro? \n Há um cimento entre nós.`, `Como fazer um nó em duas motos? \n Pega duas Yamaha.`, `Qual campeonato é melhor que aspirina? \n Liberta-Dores!`, `O que a zebra disse para a mosca? \n Você está na minha listra negra.`, `Qual é o cachorro que vai à missa todo dia? \n O pastor alemão.`, `Um gatinho miou para a lua, mas ela não respondeu. Por quê? \n Porque astro-no-mia.`, `Qual é a comida que liga e desliga? \n Estrog-On-Off` ]
            answer = respuesta[Math.floor(Math.random() * respuesta.length)]
            reply(answer)
            addFilter(from)
            break
					
case 'dono': case 'criador':
await reply(`indo!`)

await sleep(2000)
sendDono('')
/*antiga case dono(`
*esse bot é de uso grátis,* você pode obtê-lo através do meu canal no YouTube:
https://youtube.com/channel/UCEXnX1CqgbV5xVabZG71aUw

https://chat.whatsapp.com/J1yRTx7ClM14pNeGShYNXE
`)
await sleep(2000)
sendDono('');*/
break

case 'simi': 
query = args.join('')
anu = await fetchJson(`https://akame-api.herokuapp.com/api/simi?msg={query}&apikey=FK7njbTR`)
pica = await getBuffer(anu.result)
sexoa2 = (anu.resposta)
reply(`${sexoa2}`);
break

				case 'multiprefix':
	
				
                if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
                if (args.length < 1) return reply(` use assim:\n\n.multiprefix on\nmultiprefix off`)
                if (cArgs === 'on'){
                if (isMultiPrefix) return reply(`Já estava ativo antes!`)
                await multiprefix.push(from)
fs.writeFileSync('./docs/json/multiprefix.json', JSON.stringify(multiprefix))
reply (`Sucesso ✓\nmulti prefixo está ativado!`)
                }
                if (cArgs === 'off'){
                if (!isMultiPrefix) return reply (`Já estava desativado antes!`)
                multiprefix.splice(from)
fs.writeFileSync('./docs/json/multiprefix.json', JSON.stringify(multiprefix))
reply (` Multi prefixo está desativado! agora o prefixo do bot é ${prefix}`)
                }

break  

case 'setprefix':
if (!isOwner) return reply(`${say.only.owner}`);
if (isMultiPrefix) return reply (`Desative o multi prefixo antes`);
if (cArgs.length > 1) return reply(`Esse prefixo é inválido`)
await prefix.splice(prefix);
await sleep(1000);
 await prefix.push(cArgs);
fs.writeFileSync('./edit/prefix.json', JSON.stringify(prefix));	
reply (`✓ prefixo alterado com sucesso para ${cArgs}`);
break      

case 'block': case 'bloquear':
if (!isOwner) return reply(`${say.only.owner}`);
if (argsMenorQue(9)) return reply ('numero de telefone muito curto');
if (argsMaiorQue(15)) return reply ('numero de telefone muito longo');
if (!isNumero) return reply('n é um número válido');
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blocked.push(`${mentioned}`)
fs.writeFileSync('./docs/json/blocked.json', JSON.stringify(blocked))
susp = `🚫@${mentioned[0].split('@')[0]} foi bloqueado e não poderá mais usar os comandos do bot??`
mentions(`${susp}`, mentioned, true)   

break

case 'addblack': case 'blackadd':
if (!isOwner) return reply(`${say.only.owner}`);

if (argsMenorQue(9)) return reply ('numero de telefone muito curto');
if (argsMaiorQue(15)) return reply ('numero de telefone muito longo');
if (!isNumero) return reply('n é um número válido');
try {
if (budy.includes("@s.whatsapp.net")){
viado = cArgs;
blacklist.push(`${viado}`)
fs.writeFileSync('./docs/json/blacklist.json', JSON.stringify(blacklist))
teks = `@${viado.split("@")[0]} foi adicionado a lista negra e será banido dos grupos do bot agora em diante.`;
 xyrus.sendMessage(from, teks, text, {contextInfo: {"mentionedJid": [viado]}, quoted:mek});
			}
if (!budy.includes("@s.whatsapp.net")){
viado = cArgs;
blacklist.push(`${viado}@s.whatsapp.net`)
fs.writeFileSync('./docs/json/blacklist.json', JSON.stringify(blacklist))
teks = `@${viado} foi adicionado a lista negra e será banido dos grupos do bot agora em diante.`;
 xyrus.sendMessage(from, teks, text, {contextInfo: {"mentionedJid": [viado]}, quoted:mek});
			}			
} catch(e) {
reply (`Erro`)
}
break

case 'blocklist':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)

jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of blocked) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${blocked.length}`
xyrus.sendMessage(from, jrc.trim(), extendedText, {quoted: selocont, thumbnail:null, contextInfo: {"mentionedJid": blocked}})

break

case 'blacklist':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)

jrc = 'LISTA NEGRA :\n'
for (let benn of blacklist) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${blacklist.length}`
xyrus.sendMessage(from, jrc.trim(), extendedText, {quoted: selocont, thumbnail:null, contextInfo: {"mentionedJid": blacklist}})

break

case 'unblock': case 'desblock': case 'desbloquear':
if (!isOwner) return reply (`${say.only.owner}`);
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blocked.splice(`${mentioned}`)
fs.writeFileSync('./docs/json/blocked.json', JSON.stringify(blocked))
susp = `❎@${mentioned[0].split('@')[0]} foi desbloqueado e poderá usar novamente os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   

break			

case 'unblack':
if (!isOwner) return reply (`${say.only.owner}`);
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
blacklist.splice(`${mentioned}`)
fs.writeFileSync('./docs/json/blacklist.json', JSON.stringify(blacklist))
susp = `@${mentioned[0].split('@')[0]} foi removido da lista negra ✓`
mentions(`${susp}`, mentioned, true)   

break			

case 'aud':
try {
cuc = body.slice(5);
await sendMedia(from, goAudio + cuc, 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
 } catch(e) {
 console.log(e)
 }
break

case 'pvlist': case 'listpv': case 'listapv': case 'listapv':
const getpc = async function(totalchat){
pc = []
a = []
b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}
if (!isOwner) return reply(`${say.only.owner}`)
tdtpt = await client.chats.all()
dpy = await getpc(tdtpt)
sdpt = `*L I S T A  D E  B A T E - P A P O S*\n*Total de Chats* : ${dpy.length}\n\n`
for(let i=0; i<dpy.length; i++){
conts = mek.key.fromMe ? mek.user.jid : client.contacts[dpy[i]] || {notify: jid.replace(/@.+/, '')}
nomes = client.contacts[dpy[i]] != undefined ? client.contacts[dpy[i]].vname || client.contacts[dpy[i]].notify : undefined
sdpt += `• *Nome* : ${nomes}\n• *Tag* : @${dpy[i].split("@")[0]}\n• *Wame* : wa.me//${dpy[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( sdpt, dpy, true)
break 

case 'offline': case 'desligar': case 'off':

		if (!isOwner) return reply(`${say.only.owner}`)
xyrus.setStatus(`📡 Offline`)
await sleep(1000)		
var group = await xyrus.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: 'off, f.',
contextInfo: { mentionedJid: mem },
quoted: selocont
}

dfg = await xyrus.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await xyrus.downloadMediaMessage(encmedia)
for (let _ of dfg) {
xyrus.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmissão enviada com sucesso')
}


break		

case 'on': case 'ligar': case 'online':

		if (!isOwner) return reply(`${say.only.owner}`)
var group = await xyrus.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: 'onlineeeee',
contextInfo: { mentionedJid: mem },
quoted: selocont
}

dfg = await xyrus.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await xyrus.downloadMediaMessage(encmedia)
for (let _ of dfg) {
xyrus.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmissão enviada com sucesso')
}


break		

case 'sorteio': case 'sorteo':
case 'sortear':
addFilter(from)
qy = args.join('')
xyrus.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
d = []
teks = `_*🗣️ Parabéns por ganhar o sorteio ${qy}:_* `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'amongus':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`•      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'gado':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

case 'sn':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return xyrus.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case 'pergunta':
                  respuesta = ['Sim', 'Não', 'Talvez', 'Pode ser', 'Tem uma probabilidade de 99.99999999991.01%', 'Talvez não', 'E eu sei lá', 'mmmm🤔.... deixa eu pensar um pouco\nNão']
                  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
                  if (args.length < 1) return reply('Y la pregunta?')
                  reply(answer)
                  addFilter(from)
                  break

case 'chance':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
xyrus.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return xyrus.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do ${SeuNome} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
xyrus.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'pau':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break

case 'gay':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
reply(hasil)
break

case 'caracoroa':
addFilter(from)
xyrus.updatePresence(from, Presence.composing) 
const cara = fs.readFileSync('./edit/media/sticker/caracoroa/cara.webp');
const coroa = fs.readFileSync('./edit/media/sticker/caracoroa/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./edit/media/sticker/caracoroa/'+fej+'.webp')
xyrus.sendMessage(from, cararoa, sticker, {quoted: mek})
break

case 'dado':
addFilter(from)
xyrus.updatePresence(from, Presence.composing)
if (!isGroup) return reply(linguagem.group())
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./edit/media/sticker/dados/'+dadu+'.webp')
xyrus.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tts':
case 'voz':
                if (args.length < 1) return xyrus.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: mek })
                const gtts = require('./docs/lib/gtts')(args[0])
                if (args.length < 2) return xyrus.sendMessage(from, 'Escribe el texto', text, {quoted: mek})
                dtt = body.slice(8)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                dtt.length > 300
                ? reply('Olha, se você não sabe como usar isso... é melhor não fazer isso. 😐')
                : gtts.save(ranm, dtt, function() {
                xyrus.updatePresence(from, Presence.recording)
                xyrus.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, sendEphemeral: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                fs.unlinkSync(ranm)
                })
                addFilter(from)
                break

case 'idiomas':
                  reply(`*Estes são os idiomas suportados pela voz!*:
                  
                    'af': 'Afrikaans',
                    'sq': 'Albanian',
                    'ar': 'Arabic',
                    'hy': 'Armenian',
                    'ca': 'Catalan',
                    'zh': 'Chinese',
                    'zh-cn': 'Chinese (Mandarin/China)',
                    'zh-tw': 'Chinese (Mandarin/Taiwan)',
                    'zh-yue': 'Chinese (Cantonese)',
                    'hr': 'Croatian',
                    'cs': 'Czech',
                    'da': 'Danish',
                    'nl': 'Dutch',
                    'en': 'English',
                    'en-au': 'English (Australia)',
                    'en-uk': 'English (United Kingdom)',
                    'en-us': 'English (United States)',
                    'eo': 'Esperanto',
                    'fi': 'Finnish',
                    'fr': 'French',
                    'de': 'German',
                    'el': 'Greek',
                    'ht': 'Haitian Creole',
                    'hi': 'Hindi',
                    'hu': 'Hungarian',
                    'is': 'Icelandic',
                    'id': 'Indonesian',
                    'it': 'Italian',
                    'ja': 'Japanese',
                    'ko': 'Korean',
                    'la': 'Latin',
                    'lv': 'Latvian',
                    'mk': 'Macedonian',
                    'no': 'Norwegian',
                    'pl': 'Polish',
                    'pt': 'Portuguese',
                    'pt-br': 'Portuguese (Brazil)',
                    'ro': 'Romanian',
                    'ru': 'Russian',
                    'sr': 'Serbian',
                    'sk': 'Slovak',
                    'es': 'Spanish',
                    'es-es': 'Spanish (Spain)',
                    'es-us': 'Spanish (United States)',
                    'sw': 'Swahili',
                    'sv': 'Swedish',
                    'ta': 'Tamil',
                    'th': 'Thai',
                    'tr': 'Turkish',
                    'vi': 'Vietnamese',
                    'cy': 'Welsh'`)
                  break    
                  
case 'padoru':
data = await fetchJson(`https://raw.githubusercontent.com/shadow578/Project-Padoru/master/padoru.json`, {
method: 'get'
})
n = JSON.parse(JSON.stringify(data.Entries));
nimek = n[Math.floor(Math.random() * n.length)];
owo = (`${nimek.Image}`)
ccf = ('https://raw.githubusercontent.com/shadow578/Project-Padoru/master/')
pok = await getBuffer(`${ccf}${owo}`)
xyrus.sendMessage(from, pok, image, {
quoted: mek, caption: `Nome : ${nimek.Name}`
})

break

case 'stickcum':
case 'scum':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				xyrus.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})	
          break

case 'stickhentai':		  
case 'shentai':
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get(`https://nekos.life/api/v2/img/hentai`)			
            exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				xyrus.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Desculpe, não consegui fazer seu pedido :(')
			 }
          break

case 'stickfeetg':
case 'sfeetg':
case 'stickfeet':
case 'feetg':
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				xyrus.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
	       } catch {
			 reply('Desculpe, não consegui fazer seu pedido :(')
			 }
			break
case 'stickbj':
case 'stickblowbjob':
case 'sbj':
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				xyrus.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Desculpe, não consegui fazer seu pedido :(')
			 }
			break
case 'stickpussy':
case 'spussy':
case 'pussysticker':
case 'stickerpussy':
try {
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				xyrus.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Desculpe, não consegui fazer seu pedido :(')
			 }			
			break
case 'stickneko':
case 'sneko':
case 'nekostick':
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				xyrus.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Desculpe, não consegui fazer seu pedido :(')
			 }

			break

case 'admins':
case 'listadmin':
case 'listadmins':  
case 'listaadmins':   
if (!isGroup) return reply(`${say.only.group}`)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'sites18': //by: yuki
		reply (`\nLista de sites:\n
http://xvideos.com

http://xhamster.com

http://xnxx.com

http://pornhub.com

http://redtube.com

http://youporn.com

http://snapdo.com

http://livejasmin.com

http://youjizz.com

http://tube8.com

http://dmm.co.jp

http://cam4.com

http://hardsextube.com

http://e-hentai.org

http://beeg.com

http://2ch.net

http://kickass.to

http://myfreecams.com

http://imagefap.com

http://chaturbate.com

http://4chan.org

http://drtuber.com

http://adnxs.com

http://webalta.ru

http://abril.com.br

http://lxxx.com

http://largeporntube.com

http://rarbg.com

http://porn.com

http://perfectgirls.com

http://xtube.com

http://nuvid.com

http://nudevista.com

http://video-one.com

http://porntube.com

http://bravotube.com

http://yourlust.com

http://fucked-tube.com

http://spankwire.com

http://adam4adam.com

http://motherless.com

http://pornerbros.com

http://batepapo.uol.com.br

http://4tube.com

http://sunporno.com

http://eroprofile.com

http://say-move.org

http://streamcloud.eu

http://pornmd.com

http://keezmovies.com

http://h2porn.com

http://contenko.com

http://xhamstercams.com

http://pornhublive.com

http://ryushare.com

http://alphaporno.com

http://anysex.com

http://adult-empire.com

http://brazzers.com

http://sambaporno.com

http://claro-search.com

http://tubegalore.com

http://videosexarchive.com

http://exhentai.org

http://tnaflix.com

http://redtubelive.com

http://vporn.com

http://fakku.net

http://anitube.se

http://pornoxo.com

http://freeones.com

http://youjizzlive.com

http://petardas.com

http://woozworld.com

http://literotica.com

http://dojki.com

http://manhunt.net

http://ashemaletube.com

http://ultrasurf.us

http://gayromeo.com

http://liveinternet.ru

http://roulettebotplus.com

http://pornsharía.com

http://rarbg.com

http://extremetube.com

http://dmm.com

http://juicyads.com`)
		break

case 'hentaialea':
 if (!isNsfw) return reply(`${say.only.nsfw}`)
const henta = Math.floor(Math.random() * 48) + 1;
 xy = fs.readFileSync(`./edit/media/image/hentai/${henta}.jpg`);
xyrus.sendMessage(from, xy, image, {quoted:mek, caption: 'ihh'})
break

case 'wpmobile':
let blow = await fetchJson('https://api.xteam.xyz/randomimage/wpmobile?APIKEY=55341fd29facd829')
let blowjob = await getBuffer(blow.blowjob);

await xyrus.sendMessage(from, blowjob, image, {
thumbnail: null,
quoted: mek,
})
break

case 'cosplay18':
try {
let apikey = 'momonga';
let apiResult = await fetchJson('https://momonga-api.herokuapp.com/hentai/cosplay?apikey=' + apikey);
if (apiResult.error) return reply (apiResult.error);
let mandarImagem = await getBuffer(apiResult.result);
xyrus.sendMessage(from, mandarImagem, image, {
quoted: mek,
thumbnail: null,
caption: `🤒 sexy`
});
} catch(e) {
console.log(e); reply(e);
}
break

case 'cosplay':
try {
let xyxyxy = 'momonga';
let minecraft = await fetchJson('https://momonga-api.herokuapp.com/hentai/cosplay?apikey=' + xyxyxy);
if (minecraft.error) return reply (minecraft.error);
let websecso = await getBuffer(minecraft.result);
xyrus.sendMessage(from, websecso, image, {
quoted: mek,
thumbnail: null,
caption: `🤒`
});
} catch(e) {
console.log(e); reply(e);
}
break

case 'baixe':
addFilter(from) 
if (args.length < 1) return reply(`teste`)
teks = args.join(' ')
reply(`aguarde`)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
enviar('_[ ! ] O erro de consulta inserido não existe_')
})
let thumbInfo = `❒「  *Youtube Search*  」
├ *Título :* ${res.all[0].title}
├ *ID de vídeo :* ${res.all[0].videoId}
├ *Carregado em :* ${res.all[0].ago}
├ *Visualizações :* ${res.all[0].views}
├ *Duração :* ${res.all[0].timestamp}
├ *Canal :* ${res.all[0].author.name}
└ *Link do canal :* ${res.all[0].author.url}

*_Aguarde o processo de upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
enviar('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break

case 'top5anime':
case 'top5animes':
anu = await fetchJson(`https://x-restapi.herokuapp.com/api/topanime?apikey=BETA`, {
method: 'get'
})
n = JSON.parse(JSON.stringify(anu.data));
top = n[Math.floor(Math.random() * n.length)];
topp = n[Math.floor(Math.random() * n.length)];
toppp = n[Math.floor(Math.random() * n.length)];
topppp = n[Math.floor(Math.random() * n.length)];
toppppp = n[Math.floor(Math.random() * n.length)];
topi = (top.Judul)
topis = (top.Score)

topii = (topp.Judul)
topiss = (topp.Score)

topiii = (toppp.Judul)
topisss = (toppp.Score)

topiiii = (topppp.Judul)
topissss = (topppp.Score)

topiiiii = (toppppp.Judul)
topisssss = (toppppp.Score)
const topanune = await getBuffer('https://telegra.ph/file/5c6429abd461d868b4f49.jpg')
xyrus.sendMessage(from, topanune, image, {
quoted: mek, caption: `ᷝ           _𝚃𝙾𝙿 5 𝙰𝙽𝙸𝙼𝙴𝚂_
◈ ━━━━━ ◈❮٭❯◈ ━━━━━ ◈  
${topi}
Pontuação : ${topis} / 10
◈ ━━━━━ ◈❮࿅❯◈ ━━━━━ ◈
${topii}
Pontuação : ${topiss} / 10
◈ ━━━━━ ◈❮٭❯◈ ━━━━━ ◈
${topiii}
Pontuação : ${topisss} / 10
◈ ━━━━━ ◈❮࿅❯◈ ━━━━━ ◈
${topiiii}
Pontuação : ${topissss} / 10
◈ ━━━━━ ◈❮٭❯◈ ━━━━━ ◈
${topiiiii}
Pontuação : ${topisssss} / 10
◈ ━━━━━ ◈❮࿅❯◈ ━━━━━ ◈
           _𝚃𝙾𝙿 5 𝙰𝙽𝙸𝙼𝙴𝚂_`
})

break

case 'top5manga':
case 'top5mangas':
anu = await fetchJson(`http://x-restapi.herokuapp.com/api/topmanga?apikey=BETA`, {
method: 'get'
})
n1 = JSON.parse(JSON.stringify(anu.data));
top1 = n1[Math.floor(Math.random() * n1.length)];
topp1 = n1[Math.floor(Math.random() * n1.length)];
toppp1 = n1[Math.floor(Math.random() * n1.length)];
topppp1 = n1[Math.floor(Math.random() * n1.length)];
toppppp1 = n1[Math.floor(Math.random() * n1.length)];
topi1 = (top1.Judul)
topis1 = (top1.Score)

topii1 = (topp1.Judul)
topiss1 = (topp1.Score)

topiii1 = (toppp1.Judul)
topisss1 = (toppp1.Score)

topiiii1 = (topppp1.Judul)
topissss1 = (topppp1.Score)

topiiiii1 = (toppppp1.Judul)
topisssss1 = (toppppp1.Score)
const sexo = await getBuffer('https://telegra.ph/file/2df433596a0e6f822b8cd.jpg')
xyrus.sendMessage(from, sexo, image, {
quoted: mek, caption: `ᷝ           _𝚃𝙾𝙿 5 𝙼𝙰𝙽𝙶𝙰𝚂_
◈ ━━━━━ ◈❮٭❯◈ ━━━━━ ◈  
${topi1}
Pontuação : ${topis1} / 10
◈ ━━━━━ ◈❮࿅❯◈ ━━━━━ ◈
${topii1}
Pontuação : ${topiss1} / 10
◈ ━━━━━ ◈❮٭❯◈ ━━━━━ ◈
${topiii1}
Pontuação : ${topisss1} / 10
◈ ━━━━━ ◈❮࿅❯◈ ━━━━━ ◈
${topiiii1}
Pontuação : ${topissss1} / 10
◈ ━━━━━ ◈❮٭❯◈ ━━━━━ ◈
${topiiiii1}
Pontuação : ${topisssss1} / 10
◈ ━━━━━ ◈❮࿅❯◈ ━━━━━ ◈
           _𝚃𝙾𝙿 5 𝙼𝙰𝙽𝙶𝙰𝚂_`
})

break

case 'wa.me':
case 'wame':
                 xyrus.updatePresence(from, Presence.composing) 
                 options = {
                 text: `*LINK WHATSAPP*\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*😎*`,
                 contextInfo: { mentionedJid: [sender] }
                 }
                 xyrus.sendMessage(from, options, text, { quoted: mek } )
break

case 'gifhentai':
let mp4h = await fetchJson('http://momonga-api.herokuapp.com/hentai/gif/?apikey=momonga');
let mp = await getBuffer(mp4h.result)
xyrus.sendMessage(from, mp, video, {
quoted: mek,
mimetype: Mimetype.gif,
thumbnail: null,
caption: '🥴'
})
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.jid.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.jid.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.jid.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.jid.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(cornos1.jid)
membr.push(cornos2.jid)
membr.push(cornos3.jid)
membr.push(cornos4.jid)
membr.push(cornos5.jid)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.jid.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.jid)
member.push(o02.jid)
member.push(o03.jid)
member.push(o04.jid)
member.push(o05.jid)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.jid)
membr.push(otakus2.jid)
membr.push(otakus3.jid)
membr.push(otakus4.jid)
membr.push(otakus5.jid)
membr.push(otakus6.jid)
membr.push(otakus7.jid)
membr.push(otakus.jid)
membr.push(otakus9.jid)
membr.push(otakus10.jid)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.jid.split('@')[0]}\n${pc1}\n@${paus2.jid.split('@')[0]}\n${pc2}\n@${paus3.jid.split('@')[0]}\n${pc3}\n@${paus4.jid.split('@')[0]}\n${pc4}\n@${paus5.jid.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.jid)
membr.push(paus2.jid)
membr.push(paus3.jid)
membr.push(paus4.jid)
membr.push(paus5.jid)
mentions(pdr, membr, true)
break 

case 'plaq11': //blackzin
if(args.length < 1) return reply(`* Utilize assim: ${prefix}plaq11 xyx*`)
blk = body.slice(6)
if(args.length > 10) return reply(`*Limite Ultrapassado = limit = 10 letras*`)
reply(`*Aguarde...Estou Criando.*`)
  buffer = await getBuffer(`https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=${blk}&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=Sexo%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0" width="718" height="1009" alt="" />`)
  xyrus.sendMessage(from, buffer, image, {quoted: mek ,caption: '©xy'})
  break

case 'recado':
if (!isOwner) return reply(`${say.only.owner}`)
try {
qttp = body.slice(8)
if (args.length < 1) {texti = '*📡 [RECADO]*\n\n(trollei kkk)'} else {texti = `*📡 [RECADO]*\n\n_${qttp}_\n\n©${nomeBot}`}
var group = await xyrus.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: `${texti}`,
contextInfo: { mentionedJid: mem },
quoted: selocont
}

dfg = await xyrus.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await xyrus.downloadMediaMessage(encmedia)
for (let _ of dfg) {
xyrus.sendMessage(_.jid, buff, image, options, {caption: ``})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of dfg) {
sendMess(_.jid, options, ``)
}
reply('Transmissão enviada com sucesso')
}
} catch(e) {
console.log(e)
reply (`${say.error}`)
}
break								
			

case 'leave': case 'kitar':
if (!isOwner) return reply (`${say.only.owner}`)

await sendMedia(from, goAudio + 'adeus.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
await sleep(2000)
await reply (`vazando...`)
             await xyrus.groupLeave(from) 
              break
              
 case 'join': 
      case 'convite': 
      case 'entrar': 
      qy = args.join('')
      if (!isOwner) return  reply(`${say.only.owner}`)
             if (!qy) return reply('quero o link')
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('O link é inválido')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = xyrus.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Grupo inserido com sucesso')
             break			
             
             ////
case 'randoperfil': case 'randofoto':
 if (!isOwner) return reply(`${say.only.owner}`)
const mathty = Math.floor(Math.random() * 12) + 1;
 medi = fs.readFileSync(`./edit/media/image/perfil/${mathty}.jpg`);
await xyrus.updateProfilePicture(xyrus.user.jid, medi);
xyrus.sendMessage(from, medi, image, {quoted:mek, caption: '✓ Foto de perfil alterada'})
console.log(`✓ PROFILE UPDATE`);
break                           
             

case 'seradm':
if (!isOwner) return reply (`${say.only.owner}`);
if(!isBotGroupAdmins) return reply(`${say.only.botAdmin}`);
try {
kkk = dono + '@s.whatsapp.net';
await xyrus.groupMakeAdmin(from, [kkk]);
await reply (`✓ claro, vc tem todo o direito de ser adm, mestre ｡◕‿◕｡`)
} catch(e) {
reoly(`${say.error}`)
}
break

case 'sermembro': case 'merebaixe':
if (!isOwner) return reply (`${say.only.owner}`);
if(!isBotGroupAdmins) return reply(`${say.only.botAdmin}`);
try {
kkk = dono + '@s.whatsapp.net';
await xyrus.groupDemoteAdmin(from, [kkk]);
await reply (`✓ como quiser.`)
} catch(e) {
reoly(`${say.error}`)
}
break



			case 'whitelist':				
		if (!isGroupAdmins) if (!isOwner) return reply(`${say.only.admin}`)
					teks = `╭─「 *WHITELIST* 」\n`
					no = 0
					for (let prem of whitelist) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Total : ${whitelist.length}\n╰──────「 *${nomeBot}* 」`
					xyrus.sendMessage(from, teks.trim(), extendedText, {quoted: selocont, contextInfo: {"mentionedJid": whitelist}})
					
break					

case 'addwhite':
if (!isGroupAdmins) if (!isOwner) return reply(`${say.only.admin}`)
if (argsMenorQue(9)) return reply ('numero de telefone muito curto');
if (argsMaiorQue(15)) return reply ('numero de telefone muito longo');
if (!isNumero) return reply('n é um número válido');					
					
					addp = body.slice(11)
					whitelist.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./docs/json/whitelist.json', JSON.stringify(whitelist))
					reply(`Adicionado com sucesso o ${addp} na lista branca`)
					
break

case 'unwhite': case 'delwhite':
if (!isGroupAdmins) if (!isOwner) return reply(`${say.only.admin}`)	
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
whitelist.splice(`${mentioned}`)
fs.writeFileSync('./docs/json/whitelist.json', JSON.stringify(whitelist))
susp = `❎@${mentioned[0].split('@')[0]} foi removido da lista branca`
mentions(`${susp}`, mentioned, true)   

break			


				

case 'gplista': case 'grouplist': case 'listgp':
case 'gplist':
if (!isOwner) return reply (`${say.only.owner}`)

try {
const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await xyrus.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


tdufg = await xyrus.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `*LISTA DE GRUPOS DO BOT*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){

linkgc = await xyrus.groupInviteCode(`${ingfoo[i].id}`)
if (!linkgc) linkgp = 'Link indisponível';
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Link:* https://chat.whatsapp.com/${linkgc}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
} catch(e) {
reply(`Erro encontrado, talvez o bot não seja adm de algum grupo`)
}
break





		
		
	



case 'menu': case 'comandos': case '?':
menu();
               break	
		
		

		case 'traduzir':
		qpp = args.join(' ')
if(!qpp) return reply('Digite o texto a ser traduzido | Exemplo: .traduzir hello')
translate(`${qpp}`, {to: 'pt'}).then(res => {
  textooo = res.text
  textooo = `${textooo}`
  reply(textooo)
}).catch(err => {
  console.error(err);
});
  break
		



case 'help': case 'ajuda': case 'socorro':
xyrus.sendMessage(from, `${help}`, text, {
quoted:mek,
});
break		
		
		
// #utils


case 'ytsearch':
if (argsMenorQue(1)) return reply (`${insiraAlgo}`);
			try {
        	var aramas = await yts(cArgs);
   			} catch {
        	return await xyrus.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '➢ Titulo: ' + video.title + '\n'
            ytresult += '➢ Link: ' + video.url + '\n________________________\n\n'
    		});
    		ytresult += '◩ *zero*'
    		await xyrus.sendMessage(from, tbuff, image, {quoted: selovid, caption: ytresult});
			
break 

//play
case 'play':
try {
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				buffer = await getBuffer(anu.result.thumbnail)
        sendButImage(
          from,
          `opa ${pushname}`,
          `Selecione um formato abaixo`,
          buffer,
          [
            {
              buttonId: `${prefix}playwithvideo ${cArgs}`,
              buttonText: {
                displayText: `▶ MP4`,
              },
              type: 1,
            },
            {
              buttonId:`${prefix}playwithaudio ${cArgs}`,
              buttonText: {
                displayText: `🎵 MP3`,
              },
              type: 1,
            },
            {
              buttonId:`${prefix}playwithdocument ${cArgs}`,
              buttonText: {
                displayText: `📃 Documento`,
              },
              type: 1,
            },
          ]
        );
        } catch(e) {
        reply (`O Player 1 faiou... tentando no player 2...`)
        console.log(e);
        extraPlay(cArgs);
        }
        break;
        
case 'playwithvideo':  
try {
				 if (args.length < 1) return reply('*qual o nome do video parça?*')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				xyrus.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:selocont, caption: `${nomeBot}`})
				        } catch(e) {
        reply (`O Player 1 faiou... tentando no player 2...`)
        console.log(e);
        extraPlay(cArgs);
        }
					break
case 'playwithdocument':   
try {
				play = cArgs
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)		
				lagu = await getBuffer(anu.result.url_audio)
				xyrus.sendMessage(from, lagu, document, {mimetype: 'audio/mp3', filename: `${play}.mp3`, quoted: seloaud});
				          } catch(e) {
        reply (`O Player 1 faiou... tentando no player 2...`)
        console.log(e);
        extraPlay(cArgs);
        }          
				break        
case 'playwithaudio':   
try {
				play = cArgs
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)		
				lagu = await getBuffer(anu.result.url_audio)
				xyrus.sendMessage(from, lagu, audio, {filename: `${play}.mp3`, quoted: seloaud});
				        } catch(e) {
        reply (`O Player 1 faiou... tentando no player 2...`)
        console.log(e);
        extraPlay(cArgs);
        }
				break        
// fim do play






 case "tourl": case 'upload':
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await xyrus.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("Envia Foto/Video");
        }
        break;
        
        
case 'from':
reply(`${from}`)
break        
        
case 'stalkyt': case 'ytstalk':
if (!cArgs) return reply (`Qual o nome do canal?`)
let w = await fetchJson('https://leyscoders-api.herokuapp.com/api/yt-stalk?q=' + `${cArgs}` + '&apikey=MIMINGANZ');
let imgUrl = await getBuffer(w.result.image)
let textpo = `
*canal:* ${w.result.channel}
*inscritos:* ${w.result.subscriber_count}
*descrição:* _${w.result.desc}_

*link:* ${w.result.link}
`
await xyrus.sendMessage(from, imgUrl, image, {quoted: selocont, caption: textpo})

break

case 'bemvindo2':  
if (!isGroup) return reply(`somente em grupos`)
if (!isGroupAdmins) return reply(`somente adms`)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
if (isVacilo) return reply('❎O recurso já está ativado no grupo❎')
vacilo.push(from)
fs.writeFileSync('./docs/json/vacilo.json', JSON.stringify(vacilo))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isVacilo) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(vacilo).forEach((i) => {
if (vacilo[i] === from) {
position = i
}
})
if (position !== false) {
vacilo.splice(position, 1)
fs.writeFileSync('./docs/json/vacilo.json', JSON.stringify(vacilo))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break
		
case 'gerarnick': case 'criarnick':
let nickname = generator.randomNickname();
reply(`*nickname gerado:*\n_${nickname}_`)
break


// #down

case 'playvid': // megumin bot
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *SISTEMA DE ANTISPAM!*\n _aguarde 15 segundos..._`);

addFilter(sender);
				 if (args.length < 1) return reply('*qual o nome do video parça?*')
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}}&apikey=NinoWangy`)
				if (anu.error) return reply(anu.error)
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
			xyrus.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: `${nomeBot}`})
					break

	case 'image':
case 'gimage':
case 'googleimage': case 'img':
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *sistema de Anti_Spam!*\n _aguarde 15 segundos..._`);

addFilter(sender);
if (args.length < 1) return reply('O que você deseja procurar?')
for (var i = 0; i < 5; i++) {
try {
console.log(color('[DEV]', 'cyan'), color('「❔ 」PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))

teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: selocont, caption: `*Resultados da pesquisa de :* _${teks}_`, thumbnail: null})
}
}
} catch(e) {
await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
}
break


case 'searchanime': case 'anime':
bimbim = args.join(' ');
if (!bimbim) return reply(`Insira o nome do anime que deseja pesquisar!\nExemplo:\n_${cmd} Overlord_`)
 
try{
const anime = new Anime("https://gogoanime.ai")
anime.animeInfoFetch(bimbim).then(data => {
let nome = data.name
let cover = data.cover
let type = data.type
let sinopse = data.summary
let gen = data.genre
let othername = data.otherName
let link = data.link

translate(sinopse, {to: 'pt'}).then(res => {
  var tradução = res.text
ptexto = `
*nome:* ${nome}
*${othername}*

*temporada:* ${type}

*gênero:* ${gen}

*link:* ${link}

*sinopse:* ${tradução}`

xyrus.sendMessage(
    from, 
    { url: data.cover }, 
    MessageType.image, 
    { mimetype: Mimetype.image, caption: ptexto }       
)

  }).catch(err => {
  console.error(err);
})



}).catch(console.error);
/*anime.getEpLinks("https://www1.gogoanime.ai/category/" + `${body.slice(13)}`).then(links => {
    console.log(links) // episódios
})*/
} catch(e) {
reply(`Erro encontrado ou resultado inválido`)
}

break















// #menus

case 'menufigu': case 'figu':
reply (`${menufigu}`)
break

case 'menudono':
reply (`${menudono}`)
break

case 'menuadmins': case 'menuadm': case 'adms': case 'adm':
reply (`${menuadms}`)
break

case 'menuutils': case 'utils':
reply (`${menuutils}`)
break

case 'menunsfw': case 'hentai': case 'porno': case 'menuhentai':
if (!isNsfw) return reply (`${say.only.nsfw}`);
reply(`${menuhentai}`)
break

case 'galeria':
reply (`${galeria}`)
break
		
// #admins	#adms

case 'status':
var b1 = isMute? '✓':'*X*';
var b2 = isMultiPrefix? '✓':'*X*';
var b3 = isNsfw? '✓':'*X*';
var b4 = isWelkom? '✓':'*X*';
var b5 = isAntiLink? '✓':'*X*';
var b6 = isAntiFake? '✓':'*X*';
var b7 = isAntiPalavrão? '✓':'*X*';
var b8 = isAntiPv? '✓':'*X*';

texxto = `
⚬༚  ◃─────────▹  ༚⚬
▣□「 𝙎𝙏𝘼𝙏𝙐𝙎 」□▣
⚬༚  ◃─────────▹  ༚⚬

┏━ ๏ *𝔾𝕣𝕦𝕡𝕠* ๏ ━┓
┣⇝𝐴𝑛𝑡𝑖-𝐿𝑖𝑛𝑘: ${b5}
┣⇝𝐴𝑛𝑡𝑖-𝐹𝑎𝑘𝑒: ${b6}
┣⇝𝐴𝑛𝑡𝑖-𝑂𝑓𝑒𝑛𝑠𝑎: ${b7}
┣⇝𝑊𝑒𝑙𝑐𝑜𝑚𝑒: ${b4}
┣⇝𝑁𝑠𝑓𝑤: ${b3}
┣⇝𝑀𝑢𝑙𝑡𝑖-𝑃𝑟𝑒𝑓𝑖𝑥𝑜: ${b2}
┗━━━━━━━━━━━
┏━ ๏ *𝔹𝕠𝕥* ๏ ━┓
┣⇝𝑀𝑢𝑡𝑒: ${b1}
┣⇝𝐴𝑛𝑡𝑖-𝑃𝑣: ${b8}
┗━━━━━━━━━

⚬༚ ◃── ༚⚬
⚬༚ ──▹ ༚⚬
`

xyrus.sendMessage(from, texxto, text, {quoted: selotempoonline })
break

case 'delete': 
case 'del':
case 'apagar':
if (!isOwner) if (!isGroupAdmins)return reply(`${say.only.admin}`)
try {
xyrus.deleteMessage(from, {
id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
reply (`✓`)
} catch {
reply (`Não foi possível deletar a msg`)
}
break

case 'roleta': case 'ruleta':
if (!isBotGroupAdmins) return reply (`${say.only.botAdmin}`)
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
if (!isGroup) return reply(`${say.only.group}`)
try {
jds = []
const A2 = groupMembers
const B2 = groupMembers
const TAMBOR = ["na perna","no saco","no ovo","na cabeça","no pescoço","no peito","no olho","no estômago","na boca","na perna","na testa","no braço"]
 const C2 = A2[Math.floor(Math.random() * A2.length)]
 tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
await reply(`😈GIRANDO O TAMBOR, E SE PREPAREM PARA AS CONSEQUÊNCIAS😈 `)
await sendMedia(from, goAudio + 'bang bang.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});

D1 = `💥POW💥 O TAMBOR GIROU E ACERTOU O @${C2.jid.split('@')[0]}, MORREU COM UM TIRO *${tpa}*`             			
await mentions(D1, jds, true)				
jds.push(C2.jid)				  
jds.push(C2.jid)
await sleep(1000)
await xyrus.groupRemove(from, [C2.jid])
} catch(e) {
console.log(e)
}
break

case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`);
var value = body.slice(9)
var group = await xyrus.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
xyrus.sendMessage(from, options, text)
break


 case 'setpic': case 'setfoto':
              if (!isGroupAdmins) return reply(`${say.only.admin}`)
              if (!isGroup) return reply(`${say.only.group}`)
              if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await xyrus.downloadMediaMessage(encmedia)
              await xyrus.updateProfilePicture(from, media)
             await reply (`${say.sucess}`)
              } else {
              reply(`Marque uma imagem com uma legenda${prefix}setpic`)
}
              break			

case 'checkativo': case 'checarativo':
 
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
if (!isGroup) return reply(`${say.only.group}`)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}

break

case 'topativos':
 
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
if (!isGroup) return reply(`${say.only.group}`)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
				
mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await xyrus.sendMessage(from, `É necessário 3 jogadores para se construir um ranking`, text, {quoted: selocont})
}

break

case 'contador':  
 
try{
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);

if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = ` ⋆⃟ۣۜ᭪➣ Atividade dos membros do grupo:\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += ` ⋆⃟ۣۜ᭪➣ @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n ⋆⃟ۣۜ᭪➣ Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
} else {
teks += ` ⋆⃟ۣۜ᭪➣ @${obj.jid.split('@')[0]}\n ⋆⃟ۣۜ᭪➣ Mensagens: 0\n ⋆⃟ۣۜ᭪➣ Comandos: 0\n`
}
mem.push(obj.jid)
}
xyrus.sendMessage(from, teks, extendedText, {quoted: selocont, thumbnail:null, contextInfo:{mentionedJid: mem}})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break


case 'setname':
if (!isGroup) return reply(`${say.only.group}`)
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
qrt = args.join(" ")
await xyrus.groupUpdateSubject(from, `${qrt}`)
xyrus.sendMessage(from, 'Sucesso, alterado o nome do grupo', text, {quoted: selocont})
break

case 'setdesc':
if (!isGroup) return reply(`${say.only.group}`)
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
qrt = args.join(" ")
await xyrus.groupUpdateDescription(from, `${qrt}`)
xyrus.sendMessage(from, 'Sucesso, alterado a descrição do grupo', text, {quoted: selocont})
break

case 'opengp':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, false)
break

case 'closegp':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.owner}`)
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, true)
break

case 'opentime':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = mek.participant;
let q = args.join(' ').split(' ');
let qa = parseInt(q[0]);
let qb = q[1];
if (isNaN(qa)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}opentime 30 s`)

if (qb === 's') {
let calc = parseInt(qa + '000')
await reply (`O grupo será aberto em ${qa} segundos`)
await sleep(calc);
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, false)
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qa} segundos!`)
}
if (qb === 'm') {
calc = parseInt(qa * 60 + '000')
await reply (`O grupo será aberto em ${qa} minutos`)
await sleep(calc);
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, false)
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qa} minutos!`)
}
if (qb === 'h') {
calc = parseInt(qa * 3600 + '000')
await reply (`O grupo será aberto em ${qa} horas`)
await sleep(calc);
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, false)
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}opentime 5 m`)
}
break

case 'closetime':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = mek.participant;
let qtt = args.join(' ').split(' ');
let qaa = parseInt(qtt[0]);
let qbb = qtt[1];
if (isNaN(qaa)) return reply (`Precisa ser um número!!!\n\nexemplo:\n${prefix}closetime 30 s`)

if (qbb === 's') {
let calc = parseInt(qaa + '000')
await reply (`O grupo será fechado em ${qaa} segundos`)
await sleep(calc);
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, true)
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} segundos!`)
}
if (qbb === 'm') {
calc = parseInt(qaa * 60 + '000')
await reply (`O grupo será fechado em ${qaa} minutos`)
await sleep(calc);
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, true)
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} minutos!`)
}
if (qbb === 'h') {
calc = parseInt(qaa * 3600 + '000')
await reply (`O grupo será fechado em ${qaa} horas`)
await sleep(calc);
await xyrus.groupSettingChange(from, GroupSettingChange.messageSend, true)
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} horas!`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}closetime 5 m`)
}
break





case 'gpdesc': case 'descgp': case 'desc':
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
ppUrl = await xyrus.getProfilePicture(from)
buffer = await getBuffer(ppUrl)
return xyrus.sendMessage(from, buffer, image, {quoted: selocont, thumbnail:null, caption: `*NOME* : ${groupName}\n*MEMBROS* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* :\n\n ${groupDesc}`})
} catch(e) {
await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
}
break

case 'linkgp':
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
linkgc = await xyrus.groupInviteCode(from)
return reply('https://chat.whatsapp.com/'+linkgc + `\n\n_${nomeBot}_`)
} catch(e) {
reply (`${say.error}`)
}
break

case 'ban': case 'expulsar':
if (!isOwner) if (!isGroupAdmins) {
return sendMedia(from, goAudio + 'admin.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true})
 }
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(6) + '@s.whatsapp.net';
let kkk = mek.message.extendedTextMessage.contextInfo.participant
await sleep(1000);
if (kkk) {
if (kkk === xyrus.user.jid) return reply (`Eu não vou me banir cara de cu`)
if (kkk === dono) return reply (`Eu não vou remover meu dono, idiota`)
await xyrus.groupRemove(from, [kkk])
await reply (`banido 😎`)
/*await sendMedia(from, goAudio + 'ban.mp3', 'audio', {
quoted: mek,
mimetype: Mimetype.mp4Audio,
ptt: true,
});*/
} else if (!kkk) {
if (cucu === xyrus.user.jid) return reply (`Eu não vou me banir cara de cu`)
if (cucu === dono) return reply (`Eu não vou remover meu dono, idiota`)
await xyrus.groupRemove(from, [cucu])
await reply (`banido 😎`)
/*await sendMedia(from, goAudio + 'removido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});*/
}
} catch(e) {
console.log(e)
reply (`${say.error}\ntente novamente`)
}
break

case 'promote': 
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(10) + '@s.whatsapp.net';
let kkk = mek.message.extendedTextMessage.contextInfo.participant

if (kkk) {
await xyrus.groupMakeAdmin(from, [kkk])
await sendMedia(from, goAudio + 'promovido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 ptt:true});
 await reply('adm adicionado com sucesso ✓')
} else if (!kkk) {
await xyrus.groupMakeAdmin(from, [cucu])
await sendMedia(from, goAudio + 'promovido.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 ptt:true});
 await reply('adm adicionado com sucesso ✓')
}

} catch(e) {
reply (`${say.error}\ntente novamente`)
}
break

case 'demote':
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.admin}`)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(9) + '@s.whatsapp.net';
let kkk = mek.message.extendedTextMessage.contextInfo.participant

if (kkk) {
await xyrus.groupDemoteAdmin(from, [kkk])
reply (`adm removido com sucesso ✓`)
} else if (!kkk) {
await xyrus.groupDemoteAdmin(from, [cucu])
reply (`adm removido com sucesso ✓`)
}

} catch(e) {
reply (`${say.error}\ntente novamente`)
}
break



case 'add':
const qd = args.join(' ')
if (!qd) return reply (`insira o número!`)
if (!isGroup) return reply (`${say.only.group}`)
if (!isGroupAdmins) if (!isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
const dl = body.slice(5)
if (dl.length > 13)return reply(`Exemplo : ${prefix}add 5588997321488`) 
if (args[0].startsWith('08')) return reply('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
xyrus.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar usuário,tente de outro jeito.')
}

break

/*
case 'add':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
let cucu = body.slice(5) + '@s.whatsapp.net';

await xyrus.groupAdd(from, [cucu])
reply(`Bem vindo!`)
} catch(e) {
console.log(e)
reply (`${say.error}\ntente novamente`)
}
break
*/
//

case 'nsfw':	
if (!isOwner) if (!isGroupAdmins) return reply(`Só adm, nóia`)
try {
if (isNsfw) {
			sendButMessage(from, seloOn, '☘️ *nsfw* está ativado', `com o nsfw ativado, os comandos +18 do bot são desbloqueados.`, [
            {              
              buttonId: `nsfw off`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isNsfw) {
			sendButMessage(from, seloOff, '🍎️ *nsfw* está desativado', `com o nsfw desativado, os comandos +18 do bot são bloqueados.`, [
            {              
              buttonId: `nsfw on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			
            
case 'welkom': case 'welcome':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isWelkom) {
			sendButMessage(from, seloOn, '☘️ *welkom* está ativado', `com o welkom ativado, todos que entram no grupo recebem uma mensagem de boas vindas.`, [
            {              
              buttonId: `welkom offf`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isWelkom) {
			sendButMessage(from, seloOff, '??️ *welkom* está desativado', `com o welkon desativado, o bot suspende as mensagens de boas vindas.`, [
            {              
              buttonId: `welkom onn`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			   
            
case 'mute': case 'mutar':
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isMute) {
			sendButMessage(from, seloOn, '☘️ *mute* está ativado', `com o mute ativado, apenas admins conseguem usar o bot.`, [
            {              
              buttonId: `mute off`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isMute) {
			sendButMessage(from, seloOff, '🍎️ *mute* está desativado', `com o mute desativado, todos conseguem usar o bot`, [
            {              
              buttonId: `mute on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			                                    

case 'antilink':	
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiLink) {
			sendButMessage(from, seloOn, '☘️ *antilink* está ativado', `com o antilink ativado, todos os participantes (exceto adms) que enviarem links serão banidos imediatamente.`, [
            {              
              buttonId: `antilink off`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiLink) {
			sendButMessage(from, seloOff, '🍎️ *antilink* está desativado', `ative o antilink para proteger seu grupo contra divulgação, quem mandar link é banido (exceto adms)`, [
            {              
              buttonId: `antilink on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			
            
case 'antipalavrao': case 'antipalavrão': case 'antipalav':

if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiPalavrão) {
			sendButMessage(from, seloOn, '☘️ *antipalavrão* está ativado', `com o antipalavrão ativo, todos que xingarem serão banidos`, [
            {              
              buttonId: `antipalavrão off`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiPalavrão) {
			sendButMessage(from, seloOff, '🍎️ *antipalavrão* está desativado', `ative o antipalavrão para evitar xingamentos`, [
            {              
              buttonId: `antipalavrão on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                reply(`Erro inesperado, tente novamente`)
                }
            break			            

case 'antifake':	
if (!isOwner) if (!isGroupAdmins) return reply (`${say.only.admin}`);
try {
if (isAntiFake) {
			sendButMessage(from, seloOn, '☘️ *antifake* está ativado', `com o antifake ativado, qualquer número estrangeiro será banido imediatamente ao entrar`, [
            {              
              buttonId: `antifake off`,
              buttonText: {
                displayText:  `🔴 [DESATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
if (!isAntiFake) {
			sendButMessage(from, seloOff, '🍎️ *antifake* está desativado', `com o antifake desativado, número estrangeiros não serão banidos ao entrar.`, [
            {              
              buttonId: `antifake on`,
              buttonText: {
                displayText:  `🟢 [ATIVAR]`,
              },
              type: 1,
            },
          ]);        
          }
                } catch(e) {
                await sendMedia(from, goAudio + 'error.mp3', 'audio', {
mimetype: Mimetype.mp4Audio,
 quoted: mek,
 ptt:true});
                }
            break			

// #hentai


case 'rhentai': //rando hentai
if (!isNsfw) return reply (`${say.only.nsfw}`)
rhentai();
break



case 'eroneko':
if (!isNsfw) return reply(`${say.only.nsfw}`)
eroneko();
break


case 'ass':
if (!isNsfw) return reply(`${say.only.nsfw}`)
ass();
break


case 'trap':
if (!isNsfw) return reply(`${say.only.nsfw}`)
trap();
break



case 'futa':
if (!isNsfw) return reply(`${say.only.nsfw}`)
futa();
break


case 'bdsm':
if (!isNsfw) return reply(`${say.only.nsfw}`)
bdsm();
break


case 'cum':
if (!isNsfw) return reply(`${say.only.nsfw}`)
cum();
break



case 'doujin':
if (!isNsfw) return reply(`${say.only.nsfw}`)
doujin();
break


case 'femdom':
if (!isNsfw) return reply(`${say.only.nsfw}`)
femdom ();
break



case 'ero':
if (!isNsfw) return reply(`${say.only.nsfw}`)
ero();
break



case 'maid':
if (!isNsfw) return reply(`${say.only.nsfw}`)
maid();
break



case 'orgy':
if (!isNsfw) return reply(`${say.only.nsfw}`)
orgy();
break



case 'panties':
if (!isNsfw) return reply(`${say.only.nsfw}`)
panties();
break



case 'cuckold':
if (!isNsfw) return reply(`${say.only.nsfw}`)
cuckold
break



case 'netorare':
if (!isNsfw) return reply(`${say.only.nsfw}`)
netorare();
break

	case 'blowjob':
	for (let i =0; i < 10; i++){
try {
let xuxa = 'momonga';
let superaidol = await fetchJson('https://momonga-api.herokuapp.com/hentai/blowjob?apikey=' + xuxa);
if (superaidol.error) return reply (superaidol.error);
let pikachola = await getBuffer(superaidol.result);
xyrus.sendMessage(from, pikachola, image, {
quoted: mek,
thumbnail: null,
caption: `hehe`
});
} catch(e) {
console.log(e); reply(e);
}
}
break



case 'feet':
if (!isNsfw) return reply(`${say.only.nsfw}`)
feet();
break


case 'pussy':
if (!isNsfw) return reply(`${say.only.nsfw}`)
pussy ();
break



case 'ugly':
if (!isNsfw) return reply(`${say.only.nsfw}`)
ugly();
break

case 'fantasy':
if (!isNsfw) return reply(`${say.only.nsfw}`)
fantasy();
break



case 'gangbang':
if (!isNsfw) return reply(`${say.only.nsfw}`)
gangbang();
break



case 'foxgirl':
if (!isNsfw) return reply(`${say.only.nsfw}`)
foxgirl();
break



case 'cumslut':
if (!isNsfw) return reply(`${say.only.nsfw}`)
cumslut();
break



case 'glasses':
if (!isNsfw) return reply(`${say.only.nsfw}`)
glasses();
break



case 'thighs':
if (!isNsfw) return reply(`${say.only.nsfw}`)
thighs();
break



case 'tentacles':
if (!isNsfw) return reply(`${say.only.nsfw}`)
tentacles();
break



case 'solo':
if (!isNsfw) return reply(`${say.only.nsfw}`)
solo ();
break



case 'school':
if (!isNsfw) return reply(`${say.only.nsfw}`)
school();
break



case 'eroyuri':
if (!isNsfw) return reply(`${say.only.nsfw}`)
eroyuri();
break

case 'zettai':
if (!isNsfw) return reply(`${say.only.nsfw}`)
zettai()
break


case 'succubus':
if (!isNsfw) return reply(`${say.only.nsfw}`)
succubus();
break


// fim do hentai



// #galeria

case 'kimono':
              kimono();
break

case  'uwu':
uwu();
break




case 'randonime': case 'randoanime': case 'ranime':
randoanime();
break



case 'loli':
loli();
break

case 'yuri':
yuri();
break



case 'wallpaper':
wallpaper();
break


case 'neko':
neko();
break

           	
		
/// #stickers

case 'sfundo':  
try {
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await xyrus.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `` //🔮 ${NomeDoBot}
dua = typeof anu[1] !== 'undefined' ? anu[1] : ``//💎 @${pushname}._
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
xyrus.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await xyrus.downloadAndSaveMediaMessage(encmedia2, `./docs/src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${NomeDoBot}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(from)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falha, no momento da conversão de ${type} em adesivo`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./docs/src/sticker/stickwm_${sender}.exif ./docs/src/sticker/${sender}.webp -o ./docs/src/sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./docs/src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./docs/src/sticker/${sender}.webp`)
fs.unlinkSync(`./docs/src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./docs/src/sticker/${sender}.webp`)
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch(e) {
console.log(e)
}
break

case 'togif': case 'agif':
try {
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await xyrus.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
xyrus.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: selocont, caption: `${nomeBot}`})
fs.unlinkSync(mediaaa)
} else {
reply(`formato errado`)
}
} catch(e) {
reply (`${say.only.error}`)
}
break 

	case 'toimg': 
	try {
				if (!isQuotedSticker) return reply('❬ 📍 ❭ Marque alguma figurinha...')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uploadimg(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await sendMediaURL(from, anjj.data.result, 'Pronto')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							reply(`gagal`)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							xyrus.sendMessage(from, buffer, image, { caption:`aqui está!`,quoted: selocont })
							fs.unlinkSync(ran)
						}
					})
				}
				} catch(e) {
reply (`${say.only.error}`)
}
break  
 
case 'rename': case 'take':
try {
var namaPackss = argsSplit[0];
var authorPackss = argsSplit[1];
if (isSpecialCaracter(cArgs)) return reply('🤖⚠️ Não é permitido letras modificadas!!')
stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await xyrus.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
xyrus.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: selocont})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
//fs.unlinkSync('./docs/src/undefined.webp')
})
});
} catch(e) {
console.log(e);
reply (`${say.error}`)
}
break

case 'figutag': case 'stag':

			                          
if (!isOwner) if (!isGroupAdmins) return reply(`${say.only.owner}`)
try {
                                        if (!isQuotedSticker) return reply('cadê a figurinha?')

                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo

                                        delb = await xyrus.downloadMediaMessage(boij)

                                        await fs.writeFileSync(`stctagg.webp`, delb)

                                        var group = await xyrus.groupMetadata(from)

                                        var member = group['participants']

                                        var mem = []

                                        member.map(async adm => {

                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))

                                        })

					var itsme = `0@s.whatsapp.net`

					var split = `${body.slice(8)}`

					var selepbot = {

						contextInfo: {

							mentionedJid: mem,

                                                        participant: itsme,                                                                                                                          quotedMessage: {

                                                                extendedTextMessage: {

                                                                text: split,

							   }

					      	      }

					       }

					}

					result = fs.readFileSync(`stctagg.webp`)

                                        xyrus.sendMessage(from, result, sticker, selepbot)

					await fs.unlinkSync(`stctagg.webp`)
} catch(e) {
reply (`${say.only.error}`)
}
					break

case 'attp':
reply(`use sem caracteres especiais`)
op = body.slice(6)
if (!op) return await reply(`Cadê o texto, hum? Use assim:\n\n ${prefix}attp SEU TEXTO`)
var txt = encodeURI(op)
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${op}`)
await xyrus.sendMessage( from, anu, sticker, {quoted:mek, thumbnail:null})
break	  

case 's': case 'f': case 'sticker': case 'st': case 'fig':
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *anti SPAM*\n _aguarde 15 segundos..._`);

addFilter(sender);
				try {
				 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${nomeBot}`, authorname)} ${ran} -o ${ran}`, async (error) => {
								
									xyrus.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: selocont})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`${nomeBot}`, authorname)} ${ran} -o ${ran}`, async (error) => {
									
									xyrus.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: selocont})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(`⏳ *espere*`)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
							
								exec(`webpmux -set exif ${addMetadata(`${nomeBot}`, authorname)} ${ranw} -o ${ranw}`, async (error) => {
								
									await xyrus.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: selocont})
									fs.unlinkSync(ranw)
								})
								
							})
						})
					
					} else {
						reply(`Envie uma imagem com o autocolante legenda ou uma etiqueta de imagem já enviada`)
					}

} catch(e) {
console.log('erro : %s')
return reply(`Erro inesperado. Tente novamente ou reveja a sua case`)
}
					
					break		
///

///
case 'f2': case 's2':
if (!isOwner) if (isFiltered(sender)) return reply(`📍 *anti SPAM*\n _aguarde 15 segundos..._`);

addFilter(sender);
try {
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${nomeBot}`)} ${ran} -o ${ran}`, async(error) => {

xyrus.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: selocont
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await xyrus.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${nomeBot}`)} ${ran} -o ${ran}`, async(error) => {

xyrus.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: selocont
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch(e) {
return reply (`Erro inesperado`)
}
break						

//#listas

case 'avpessimo':
await reply (`ಥ_ಥ obrigada pela avaliação`)
mathHelp(7, 1);
await sendMedia(from, goSticker + 'sad' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = dono + '@s.whatsapp.net';
tsexto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★☆☆☆☆
`
await xyrus.sendMessage(suporte, tsexto, text)
break

case 'avruim':
await reply (`¯\_(ツ)_/¯ obrigada pela avaliação`)
mathHelp(7, 1);
await sendMedia(from, goSticker + 'sad' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = dono + '@s.whatsapp.net';
kptexto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★☆☆☆
`
await xyrus.sendMessage(suporte, kptexto, text)
break

case 'avbom':
await reply (`UwU obrigada pela avaliação`)
mathHelp(14, 1);
await sendMedia(from, goSticker + 'happy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = dono + '@s.whatsapp.net';
kkktexto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★★☆☆
`
await xyrus.sendMessage(suporte, kkktexto, text)
break

case 'avmuitobom':
await reply (`(◠‿◕) obrigada pela avaliação`)
mathHelp(14, 1);
await sendMedia(from, goSticker + 'happy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = dono + '@s.whatsapp.net';
xxxtexto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★★★☆
`
await xyrus.sendMessage(suporte, xxxtexto, text)
break

case 'avperfeito':
await reply (`ʘ‿ʘ obrigada pela avaliação`)
mathHelp(14, 1);
await sendMedia(from, goSticker + 'happy' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
suporte = dono + '@s.whatsapp.net';
llltexto = `*[ avaliação ]*
*de:* ${pushname} / wa.me//${sender.split("@")[0]}
*no grupo:* ${groupName}

*nota:* ★★★★★
`
await xyrus.sendMessage(suporte, llltexto, text)
break



case 'nomes':
await reply (`*VOCÊ DEVE ESCOLHER UM DESSES NOMES ABAIXO:*
ainz
akira
amigo
baka
biel
bolsonaro
caio
chefe
dark
davi
feio
gab
gabriel
henrique
idiota
joao
kaneki
kauan
kazuma
leonardo
lixo
lucas
luiz
marcelo
mateus
mestre
miguel
momonga
naruto
noia
oniichan
overlord
parceiro
paulo
pervertido
renan
ricardo
sasuke
sato
senpai
tarado
`)
await reply('após ter escolhido *um desses nomes listados acima*, vá até a pasta\nedit\n e insira seus dados (número de telefone e nome), sem símbolos especiais!')
await reply (` mais nomes em breve! visite meu canal no YouTube(tio Momonga) para ter acesso às futuras atualizações!`)
break


case 'interagir': case 'interação':
reply(`*USE SEM PREFIXO:*

_ auauau

_ bang bang

_ boa noite

_ boa tarde

_ bom dia

_ glub glub

_ interessante

_ mas bah

_ miau

_ risada maléfica

_ te amo bot

_ canta bot

_ bot sua gostosa

_ foda

`)
break

					
				
				default:
if (isCmd) if (!isOwner) {
/*mathHelp(11, 1);
await sendMedia(from, goSticker + 'baka' + valorMath + '.webp', 'sticker', {
mimetype: Mimetype.sticker,
 quoted: mek,});
 await sleep(3000)*/
umdois = `esse comando não existe, digite ${prefix}menu para ver os comandos!`
await xyrus.sendMessage(from, umdois, text, {quoted: mek});
 }
if (isCmd) if (isOwner) await xyrus.sendMessage(from, "comando inexistente, digite ${prefix}menu para ver os comandos", text, {quoted: mek});
						
                           } //#fim das cases 
                           };
                           
resolve(funcExecutCase())
} catch(e) {
reject(e)
};
});

executCase
.then(() => console.log('finish'))
.catch((erro) => {
console.log(erro);
reply(`${erro}`);
})


                            
                           
//////***************************"////////////	
//#buttons

if (selectedButton === 'XXX1'){
reply('botão 1 pressionado');
};
if (selectedButton === 'XXX2'){
reply('botão 2 pressionado');
};
if (selectedButton === 'XXX3'){
reply('botão 3 pressionado');
};


if (selectedButton === `outros`){
reply(`┏━━━━━━━━━━━━━━━━━━━━━━
┃*⍝ 𝙾𝚞𝚝𝚛𝚊𝚜 𝙾𝚙𝚌̧𝚘̃𝚎𝚜: ⍝*
┣━━━━━━━━━━━━━━━━━━━━━━
┃「*${prefix}help* 」
┃⤿𝗠𝗼𝘀𝘁𝗿𝗮𝗿𝗮́ 𝗼 𝗠𝗲𝗻𝘂 𝗱𝗲 𝗔𝗷𝘂𝗱𝗮
┃
┃「*${prefix}avaliar* 」
┃⤿𝗔𝘃𝗮𝗹𝗶𝗲 𝗼 𝗯𝗼𝘁! 𝗘𝗹𝗲 𝗳𝗶𝗰𝗮𝗿𝗮́ 𝗺𝗮𝗶𝘀 𝗾𝘂𝗲 𝗴𝗿𝗮𝘁𝗼!
┃
┃「*${prefix}bug* 」
┃⤿𝗥𝗲𝗽𝗼𝗿𝘁𝗮𝗿 𝗨𝗺 𝗘𝗿𝗿𝗼 𝗔𝗼 𝗖𝗿𝗶𝗮𝗱𝗼𝗿
┃
┃「*${prefix}criador* 」
┃⤿𝗙𝗮𝗹𝗮𝗿 𝗖𝗼𝗺 𝗢 𝗗𝗼𝗻𝗼
┃
┃「*${prefix}learn* 」
┃⤿𝗧𝘂𝘁𝗼𝗿𝗶𝗮𝗹 𝗗𝗲 𝗖𝗼𝗺𝗼 𝗜𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗢 𝗕𝗼𝘁 𝗡𝗼 𝗦𝗲𝘂 𝗖𝗲𝗹𝘂𝗹𝗮𝗿
┃
┗━━━━━━━━━━━━━━━━━━━━━━━`)

await sleep(1500)
await reply(`por enquanto apenas isso!`)
}

if (selectedButton == `nsfw on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isNsfw) return reply('*📌 Já estava ativo antes*')
nsfw.push(from)
fs.writeFileSync('./docs/json/nsfw.json', JSON.stringify(nsfw))
reply('*NSFW ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};
if (selectedButton == `nsfw off`) {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
try {
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isNsfw) return reply('*📌 Já estava desativado antes*')
nsfw.splice(from)
fs.writeFileSync('./docs/json/nsfw.json', JSON.stringify(nsfw))
reply('*NSFW desativado* com sucesso 😔✊')
} catch(e) {
reply('erro inesperado')
}
};


if (selectedButton == `antilink on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiLink) return reply('*📌 Já estava ativo antes*')
antilink.push(from)
fs.writeFileSync('./docs/json/antilink.json', JSON.stringify(antilink))
reply('*ANTILINK ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `antipalavrão on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiPalavrão) return reply('*📌 Já estava ativo antes*')
antipalavrão.push(from)
fs.writeFileSync('./docs/json/antipalavrão.json', JSON.stringify(antipalavrão))
reply('*ANTIPALAVRÃO ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == 'statusgp'){
	
	isNsfw ? t = ' ✓ ': t = ' X ';
isWelkom ? t2 = ' ✓ ': t2 = ' X ';;
isAntiLink ? t3 = ' ✓ ': t3 = ' X ';
isAntiFake ? t4 = ' ✓ ': t4 = ' X ';
isMultiPrefix ? t5 = ' ✓ ': t5 = ' X ';
Antidoc ? t6 = ' ✓ ': t6 = ' X ';
isAntiPalavrão? t7 = ' ✓ ': t7 = ' X ';

reply (`
┏━ ⌬ *𝚂𝚃𝙰𝚃𝚄𝚂* ⌬ ━┓
┣⌲𝑨𝒏𝒕𝒊-𝑳𝒊𝒏𝒌: ${t3}
┣⊰𝑨𝒏𝒕𝒊-𝑭𝒂𝒌𝒆: ${t4}
┣⌲𝑨𝒏𝒕𝒊-𝑶𝒇𝒆𝒏𝒔𝒂: ${t7}
┣⊰𝑩𝒐𝒂𝒔-𝑽𝒊𝒏𝒅𝒂𝒔: ${t2}
┣⌲𝑵𝒔𝒇𝒘: ${t}
┣⊰𝑴𝒖𝒍𝒕𝒊-𝑷𝒓𝒆𝒇𝒊𝒙𝒐: ${t5}
┣⌲𝑨𝒏𝒕𝒊-𝑫𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒐: ${t6}
┗━━━━━━━━━━━
`)
}

if (selectedButton == `antifake on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isAntiFake) return reply(`${isAtivado}`)
antifake.push(from)
fs.writeFileSync('./docs/json/antifake.json', JSON.stringify(antifake))
reply('*ANTIFAKE ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `antilink off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiLink) return reply('*📌 Já estava desativado antes*')
antilink.splice(from)
fs.writeFileSync('./docs/json/antilink.json', JSON.stringify(antilink))
reply('*ANTILINK desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `antipalavrão off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiPalavrão) return reply('*📌 Já estava desativado antes*')
antipalavrão.splice(from)
fs.writeFileSync('./docs/json/antipalavrão.json', JSON.stringify(antipalavrão))
reply('*ANTIPALAVRÃO desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `antifake off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isAntiFake) return reply(`${say.isDesativado}`)
antifake.splice(from)
fs.writeFileSync('./docs/json/antifake.json', JSON.stringify(antifake))
reply('*ANTIFAKE desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `welkom offf`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isWelkom) return reply('*📌 Já estava desativado antes*')
welkom.splice(from)
fs.writeFileSync('./docs/json/welkom.json', JSON.stringify(welkom))
reply('*WELKOM desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `mute off`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (!isMute) return reply('*📌 Já estava desativado antes*')
mute.splice(from)
fs.writeFileSync('./docs/json/mute.json', JSON.stringify(mute))
reply('*MUTE desativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `welkom onn`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isWelkom) return reply('*📌 Já estava desativado antes*')
welkom.push(from)
fs.writeFileSync('./docs/json/welkom.json', JSON.stringify(welkom))
reply('*WELKOM ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};

if (selectedButton == `mute on`) {
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (!isGroupAdmins) if (!isOwner) return reply (`${say.only.admin}`)
if (isMute) return reply('*📌 Já estava desativado antes*')
mute.push(from)
fs.writeFileSync('./docs/json/mute.json', JSON.stringify(mute))
reply('*MUTE ativado* com sucesso')
} catch(e) {
reply('erro inesperado')
}
};
//#button #welkom
if (selectedButton === 'menuWelkom') {
menu();
	}
if (selectedButton === 'regrasWelkom') {
reply(`${groupDesc}`);
	}	

// antilink

if (document.includes(type)){
if (!Antidoc) return
if (!botNumber) return
if (isGroupAdmins) return reply(`hummmm documento`)     
reply(`Não permitimos envio de documentos no grupo, por questões de segurança de travas e etc..., então por conta disso, terei que te remover, qualquer dúvida,entre em contato com algum adm.`)
xyrus.groupSettingChange(from, GroupSettingChange.messageSend, true)		
setTimeout(() =>{
xyrus.groupRemove(from, [sender])
}, 1000)
setTimeout( () => {
xyrus.groupSettingChange(from, GroupSettingChange.messageSend, false)
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
xyrus.sendMessage(from, clear , MessageType.text, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
}

if (isAntiPalavrão) if (budY.includes("piroca") ||(budY.includes("filho da puta") || (budY.includes("toma no cu") || (budY.includes("no seu cu") || (budY.includes("toma no seu cú") || (budY.includes("teu cú") ||  (budY.includes("teu cu") || (budY.includes("no seu cú") || (budY.includes("tmnc") || (budY.includes("arrombado") || (budY.includes("fudid") || (budY.includes(" gore") || (budY.includes("bosta") || (budY.includes("fdp") || (budY.includes("merda") || (budY.includes("buceta") || (budY.includes("do seu cu") || (budY.includes("do seu cú") || (budY.includes("puta")))))))))))))))))))){
if (isOwner) if (isGroupAdmins) {
return reply (`n vou banir você pelo palavrão :3`)
}
reply (`🛑 *palavra ofensiva detectada* 🛑`)
await sleep(5000);
await xyrus.groupRemove(from, [sender]);
}

if (isAntiLink) if (budy.includes("https://") || (budy.includes("http://") || (budy.includes("//youtube") || (budy.includes("TED ou PIX") || (budy.includes("🤑🤑🤑") || (budy.includes(".com") || (budy.includes("s.kwai") || (budy.includes("www.") || (budy.includes("wa.me") )))))))))  {
if (isWhiteList) return
try {
if (!isBotGroupAdmins) return reply(`${say.only.botAdmin}`)
if (isOwner) return reply (`Vc é meu dono, não posso te banir :3`);
if (isGroupAdmins) return reply (`Vc é admin, não vai levar ban`);
try {
await reply(`se fudeu kkkkk`)
await sleep(500)
await xyrus.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Erro ao remover membro`)
}
} catch(e) {
reply('erro inesperado')
}
} else if (isImage && imageCaption) {
if (imageCaption.includes('https://') || (imageCaption.includes('http://') || (imageCaption.includes('TED ou PIX') || (imageCaption.includes('wa.me') || (imageCaption.includes('www.') || (imageCaption.includes('s.kwai') || (imageCaption.includes('.com')))))))) {
if (isWhiteList) return
if (isOwner) return reply (`Vc é meu dono, não posso te banir :3`);
if (isGroupAdmins) return reply (`Vc é admin, não vai levar ban`);
try {
await reply(`se fudeu kkkkk`)
await sleep(500)
await xyrus.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Erro ao remover membro`)
}
}
}
if (isVideo && videoCaption) {
if (videoCaption.includes('https://') || (videoCaption.includes('http://') || (videoCaption.includes('TED ou PIX') || (videoCaption.includes('wa.me') || (videoCaption.includes('www.') || (videoCaption.includes('s.kwai') || (videoCaption.includes('.com')))))))) {
if (isWhiteList) return
if (isOwner) return reply (`Vc é meu dono, não posso te banir :3`);
if (isGroupAdmins) return reply (`Vc é admin, não vai levar ban`);
try {
await reply(`se fudeu kkkkk`)
await sleep(500)
await xyrus.groupRemove(from, [sender]);
reply(`vai tarde, baka`)
} catch {
reply(`Erro ao remover membro`)
}
}
}

	
  
                           
		} catch (e) {
					return console.log('Error : %s', color(e, 'red'))
		
		}
	})
	

	
	xyrus.on('group-participants-update', async (anu) => {
		
	if (blacklist.includes(anu.participants[0])){
	const mdata = await xyrus.groupMetadata(anu.jid)
	num = anu.participants[0]  
await xyrus.sendMessage(mdata.id, 'removido por estar na lista negra', MessageType.text)
return await xyrus.groupRemove(mdata.id, [num])			
}
if(antifake.includes(anu.jid)) {
	const mdata = await xyrus.groupMetadata(anu.jid)
			if (anu.action == 'add'){		
				num = anu.participants[0]            		
				try {
if (whitelist.includes(anu.participants[0])){
	const mdata = await xyrus.groupMetadata(anu.jid)
	num = anu.participants[0]  
return await xyrus.sendMessage(mdata.id, '✓ salvo pela white list', MessageType.text)
		
}				
				if(!num.split('@')[0].startsWith(55)){
				if(num.includes(xyrus.user.jid)) return
				if(num.includes(dono)) return
						//if (!xyrus.user.jid) return
				xyrus.sendMessage(mdata.id, '👮🏻‍♀️Números fake aqui não "amigo" 👮🏻‍♀️️', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O NÚMERO FAKE...','red'))
			return xyrus.groupRemove(mdata.id, [num])
					}, )
				}
		} catch(e) {
		return reply (`${say.erro}`)
		}	}
		}
		
		if (!welkom.includes(anu.jid)) return;
		try {
			const mdata = await xyrus.groupMetadata(anu.jid);
			console.log(anu);
			if (anu.action == 'add') {
		//	if (xyrus.user.jid) return
				num = anu.participants[0];
		
				/*
				try {
					ppimg = await xyrus.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
				}
// #welkom		
let buff = await getBuffer(ppimg)		*/




function mathHelp (valor1, valor2) {
valorMath = Math.floor(Math.random() * (valor1 - valor2) + valor2);
mathResult = valorMath;
resultMath = valorMath
 }
 const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `MEMBRO NOVO`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL; MEMBRO NOVO,;;;\nFN:'MEMBRO NOVO',\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./edit/media/image/selos/1.jpg`)
        }}}
mathHelp(29, 1);

               buttons = [{buttonId:`menuWelkom`, 
               buttonText:{displayText: `😎 Menu`},type:1},
{buttonId:`regrasWelkom`, 
               buttonText:{displayText: `📕 Regras`},type:1},
               ]

               imageMsg = (await xyrus.prepareMessageMedia(fs.readFileSync(`./edit/media/image/menu/${mathResult}.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./edit/media/image/momonga.jpeg`)})).imageMessage

const groupAdmins = getGroupAdmins(mdata.participants);

               buttonsMessage = {

 contentText: " ",
 footerText: `Bem vindo @${num.split("@")[0]}!\nVc está no grupo ${mdata.subject}\nmembros: ${mdata.participants.length}\nadmins: ${groupAdmins.length}\n\ngrupo criado por: ${mdata.subjectOwner.split("@")[0]}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await xyrus.prepareMessageFromContent(mdata.id,{buttonsMessage},{quoted: selocont,
contextInfo: {"mentionedJid": [num]},
thumbnail:null
})
               xyrus.relayWAMessage(prep)             
			
			} else if (anu.action == 'remove') {
			
				num = anu.participants[0];
const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(mdata.id ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `ADEUS ${num.split("@")[0]}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL; MEMBRO NOVO,;;;\nFN:'MEMBRO NOVO',\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./edit/media/image/selos/1.jpg`)
        }}}				/*			
				try {
					ppimg = await xyrus.getProfilePicture(`${num.split('@')[0]}@c.us`);
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
				}*/
function mathHelp (valor1, valor2) {
valorMath = Math.floor(Math.random() * (valor1 - valor2) + valor2);
mathResult = valorMath;
resultMath = valorMath
 }
mathHelp(29, 1);
               buttons = [{buttonId:`kkkkkk`, 
               buttonText:{displayText: `F chat 🤡`},type:1},
{buttonId:`kkkkjjjjjkk`, 
               buttonText:{displayText: `Vai tarde 😎`},type:1},
               ]
               imageMsg = (await xyrus.prepareMessageMedia(fs.readFileSync(`./edit/media/image/menu/${mathResult}.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./edit/media/image/momonga.jpeg`)})).imageMessage				
				
               buttonsMessage = {

               contentText: `@${num.split("@")[0]} saiu`,
                 footerText: `${readmore}restam ${mdata.participants.length} cornos 😔`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await xyrus.prepareMessageFromContent(mdata.id,{buttonsMessage},{quoted: selocont,
contextInfo: {"mentionedJid": [num]},
thumbnail:null
})
               xyrus.relayWAMessage(prep)
               
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'));
		}
	})

	xyrus.on('CB:Blocklist', json => {
            if (blocked.length > 2) return;
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'));
	    }
	})

}
starts()

} catch(e) {
console.log(e)
}