//https://datatab.net/statistics-calculator/charts/create-histogram

import fs from 'fs'

const data = []
const data2 = []
const data5 = []
const data10 = []
const data50 = []

while(data.length < 1000) {
  data.push(Math.random())
  data2.push(new Array(2).fill().map(_ => Math.random()))
  data5.push(new Array(5).fill().map(_ => Math.random()))
  data10.push(new Array(10).fill().map(_ => Math.random()))
  data50.push(new Array(50).fill().map(_ => Math.random()))
}

const Export = {
  data2: data2.map(x => x.reduce((a, b) => a + b) / x.length),
  data5: data5.map(x => x.reduce((a, b) => a + b) / x.length),
  data10: data10.map(x => x.reduce((a, b) => a + b) / x.length),
  data50: data50.map(x => x.reduce((a, b) => a + b) / x.length),
}

fs.writeFile('./export/default.csv', data.map((x, i) => `${i},${x}`).join("\n"), 'utf8', e => {if(e) console.log(e)})
Object.keys(Export).forEach(v => fs.writeFile(`./export/${v}.csv`, Export[v].map((x, i) => `${i},${x}`).join("\n"), 'utf8', e => {if(e) console.log(e)}))


const boxMuller100 = []
const boxMuller500 = []
const boxMuller1000 = []


while(boxMuller100.length < 100){
  const x = Math.random()
  const y = Math.random()
  const r = Math.sqrt(x ** 2 + y ** 2)
  const n1 = Math.sqrt(-2 * Math.log(x)) * Math.cos(2 * Math.PI * y)
  const n2 = Math.sqrt(-2 * Math.log(x)) * Math.sin(2 * Math.PI * y)
  boxMuller100.push(n1, n2)
}

fs.writeFile('./export/boxMuller100.csv', boxMuller100.map((x, i) => `${i},${x}`).join("\n"), 'utf8', e => {if(e) console.log(e)})

const mathExpect = data.reduce((a, b) => a + b) / data.length

const dispersion = data.map(x => (x - mathExpect) ** 2).reduce((a, b) => a + b) / (data.length - 1)

const deviation = Math.sqrt(dispersion)