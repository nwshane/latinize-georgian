const test = require('ava')
const latinizeGeorgian = require('./index.js')

test('Testing suite works', t => t.pass())

test('Transliterates one char', t => {
  t.is(latinizeGeorgian('ა'), 'A')
})

test('Transliterates two char', t => {
  t.is(latinizeGeorgian('აბ'), 'Ab')
})

test('By default capitalizes first words of sentences.', t => {
  t.is(
    latinizeGeorgian('შენ ხარ ვენახი. მე ვარ მჭამელი.'),
    "Shen khar venakhi. Me var mch'ameli."
  )
})

test('By default capitalizes sentences when preceded by white space', t => {
  t.is(
    latinizeGeorgian('  შენ ხარ ვენახი.     მე ვარ მჭამელი.'),
    "  Shen khar venakhi.     Me var mch'ameli."
  )
})

test('Transliterates three spaces', t => {
  t.is(latinizeGeorgian('   '), '   ')
})

test('Transliterates whole Georgian alphabet', t => {
  t.is(
    latinizeGeorgian(
      'ა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ ჟ რ ს ტ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჯ ჰ'
    ),
    "A b g d e v z t i k' l m n o p' zh r s t' u p k gh q sh ch ts dz ts' ch' kh j h"
  )
})
