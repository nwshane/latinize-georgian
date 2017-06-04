const test = require('ava')
const latinizeGeorgian = require('./index.js')

test('Testing suite works', t => t.pass())

test('Transliterates one char', t => {
  t.is(latinizeGeorgian('ა'), 'a')
})

test('Transliterates two char', t => {
  t.is(latinizeGeorgian('აბ'), 'ab')
})

test('Transliterates three spaces', t => {
  t.is(latinizeGeorgian('   '), '   ')
})

test('Transliterates whole Georgian alphabet', t => {
  t.is(latinizeGeorgian(
    'ა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ ჟ რ ს ტ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჯ ჰ'
  ),
  "a b g d e v z t i k' l m n o p' zh r s t' u p k gh q sh ch ts dz ts' ch' kh j h"
)
})
// test('Transliterates whole text', t =>)
