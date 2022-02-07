/**
   * Bot privado By sayo/breno *
   * Meu contato : wa.me/5562936180708 *
   * Visite meu rest api 😁 : https://akame-api.herokuapp.com/docs *
*/

const axios = require('axios')
const cheerio = require('cheerio')


function apkmody(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://apkmody.io/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  boxs_postagens = []  
  $("div.flex-item").each(function(c, d) {
    name = $(d).find("div.card-title > h2.truncate").text();
    desc = $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim();
    img = $(d).find("div.card-image > img").attr('src');
    link = $(d).find("article.card.has-shadow.clickable > a").attr('href');
    const Data = {
      criador: "Breno",
      img: img,
      nome: name,
      descrição: desc,
      link: link
    }
    boxs_postagens.push(Data)
  })
  resolve(boxs_postagens)
  }).catch(reject)
  });
}

//DAFONTE
const dafontSearch = async (query) => {
const base = `https://www.dafont.com`
const res = await axios.get(`${base}/search.php?q=${query}`)
const $ = cheerio.load(res.data)
const hasil = []
const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
$('div').find('div.container > div > div.preview').each(function(a, b) {
$('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) { 
$('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) { 
let link = `${base}/` + $(b).find('a').attr('href')
let titulo = $(d).text() 
let estilo = $(f).text() 
hasil.push({ titulo, estilo, total, link }) 
}) 
}) 
}) 
return hasil
}

const dafontDown = async (link) => {
const des = await axios.get(link)
const sup = cheerio.load(des.data)
const result = []
let estilo = sup('div').find('div.container > div > div.lv1right.dfbg').text() 
let titulo = sup('div').find('div.container > div > div.lv1left.dfbg').text() 
try {
isi = sup('div').find('div.container > div > span').text().split('.ttf')
saida = sup('div').find('div.container > div > span').eq(0).text().replace('ttf' , 'zip')
} catch {
isi = sup('div').find('div.container > div > span').text().split('.otf')
saida = sup('div').find('div.container > div > span').eq(0).text().replace('otf' , 'zip')
}
let download = 'http:' + sup('div').find('div.container > div > div.dlbox > a').attr('href')
result.push({ estilo, titulo, isi, saida, download})
return result
}

//GRUPO
function gpsrc(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://zaplinksbrasil.com.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.grupo").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var conteudo = $(say).find("div.listaCategoria").text().trim();
    var resultado = {
      titulo: titulo,
      img: img,
      conteudo: conteudo,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//STICKER SEARCH
function st(nome) {
return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				rand = link[Math.floor(Math.random() * link.length)]
				axios.get(rand)
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						const url = [];
						$$('#stickerPack > div > div.row > div > img').each(function(a, b) {
							url.push($$(b).attr('src').split('&d=')[0])
						})
						resolve({
							criador: '@breno',
							titulo: $$('#intro > div > div > h1').text(),
							autor: $$('#intro > div > div > h5 > a').text(),
							autor_link: $$('#intro > div > div > h5 > a').attr('href'),
							figurinhas: url
						})
					})
			})
	})
}

//SOUND CLOUD DOWNLOAD
function soundl(link) {
return new Promise((resolve, reject) => {
		const opções = {
			method: 'POST',
			url: "https://www.klickaud.co/download.php",
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			formData: {
				'value': link,
				'2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37': '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
			}
		};
		request(opções, async function(error, response, body) {
			console.log(body)
			if (error) throw new Error(error);
			const $ = cheerio.load(body)
			resolve({
				titulo: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
				total_downloads: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)').text(),
				capa: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				link_dl: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
			});
		});
	})
}

