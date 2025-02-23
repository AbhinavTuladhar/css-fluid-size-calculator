export const formatNumber = (num: number, digits = 2) => {
  if (Number.isInteger(num)) {
    return num.toString()
  } else {
    return num.toFixed(digits)
  }
}

export const roundNumber = (number: number, digits = 4) =>
  Math.round(number * 10 ** digits) / 10 ** digits
