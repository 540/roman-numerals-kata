export const decimalToRoman = (decimal: number) => {
  if (decimal > 3999 || decimal <= 0) return 'Unsupported number'

  let romanBuilder = ''

  romanNumbers.forEach(({ roman, decimal: currentDecimal }, index) => {
    while (decimal >= currentDecimal) {
      romanBuilder += roman
      decimal -= currentDecimal
    }
  })

  return romanBuilder
}
const romanNumbers = [
  {
    decimal: 1000,
    roman: 'M'
  },
  {
    decimal: 900,
    roman: 'CM'
  },
  {
    decimal: 500,
    roman: 'D'
  },
  {
    decimal: 400,
    roman: 'CD'
  },
  {
    decimal: 100,
    roman: 'C'
  },
  {
    decimal: 90,
    roman: 'XC'
  },
  {
    decimal: 50,
    roman: 'L'
  },
  {
    decimal: 40,
    roman: 'XL'
  },
  {
    decimal: 10,
    roman: 'X'
  },
  {
    decimal: 9,
    roman: 'IX'
  },
  {
    decimal: 5,
    roman: 'V'
  },
  {
    decimal: 4,
    roman: 'IV'
  },
  {
    decimal: 1,
    roman: 'I'
  }
]