//PORNHUB
function pornhub(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://pt.pornhub.com/video/search?search=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("li.pcVideoListItem.js-pop.videoblock.videoBox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('data-thumb_url');
    var duração = $(say).find("var.duration").text().trim();
    var qualidade = $(say).find("span.hd-thumbnail").text().trim();
    var autor = $(say).find("div.usernameWrap").text().trim();    
    var visualizações = $(say).find("span.views").text().trim();    
    var data_upload = $(say).find("var.added").text().trim();        
    var hype = $(say).find("div.value").text().trim();    
    var link2 = `https://pt.pornhub.com${link}`
    var resultado = {
      titulo: titulo,
      img: img,
      duração: duração,
      qualidade: qualidade,
      autor: autor,
      visualizações: visualizações,
      data_upload: data_upload,
      hype: hype,
      link: link2
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//XVIDEOS
function xvideos(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://xvideosporno.blog.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.postbox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var duração = $(say).find("time.duration-top").text().trim();
    var qualidade = $(say).find("b.hd-top").text().trim();
    var resultado = {
      titulo: titulo,
      img: img,
      duração: duração,
      qualidade: qualidade,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//UPTODOWN
function uptodown(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://br.uptodown.com/android/search/${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.item").each((_, say) => {
    var titulo = $(say).find("div.name").text().trim();
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img.app_card_img.lazyload").attr('data-src');
    var descrição = $(say).find("div.description").text().trim();
    var resultado = {
      titulo: titulo,
      link: link,
      icone: img,
      descrição: descrição
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//GRUPOS WHATSAPP
function gpwhatsapp() {
return new Promise((resolve, reject) => {
  axios.get(`https://gruposwhats.app/`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.col-12.col-md-6.col-lg-4.mb-4.col-group").each((_, say) => {
    var nome = $(say).find("h5.card-title").text().trim();
    var descrição = $(say).find("p.card-text").text().trim();
    var link = $(say).find("a.btn.btn-success.btn-block.stretched-link.font-weight-bold").attr('href');
    var img = $(say).find("img.card-img-top.lazy").attr('data-src');
    var resultado = {
      nome: nome,
      link: link,
      descrição: descrição,
      img: img
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}


//HENTAIS TUBE
function hentaistube(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.hentaistube.com/buscar/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.epiItem").each((_, say) => {
    var titulo = $(say).find("div.epiItemNome").text().trim();
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var resultado = {
      titulo: titulo,
      link: link,
      img: img
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}


//NERDING
function nerding(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.nerding.com.br/search?q=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.col-sm-6.col-xs-12.item-boxed-cnt").each((_, say) => {
    var titulo = $(say).find("h3.title").text().trim();
    var descrição = $(say).find("p.summary").text().trim();
    var imagem = $(say).find("img.lazyload.img-responsive").attr('src');
    var link = $(say).find("a.pull-right.read-more").attr('href');
    var review = $(say).find("span.label-post-category").text().trim();
//    var autor = $(say).find("p.post-meta-inner").text().trim();
    var resultado = {
      titulo: titulo,
      descrição: descrição,
      imagem: imagem,
      review: review,      
      link: link
//      autor: autor
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//APKMODHACKER
function apkmodhacker(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://apkmodhacker.com/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.post-inner.post-hover").each((_, say) => {
    var nome = $(say).find("h2.post-title.entry-title").text().trim();
    var descrição = $(say).find("div.entry.excerpt.entry-summary").text().trim();
    var imagem = $(say).find("img.attachment-thumb-medium.size-thumb-medium.wp-post-image").attr('src');
    var link = $(say).find("a").attr('href');
    var categoria = $(say).find("p.post-category").text().trim();
    var horario_upload = $(say).find("time.published.updated").attr('datetime');   
    var resultado = {
      nome: nome,
      descrição: descrição,
      categoria: categoria,
      imagem: imagem,
      link: link,
      horario_upload: horario_upload
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    image: $(b).find('img').attr('data-src')
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

function porno() {
    return new Promise((resolve, reject) => {
        axios.get('https://tikporntok.com/?random=1')
        .then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = {}
            hasil.title = $('article > h1').text()
            hasil.source = $('article > div.video-wrapper.vxplayer').attr('data-post') || 'Web Not Response'
            hasil.thumb = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-poster') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            hasil.desc = $('article > div.intro').text()
            hasil.upload = $('article > div.single-pre-meta.ws.clearfix > time').text()
            hasil.like = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(1) > span').text()
            hasil.dislike = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(2) > span').text()
            hasil.favorite = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(3) > span').text()
            hasil.views = $('article > div.single-pre-meta.ws.clearfix > div > span:nth-child(4) > span').text()
            hasil.tags = $('article > div.post-tags').text()
            hasil.video = $('article > div.video-wrapper.vxplayer > div.vx_el').attr('src') || $('article > div.video-wrapper.vxplayer > div.vx_el').attr('data-src') || 'https://4.bp.blogspot.com/-hyMqjmQQq4o/W6al-Rk4IpI/AAAAAAAADJ4/m-lVBA_GC9Q5d4BIQg8ZO3fYmQQC3LqSACLcBGAs/s1600/404_not_found.png'
            resolve(hasil)
        })
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

module.exports = { pinterest, wallpaper, wikimedia, porno, quotesAnime,  gpwhatsapp, hentaistube, nerding, apkmodhacker, xvideos, uptodown, pornhub, soundl, st, gpsrc, dafontSearch, dafontDown,  apkmody }