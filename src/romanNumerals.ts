export const decimalToRoman = (decimal: number) => {
  if (decimal > 3999 || decimal <= 0) return 'Unsupported number'

  let romanBuilder = ''

  const needToPrependBelowX = (inPosition: number) => decimal + 1 === romanNumbers[inPosition]?.decimal
  const needToPrependBelowC = (inPosition: number) =>
    decimal.toString().length === 2 && obtainBaseNumber(1) + 10 === romanNumbers[inPosition]?.decimal
  const needToPrependBelowM = (inPosition: number) =>
    decimal.toString().length === 3 && obtainBaseNumber(2) + 100 === romanNumbers[inPosition]?.decimal

  const obtainBaseNumber = (zeros: number) => Number(decimal.toString().slice(0, -zeros) + '0'.repeat(zeros))
  const prepend = (symbol: string, inFrontOf: string, amountToSubtract: number) => {
    romanBuilder += symbol
    romanBuilder += inFrontOf
    decimal -= amountToSubtract
  }

  romanNumbers.forEach(({ roman, decimal: currentDecimal }, index) => {
    --index

    while (decimal >= currentDecimal) {
      if (needToPrependBelowX(index)) {
        prepend('I', romanNumbers[index].roman, decimal + 1)
      } else if (needToPrependBelowC(index)) {
        prepend('X', romanNumbers[index].roman, obtainBaseNumber(1))
      } else if (needToPrependBelowM(index)) {
        prepend('C', romanNumbers[index].roman, obtainBaseNumber(2))
      } else {
        romanBuilder += roman
        decimal -= currentDecimal
      }
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
    decimal: 500,
    roman: 'D'
  },
  {
    decimal: 100,
    roman: 'C'
  },
  {
    decimal: 50,
    roman: 'L'
  },
  {
    decimal: 10,
    roman: 'X'
  },
  {
    decimal: 5,
    roman: 'V'
  },
  {
    decimal: 1,
    roman: 'I'
  }
]
