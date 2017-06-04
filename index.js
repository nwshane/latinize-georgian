const georgianToLatinMap = require('./georgianToLatinMap.json')

const latinizeChar = (georgianChar) => {
  const latinChar = georgianToLatinMap[georgianChar]
  return latinChar ? latinChar : georgianChar
}

module.exports = (georgian) => {
  return georgian.split('').map(latinizeChar).join('')
}
