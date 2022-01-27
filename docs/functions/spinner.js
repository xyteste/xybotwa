const Spinners = require('spinnies');
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const point = { 
  interval: 70,
  frames: ["∙∙∙",
			"●∙∙",
			"∙●∙",
			"∙∙●",
			"∙∙∙"]
}
const sucesso = {
  interval: 200,
  frames: ["📡","🔌"]
}
const spinners = new Spinners({
  spinner: point,
  color: 'blue',
  succeedColor: 'green',
  failColor: 'red',
  spinnerColor: 'white'
});


async function spinLoad () {
await setTimeout(() => {
 spinners.add('999', { text: 'Acordando a Xy...' });
}, 0)
}
async function spinOn () {
await spinners.add('888', { text: 'Conexão estabelecida', color: 'cyan'});
await sleep(100);
await spinners.remove('999');
setTimeout(() => {
 spinners.succeed('888', { text: 'Xy está acordada' });
}, 2000)
}

module.exports = { spinLoad, spinOn };
