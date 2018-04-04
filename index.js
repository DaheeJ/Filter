const data = require('./js.json')

// console.log(data)

const R = data.filter((senator) => senator.party === 'Republican' )

const D = data.filter((senator) => senator.party === 'Democrat')

// console.log(R,D)

const fromUt = data. filter((senator) => senator.state === 'UT')

const senior = data.filter((senator) => senator.senator_rank === 'senior')