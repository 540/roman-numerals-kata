import { decimalToRoman } from '../src/romanNumerals'

describe('Roman Numerals', () => {
  it('converts decimal number into roman number', () => {
    expect(decimalToRoman(1)).toBe('I')
    expect(decimalToRoman(2)).toBe('II')
    expect(decimalToRoman(3)).toBe('III')
    expect(decimalToRoman(4)).toBe('IV')
    expect(decimalToRoman(5)).toBe('V')
    expect(decimalToRoman(6)).toBe('VI')
    expect(decimalToRoman(8)).toBe('VIII')
    expect(decimalToRoman(9)).toBe('IX')
    expect(decimalToRoman(10)).toBe('X')
    expect(decimalToRoman(11)).toBe('XI')
    expect(decimalToRoman(17)).toBe('XVII')
    expect(decimalToRoman(20)).toBe('XX')
    expect(decimalToRoman(40)).toBe('XL')
    expect(decimalToRoman(45)).toBe('XLV')
    expect(decimalToRoman(87)).toBe('LXXXVII')
    expect(decimalToRoman(94)).toBe('XCIV')
    expect(decimalToRoman(400)).toBe('CD')
    expect(decimalToRoman(423)).toBe('CDXXIII')
    expect(decimalToRoman(2230)).toBe('MMCCXXX')
    expect(decimalToRoman(3210)).toBe('MMMCCX')
  })

  it('throws error if number is above 3999', () => {
    expect(decimalToRoman(4000)).toBe('Unsupported number')
  })

  it('throws error if number is 0 or below', () => {
    expect(decimalToRoman(0)).toBe('Unsupported number')
  })
})
