import latinizeGeorgian from './index.js'

test('Transliterates one char', () => {
  expect(latinizeGeorgian('ა')).toBe('A')
})

test('Transliterates two char', () => {
  expect(latinizeGeorgian('აბ')).toBe('Ab')
})

test('By default capitalizes first words of sentences.', () => {
  expect(latinizeGeorgian('შენ ხარ ვენახი. მე ვარ მჭამელი.'))
  .toBe("Shen khar venakhi. Me var mch'ameli.")
})

test('By default capitalizes sentences when preceded by white space', () => {
  expect(
    latinizeGeorgian('  შენ ხარ ვენახი.     მე ვარ მჭამელი.'))
  .toBe(
    "  Shen khar venakhi.     Me var mch'ameli."
  )
})

test('By default capitalizes first word after new line.', () => {
  expect(
    latinizeGeorgian('შენ ხარ ვენახი\nმე ვარ მჭამელი'))
  .toBe(
    "Shen khar venakhi\nMe var mch'ameli"
  )
})

test('Transliterates three spaces', () => {
  expect(latinizeGeorgian('   ')).toBe('   ')
})

test('Transliterates whole Georgian alphabet', () => {
  expect(
    latinizeGeorgian(
      'ა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ ჟ რ ს ტ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჯ ჰ'
    )).toBe(
    "A b g d e v z t i k' l m n o p' zh r s t' u p k gh q sh ch ts dz ts' ch' kh j h"
  )
})
