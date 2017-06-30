const georgianToLatinMap = require('./georgianToLatinMap.json')

const latinizeChar = (georgianChar) => {
  const latinChar = georgianToLatinMap[georgianChar]
  return latinChar ? latinChar : georgianChar
}

const latinizeString = (georgianString) => (
  georgianString.split('').map(latinizeChar).join('')
)

const capitalizeChar = (char) => char.toUpperCase()

const capitalizeSentences = (latinString) => (
  latinString.replace(/(^(\s+)?\w|[\r\n\.]+(\s+)?(\w))/g, capitalizeChar)
)

module.exports = (georgianString) => (
  capitalizeSentences(latinizeString(georgianString))
)
